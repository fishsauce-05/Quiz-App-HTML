const cssQ = [
  {
    question: 'CSS là viết tắt của gì?',
    answers: [
      'Cascading Style Sheets',
      'Creative Style Sheets',
      'Computer Style Sheets',
      'Colorful Style Sheets'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'HTML đúng để tham chiếu tới external style sheet là gì?',
    answers: [
      '<link rel="stylesheet" type="text/css" href="mystyle.css">',
      '<style src="mystyle.css">',
      '<stylesheet>mystyle.css</stylesheet>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong HTML document, vị trí đúng để tham chiếu tới external style sheet là ở đâu?',
    answers: [
      'In the <head> section',
      'At the end of the document',
      'In the <body> section'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'HTML tag nào được dùng để định nghĩa internal style sheet?',
    answers: [
      '<css>',
      '<style>',
      '<script>'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'HTML attribute nào được dùng để định nghĩa inline styles?',
    answers: [
      'style',
      'styles',
      'class',
      'font'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'CSS syntax nào đúng?',
    answers: [
      'body {color: black;}',
      'body:color=black;',
      '{body:color=black;}',
      '{body;color:black;}'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Làm thế nào để chèn comment trong CSS file?',
    answers: [
      '/* this is a comment */',
      '// this is a comment //',
      '// this is a comment',
      "' this is a comment"
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Property nào được dùng để thay đổi background color?',
    answers: [
      'background-color',
      'color',
      'bgcolor'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Làm thế nào để thêm background color cho tất cả <h1> elements?',
    answers: [
      'h1 {background-color:#FFFFFF;}',
      'all.h1 {background-color:#FFFFFF;}',
      'h1.all {background-color:#FFFFFF;}'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'CSS property nào được dùng để thay đổi text color của một element?',
    answers: [
      'fgcolor',
      'color',
      'text-color'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'CSS property nào kiểm soát text size?',
    answers: [
      'font-size',
      'font-style',
      'text-style',
      'text-size'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'CSS syntax đúng để làm tất cả <p> elements in bold là gì?',
    answers: [
      '<p style="font-size:bold;">',
      'p {text-size:bold;}',
      'p {font-weight:bold;}',
      '<p style="text-size:bold;">'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'Làm thế nào để hiển thị hyperlinks không có underline?',
    answers: [
      'a {text-decoration:no-underline;}',
      'a {underline:none;}',
      'a {decoration:no-underline;}',
      'a {text-decoration:none;}'
    ],
    correct: 3,
    explanation: ''
  },
  {
    question: 'Làm thế nào để mỗi word trong text bắt đầu bằng capital letter?',
    answers: [
      'transform:capitalize',
      'text-transform:capitalize',
      'text-style:capitalize',
      "You can't do that with CSS"
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Property nào được dùng để thay đổi font của một element?',
    answers: [
      'font-family',
      'font-weight',
      'font-style'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Làm thế nào để làm text bold?',
    answers: [
      'font-weight:bold;',
      'font:bold;',
      'style:bold;'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Làm thế nào để hiển thị border với top border = 10 pixels, bottom border = 5 pixels, left border = 20 pixels, right border = 1 pixel?',
    answers: [
      'border-width:10px 1px 5px 20px;',
      'border-width:10px 5px 20px 1px;',
      'border-width:5px 20px 10px 1px;',
      'border-width:10px 20px 5px 1px;'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Property nào được dùng để thay đổi left margin của một element?',
    answers: [
      'margin-left',
      'padding-left',
      'indent'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Khi dùng padding property, bạn có được dùng negative values không?',
    answers: [
      'No',
      'Yes'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Làm thế nào để tạo một list hiển thị items bằng squares?',
    answers: [
      'list-type: square;',
      'list-style-type: square;',
      'list: square;'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: "Làm thế nào để select một element có id 'demo'?",
    answers: [
      '#demo',
      '*demo',
      '.demo',
      'demo'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: "Làm thế nào để select elements có class name 'test'?",
    answers: [
      '.test',
      '#test',
      '*test',
      'test'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Làm thế nào để select tất cả p elements bên trong một div element?',
    answers: [
      'div.p',
      'div p',
      'div + p'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Làm thế nào để group selectors?',
    answers: [
      'Tách mỗi selector bằng dấu cách',
      'Tách mỗi selector bằng dấu cộng',
      'Tách mỗi selector bằng dấu phẩy'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'Default value của position property là gì?',
    answers: [
      'absolute',
      'static',
      'relative',
      'fixed'
    ],
    correct: 1,
    explanation: ''
  }
  ];


