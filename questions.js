const questionBank = {
  web: webQ,
  htmlPractice: htmlQ,
  cssPractice: cssQ,
  jsPractice: jsQ,
  mysqlPractice: mysqlQ,
  phpPractice: phpQ,
  bootstrapPractice: bootstrapQ,
  jqueryPractice: jqueryQ
};

const practiceQuestionBankIds = [
  'htmlPractice',
  'cssPractice',
  'jsPractice',
  'mysqlPractice',
  'phpPractice',
  'bootstrapPractice',
  'jqueryPractice'
];

questionBank.totalWebReview = practiceQuestionBankIds.flatMap(function(subjectId) {
  return questionBank[subjectId];
});

const subjects = [
  {
    id: 'web',
    name: 'Lập trình Web',
    shortName: 'WEB',
    description: 'HTML, CSS, JavaScript, PHP, SQL, XML, Bootstrap, jQuery',
    questionCount: questionBank.web.length
  },
  {
    id: 'totalWebReview',
    name: 'Tổng ôn web',
    shortName: 'ALL WEB',
    description: 'Trộn tất cả câu hỏi từ các bộ Practice',
    questionCount: questionBank.totalWebReview.length
  },
  {
    id: 'htmlPractice',
    name: 'HTML Practice',
    shortName: 'HTML',
    description: 'HTML elements, attributes, links, lists, forms, media',
    questionCount: questionBank.htmlPractice.length
  },
  {
    id: 'cssPractice',
    name: 'CSS Practice',
    shortName: 'CSS',
    description: 'CSS selectors, syntax, text, spacing, borders, positioning',
    questionCount: questionBank.cssPractice.length
  },
  {
    id: 'jsPractice',
    name: 'JavaScript Practice',
    shortName: 'JS',
    description: 'JavaScript syntax, functions, loops, arrays, events',
    questionCount: questionBank.jsPractice.length
  },
  {
    id: 'mysqlPractice',
    name: 'MySQL Practice',
    shortName: 'SQL',
    description: 'MySQL statements, queries, filters, joins, constraints',
    questionCount: questionBank.mysqlPractice.length
  },
  {
    id: 'phpPractice',
    name: 'PHP Practice',
    shortName: 'PHP',
    description: 'PHP syntax, variables, forms, files, functions, arrays',
    questionCount: questionBank.phpPractice.length
  },
  {
    id: 'bootstrapPractice',
    name: 'Bootstrap Practice',
    shortName: 'BOOT',
    description: 'Bootstrap grid, components, buttons, navbars, plugins',
    questionCount: questionBank.bootstrapPractice.length
  },
  {
    id: 'jqueryPractice',
    name: 'jQuery Practice',
    shortName: 'JQ',
    description: 'jQuery selectors, methods, AJAX, events, animation',
    questionCount: questionBank.jqueryPractice.length
  }
];

const questions = questionBank.web;

