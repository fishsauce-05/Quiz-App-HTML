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
    correct: correctIndex
  };
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
    feedbackEl.textContent = 'Đúng rồi!';
    feedbackEl.style.color = '#16a34a';
  } else {
    selectedButton.classList.add('wrong');
    buttons[currentQuestion.correct].classList.add('correct');
    feedbackEl.textContent = 'Sai rồi!';
    feedbackEl.style.color = '#dc2626';
  }

  nextBtn.style.display = 'inline-block';

  if (currentIndex === activeQuestions.length - 1) {
    nextBtn.textContent = 'Xem kết quả';
  } else {
    nextBtn.textContent = 'Câu tiếp theo';
  }
}

function nextQuestion() {
  currentIndex++;

  if (currentIndex < activeQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizBox.style.display = 'none';
  resultBox.style.display = 'block';
  restartBtn.style.display = 'inline-block';

  finalScoreEl.textContent = `${score}/${activeQuestions.length}`;

  const percent = score / activeQuestions.length * 100;

  if (percent === 100) {
    resultMessageEl.textContent = 'Ỉa lên đầu Hưng';
  }
  if (percent >= 80) {
    resultMessageEl.textContent = 'Giỏi hơn Hưng rồi';
  } else if (percent >= 50) {
    resultMessageEl.textContent = 'Gần giỏi bằng Hưng rồi';
  } else {
    resultMessageEl.textContent = 'Trượt mẹ môn rồi';
  }
}

function restartQuiz() {
  startRound();
}

nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

startRound();
