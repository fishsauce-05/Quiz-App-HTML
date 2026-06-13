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
addQuestionBank('cnxhPTIT', typeof cnxhPtitBank === 'undefined' ? null : cnxhPtitBank);
addQuestionBank('cnxhChapter1', typeof cnxhChapter1 === 'undefined' ? null : cnxhChapter1);
addQuestionBank('cnxhChapter2', typeof cnxhChapter2 === 'undefined' ? null : cnxhChapter2);
addQuestionBank('cnxhChapter3', typeof cnxhChapter3 === 'undefined' ? null : cnxhChapter3);
addQuestionBank('cnxhChapter4', typeof cnxhChapter4 === 'undefined' ? null : cnxhChapter4);
addQuestionBank('cnxhChapter5', typeof cnxhChapter5 === 'undefined' ? null : cnxhChapter5);
addQuestionBank('cnxhChapter6', typeof cnxhChapter6 === 'undefined' ? null : cnxhChapter6);
addQuestionBank('cnxhChapter7', typeof cnxhChapter7 === 'undefined' ? null : cnxhChapter7);

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

const cnxhChapterQuestionBankIds = [
  'cnxhChapter1',
  'cnxhChapter2',
  'cnxhChapter3',
  'cnxhChapter4',
  'cnxhChapter5',
  'cnxhChapter6',
  'cnxhChapter7'
];

if (cnxhChapterQuestionBankIds.every(function(subjectId) {
  return Array.isArray(questionBank[subjectId]);
})) {
  questionBank.cnxhTotalReview = cnxhChapterQuestionBankIds.flatMap(function(subjectId) {
    return questionBank[subjectId];
  });
}

const subjectConfigs = [
  {
    id: 'web',
    name: 'Lập trình Web',
    shortName: 'WEB',
    description: 'HTML, CSS, JavaScript, PHP, SQL, XML, Bootstrap, jQuery',
    categoryPath: 'index/web.html',
    teacherName: webTeacherName
  },
  {
    id: 'totalWebReview',
    name: 'Tổng ôn web',
    shortName: 'ALL WEB',
    description: 'Trộn tất cả câu hỏi từ các bộ Practice',
    categoryPath: 'index/web.html',
    teacherName: webTeacherName
  },
  {
    id: 'htmlPractice',
    name: 'HTML Practice',
    shortName: 'HTML',
    description: 'HTML elements, attributes, links, lists, forms, media',
    categoryPath: 'index/web.html',
    teacherName: webTeacherName
  },
  {
    id: 'cssPractice',
    name: 'CSS Practice',
    shortName: 'CSS',
    description: 'CSS selectors, syntax, text, spacing, borders, positioning',
    categoryPath: 'index/web.html',
    teacherName: webTeacherName
  },
  {
    id: 'jsPractice',
    name: 'JavaScript Practice',
    shortName: 'JS',
    description: 'JavaScript syntax, functions, loops, arrays, events',
    categoryPath: 'index/web.html',
    teacherName: webTeacherName
  },
  {
    id: 'mysqlPractice',
    name: 'MySQL Practice',
    shortName: 'SQL',
    description: 'MySQL statements, queries, filters, joins, constraints',
    categoryPath: 'index/web.html',
    teacherName: webTeacherName
  },
  {
    id: 'phpPractice',
    name: 'PHP Practice',
    shortName: 'PHP',
    description: 'PHP syntax, variables, forms, files, functions, arrays',
    categoryPath: 'index/web.html',
    teacherName: webTeacherName
  },
  {
    id: 'bootstrapPractice',
    name: 'Bootstrap Practice',
    shortName: 'BOOT',
    description: 'Bootstrap grid, components, buttons, navbars, plugins',
    categoryPath: 'index/web.html',
    teacherName: webTeacherName
  },
  {
    id: 'jqueryPractice',
    name: 'jQuery Practice',
    shortName: 'JQ',
    description: 'jQuery selectors, methods, AJAX, events, animation',
    categoryPath: 'index/web.html',
    teacherName: webTeacherName
  },
  {
    id: 'cnxhPTIT',
    name: 'Chủ nghĩa xã hội khoa học PTIT',
    shortName: 'CNXH',
    description: 'Bộ câu hỏi Chủ nghĩa xã hội khoa học PTIT',
    categoryPath: 'index/cnxh.html',
    teacherName: cnxhTeacherName
  },
  {
    id: 'cnxhTotalReview',
    name: 'Total Review',
    shortName: 'TOTAL',
    description: 'Trộn toàn bộ câu hỏi từ chương 1-7',
    categoryPath: 'index/cnxh.html',
    teacherName: cnxhTeacherName
  },
  {
    id: 'cnxhChapter1',
    name: 'CNXH Chương 1',
    shortName: 'CH1',
    description: 'Chương 1 - Những vấn đề chung về chủ nghĩa xã hội khoa học',
    categoryPath: 'index/cnxh.html',
    teacherName: cnxhTeacherName
  },
  {
    id: 'cnxhChapter2',
    name: 'CNXH Chương 2',
    shortName: 'CH2',
    description: 'Chương 2 - Giai cấp công nhân và phong trào công nhân quốc tế',
    categoryPath: 'index/cnxh.html',
    teacherName: cnxhTeacherName
  },
  {
    id: 'cnxhChapter3',
    name: 'CNXH Chương 3',
    shortName: 'CH3',
    description: 'Chương 3 - Thời kỳ quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội',
    categoryPath: 'index/cnxh.html',
    teacherName: cnxhTeacherName
  },
  {
    id: 'cnxhChapter4',
    name: 'CNXH Chương 4',
    shortName: 'CH4',
    description: 'Chương 4 - Dân chủ xã hội chủ nghĩa và Nhà nước xã hội chủ nghĩa',
    categoryPath: 'index/cnxh.html',
    teacherName: cnxhTeacherName
  },
  {
    id: 'cnxhChapter5',
    name: 'CNXH Chương 5',
    shortName: 'CH5',
    description: 'Chương 5 - Cơ cấu xã hội - giai cấp và liên minh giai cấp, tầng lớp',
    categoryPath: 'index/cnxh.html',
    teacherName: cnxhTeacherName
  },
  {
    id: 'cnxhChapter6',
    name: 'CNXH Chương 6',
    shortName: 'CH6',
    description: 'Chương 6 - Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ',
    categoryPath: 'index/cnxh.html',
    teacherName: cnxhTeacherName
  },
  {
    id: 'cnxhChapter7',
    name: 'CNXH Chương 7',
    shortName: 'CH7',
    description: 'Chương 7 - Vấn đề gia đình trong thời kỳ quá độ',
    categoryPath: 'index/cnxh.html',
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
