const jsQ = [
  {
    question: 'Ta đặt JavaScript bên trong HTML element nào?',
    answers: [
      '<script>',
      '<javascript>',
      '<js>',
      '<scripting>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'JavaScript syntax đúng để thay đổi content của HTML element bên dưới là gì? <p id="demo">This is a demonstration.</p>',
    answers: [
      'document.getElementById("demo").innerHTML = "Hello World!";',
      'document.getElementByName("p").innerHTML = "Hello World!";',
      'document.getElement("p").innerHTML = "Hello World!";',
      '#demo.innerHTML = "Hello World!";'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Vị trí đúng để chèn JavaScript là ở đâu?',
    answers: [
      'Cả <head> section và <body> section đều đúng',
      '<body> section',
      '<head> section'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Syntax đúng để tham chiếu tới external script tên là "xxx.js" là gì?',
    answers: [
      '<script src="xxx.js">',
      '<script href="xxx.js">',
      '<script name="xxx.js">'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'External JavaScript file bắt buộc phải chứa <script> tag.',
    answers: [
      'Sai',
      'Đúng'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Làm thế nào để viết "Hello World" trong alert box?',
    answers: [
      'alert("Hello World");',
      'msgBox("Hello World");',
      'alertBox("Hello World");',
      'msg("Hello World");'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Làm thế nào để tạo function trong JavaScript?',
    answers: [
      'function myFunction()',
      'function:myFunction()',
      'function = myFunction()'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Làm thế nào để gọi function tên là "myFunction"?',
    answers: [
      'myFunction()',
      'call function myFunction()',
      'call myFunction()'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Làm thế nào để viết IF statement trong JavaScript?',
    answers: [
      'if (i == 5)',
      'if i = 5',
      'if i = 5 then',
      'if i == 5 then'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Làm thế nào để viết IF statement nhằm thực thi code nếu "i" KHÔNG bằng 5?',
    answers: [
      'if (i != 5)',
      'if (i <> 5)',
      'if i <> 5',
      'if i =! 5 then'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'WHILE loop bắt đầu như thế nào?',
    answers: [
      'while (i <= 10)',
      'while (i <= 10; i++)',
      'while i = 1 to 10'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'FOR loop bắt đầu như thế nào?',
    answers: [
      'for (i = 0; i <= 5; i++)',
      'for (i <= 5; i++)',
      'for i = 1 to 5',
      'for (i = 0; i <= 5)'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Làm thế nào để thêm comment trong JavaScript?',
    answers: [
      '//This is a comment',
      '<!--This is a comment-->',
      "'This is a comment"
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Làm thế nào để chèn comment có nhiều hơn một dòng?',
    answers: [
      '/*This comment has\nmore than one line*/',
      '//This comment has\nmore than one line//',
      '<!--This comment has\nmore than one line-->'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Cách đúng để viết JavaScript array là gì?',
    answers: [
      'var colors = ["red", "green", "blue"]',
      'var colors = "red", "green", "blue"',
      'var colors = (1:"red", 2:"green", 3:"blue")',
      'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Làm thế nào để làm tròn số 7.25 tới integer gần nhất?',
    answers: [
      'Math.round(7.25)',
      'Math.rnd(7.25)',
      'rnd(7.25)',
      'round(7.25)'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Làm thế nào để tìm number có value cao nhất giữa x và y?',
    answers: [
      'Math.max(x, y)',
      'ceil(x, y)',
      'top(x, y)',
      'Math.ceil(x, y)'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'JavaScript syntax đúng để mở một new window tên là "w2" là gì?',
    answers: [
      'w2 = window.open("http://www.w3schools.com");',
      'w2 = window.new("http://www.w3schools.com");'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'JavaScript giống với Java.',
    answers: [
      'Sai',
      'Đúng'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Keyword nào KHÔNG hợp lệ để declare variable trong JavaScript?',
    answers: [
      'constant',
      'var',
      'let'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Event nào xảy ra khi user click vào một HTML element?',
    answers: [
      'onclick',
      'onmouseclick',
      'onchange',
      'onmouseover'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Làm thế nào để declare một JavaScript variable?',
    answers: [
      'var carName;',
      'v carName;',
      'variable carName;'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Operator nào được dùng để assign value cho variable?',
    answers: [
      '=',
      '*',
      '-',
      'x'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Code sau sẽ return gì: Boolean(10 > 9)',
    answers: [
      'true',
      'false',
      'NaN'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'JavaScript có case-sensitive không?',
    answers: [
      'Có',
      'Không'
    ],
    correct: 0,
    explanation: ''
  }
  ];


