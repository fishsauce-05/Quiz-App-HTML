let currentIndex = 0;
let score = 0;
let answered = false;
let activeQuestions = [];
let answerRecords = [];
let currentRoundLabel = '';

const queryParams = new URLSearchParams(window.location.search);
const subjectTitleEl = document.getElementById('subjectTitle');
const quizMetaEl = document.getElementById('quizMeta');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const feedbackEl = document.getElementById('feedback');
const progressEl = document.getElementById('progress');
const nextBtn = document.getElementById('nextBtn');
const quizBox = document.getElementById('quizBox');
const resultBox = document.getElementById('resultBox');
const finalScoreEl = document.getElementById('finalScore');
const resultMessageEl = document.getElementById('resultMessage');
const restartBtn = document.getElementById('restartBtn');
const retryWrongBtn = document.getElementById('retryWrongBtn');
const reviewBoxEl = document.getElementById('reviewBox');
const reviewListEl = document.getElementById('reviewList');
const changeSubjectLink = document.querySelector('.secondary-btn');

function getActiveSubject() {
  const requestedSubject = queryParams.get('subject') || 'web';
  const matchedSubject = subjects.find(function(subject) {
    return subject.id === requestedSubject;
  });

  return matchedSubject || subjects[0];
}

function getQuestionLimit(totalQuestions) {
  const requestedLimit = Number.parseInt(queryParams.get('limit'), 10);

  if (!Number.isFinite(requestedLimit)) {
    return totalQuestions;
  }

  return Math.min(Math.max(requestedLimit, 1), totalQuestions);
}

function shuffleIndexes(length) {
  const indexes = Array.from({ length: length }, function(_, index) {
    return index;
  });

  for (let index = indexes.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const temp = indexes[index];
    indexes[index] = indexes[randomIndex];
    indexes[randomIndex] = temp;
  }

  return indexes;
}

function shuffleAnswers(question) {
  const answerOrder = shuffleIndexes(question.answers.length);
  const shuffledAnswers = answerOrder.map(function(answerIndex) {
    return question.answers[answerIndex];
  });
  const correctIndex = answerOrder.indexOf(question.correct);

  return {
    question: question.question,
    answers: shuffledAnswers,
    correct: correctIndex,
    explanation: question.explanation || ''
  };
}

function addRange(ranges, start, end) {
  if (start >= 0 && end > start) {
    ranges.push({ start: start, end: end });
  }
}

function addRegexRanges(ranges, text, regex, captureIndex) {
  let match = regex.exec(text);

  while (match) {
    const value = match[captureIndex || 0];

    if (value) {
      const offset = match[0].indexOf(value);
      addRange(ranges, match.index + offset, match.index + offset + value.length);
    }

    match = regex.exec(text);
  }
}

function mergeRanges(ranges, textLength) {
  return ranges
    .map(function(range) {
      return {
        start: Math.max(0, Math.min(range.start, textLength)),
        end: Math.max(0, Math.min(range.end, textLength))
      };
    })
    .filter(function(range) {
      return range.end > range.start;
    })
    .sort(function(firstRange, secondRange) {
      return firstRange.start - secondRange.start || firstRange.end - secondRange.end;
    })
    .reduce(function(mergedRanges, range) {
      const lastRange = mergedRanges[mergedRanges.length - 1];

      if (lastRange && range.start <= lastRange.end) {
        lastRange.end = Math.max(lastRange.end, range.end);
      } else {
        mergedRanges.push(range);
      }

      return mergedRanges;
    }, []);
}

function addPageHighlightRanges(ranges, explanation) {
  if (!/^Dựa trên/i.test(explanation)) {
    return;
  }

  addRegexRanges(
    ranges,
    explanation,
    /trang(?:\s+số)?\s+\d+(?:\s*-\s*\d+)?(?:\s*,\s*\d+)?(?:\s+và\s+\d+)?(?:\s*\([^)]+\))?/gi
  );
}

function addCnxhExplanationContentRange(ranges, explanation) {
  if (!/^Dựa trên\s+/i.test(explanation)) {
    return;
  }

  if (/(?:chỉ ra rằng|đã chỉ ra rằng)/i.test(explanation)) {
    return;
  }

  const sourceDelimiter = /(?:của tài liệu(?:\s+và\s+phần giải thích cuối tài liệu trắc nghiệm)?|của giáo trình|của chương\s+\d+(?!\s+và\s+chương)|phần giải thích cuối tài liệu trắc nghiệm)\s*,\s*/gi;
  let match;
  let contentStart = -1;

  while ((match = sourceDelimiter.exec(explanation)) !== null) {
    contentStart = match.index + match[0].length;
  }

  if (contentStart > 0 && contentStart < explanation.length) {
    addRange(ranges, contentStart, explanation.length);
  }
}

function getExplanationHighlightRanges(explanation) {
  const ranges = [];

  addRegexRanges(ranges, explanation, /<([^<>]+)>/g, 1);
  addPageHighlightRanges(ranges, explanation);
  addRegexRanges(ranges, explanation, /chương\s+\d+/gi);
  addRegexRanges(ranges, explanation, /phần giải thích cuối tài liệu(?: trắc nghiệm)?/gi);
  addRegexRanges(ranges, explanation, /(?:chỉ ra rằng|đã chỉ ra rằng)\s*:?\s*([\s\S]*?)(?=,\s*từ nội dung này|\.?\s*Từ nội dung này|,\s*do các đáp án|$)/gi, 1);
  addCnxhExplanationContentRange(ranges, explanation);
  addRegexRanges(ranges, explanation, /ta suy ra được là\s+(["“][\s\S]*?["”]|[^.]+)/gi, 1);

  return mergeRanges(ranges, explanation.length);
}

function appendHighlightedExplanation(parent, explanation) {
  const ranges = getExplanationHighlightRanges(explanation);
  let currentIndex = 0;

  ranges.forEach(function(range) {
    if (range.start > currentIndex) {
      parent.appendChild(document.createTextNode(explanation.slice(currentIndex, range.start)));
    }

    const highlight = document.createElement('span');
    highlight.className = 'feedback-highlight';
    highlight.textContent = explanation.slice(range.start, range.end);
    parent.appendChild(highlight);
    currentIndex = range.end;
  });

  if (currentIndex < explanation.length) {
    parent.appendChild(document.createTextNode(explanation.slice(currentIndex)));
  }
}

function renderFeedback(statusMessage, explanation, isCorrect) {
  const trimmedExplanation = String(explanation || '').trim();
  const accentColor = isCorrect ? '#16a34a' : '#dc2626';

  feedbackEl.replaceChildren();
  feedbackEl.style.removeProperty('color');
  feedbackEl.style.setProperty('--feedback-accent', accentColor);

  const status = document.createElement('div');
  status.className = 'feedback-status';
  status.textContent = statusMessage;
  feedbackEl.appendChild(status);

  if (!trimmedExplanation) {
    return;
  }

  const explanationLine = document.createElement('div');
  explanationLine.className = 'feedback-explanation';

  const label = document.createElement('span');
  label.className = 'feedback-explanation-label';
  label.textContent = 'Giải thích';

  explanationLine.appendChild(label);
  explanationLine.appendChild(document.createTextNode(': '));
  appendHighlightedExplanation(explanationLine, trimmedExplanation);
  feedbackEl.appendChild(explanationLine);
}

function readLastOrder(storageKey) {
  try {
    return localStorage.getItem(storageKey);
  } catch (error) {
    return null;
  }
}

function saveLastOrder(storageKey, orderValue) {
  try {
    localStorage.setItem(storageKey, orderValue);
  } catch (error) {
    return;
  }
}

function buildQuestionSet(subjectId, limit) {
  const bank = questionBank[subjectId] || [];
  const storageKey = `quiz:last-order:${subjectId}:${limit}`;
  const previousOrder = readLastOrder(storageKey);
  let order = shuffleIndexes(bank.length).slice(0, limit);
  let orderValue = order.join(',');
  let attempts = 0;

  while (bank.length > 1 && orderValue === previousOrder && attempts < 20) {
    order = shuffleIndexes(bank.length).slice(0, limit);
    orderValue = order.join(',');
    attempts++;
  }

  if (bank.length > 1 && orderValue === previousOrder) {
    if (order.length === 1) {
      order = [(Number.parseInt(previousOrder, 10) + 1) % bank.length];
    } else {
      order.push(order.shift());
    }

    orderValue = order.join(',');
  }

  saveLastOrder(storageKey, orderValue);

  return order.map(function(questionIndex) {
    return shuffleAnswers(bank[questionIndex]);
  });
}

function buildRetryQuestionSet(records) {
  return records.map(function(record) {
    return shuffleAnswers(record);
  });
}

function getWrongRecords() {
  return answerRecords.filter(function(record) {
    return record && !record.isCorrect;
  });
}

function formatAnswerLabel(index, answer) {
  if (index < 0 || typeof answer === 'undefined') {
    return 'Chưa chọn';
  }

  return `${String.fromCharCode(65 + index)}. ${answer}`;
}

function createAnswerRecord(question, selectedIndex) {
  return {
    question: question.question,
    answers: question.answers.slice(),
    correct: question.correct,
    explanation: question.explanation || '',
    selected: selectedIndex,
    isCorrect: selectedIndex === question.correct
  };
}

function startRound() {
  const activeSubject = getActiveSubject();
  const subjectQuestions = questionBank[activeSubject.id] || [];
  const questionLimit = getQuestionLimit(subjectQuestions.length);

  currentIndex = 0;
  score = 0;
  answerRecords = [];
  currentRoundLabel = '';
  activeQuestions = buildQuestionSet(activeSubject.id, questionLimit);

  subjectTitleEl.textContent = `Quiz ${activeSubject.name}`;
  quizMetaEl.textContent = `${activeQuestions.length}/${subjectQuestions.length} câu`;
  if (changeSubjectLink) {
    changeSubjectLink.href = activeSubject.categoryPath || 'index.html';
  }
  resultBox.style.display = 'none';
  quizBox.style.display = 'block';
  nextBtn.textContent = 'Câu tiếp theo';

  showQuestion();
}

function startWrongRound() {
  const wrongRecords = getWrongRecords();

  if (!wrongRecords.length) {
    return;
  }

  currentIndex = 0;
  score = 0;
  answerRecords = [];
  currentRoundLabel = 'Làm lại câu sai';
  activeQuestions = buildRetryQuestionSet(wrongRecords);

  quizMetaEl.textContent = `${activeQuestions.length} câu cần làm lại`;
  resultBox.style.display = 'none';
  quizBox.style.display = 'block';
  nextBtn.textContent = 'Câu tiếp theo';

  showQuestion();
}

function showQuestion() {
  answered = false;
  feedbackEl.textContent = '';
  nextBtn.style.display = 'none';
  answersEl.innerHTML = '';

  const currentQuestion = activeQuestions[currentIndex];

  progressEl.textContent = `${currentIndex + 1}/${activeQuestions.length}`;
  questionEl.textContent = `${currentRoundLabel ? `${currentRoundLabel} - ` : ''}Câu ${currentIndex + 1}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach(function(answer, index) {
    const button = document.createElement('button');
    button.className = 'answer-btn';
    button.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;

    button.addEventListener('click', function() {
      checkAnswer(index, button);
    });

    answersEl.appendChild(button);
  });
}

function checkAnswer(selectedIndex, selectedButton) {
  if (answered) return;

  answered = true;

  const currentQuestion = activeQuestions[currentIndex];
  const buttons = document.querySelectorAll('.answer-btn');
  const isCorrect = selectedIndex === currentQuestion.correct;

  answerRecords[currentIndex] = createAnswerRecord(currentQuestion, selectedIndex);

  buttons.forEach(function(button) {
    button.disabled = true;
  });

  if (isCorrect) {
    score++;
    selectedButton.classList.add('correct');
    renderFeedback('Đúng rồi!', currentQuestion.explanation, true);
  } else {
    selectedButton.classList.add('wrong');
    buttons[currentQuestion.correct].classList.add('correct');
    renderFeedback('Sai rồi!', currentQuestion.explanation, false);
  }

  nextBtn.style.display = 'inline-block';

  if (currentIndex === activeQuestions.length - 1) {
    nextBtn.textContent = 'Xem kết quả';
  } else {
    nextBtn.textContent = 'Câu tiếp theo';
  }
}

function isTypingTarget(target) {
  const tagName = target && target.tagName;

  return target && (
    target.isContentEditable ||
    tagName === 'INPUT' ||
    tagName === 'TEXTAREA' ||
    tagName === 'SELECT'
  );
}

function isQuizActive() {
  return quizBox.style.display !== 'none' && activeQuestions.length > 0;
}

function getAnswerIndexFromKey(event) {
  if (/^[1-9]$/.test(event.key)) {
    return Number.parseInt(event.key, 10) - 1;
  }

  const numpadMatch = /^Numpad([1-9])$/.exec(event.code);
  if (numpadMatch) {
    return Number.parseInt(numpadMatch[1], 10) - 1;
  }

  return -1;
}

function handleQuizShortcut(event) {
  if (event.repeat || isTypingTarget(event.target) || !isQuizActive()) {
    return;
  }

  if (event.key === 'Enter') {
    if (answered && nextBtn.style.display !== 'none') {
      event.preventDefault();
      nextQuestion(getActiveSubject().teacherName);
    }

    return;
  }

  if (answered) {
    return;
  }

  const selectedIndex = getAnswerIndexFromKey(event);
  const answerButtons = document.querySelectorAll('.answer-btn');

  if (selectedIndex >= 0 && selectedIndex < answerButtons.length) {
    event.preventDefault();
    checkAnswer(selectedIndex, answerButtons[selectedIndex]);
  }
}

function nextQuestion(teacherName) {
  currentIndex++;

  if (currentIndex < activeQuestions.length) {
    showQuestion();
  } else {
    showResult(teacherName);
  }
}

function renderReviewItem(record, index) {
  const item = document.createElement('article');
  item.className = `review-item ${record.isCorrect ? 'correct' : 'wrong'}`;

  const header = document.createElement('div');
  header.className = 'review-header';

  const number = document.createElement('span');
  number.className = 'review-number';
  number.textContent = `Câu ${index + 1}`;

  const status = document.createElement('span');
  status.className = `review-status ${record.isCorrect ? 'correct' : 'wrong'}`;
  status.textContent = record.isCorrect ? 'Đúng' : 'Sai';

  header.appendChild(number);
  header.appendChild(status);

  const question = document.createElement('p');
  question.className = 'review-question';
  question.textContent = record.question;

  const selectedAnswer = document.createElement('p');
  selectedAnswer.className = 'review-answer';
  selectedAnswer.appendChild(document.createTextNode('Bạn chọn: '));

  const selectedValue = document.createElement('span');
  selectedValue.className = record.isCorrect ? 'review-correct-text' : 'review-wrong-text';
  selectedValue.textContent = formatAnswerLabel(record.selected, record.answers[record.selected]);
  selectedAnswer.appendChild(selectedValue);

  const correctAnswer = document.createElement('p');
  correctAnswer.className = 'review-answer';
  correctAnswer.appendChild(document.createTextNode('Đáp án đúng: '));

  const correctValue = document.createElement('span');
  correctValue.className = 'review-correct-text';
  correctValue.textContent = formatAnswerLabel(record.correct, record.answers[record.correct]);
  correctAnswer.appendChild(correctValue);

  item.appendChild(header);
  item.appendChild(question);
  item.appendChild(selectedAnswer);
  item.appendChild(correctAnswer);

  if (record.explanation.trim()) {
    const explanation = document.createElement('p');
    explanation.className = 'review-explanation';

    const label = document.createElement('span');
    label.className = 'feedback-explanation-label';
    label.textContent = 'Giải thích';

    explanation.appendChild(label);
    explanation.appendChild(document.createTextNode(': '));
    appendHighlightedExplanation(explanation, record.explanation);
    item.appendChild(explanation);
  }

  return item;
}

function renderReview() {
  reviewListEl.replaceChildren();

  answerRecords.forEach(function(record, index) {
    if (record) {
      reviewListEl.appendChild(renderReviewItem(record, index));
    }
  });
}

function showResult(teacherName) {
  quizBox.style.display = 'none';
  resultBox.style.display = 'block';
  restartBtn.style.display = 'inline-block';
  renderReview();

  finalScoreEl.textContent = `${score}/${activeQuestions.length}`;

  const percent = score / activeQuestions.length * 100;

  if (percent === 100) {
    resultMessageEl.textContent = `Ỉa lên đầu ${teacherName}`;
  }
  else if (percent >= 80) {
    resultMessageEl.textContent = `Giỏi hơn ${teacherName} rồi`;
  } else if (percent >= 50) {
    resultMessageEl.textContent = `Gần giỏi bằng ${teacherName} rồi`;
  } else {
    resultMessageEl.textContent = 'Trượt mẹ môn rồi';
  }

  const wrongRecords = getWrongRecords();
  retryWrongBtn.style.display = wrongRecords.length ? 'inline-block' : 'none';
  reviewBoxEl.style.display = answerRecords.length ? 'block' : 'none';
}

function restartQuiz() {
  startRound();
}

nextBtn.addEventListener('click', function() {
  nextQuestion(getActiveSubject().teacherName);
});
document.addEventListener('keydown', handleQuizShortcut);
restartBtn.addEventListener('click', restartQuiz);
retryWrongBtn.addEventListener('click', startWrongRound);

startRound();
