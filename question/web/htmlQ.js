const htmlQ = [
  {
    question: 'HTML là viết tắt của gì?',
    answers: [
      'Hyper Text Markup Language',
      'Home Tool Markup Language',
      'Hyperlinks and Text Markup Language'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Ai tạo ra Web standards?',
    answers: [
      'The World Wide Web Consortium',
      'Mozilla',
      'Google',
      'Microsoft'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Chọn HTML element đúng cho heading lớn nhất:',
    answers: [
      '<h1>',
      '<heading>',
      '<h6>',
      '<head>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'HTML element đúng để chèn line break là gì?',
    answers: [
      '<br>',
      '<break>',
      '<lb>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'HTML đúng để thêm background color là gì?',
    answers: [
      '<body style="background-color:yellow;">',
      '<background>yellow</background>',
      '<body bg="yellow">'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Chọn HTML element đúng để định nghĩa important text',
    answers: [
      '<strong>',
      '<i>',
      '<important>',
      '<b>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Chọn HTML element đúng để định nghĩa emphasized text',
    answers: [
      '<i>',
      '<italic>',
      '<em>'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'HTML đúng để tạo hyperlink là gì?',
    answers: [
      '<a href="http://www.w3schools.com">W3Schools</a>',
      '<a url="http://www.w3schools.com">W3Schools.com</a>',
      '<a name="http://www.w3schools.com">W3Schools.com</a>',
      '<a>http://www.w3schools.com</a>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Ký tự nào được dùng để biểu thị end tag?',
    answers: [
      '/',
      '<',
      '*',
      '^'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Làm thế nào để mở link trong tab/browser window mới?',
    answers: [
      '<a href="url" target="_blank">',
      '<a href="url" target="new">',
      '<a href="url" new>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Những element nào dưới đây đều là <table> elements?',
    answers: [
      '<table><tr><td>',
      '<thead><body><tr>',
      '<table><tr><tt>',
      '<table><head><tfoot>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Inline elements thường được hiển thị mà không bắt đầu một dòng mới.',
    answers: [
      'False',
      'True'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Làm thế nào để tạo numbered list?',
    answers: [
      '<ol>',
      '<dl>',
      '<ul>',
      '<list>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Làm thế nào để tạo bulleted list?',
    answers: [
      '<ul>',
      '<ol>',
      '<dl>',
      '<list>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'HTML đúng để tạo checkbox là gì?',
    answers: [
      '<input type="checkbox">',
      '<checkbox>',
      '<check>',
      '<input type="check">'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'HTML đúng để tạo text input field là gì?',
    answers: [
      '<input type="text">',
      '<textfield>',
      '<input type="textfield">',
      '<textinput type="text">'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'HTML đúng để tạo drop-down list là gì?',
    answers: [
      '<select>',
      '<list>',
      '<input type="dropdown">',
      '<input type="list">'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'HTML đúng để tạo text area là gì?',
    answers: [
      '<input type="textarea">',
      '<input type="textbox">',
      '<textarea>'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'HTML đúng để chèn image là gì?',
    answers: [
      '<img src="image.gif" alt="MyImage">',
      '<img href="image.gif" alt="MyImage">',
      '<image src="image.gif" alt="MyImage">',
      '<img alt="MyImage">image.gif</img>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'HTML đúng để chèn background image là gì?',
    answers: [
      '<body style="background-image:url(background.gif)">',
      '<background img="background.gif">',
      '<body bg="background.gif">'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: '<iframe> được dùng để hiển thị một web page bên trong một web page.',
    answers: [
      'True',
      'False',
      'There is no such thing as an <iframe>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'HTML comments bắt đầu bằng <!-- và kết thúc bằng -->',
    answers: [
      'True',
      'False'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Block elements thường được hiển thị mà không bắt đầu một dòng mới.',
    answers: [
      'False',
      'True'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'HTML element nào định nghĩa title của document?',
    answers: [
      '<title>',
      '<head>',
      '<meta>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'HTML attribute nào chỉ định alternate text cho image nếu image không thể hiển thị?',
    answers: [
      'alt',
      'title',
      'longdesc',
      'src'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Doctype nào đúng cho HTML5?',
    answers: [
      '<!DOCTYPE HTML5>',
      '<!DOCTYPE html>',
      '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN" "http://www.w3.org/TR/html5/strict.dtd">'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'HTML element nào được dùng để chỉ định footer cho document hoặc section?',
    answers: [
      '<footer>',
      '<bottom>',
      '<section>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong HTML, bạn có thể embed SVG elements trực tiếp vào HTML page.',
    answers: [
      'True',
      'False'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'HTML element đúng để phát video files là gì?',
    answers: [
      '<video>',
      '<media>',
      '<movie>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'HTML element đúng để phát audio files là gì?',
    answers: [
      '<audio>',
      '<sound>',
      '<mp3>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'HTML global attribute "contenteditable" được dùng để làm gì?',
    answers: [
      'Specifies a context menu for an element. The menu appears when a user right-clicks on the element',
      'Specify whether the content of an element should be editable or not',
      'Update content from the server',
      'Return the position of the first found occurrence of content inside a string'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Trong HTML, onblur và onfocus là gì?',
    answers: [
      'Event attributes',
      'HTML elements',
      'Style attributes'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Graphics được định nghĩa bởi SVG ở format nào?',
    answers: [
      'XML',
      'CSS',
      'HTML'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'HTML <canvas> element được dùng để làm gì?',
    answers: [
      'create draggable elements',
      'draw graphics',
      'manipulate data in MySQL',
      'display database records'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Trong HTML, attribute nào được dùng để chỉ định rằng input field bắt buộc phải điền?',
    answers: [
      'required',
      'formvalidate',
      'placeholder',
      'validate'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Input type nào định nghĩa slider control?',
    answers: [
      'range',
      'search',
      'controls',
      'slider'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'HTML element nào được dùng để hiển thị scalar measurement trong một range?',
    answers: [
      '<measure>',
      '<meter>',
      '<range>',
      '<gauge>'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'HTML element nào định nghĩa navigation links?',
    answers: [
      '<nav>',
      '<navigate>',
      '<navigation>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong HTML, <aside> element định nghĩa gì?',
    answers: [
      'Nội dung nằm ngoài nội dung chính của page',
      'Bộ ký tự ASCII; dùng để gửi thông tin giữa các máy tính trên Internet',
      'Một navigation list được hiển thị ở phía bên trái page'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'HTML element nào được dùng để chỉ định header cho document hoặc section?',
    answers: [
      '<header>',
      '<head>',
      '<top>',
      '<section>'
    ],
    correct: 0,
    explanation: ''
  }
  ];


