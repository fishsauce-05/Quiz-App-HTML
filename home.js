const startForm = document.getElementById('startForm');
const subjectListEl = document.getElementById('subjectList');
const questionLimitEl = document.getElementById('questionLimit');
const questionTotalEl = document.getElementById('questionTotal');
const quickLimitButtons = document.querySelectorAll('[data-limit]');

function getSubject(subjectId) {
  return subjects.find(function(subject) {
    return subject.id === subjectId;
  }) || subjects[0];
}

function clampLimit(value, totalQuestions) {
  const parsedValue = Number.parseInt(value, 10);

  if (!Number.isFinite(parsedValue)) {
    return totalQuestions;
  }

  return Math.min(Math.max(parsedValue, 1), totalQuestions);
}

function selectedSubject() {
  const checkedSubject = document.querySelector('input[name="subject"]:checked');
  return getSubject(checkedSubject ? checkedSubject.value : subjects[0].id);
}

function updateLimitState() {
  const subject = selectedSubject();
  const totalQuestions = subject.questionCount;
  const currentLimit = clampLimit(questionLimitEl.value, totalQuestions);

  questionLimitEl.max = totalQuestions;
  questionLimitEl.value = currentLimit;
  questionTotalEl.textContent = `/ ${totalQuestions} câu`;
}

function useSubjectMaxLimit() {
  questionLimitEl.value = selectedSubject().questionCount;
  updateLimitState();
}

function updateLimitMeta() {
  const subject = selectedSubject();

  questionLimitEl.max = subject.questionCount;
  questionTotalEl.textContent = `/ ${subject.questionCount} câu`;
}

function createSubjectCard(subject, index) {
  const label = document.createElement('label');
  label.className = 'subject-card';

  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'subject';
  input.value = subject.id;
  input.checked = index === 0;

  const badge = document.createElement('span');
  badge.className = 'subject-badge';
  badge.textContent = subject.shortName;

  const content = document.createElement('span');
  content.className = 'subject-content';

  const name = document.createElement('strong');
  name.textContent = subject.name;

  const description = document.createElement('small');
  description.textContent = subject.description;

  const total = document.createElement('span');
  total.className = 'subject-total';
  total.textContent = `${subject.questionCount} câu`;

  content.appendChild(name);
  content.appendChild(description);
  label.appendChild(input);
  label.appendChild(badge);
  label.appendChild(content);
  label.appendChild(total);

  input.addEventListener('change', useSubjectMaxLimit);

  return label;
}

function renderSubjects() {
  subjects.forEach(function(subject, index) {
    subjectListEl.appendChild(createSubjectCard(subject, index));
  });
}

quickLimitButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const subject = selectedSubject();

    if (button.dataset.limit === 'all') {
      questionLimitEl.value = subject.questionCount;
    } else {
      questionLimitEl.value = clampLimit(button.dataset.limit, subject.questionCount);
    }

    updateLimitState();
  });
});

questionLimitEl.addEventListener('input', updateLimitMeta);
questionLimitEl.addEventListener('change', updateLimitState);

startForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const subject = selectedSubject();
  const limit = clampLimit(questionLimitEl.value, subject.questionCount);
  const targetUrl = new URL(startForm.getAttribute('action') || 'practice.html', window.location.href);

  targetUrl.searchParams.set('subject', subject.id);
  targetUrl.searchParams.set('limit', limit);

  window.location.href = targetUrl.href;
});

renderSubjects();
useSubjectMaxLimit();
