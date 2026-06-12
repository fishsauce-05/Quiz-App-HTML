let currentIndex = 0;
let score = 0;
let answered = false;
let activeQuestions = [];

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

function getExplanationHighlightRanges(explanation) {
  const ranges = [];

  addRegexRanges(ranges, explanation, /<([^<>]+)>/g, 1);
  addRegexRanges(ranges, explanation, /trang số\s+[^,"]+?(?=\s+của\s+chương|\s+và\s+phần|,|\s+của\s+tài liệu)/gi);
  addRegexRanges(ranges, explanation, /chương\s+\d+/gi);
  addRegexRanges(ranges, explanation, /phần Giải thích cuối tài liệu(?: Trắc nghiệm)?/gi);
  addRegexRanges(ranges, explanation, /(chỉ ra rằng|đã chỉ ra rằng)\s*:?\s*([\s\S]*?)(?=,\s*từ nội dung này|\.?\s*Từ nội dung này|,\s*do các đáp án|$)/gi, 2);
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

function startRound() {
  const activeSubject = getActiveSubject();
  const subjectQuestions = questionBank[activeSubject.id] || [];
  const questionLimit = getQuestionLimit(subjectQuestions.length);

  currentIndex = 0;
  score = 0;
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

function showQuestion() {
  answered = false;
  feedbackEl.textContent = '';
  nextBtn.style.display = 'none';
  answersEl.innerHTML = '';

  const currentQuestion = activeQuestions[currentIndex];

  progressEl.textContent = `${currentIndex + 1}/${activeQuestions.length}`;
  questionEl.textContent = `Câu ${currentIndex + 1}. ${currentQuestion.question}`;

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

  buttons.forEach(function(button) {
    button.disabled = true;
  });

  if (selectedIndex === currentQuestion.correct) {
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

function nextQuestion(teacherName) {
  currentIndex++;

  if (currentIndex < activeQuestions.length) {
    showQuestion();
  } else {
    showResult(teacherName);
  }
}

function showResult(teacherName) {
  quizBox.style.display = 'none';
  resultBox.style.display = 'block';
  restartBtn.style.display = 'inline-block';

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
}

function restartQuiz() {
  startRound();
}

nextBtn.addEventListener('click', function() {
  nextQuestion(getActiveSubject().teacherName);
});
restartBtn.addEventListener('click', restartQuiz);

startRound();
