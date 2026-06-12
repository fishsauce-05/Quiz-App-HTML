const questionBank = {};
const webTeacherName = 'Hưng';
const cnxhTeacherName = 'Khánh';

function addQuestionBank(subjectId, bank) {
  if (Array.isArray(bank)) {
    questionBank[subjectId] = bank;
  }
}

addQuestionBank('web', typeof webQ === 'undefined' ? null : webQ);
addQuestionBank('htmlPractice', typeof htmlQ === 'undefined' ? null : htmlQ);
addQuestionBank('cssPractice', typeof cssQ === 'undefined' ? null : cssQ);
addQuestionBank('jsPractice', typeof jsQ === 'undefined' ? null : jsQ);
addQuestionBank('mysqlPractice', typeof mysqlQ === 'undefined' ? null : mysqlQ);
addQuestionBank('phpPractice', typeof phpQ === 'undefined' ? null : phpQ);
addQuestionBank('bootstrapPractice', typeof bootstrapQ === 'undefined' ? null : bootstrapQ);
addQuestionBank('jqueryPractice', typeof jqueryQ === 'undefined' ? null : jqueryQ);
addQuestionBank('cnxhPTIT', typeof cnxh_ptitBank === 'undefined' ? null : cnxh_ptitBank);

const webPracticeQuestionBankIds = [
  'htmlPractice',
  'cssPractice',
  'jsPractice',
  'mysqlPractice',
  'phpPractice',
  'bootstrapPractice',
  'jqueryPractice'
];

if (webPracticeQuestionBankIds.every(function(subjectId) {
  return Array.isArray(questionBank[subjectId]);
})) {
  questionBank.totalWebReview = webPracticeQuestionBankIds.flatMap(function(subjectId) {
    return questionBank[subjectId];
  });
}

const subjectConfigs = [
  {
    id: 'web',
    name: 'Lập trình Web',
    shortName: 'WEB',
    description: 'HTML, CSS, JavaScript, PHP, SQL, XML, Bootstrap, jQuery',
    categoryPath: 'index/web/',
    teacherName: webTeacherName
  },
  {
    id: 'totalWebReview',
    name: 'Tổng ôn web',
    shortName: 'ALL WEB',
    description: 'Trộn tất cả câu hỏi từ các bộ Practice',
    categoryPath: 'index/web/',
    teacherName: webTeacherName
  },
  {
    id: 'htmlPractice',
    name: 'HTML Practice',
    shortName: 'HTML',
    description: 'HTML elements, attributes, links, lists, forms, media',
    categoryPath: 'index/web/',
    teacherName: webTeacherName
  },
  {
    id: 'cssPractice',
    name: 'CSS Practice',
    shortName: 'CSS',
    description: 'CSS selectors, syntax, text, spacing, borders, positioning',
    categoryPath: 'index/web/',
    teacherName: webTeacherName
  },
  {
    id: 'jsPractice',
    name: 'JavaScript Practice',
    shortName: 'JS',
    description: 'JavaScript syntax, functions, loops, arrays, events',
    categoryPath: 'index/web/',
    teacherName: webTeacherName
  },
  {
    id: 'mysqlPractice',
    name: 'MySQL Practice',
    shortName: 'SQL',
    description: 'MySQL statements, queries, filters, joins, constraints',
    categoryPath: 'index/web/',
    teacherName: webTeacherName
  },
  {
    id: 'phpPractice',
    name: 'PHP Practice',
    shortName: 'PHP',
    description: 'PHP syntax, variables, forms, files, functions, arrays',
    categoryPath: 'index/web/',
    teacherName: webTeacherName
  },
  {
    id: 'bootstrapPractice',
    name: 'Bootstrap Practice',
    shortName: 'BOOT',
    description: 'Bootstrap grid, components, buttons, navbars, plugins',
    categoryPath: 'index/web/',
    teacherName: webTeacherName
  },
  {
    id: 'jqueryPractice',
    name: 'jQuery Practice',
    shortName: 'JQ',
    description: 'jQuery selectors, methods, AJAX, events, animation',
    categoryPath: 'index/web/',
    teacherName: webTeacherName
  },
  {
    id: 'cnxhPTIT',
    name: 'Chủ nghĩa xã hội khoa học PTIT',
    shortName: 'CNXH',
    description: 'Bộ câu hỏi Chủ nghĩa xã hội khoa học PTIT',
    categoryPath: 'index/cnxh/',
    teacherName: cnxhTeacherName
  }
];

const subjects = subjectConfigs
  .filter(function(subject) {
    return Array.isArray(questionBank[subject.id]);
  })
  .map(function(subject) {
    return {
      id: subject.id,
      name: subject.name,
      shortName: subject.shortName,
      description: subject.description,
      categoryPath: subject.categoryPath,
      teacherName: subject.teacherName,
      questionCount: questionBank[subject.id].length
    };
  });

const questions = subjects.length ? questionBank[subjects[0].id] : [];
