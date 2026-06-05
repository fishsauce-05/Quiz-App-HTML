const questionBank = {
  web: [
  {
    question: '[JavaScript] Làm thế nào để viết chữ "Xin chào" trong box cảnh báo?',
    answers: [
      'msgBox("Xin chào");',
      'msg("Xin chào");',
      'alertBox("Xin chào");',
      'alert("Xin chào");'
    ],
    correct: 3
  },
  {
    question: 'Phương thức jQuery nào được dùng để thực hiện yêu cầu HTTP không đồng bộ?',
    answers: [
      'jQuery.ajax()',
      'jQuery.ajaxAsync()',
      'jQuery.ajaxSetup()'
    ],
    correct: 0
  },
  {
    question: 'Với SQL, chọn mọi bản ghi từ bảng "DanhSach" nếu giá trị của cột "Ten" là "Nam" như thế nào?',
    answers: [
      "SELECT [all] FROM DanhSach WHERE Ten='Nam'",
      "SELECT * FROM DanhSach WHERE Ten<>'Nam'",
      "SELECT * FROM DanhSach WHERE Ten='Nam'",
      "SELECT [all] FROM DanhSach WHERE Ten LIKE 'Nam'"
    ],
    correct: 2
  },
  {
    question: 'Mã máy chủ PHP phải đặt trong cặp ký hiệu nào?',
    answers: [
      '<?php>...</?>',
      '<?php...?>',
      '<script>...<\/script>',
      '<&>...</&>'
    ],
    correct: 1
  },
  {
    question: 'Trong HTML, thuộc tính nào được dùng để xác định trường nhập bắt buộc phải điền?',
    answers: [
      'formvalidate',
      'required',
      'validate',
      'placeholder'
    ],
    correct: 1
  },
  {
    question: 'Hàm jQuery nào được dùng để tránh mã khởi chạy trước khi tài liệu được tải xong?',
    answers: [
      '$(document).ready()',
      '$(document).load()',
      '$(body).onload()'
    ],
    correct: 0
  },
  {
    question: 'PHP cho phép ta gửi email trực tiếp từ script.',
    answers: [
      'Sai',
      'Đúng'
    ],
    correct: 1
  },
  {
    question: 'Phần tử HTML nào thêm màu nền?',
    answers: [
      '<background>yellow</background>',
      '<body style="background-color:yellow;">',
      '<body bg="yellow">'
    ],
    correct: 1
  },
  {
    question: '[JavaScript] Sự kiện nào xảy ra khi người sử dụng kích chuột vào một phần tử HTML?',
    answers: [
      'onclick',
      'onmouseclick',
      'onmouseover',
      'onchange'
    ],
    correct: 0
  },
  {
    question: 'XML instance là gì?',
    answers: [
      'Một phần tử XML',
      'Một thuộc tính XML',
      'Một tài liệu XML'
    ],
    correct: 2
  },
  {
    question: 'Phần tử HTML nào tạo ra một siêu liên kết / hyperlink?',
    answers: [
      '<a href="http://www.w3schools.com">W3Schools</a>',
      '<a name="http://www.w3schools.com">W3Schools.com</a>',
      '<a url="http://www.w3schools.com">W3Schools.com</a>',
      '<a>http://www.w3schools.com</a>'
    ],
    correct: 0
  },
  {
    question: 'Với SQL, làm thế nào để trả lại mọi bản ghi từ bảng "DanhSach" được sắp xếp giảm dần theo "Ten"?',
    answers: [
      'SELECT * FROM DanhSach ORDER BY Ten DESC',
      "SELECT * FROM DanhSach SORT 'Ten' DESC",
      "SELECT * FROM DanhSach SORT BY 'Ten' DESC",
      'SELECT * FROM DanhSach ORDER Ten DESC'
    ],
    correct: 0
  },
  {
    question: 'Lớp Bootstrap nào thêm màu khác nhau (zebra-stripes) cho các dòng chẵn, lẻ?',
    answers: [
      '.table-striped',
      '.even and .odd',
      '.table-bordered',
      '.table-zebra'
    ],
    correct: 0
  },
  {
    question: 'Lệnh SQL nào được dùng để trả lại chỉ các giá trị khác nhau?',
    answers: [
      'SELECT UNIQUE',
      'SELECT DIFFERENT',
      'SELECT DISTINCT'
    ],
    correct: 2
  },
  {
    question: 'Đâu là tên đúng của một phần tử XML?',
    answers: [
      '<xmldocument>',
      '<Name>',
      '<7eleven>',
      '<phone number>'
    ],
    correct: 1
  },
  {
    question: 'Tuyên bố nào đúng về việc sử dụng jQuery?',
    answers: [
      'Để sử dụng jQuery, ta phải tham chiếu đến thư viện jQuery ở máy chủ Google',
      'Để sử dụng jQuery, ta không phải làm gì cả. Hầu hết các trình duyệt đều có sẵn thư viện jQuery',
      'Để sử dụng jQuery, ta phải mua thư viện jQuery này tại trang www.jquery.com'
    ],
    correct: 0
  },
  {
    question: 'Cách viết một mảng JavaScript?',
    answers: [
      'var colors = (1:"red", 2:"green", 3:"blue")',
      'var colors = ["red", "green", "blue"]',
      'var colors = "red", "green", "blue"',
      'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'
    ],
    correct: 1
  },
  {
    question: 'Làm thế nào để thêm màu nền cho mọi phần tử <h1>?',
    answers: [
      'h1 {background-color:#FFFFFF;}',
      'h1.all {background-color:#FFFFFF;}',
      'all.h1 {background-color:#FFFFFF;}'
    ],
    correct: 0
  },
  {
    question: 'Đặc tính CSS nào điều chỉnh kích thước chữ?',
    answers: [
      'text-style',
      'text-size',
      'font-style',
      'font-size'
    ],
    correct: 3
  },
  {
    question: 'Những phần tử nào đều thuộc phần tử <table>?',
    answers: [
      '<table><tr><td>',
      '<thead><body><tr>',
      '<table><tr><tt>',
      '<table><head><tfoot>'
    ],
    correct: 0
  },
  {
    question: 'Plugin nào được dùng để quay vòng các phần tử như trình chiếu slide?',
    answers: [
      'Carousel',
      'Scrollspy',
      'Orbit',
      'Slideshow'
    ],
    correct: 0
  },
  {
    question: 'Cách thức để tạo ra một mảng trong PHP?',
    answers: [
      '$cars = array["Volvo", "BMW", "Toyota"];',
      '$cars = "Volvo", "BMW", "Toyota";',
      '$cars = array("Volvo", "BMW", "Toyota");'
    ],
    correct: 2
  },
  {
    question: 'Câu lệnh nào khai báo phiên bản XML?',
    answers: [
      '<?xml version="1.0"?>',
      '<xml version="1.0" />',
      '<?xml version="1.0" />'
    ],
    correct: 0
  },
  {
    question: 'Hiển thị đường bao: top = 10px, bottom = 5px, left = 20px, right = 1px như thế nào?',
    answers: [
      'border-width:10px 20px 5px 1px;',
      'border-width:10px 1px 5px 20px;',
      'border-width:5px 20px 10px 1px;',
      'border-width:10px 5px 20px 1px;'
    ],
    correct: 1
  },
  {
    question: 'Câu lệnh JavaScript nào dùng để mở một cửa sổ mới có tên là "w2"?',
    answers: [
      'w2 = window.open("http://www.w3schools.com");',
      'w2 = window.new("http://www.w3schools.com");'
    ],
    correct: 0
  },
  {
    question: 'Lớp được dùng để tạo ra một nhóm các nút bấm?',
    answers: [
      '.btn-group',
      '.button-group',
      '.group-btn',
      '.group-button'
    ],
    correct: 0
  },
  {
    question: 'Với SQL, chọn mọi bản ghi từ bảng "DanhSach" khi "Ten" là "Nam" và họ là "Nguyễn" như thế nào?',
    answers: [
      "SELECT Ten='Nam', Ho='Nguyễn' FROM DanhSach",
      "SELECT * FROM DanhSach WHERE Ten='Nam' AND Ho='Nguyễn'",
      "SELECT * FROM DanhSach WHERE Ten<>'Nam' AND Ho<>'Nguyễn'"
    ],
    correct: 1
  },
  {
    question: 'Lệnh $("div") chọn phần tử nào?',
    answers: [
      'Mọi phần tử div',
      'Phần tử div đầu tiên'
    ],
    correct: 0
  },
  {
    question: 'Lớp Bootstrap nào tạo ra phần chứa nội dung có độ rộng cố định thích nghi?',
    answers: [
      '.container-fixed',
      '.container',
      '.container-fluid'
    ],
    correct: 1
  },
  {
    question: 'Đâu không phải là tên đúng của một phần tử XML?',
    answers: [
      'Cả 3 tên đều sai',
      '<h1>',
      '<1dollar>',
      '<Note>'
    ],
    correct: 2
  },
  {
    question: 'Làm thế nào để hiển thị chữ "Xin chào" trong PHP?',
    answers: [
      '"Xin chào";',
      'Document.Write("Xin chào");',
      'echo "Xin chào";'
    ],
    correct: 2
  },
  {
    question: 'Làm thế nào để thể hiện danh sách có đánh số?',
    answers: [
      'ul>',
      '<list>',
      '<dl>',
      '<ol>'
    ],
    correct: 3
  },
  {
    question: '[JavaScript] Làm thế nào để gọi một hàm có tên là "myFunction"?',
    answers: [
      'call myFunction()',
      'call function myFunction()',
      'myFunction()'
    ],
    correct: 2
  },
  {
    question: 'Lớp Bootstrap nào thêm heading vào panel?',
    answers: [
      '.panel-header',
      '.panel-heading',
      '.panel-footer',
      '.panel-head'
    ],
    correct: 1
  },
  {
    question: 'Thẻ HTML trỏ đến một style sheet ngoài đúng?',
    answers: [
      '<link rel="stylesheet" type="text/css" href="mystyle.css">',
      '<style src="mystyle.css">',
      '<stylesheet>mystyle.css</stylesheet>'
    ],
    correct: 0
  },
  {
    question: 'Đoạn mã jQuery nào dùng để đặt màu nền của mọi phần tử p là màu đỏ?',
    answers: [
      '$("p").css("background-color","red");',
      '$("p").style("background-color","red");',
      '$("p").layout("background-color","red");',
      '$("p").manipulate("background-color","red");'
    ],
    correct: 0
  },
  {
    question: '[PHP] Cách nào đúng để sử dụng include file "time.inc"?',
    answers: [
      '<?php include:"time.inc"; ?>',
      '<?php include file="time.inc"; ?>',
      '<!-- include file="time.inc" -->',
      '<?php include "time.inc"; ?>'
    ],
    correct: 3
  },
  {
    question: 'Tuyên bố nào là đúng về XML?',
    answers: [
      'Mọi phần tử XML phải đóng đúng trật tự',
      'Mọi phần tử XML phải là chữ thường',
      'Tất cả các tuyên bố đều đúng',
      'Mọi tài liệu XML phải có DTD'
    ],
    correct: 0
  },
  {
    question: 'Lớp Bootstrap nào tạo ra một box thu hút sự chú ý?',
    answers: [
      '.jumbotron',
      '.bigbox',
      '.container'
    ],
    correct: 0
  },
  {
    question: 'JavaScript nằm trong phần tử HTML nào?',
    answers: [
      '<script>',
      '<js>',
      '<javascript>',
      '<scripting>'
    ],
    correct: 0
  },
  {
    question: 'Câu lệnh CSS nào đúng?',
    answers: [
      'body {color: black;}',
      'body:color=black;',
      '{body;color:black;}',
      '{body:color=black;}'
    ],
    correct: 0
  },
  {
    question: '[PHP] Làm thế nào để lấy thông tin từ một form đã nhập sử dụng phương pháp GET?',
    answers: [
      'Request.Form;',
      'Request.QueryString;',
      '$_GET[];'
    ],
    correct: 2
  },
  {
    question: 'XML là viết tắt của chữ nào?',
    answers: [
      'eXtensible Markup Language',
      'X-Markup Language',
      'Example Markup Language',
      'eXtra Modern Link'
    ],
    correct: 0
  },
  {
    question: 'jQuery sử dụng các selector CSS để chọn phần tử?',
    answers: [
      'Đúng',
      'Sai'
    ],
    correct: 0
  },
  {
    question: 'Tổ chức nào tạo lập tiêu chuẩn web?',
    answers: [
      'Mozilla',
      'Microsoft',
      'The World Wide Web Consortium',
      'Google'
    ],
    correct: 2
  },
  {
    question: 'Với SQL, chọn mọi bản ghi từ bảng "DanhSach" khi "Ten" nằm trong khoảng theo bảng chữ cái từ "Nam" đến "Trung" như thế nào?',
    answers: [
      "SELECT Ten>'Nam' AND Ten<'Trung' FROM DanhSach",
      "SELECT * FROM DanhSach WHERE Ten BETWEEN 'Nam' AND 'Trung'",
      "SELECT * FROM DanhSach WHERE Ten>'Nam' AND Ten<'Trung'"
    ],
    correct: 1
  },
  {
    question: 'CSS là chữ viết tắt của:',
    answers: [
      'Creative Style Sheets',
      'Computer Style Sheets',
      'Colorful Style Sheets',
      'Cascading Style Sheets'
    ],
    correct: 3
  },
  {
    question: 'Các biến trong PHP bắt đầu bằng ký tự nào?',
    answers: [
      '!',
      '$',
      '&'
    ],
    correct: 1
  },
  {
    question: 'Với XML, tuyên bố nào là đúng?',
    answers: [
      'Các thuộc tính phải xuất hiện theo trật tự xác định',
      'Không có tuyên bố nào đúng',
      'Các thuộc tính luôn phải xuất hiện'
    ],
    correct: 1
  },
  {
    question: 'Lệnh SQL nào được dùng để tạo ra một bảng trong một cơ sở dữ liệu?',
    answers: [
      'CREATE DATABASE TABLE',
      'CREATE DB',
      'CREATE TABLE',
      'CREATE DATABASE TAB'
    ],
    correct: 2
  },
  {
    question: 'Lệnh SQL nào được dùng để chèn dữ liệu vào một cơ sở dữ liệu?',
    answers: [
      'INSERT NEW',
      'INSERT INTO',
      'ADD NEW',
      'ADD RECORD'
    ],
    correct: 1
  }
  ],
  htmlPractice: [
  {
    question: 'HTML là viết tắt của gì?',
    answers: [
      'Hyper Text Markup Language',
      'Home Tool Markup Language',
      'Hyperlinks and Text Markup Language'
    ],
    correct: 0
  },
  {
    question: 'Ai tạo ra Web standards?',
    answers: [
      'The World Wide Web Consortium',
      'Mozilla',
      'Google',
      'Microsoft'
    ],
    correct: 0
  },
  {
    question: 'Chọn HTML element đúng cho heading lớn nhất:',
    answers: [
      '<h1>',
      '<heading>',
      '<h6>',
      '<head>'
    ],
    correct: 0
  },
  {
    question: 'HTML element đúng để chèn line break là gì?',
    answers: [
      '<br>',
      '<break>',
      '<lb>'
    ],
    correct: 0
  },
  {
    question: 'HTML đúng để thêm background color là gì?',
    answers: [
      '<body style="background-color:yellow;">',
      '<background>yellow</background>',
      '<body bg="yellow">'
    ],
    correct: 0
  },
  {
    question: 'Chọn HTML element đúng để định nghĩa important text',
    answers: [
      '<strong>',
      '<i>',
      '<important>',
      '<b>'
    ],
    correct: 0
  },
  {
    question: 'Chọn HTML element đúng để định nghĩa emphasized text',
    answers: [
      '<i>',
      '<italic>',
      '<em>'
    ],
    correct: 2
  },
  {
    question: 'HTML đúng để tạo hyperlink là gì?',
    answers: [
      '<a href="http://www.w3schools.com">W3Schools</a>',
      '<a url="http://www.w3schools.com">W3Schools.com</a>',
      '<a name="http://www.w3schools.com">W3Schools.com</a>',
      '<a>http://www.w3schools.com</a>'
    ],
    correct: 0
  },
  {
    question: 'Ký tự nào được dùng để biểu thị end tag?',
    answers: [
      '/',
      '<',
      '*',
      '^'
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để mở link trong tab/browser window mới?',
    answers: [
      '<a href="url" target="_blank">',
      '<a href="url" target="new">',
      '<a href="url" new>'
    ],
    correct: 0
  },
  {
    question: 'Những element nào dưới đây đều là <table> elements?',
    answers: [
      '<table><tr><td>',
      '<thead><body><tr>',
      '<table><tr><tt>',
      '<table><head><tfoot>'
    ],
    correct: 0
  },
  {
    question: 'Inline elements thường được hiển thị mà không bắt đầu một dòng mới.',
    answers: [
      'False',
      'True'
    ],
    correct: 1
  },
  {
    question: 'Làm thế nào để tạo numbered list?',
    answers: [
      '<ol>',
      '<dl>',
      '<ul>',
      '<list>'
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để tạo bulleted list?',
    answers: [
      '<ul>',
      '<ol>',
      '<dl>',
      '<list>'
    ],
    correct: 0
  },
  {
    question: 'HTML đúng để tạo checkbox là gì?',
    answers: [
      '<input type="checkbox">',
      '<checkbox>',
      '<check>',
      '<input type="check">'
    ],
    correct: 0
  },
  {
    question: 'HTML đúng để tạo text input field là gì?',
    answers: [
      '<input type="text">',
      '<textfield>',
      '<input type="textfield">',
      '<textinput type="text">'
    ],
    correct: 0
  },
  {
    question: 'HTML đúng để tạo drop-down list là gì?',
    answers: [
      '<select>',
      '<list>',
      '<input type="dropdown">',
      '<input type="list">'
    ],
    correct: 0
  },
  {
    question: 'HTML đúng để tạo text area là gì?',
    answers: [
      '<input type="textarea">',
      '<input type="textbox">',
      '<textarea>'
    ],
    correct: 2
  },
  {
    question: 'HTML đúng để chèn image là gì?',
    answers: [
      '<img src="image.gif" alt="MyImage">',
      '<img href="image.gif" alt="MyImage">',
      '<image src="image.gif" alt="MyImage">',
      '<img alt="MyImage">image.gif</img>'
    ],
    correct: 0
  },
  {
    question: 'HTML đúng để chèn background image là gì?',
    answers: [
      '<body style="background-image:url(background.gif)">',
      '<background img="background.gif">',
      '<body bg="background.gif">'
    ],
    correct: 0
  },
  {
    question: '<iframe> được dùng để hiển thị một web page bên trong một web page.',
    answers: [
      'True',
      'False',
      'There is no such thing as an <iframe>'
    ],
    correct: 0
  },
  {
    question: 'HTML comments bắt đầu bằng <!-- và kết thúc bằng -->',
    answers: [
      'True',
      'False'
    ],
    correct: 0
  },
  {
    question: 'Block elements thường được hiển thị mà không bắt đầu một dòng mới.',
    answers: [
      'False',
      'True'
    ],
    correct: 0
  },
  {
    question: 'HTML element nào định nghĩa title của document?',
    answers: [
      '<title>',
      '<head>',
      '<meta>'
    ],
    correct: 0
  },
  {
    question: 'HTML attribute nào chỉ định alternate text cho image nếu image không thể hiển thị?',
    answers: [
      'alt',
      'title',
      'longdesc',
      'src'
    ],
    correct: 0
  },
  {
    question: 'Doctype nào đúng cho HTML5?',
    answers: [
      '<!DOCTYPE HTML5>',
      '<!DOCTYPE html>',
      '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN" "http://www.w3.org/TR/html5/strict.dtd">'
    ],
    correct: 1
  },
  {
    question: 'HTML element nào được dùng để chỉ định footer cho document hoặc section?',
    answers: [
      '<footer>',
      '<bottom>',
      '<section>'
    ],
    correct: 0
  },
  {
    question: 'Trong HTML, bạn có thể embed SVG elements trực tiếp vào HTML page.',
    answers: [
      'True',
      'False'
    ],
    correct: 0
  },
  {
    question: 'HTML element đúng để phát video files là gì?',
    answers: [
      '<video>',
      '<media>',
      '<movie>'
    ],
    correct: 0
  },
  {
    question: 'HTML element đúng để phát audio files là gì?',
    answers: [
      '<audio>',
      '<sound>',
      '<mp3>'
    ],
    correct: 0
  },
  {
    question: 'HTML global attribute "contenteditable" được dùng để làm gì?',
    answers: [
      'Specifies a context menu for an element. The menu appears when a user right-clicks on the element',
      'Specify whether the content of an element should be editable or not',
      'Update content from the server',
      'Return the position of the first found occurrence of content inside a string'
    ],
    correct: 1
  },
  {
    question: 'Trong HTML, onblur và onfocus là gì?',
    answers: [
      'Event attributes',
      'HTML elements',
      'Style attributes'
    ],
    correct: 0
  },
  {
    question: 'Graphics được định nghĩa bởi SVG ở format nào?',
    answers: [
      'XML',
      'CSS',
      'HTML'
    ],
    correct: 0
  },
  {
    question: 'HTML <canvas> element được dùng để làm gì?',
    answers: [
      'create draggable elements',
      'draw graphics',
      'manipulate data in MySQL',
      'display database records'
    ],
    correct: 1
  },
  {
    question: 'Trong HTML, attribute nào được dùng để chỉ định rằng input field bắt buộc phải điền?',
    answers: [
      'required',
      'formvalidate',
      'placeholder',
      'validate'
    ],
    correct: 0
  },
  {
    question: 'Input type nào định nghĩa slider control?',
    answers: [
      'range',
      'search',
      'controls',
      'slider'
    ],
    correct: 0
  },
  {
    question: 'HTML element nào được dùng để hiển thị scalar measurement trong một range?',
    answers: [
      '<measure>',
      '<meter>',
      '<range>',
      '<gauge>'
    ],
    correct: 1
  },
  {
    question: 'HTML element nào định nghĩa navigation links?',
    answers: [
      '<nav>',
      '<navigate>',
      '<navigation>'
    ],
    correct: 0
  },
  {
    question: 'Trong HTML, <aside> element định nghĩa gì?',
    answers: [
      'Nội dung nằm ngoài nội dung chính của page',
      'Bộ ký tự ASCII; dùng để gửi thông tin giữa các máy tính trên Internet',
      'Một navigation list được hiển thị ở phía bên trái page'
    ],
    correct: 0
  },
  {
    question: 'HTML element nào được dùng để chỉ định header cho document hoặc section?',
    answers: [
      '<header>',
      '<head>',
      '<top>',
      '<section>'
    ],
    correct: 0
  }
  ],
  cssPractice: [
  {
    question: 'CSS là viết tắt của gì?',
    answers: [
      'Cascading Style Sheets',
      'Creative Style Sheets',
      'Computer Style Sheets',
      'Colorful Style Sheets'
    ],
    correct: 0
  },
  {
    question: 'HTML đúng để tham chiếu tới external style sheet là gì?',
    answers: [
      '<link rel="stylesheet" type="text/css" href="mystyle.css">',
      '<style src="mystyle.css">',
      '<stylesheet>mystyle.css</stylesheet>'
    ],
    correct: 0
  },
  {
    question: 'Trong HTML document, vị trí đúng để tham chiếu tới external style sheet là ở đâu?',
    answers: [
      'In the <head> section',
      'At the end of the document',
      'In the <body> section'
    ],
    correct: 0
  },
  {
    question: 'HTML tag nào được dùng để định nghĩa internal style sheet?',
    answers: [
      '<css>',
      '<style>',
      '<script>'
    ],
    correct: 1
  },
  {
    question: 'HTML attribute nào được dùng để định nghĩa inline styles?',
    answers: [
      'style',
      'styles',
      'class',
      'font'
    ],
    correct: 0
  },
  {
    question: 'CSS syntax nào đúng?',
    answers: [
      'body {color: black;}',
      'body:color=black;',
      '{body:color=black;}',
      '{body;color:black;}'
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để chèn comment trong CSS file?',
    answers: [
      '/* this is a comment */',
      '// this is a comment //',
      '// this is a comment',
      "' this is a comment"
    ],
    correct: 0
  },
  {
    question: 'Property nào được dùng để thay đổi background color?',
    answers: [
      'background-color',
      'color',
      'bgcolor'
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để thêm background color cho tất cả <h1> elements?',
    answers: [
      'h1 {background-color:#FFFFFF;}',
      'all.h1 {background-color:#FFFFFF;}',
      'h1.all {background-color:#FFFFFF;}'
    ],
    correct: 0
  },
  {
    question: 'CSS property nào được dùng để thay đổi text color của một element?',
    answers: [
      'fgcolor',
      'color',
      'text-color'
    ],
    correct: 1
  },
  {
    question: 'CSS property nào kiểm soát text size?',
    answers: [
      'font-size',
      'font-style',
      'text-style',
      'text-size'
    ],
    correct: 0
  },
  {
    question: 'CSS syntax đúng để làm tất cả <p> elements in bold là gì?',
    answers: [
      '<p style="font-size:bold;">',
      'p {text-size:bold;}',
      'p {font-weight:bold;}',
      '<p style="text-size:bold;">'
    ],
    correct: 2
  },
  {
    question: 'Làm thế nào để hiển thị hyperlinks không có underline?',
    answers: [
      'a {text-decoration:no-underline;}',
      'a {underline:none;}',
      'a {decoration:no-underline;}',
      'a {text-decoration:none;}'
    ],
    correct: 3
  },
  {
    question: 'Làm thế nào để mỗi word trong text bắt đầu bằng capital letter?',
    answers: [
      'transform:capitalize',
      'text-transform:capitalize',
      'text-style:capitalize',
      "You can't do that with CSS"
    ],
    correct: 1
  },
  {
    question: 'Property nào được dùng để thay đổi font của một element?',
    answers: [
      'font-family',
      'font-weight',
      'font-style'
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để làm text bold?',
    answers: [
      'font-weight:bold;',
      'font:bold;',
      'style:bold;'
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để hiển thị border với top border = 10 pixels, bottom border = 5 pixels, left border = 20 pixels, right border = 1 pixel?',
    answers: [
      'border-width:10px 1px 5px 20px;',
      'border-width:10px 5px 20px 1px;',
      'border-width:5px 20px 10px 1px;',
      'border-width:10px 20px 5px 1px;'
    ],
    correct: 0
  },
  {
    question: 'Property nào được dùng để thay đổi left margin của một element?',
    answers: [
      'margin-left',
      'padding-left',
      'indent'
    ],
    correct: 0
  },
  {
    question: 'Khi dùng padding property, bạn có được dùng negative values không?',
    answers: [
      'No',
      'Yes'
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để tạo một list hiển thị items bằng squares?',
    answers: [
      'list-type: square;',
      'list-style-type: square;',
      'list: square;'
    ],
    correct: 1
  },
  {
    question: "Làm thế nào để select một element có id 'demo'?",
    answers: [
      '#demo',
      '*demo',
      '.demo',
      'demo'
    ],
    correct: 0
  },
  {
    question: "Làm thế nào để select elements có class name 'test'?",
    answers: [
      '.test',
      '#test',
      '*test',
      'test'
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để select tất cả p elements bên trong một div element?',
    answers: [
      'div.p',
      'div p',
      'div + p'
    ],
    correct: 1
  },
  {
    question: 'Làm thế nào để group selectors?',
    answers: [
      'Tách mỗi selector bằng dấu cách',
      'Tách mỗi selector bằng dấu cộng',
      'Tách mỗi selector bằng dấu phẩy'
    ],
    correct: 2
  },
  {
    question: 'Default value của position property là gì?',
    answers: [
      'absolute',
      'static',
      'relative',
      'fixed'
    ],
    correct: 1
  }
  ],
  jsPractice: [
  {
    question: 'Ta đặt JavaScript bên trong HTML element nào?',
    answers: [
      '<script>',
      '<javascript>',
      '<js>',
      '<scripting>'
    ],
    correct: 0
  },
  {
    question: 'JavaScript syntax đúng để thay đổi content của HTML element bên dưới là gì? <p id="demo">This is a demonstration.</p>',
    answers: [
      'document.getElementById("demo").innerHTML = "Hello World!";',
      'document.getElementByName("p").innerHTML = "Hello World!";',
      'document.getElement("p").innerHTML = "Hello World!";',
      '#demo.innerHTML = "Hello World!";'
    ],
    correct: 0
  },
  {
    question: 'Vị trí đúng để chèn JavaScript là ở đâu?',
    answers: [
      'Cả <head> section và <body> section đều đúng',
      '<body> section',
      '<head> section'
    ],
    correct: 0
  },
  {
    question: 'Syntax đúng để tham chiếu tới external script tên là "xxx.js" là gì?',
    answers: [
      '<script src="xxx.js">',
      '<script href="xxx.js">',
      '<script name="xxx.js">'
    ],
    correct: 0
  },
  {
    question: 'External JavaScript file bắt buộc phải chứa <script> tag.',
    answers: [
      'Sai',
      'Đúng'
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để viết "Hello World" trong alert box?',
    answers: [
      'alert("Hello World");',
      'msgBox("Hello World");',
      'alertBox("Hello World");',
      'msg("Hello World");'
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để tạo function trong JavaScript?',
    answers: [
      'function myFunction()',
      'function:myFunction()',
      'function = myFunction()'
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để gọi function tên là "myFunction"?',
    answers: [
      'myFunction()',
      'call function myFunction()',
      'call myFunction()'
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để viết IF statement trong JavaScript?',
    answers: [
      'if (i == 5)',
      'if i = 5',
      'if i = 5 then',
      'if i == 5 then'
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để viết IF statement nhằm thực thi code nếu "i" KHÔNG bằng 5?',
    answers: [
      'if (i != 5)',
      'if (i <> 5)',
      'if i <> 5',
      'if i =! 5 then'
    ],
    correct: 0
  },
  {
    question: 'WHILE loop bắt đầu như thế nào?',
    answers: [
      'while (i <= 10)',
      'while (i <= 10; i++)',
      'while i = 1 to 10'
    ],
    correct: 0
  },
  {
    question: 'FOR loop bắt đầu như thế nào?',
    answers: [
      'for (i = 0; i <= 5; i++)',
      'for (i <= 5; i++)',
      'for i = 1 to 5',
      'for (i = 0; i <= 5)'
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để thêm comment trong JavaScript?',
    answers: [
      '//This is a comment',
      '<!--This is a comment-->',
      "'This is a comment"
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để chèn comment có nhiều hơn một dòng?',
    answers: [
      '/*This comment has\nmore than one line*/',
      '//This comment has\nmore than one line//',
      '<!--This comment has\nmore than one line-->'
    ],
    correct: 0
  },
  {
    question: 'Cách đúng để viết JavaScript array là gì?',
    answers: [
      'var colors = ["red", "green", "blue"]',
      'var colors = "red", "green", "blue"',
      'var colors = (1:"red", 2:"green", 3:"blue")',
      'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để làm tròn số 7.25 tới integer gần nhất?',
    answers: [
      'Math.round(7.25)',
      'Math.rnd(7.25)',
      'rnd(7.25)',
      'round(7.25)'
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để tìm number có value cao nhất giữa x và y?',
    answers: [
      'Math.max(x, y)',
      'ceil(x, y)',
      'top(x, y)',
      'Math.ceil(x, y)'
    ],
    correct: 0
  },
  {
    question: 'JavaScript syntax đúng để mở một new window tên là "w2" là gì?',
    answers: [
      'w2 = window.open("http://www.w3schools.com");',
      'w2 = window.new("http://www.w3schools.com");'
    ],
    correct: 0
  },
  {
    question: 'JavaScript giống với Java.',
    answers: [
      'Sai',
      'Đúng'
    ],
    correct: 0
  },
  {
    question: 'Keyword nào KHÔNG hợp lệ để declare variable trong JavaScript?',
    answers: [
      'constant',
      'var',
      'let'
    ],
    correct: 0
  },
  {
    question: 'Event nào xảy ra khi user click vào một HTML element?',
    answers: [
      'onclick',
      'onmouseclick',
      'onchange',
      'onmouseover'
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để declare một JavaScript variable?',
    answers: [
      'var carName;',
      'v carName;',
      'variable carName;'
    ],
    correct: 0
  },
  {
    question: 'Operator nào được dùng để assign value cho variable?',
    answers: [
      '=',
      '*',
      '-',
      'x'
    ],
    correct: 0
  },
  {
    question: 'Code sau sẽ return gì: Boolean(10 > 9)',
    answers: [
      'true',
      'false',
      'NaN'
    ],
    correct: 0
  },
  {
    question: 'JavaScript có case-sensitive không?',
    answers: [
      'Có',
      'Không'
    ],
    correct: 0
  }
  ],
  mysqlPractice: [
  {
    question: 'MySQL là gì?',
    answers: [
      'Tất cả các lựa chọn đều đúng',
      'Cross-platform, open-source và miễn phí',
      'Một relational database management system',
      'Được phát triển, phân phối và hỗ trợ bởi Oracle Corporation'
    ],
    correct: 0
  },
  {
    question: 'MySQL statement nào được dùng để select data từ database?',
    answers: [
      'SELECT',
      'EXTRACT',
      'OPEN',
      'GET'
    ],
    correct: 0
  },
  {
    question: 'MySQL statement nào được dùng để update data trong database?',
    answers: [
      'UPDATE',
      'MODIFY',
      'INSERT',
      'SAVE'
    ],
    correct: 0
  },
  {
    question: 'MySQL statement nào được dùng để delete data từ database?',
    answers: [
      'DELETE',
      'REMOVE',
      'COLLAPSE'
    ],
    correct: 0
  },
  {
    question: 'MySQL statement nào được dùng để insert data mới vào database?',
    answers: [
      'INSERT INTO',
      'INSERT NEW',
      'ADD RECORD',
      'ADD NEW'
    ],
    correct: 0
  },
  {
    question: 'Với MySQL, làm thế nào để select một column tên là "FirstName" từ table tên là "Persons"?',
    answers: [
      'SELECT FirstName FROM Persons',
      'SELECT Persons.FirstName',
      'EXTRACT FirstName FROM Persons'
    ],
    correct: 0
  },
  {
    question: 'Với MySQL, làm thế nào để select tất cả columns từ table tên là "Persons"?',
    answers: [
      'SELECT * FROM Persons',
      'SELECT [all] FROM Persons',
      'SELECT Persons',
      'SELECT *.Persons'
    ],
    correct: 0
  },
  {
    question: 'Với MySQL, làm thế nào để select tất cả records từ table "Persons" khi value của column "FirstName" là "Peter"?',
    answers: [
      "SELECT * FROM Persons WHERE FirstName='Peter'",
      "SELECT * FROM Persons WHERE FirstName<>'Peter'",
      "SELECT [all] FROM Persons WHERE FirstName LIKE 'Peter'",
      "SELECT [all] FROM Persons WHERE FirstName='Peter'"
    ],
    correct: 0
  },
  {
    question: 'Với MySQL, làm thế nào để select tất cả records từ table "Persons" khi value của column "FirstName" bắt đầu bằng "a"?',
    answers: [
      "SELECT * FROM Persons WHERE FirstName LIKE 'a%'",
      "SELECT * FROM Persons WHERE FirstName='%a%'",
      "SELECT * FROM Persons WHERE FirstName LIKE '%a'",
      "SELECT * FROM Persons WHERE FirstName='a'"
    ],
    correct: 0
  },
  {
    question: 'OR operator hiển thị một record nếu BẤT KỲ condition nào được liệt kê là true. AND operator hiển thị một record nếu TẤT CẢ conditions được liệt kê là true.',
    answers: [
      'Đúng',
      'Sai'
    ],
    correct: 0
  },
  {
    question: 'Với MySQL, làm thế nào để select tất cả records từ table "Persons" khi "FirstName" là "Peter" và "LastName" là "Jackson"?',
    answers: [
      "SELECT * FROM Persons WHERE FirstName='Peter' AND LastName='Jackson'",
      "SELECT * FROM Persons WHERE FirstName<>'Peter' AND LastName<>'Jackson'",
      "SELECT FirstName='Peter', LastName='Jackson' FROM Persons"
    ],
    correct: 0
  },
  {
    question: 'Với MySQL, làm thế nào để select tất cả records từ table "Persons" khi "LastName" nằm trong khoảng theo thứ tự alphabet từ "Hansen" đến "Pettersen", bao gồm cả hai giá trị?',
    answers: [
      "SELECT * FROM Persons WHERE LastName BETWEEN 'Hansen' AND 'Pettersen'",
      "SELECT LastName>'Hansen' AND LastName<'Pettersen' FROM Persons",
      "SELECT * FROM Persons WHERE LastName>'Hansen' AND LastName<'Pettersen'"
    ],
    correct: 0
  },
  {
    question: 'MySQL statement nào được dùng để return chỉ các values khác nhau?',
    answers: [
      'SELECT DISTINCT',
      'SELECT DIFFERENT',
      'SELECT UNIQUE'
    ],
    correct: 0
  },
  {
    question: 'MySQL keyword nào được dùng để sort result-set?',
    answers: [
      'ORDER BY',
      'SORT',
      'SORT BY',
      'ORDER'
    ],
    correct: 0
  },
  {
    question: 'Với MySQL, làm thế nào để return tất cả records từ table "Persons" được sort descending theo "FirstName"?',
    answers: [
      'SELECT * FROM Persons ORDER BY FirstName DESC',
      "SELECT * FROM Persons SORT BY 'FirstName' DESC",
      "SELECT * FROM Persons SORT 'FirstName' DESC",
      'SELECT * FROM Persons ORDER FirstName DESC'
    ],
    correct: 0
  },
  {
    question: 'Với MySQL, làm thế nào để insert một record mới vào table "Persons"?',
    answers: [
      "INSERT INTO Persons VALUES ('Jimmy', 'Jackson')",
      "INSERT VALUES ('Jimmy', 'Jackson') INTO Persons",
      "INSERT ('Jimmy', 'Jackson') INTO Persons"
    ],
    correct: 0
  },
  {
    question: 'Với MySQL, làm thế nào để insert "Olsen" làm "LastName" trong table "Persons"?',
    answers: [
      "INSERT INTO Persons (LastName) VALUES ('Olsen')",
      "INSERT INTO Persons ('Olsen') INTO LastName",
      "INSERT ('Olsen') INTO Persons (LastName)"
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để đổi "Hansen" thành "Nilsen" trong column "LastName" của table "Persons"?',
    answers: [
      "UPDATE Persons SET LastName='Nilsen' WHERE LastName='Hansen'",
      "MODIFY Persons SET LastName='Nilsen' WHERE LastName='Hansen'",
      "UPDATE Persons SET LastName='Hansen' INTO LastName='Nilsen'",
      "MODIFY Persons SET LastName='Hansen' INTO LastName='Nilsen"
    ],
    correct: 0
  },
  {
    question: 'Với MySQL, làm thế nào để delete records khi "FirstName" là "Peter" trong table "Persons"?',
    answers: [
      "DELETE FROM Persons WHERE FirstName = 'Peter'",
      "DELETE FirstName='Peter' FROM Persons",
      "DELETE ROW FirstName='Peter' FROM Persons"
    ],
    correct: 0
  },
  {
    question: 'Với MySQL, làm thế nào để return số lượng records trong table "Persons"?',
    answers: [
      'SELECT COUNT(*) FROM Persons',
      'SELECT COLUMNS(*) FROM Persons',
      'SELECT LEN(*) FROM Persons',
      'SELECT NO(*) FROM Persons'
    ],
    correct: 0
  },
  {
    question: 'Các kiểu joins nào được hỗ trợ trong MySQL?',
    answers: [
      'INNER JOIN, LEFT JOIN, RIGHT JOIN, CROSS JOIN',
      'INNER JOIN, OUTER JOIN, LEFT JOIN, RIGHT JOIN'
    ],
    correct: 0
  },
  {
    question: 'Operator nào được dùng để select values trong một range cho trước?',
    answers: [
      'BETWEEN',
      'UNION',
      'RANGE',
      'IN'
    ],
    correct: 0
  },
  {
    question: 'NOT NULL constraint buộc một column không được accept NULL values.',
    answers: [
      'Đúng',
      'Sai'
    ],
    correct: 0
  },
  {
    question: 'Operator nào được dùng để search một pattern được chỉ định trong column?',
    answers: [
      'LIKE',
      'GET',
      'FROM'
    ],
    correct: 0
  },
  {
    question: "MySQL statement nào được dùng để create một database table tên là 'Customers'?",
    answers: [
      'CREATE TABLE Customers',
      'CREATE DATABASE TAB Customers',
      'CREATE DB Customers',
      'CREATE DATABASE TABLE Customers'
    ],
    correct: 0
  }
  ],
  phpPractice: [
  {
    question: 'PHP là viết tắt của gì?',
    answers: [
      'PHP: Hypertext Preprocessor',
      'Personal Hypertext Processor',
      'Private Home Page'
    ],
    correct: 0
  },
  {
    question: 'PHP server scripts được bao quanh bởi delimiter nào?',
    answers: [
      '<?php...?>',
      '<?php>...</?>',
      '<script>...</script>',
      '<&>...</&>'
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để viết "Hello World" trong PHP?',
    answers: [
      'echo "Hello World";',
      '"Hello World";',
      'Document.Write("Hello World");'
    ],
    correct: 0
  },
  {
    question: 'Tất cả variables trong PHP bắt đầu bằng symbol nào?',
    answers: [
      '$',
      '!',
      '&'
    ],
    correct: 0
  },
  {
    question: 'Cách đúng để kết thúc một PHP statement là gì?',
    answers: [
      ';',
      '.',
      '</php>',
      'Dòng mới'
    ],
    correct: 0
  },
  {
    question: 'PHP syntax giống nhất với ngôn ngữ nào?',
    answers: [
      'JavaScript',
      'Perl and C',
      'VBScript'
    ],
    correct: 1
  },
  {
    question: 'Làm thế nào để lấy information từ form được submit bằng method "get"?',
    answers: [
      '$_GET[];',
      'Request.QueryString;',
      'Request.Form;'
    ],
    correct: 0
  },
  {
    question: 'Khi dùng POST method, variables được hiển thị trong URL.',
    answers: [
      'Sai',
      'Đúng'
    ],
    correct: 0
  },
  {
    question: 'Trong PHP, bạn có thể dùng cả single quotes (\' \') và double quotes (" ") cho strings.',
    answers: [
      'Đúng',
      'Sai'
    ],
    correct: 0
  },
  {
    question: 'Include files bắt buộc phải có file extension ".inc".',
    answers: [
      'Sai',
      'Đúng'
    ],
    correct: 0
  },
  {
    question: 'Cách đúng để include file "time.inc" là gì?',
    answers: [
      '<?php include "time.inc"; ?>',
      '<?php include file="time.inc"; ?>',
      '<!-- include file="time.inc" -->',
      '<?php include:"time.inc"; ?>'
    ],
    correct: 0
  },
  {
    question: 'Cách đúng để tạo function trong PHP là gì?',
    answers: [
      'function myFunction()',
      'create myFunction()',
      'new_function myFunction()'
    ],
    correct: 0
  },
  {
    question: 'Cách đúng để mở file "time.txt" ở chế độ readable là gì?',
    answers: [
      'fopen("time.txt","r");',
      'open("time.txt","read");',
      'open("time.txt");',
      'fopen("time.txt","r+");'
    ],
    correct: 0
  },
  {
    question: 'PHP cho phép bạn gửi emails trực tiếp từ script.',
    answers: [
      'Đúng',
      'Sai'
    ],
    correct: 0
  },
  {
    question: 'Superglobal variable nào chứa information về headers, paths và script locations?',
    answers: [
      '$_SESSION',
      '$_GET',
      '$_SERVER',
      '$GLOBALS'
    ],
    correct: 2
  },
  {
    question: 'Cách đúng để cộng 1 vào variable $count là gì?',
    answers: [
      '$count++;',
      '++count',
      'count++;',
      '$count =+1'
    ],
    correct: 0
  },
  {
    question: 'Một cách đúng để thêm comment trong PHP là gì?',
    answers: [
      '/*...*/',
      '*\\...\\*',
      '<comment>...</comment>',
      '<!--...-->'
    ],
    correct: 0
  },
  {
    question: 'PHP có thể chạy trên Microsoft Windows IIS (Internet Information Server).',
    answers: [
      'Đúng',
      'Sai'
    ],
    correct: 0
  },
  {
    question: 'Các functions die() và exit() làm chính xác cùng một việc.',
    answers: [
      'Sai',
      'Đúng'
    ],
    correct: 1
  },
  {
    question: 'Variable nào dưới đây có tên không hợp lệ?',
    answers: [
      '$myVar',
      '$my-Var',
      '$my_Var'
    ],
    correct: 1
  },
  {
    question: 'Làm thế nào để tạo cookie trong PHP?',
    answers: [
      'setcookie()',
      'createcookie',
      'makecookie()'
    ],
    correct: 0
  },
  {
    question: 'Trong PHP, cách duy nhất để output text là dùng echo.',
    answers: [
      'Đúng',
      'Sai'
    ],
    correct: 1
  },
  {
    question: 'Làm thế nào để tạo array trong PHP?',
    answers: [
      '$cars = array("Volvo", "BMW", "Toyota");',
      '$cars = array["Volvo", "BMW", "Toyota"];',
      '$cars = "Volvo", "BMW", "Toyota";'
    ],
    correct: 0
  },
  {
    question: 'if statement được dùng để execute code chỉ khi một condition được chỉ định là true.',
    answers: [
      'Đúng',
      'Sai'
    ],
    correct: 0
  },
  {
    question: 'Operator nào được dùng để kiểm tra hai values bằng nhau và cùng data type?',
    answers: [
      '==',
      '!=',
      '=',
      '==='
    ],
    correct: 3
  }
  ],
  bootstrapPractice: [
  {
    question: 'Bootstrap 3 là mobile-first.',
    answers: [
      'Đúng',
      'Sai'
    ],
    correct: 0
  },
  {
    question: 'Class nào cung cấp responsive fixed width container?',
    answers: [
      '.container',
      '.container-fixed',
      '.container-fluid'
    ],
    correct: 0
  },
  {
    question: 'Class nào cung cấp full width container, trải rộng toàn bộ width của viewport?',
    answers: [
      '.container-fluid',
      '.container-fixed',
      '.container'
    ],
    correct: 0
  },
  {
    question: 'Bootstrap grid system dựa trên bao nhiêu columns?',
    answers: [
      '12',
      '6',
      '9',
      '3'
    ],
    correct: 0
  },
  {
    question: 'Class nào thêm zebra-stripes cho table?',
    answers: [
      '.table-striped',
      '.even and .odd',
      '.table-zebra',
      '.table-bordered'
    ],
    correct: 0
  },
  {
    question: 'Class nào tạo shape image thành circle?',
    answers: [
      '.img-rounded',
      '.img-thumbnail',
      '.img-circle',
      '.img-round'
    ],
    correct: 2
  },
  {
    question: 'Class nào được dùng để tạo big box nhằm thu hút extra attention?',
    answers: [
      '.jumbotron',
      '.container',
      '.bigbox'
    ],
    correct: 0
  },
  {
    question: 'Button class nào được dùng để tạo large button?',
    answers: [
      '.btn-lg',
      '.btn-xl',
      '.btn-large',
      '.btn-l'
    ],
    correct: 0
  },
  {
    question: 'Class nào được dùng để tạo button group?',
    answers: [
      '.btn-group',
      '.button-group',
      '.group-button',
      '.group-btn'
    ],
    correct: 0
  },
  {
    question: 'Làm thế nào để chèn search icon?',
    answers: [
      '<span class="glyph glyph-search"></span>',
      '<span class="glyphicon glyphicon-search"></span>',
      '<span class="glyphicon-search"></span>',
      '<span class="glyphicon search"></span>'
    ],
    correct: 1
  },
  {
    question: 'Class nào được dùng để tạo badge?',
    answers: [
      '.badge',
      '.label',
      '.flag',
      '.tag'
    ],
    correct: 0
  },
  {
    question: 'Class nào được dùng để tạo basic pagination?',
    answers: [
      '.pagination',
      '.pages',
      '.navigation',
      '.page'
    ],
    correct: 0
  },
  {
    question: 'Class nào được dùng để tạo basic list group?',
    answers: [
      '.group-list',
      '.list-group',
      '.grouped-list'
    ],
    correct: 1
  },
  {
    question: 'Class nào thêm heading vào panel?',
    answers: [
      '.panel-heading',
      '.panel-header',
      '.panel-footer',
      '.panel-head'
    ],
    correct: 0
  },
  {
    question: 'Class nào biểu thị dropdown menu?',
    answers: [
      '.select',
      '.dropdown',
      '.dropdown-list'
    ],
    correct: 1
  },
  {
    question: 'Một standard navigation tab được tạo bằng:',
    answers: [
      '<ul class="nav nav-navbar">',
      '<ul class="nav nav-tabs">',
      '<ul class="navigation-tabs">',
      '<ul class="nav tabs">'
    ],
    correct: 1
  },
  {
    question: 'Một standard navigation bar được tạo bằng:',
    answers: [
      '<nav class="nav navbar">',
      '<nav class="navbar default-navbar">',
      '<nav class="navbar navbar-default">',
      '<nav class="navigationbar navbar-default">'
    ],
    correct: 2
  },
  {
    question: 'Class nào được dùng để tạo black navigation bar?',
    answers: [
      '.navbar-dark',
      '.navbar-inverse',
      '.navbar-default',
      '.navbar-black'
    ],
    correct: 1
  },
  {
    question: 'Plugin nào được dùng để cycle through elements, giống như slideshow?',
    answers: [
      'Carousel',
      'Orbit',
      'Scrollspy',
      'Slideshow'
    ],
    correct: 0
  },
  {
    question: 'Plugin nào được dùng để tạo modal window?',
    answers: [
      'Popup',
      'Dialog Box',
      'Window',
      'Modal'
    ],
    correct: 3
  },
  {
    question: 'Plugin nào được dùng để tạo tooltip?',
    answers: [
      'Popup',
      'Modal',
      'Tooltip',
      'Dialog Box'
    ],
    correct: 2
  },
  {
    question: 'Contextual class nào biểu thị successful hoặc positive action?',
    answers: [
      '.text-success',
      '.text-info',
      '.text-warning',
      '.text-primary'
    ],
    correct: 0
  },
  {
    question: 'Contextual class nào biểu thị dangerous hoặc potentially negative action?',
    answers: [
      '.text-danger',
      '.text-info',
      '.text-primary',
      '.text-warning'
    ],
    correct: 0
  },
  {
    question: 'Class nào biểu thị uppercased text?',
    answers: [
      '.text-capitalize',
      '.text-uppercase',
      '.ucase',
      '.uppercase'
    ],
    correct: 1
  },
  {
    question: 'Bootstrap grid system hoạt động trên nhiều devices.',
    answers: [
      'Đúng',
      'Sai'
    ],
    correct: 0
  },
  {
    question: 'Contextual class nào được dùng để tạo orange text color?',
    answers: [
      '.txt-orange',
      '.bg-warning',
      '.txt-warning',
      '.text-warning'
    ],
    correct: 3
  },
  {
    question: 'Class nào được dùng để tạo loader?',
    answers: [
      '.spinner-loader',
      '.spinner',
      '.loader',
      '.spinner-border'
    ],
    correct: 3
  },
  {
    question: 'Class nào thêm heading vào card?',
    answers: [
      '.card-heading',
      '.card-head',
      '.card-header',
      '.card-footer'
    ],
    correct: 2
  },
  {
    question: 'Class nào được dùng để tạo vertical navigation bar?',
    answers: [
      '.navbar navbar-vertical',
      '.navbar',
      '.navbar-inverse',
      '.navbar-vertical'
    ],
    correct: 1
  },
  {
    question: 'Những classes nào có thể kết hợp để tạo custom checkbox?',
    answers: [
      'custom-check custom-checkbox',
      'checkbox control',
      'custom-control custom-checkbox'
    ],
    correct: 2
  },
  {
    question: 'Attribute nào được dùng để tạo tooltip?',
    answers: [
      'data-toggle="modal"',
      'data-toggle="collapse"',
      'data-toggle="popup"',
      'data-toggle="tooltip"'
    ],
    correct: 3
  },
  {
    question: 'Trong Bootstrap 5, class nào tạo shape image thành circle?',
    answers: [
      '.rounded-circle',
      '.img-round',
      '.img-rounded',
      '.img-circle'
    ],
    correct: 0
  },
  {
    question: 'Trong Bootstrap 5, class nào được dùng để tạo big box nhằm thu hút extra attention?',
    answers: [
      '.jumbotron',
      '.bigbox',
      '.container',
      'Không có class như vậy'
    ],
    correct: 3
  },
  {
    question: 'Contextual background class nào biểu thị successful hoặc positive action?',
    answers: [
      '.bg-success',
      '.bg-warning',
      '.bg-info',
      '.bg-primary'
    ],
    correct: 0
  },
  {
    question: 'Contextual background class nào biểu thị dangerous hoặc potentially negative action?',
    answers: [
      '.bg-danger',
      '.bg-primary',
      '.bg-info',
      '.bg-dark'
    ],
    correct: 0
  },
  {
    question: 'Trong Bootstrap 5, attribute nào được dùng để tạo tooltip?',
    answers: [
      'data-bs-toggle="tooltip"',
      'data-bs-toggle="collapse"',
      'data-bs-toggle="popup"',
      'data-bs-toggle="modal"'
    ],
    correct: 0
  },
  {
    question: 'Trong Bootstrap 4/5, một standard navigation bar được tạo bằng:',
    answers: [
      '<nav class="navbar navbar-expand-sm">',
      '<nav class="navbar navbar-default">',
      '<nav class="navigationbar navbar-default">',
      '<nav class="nav navbar">'
    ],
    correct: 0
  },
  {
    question: 'Class nào được dùng để style close icon?',
    answers: [
      '.btn-close',
      '.x',
      '.close-icon',
      '.btn-x'
    ],
    correct: 0
  },
  {
    question: 'Trong Bootstrap 4, class nào có thể dùng để float một element sang bên phải của page?',
    answers: [
      '.float-right',
      '.float-r',
      '.float-start',
      '.float-end'
    ],
    correct: 0
  }
  ],
  jqueryPractice: [
  {
    question: 'Điều nào sau đây là đúng?',
    answers: [
      'jQuery là một JavaScript Library',
      'jQuery là một JSON Library'
    ],
    correct: 0
  },
  {
    question: 'jQuery sử dụng CSS selectors để select elements?',
    answers: [
      'Đúng',
      'Sai'
    ],
    correct: 0
  },
  {
    question: 'jQuery dùng sign nào làm shortcut cho jQuery?',
    answers: [
      'Dấu %',
      'Dấu ?',
      'Dấu $'
    ],
    correct: 2
  },
  {
    question: 'Nhìn selector sau: $("div"). Nó select gì?',
    answers: [
      'Tất cả div elements',
      'Div element đầu tiên'
    ],
    correct: 0
  },
  {
    question: 'jQuery là library cho client scripting hay server scripting?',
    answers: [
      'Client scripting',
      'Server scripting'
    ],
    correct: 0
  },
  {
    question: 'Có thể dùng jQuery cùng với AJAX không?',
    answers: [
      'Không',
      'Có'
    ],
    correct: 1
  },
  {
    question: 'jQuery html() method hoạt động cho cả HTML và XML documents.',
    answers: [
      'Đúng',
      'Sai'
    ],
    correct: 1
  },
  {
    question: 'jQuery code đúng để đặt background color của tất cả p elements thành red là gì?',
    answers: [
      '$("p").style("background-color","red");',
      '$("p").layout("background-color","red");',
      '$("p").manipulate("background-color","red");',
      '$("p").css("background-color","red");'
    ],
    correct: 3
  },
  {
    question: 'Với jQuery, selector $("div.intro") select gì?',
    answers: [
      'Tất cả div elements có class="intro"',
      'Div element đầu tiên có id="intro"',
      'Tất cả div elements có id="intro"',
      'Div element đầu tiên có class="intro"'
    ],
    correct: 0
  },
  {
    question: 'jQuery method nào được dùng để hide selected elements?',
    answers: [
      'hidden()',
      'hide()',
      'display(none)',
      'visible(false)'
    ],
    correct: 1
  },
  {
    question: 'jQuery method nào được dùng để set một hoặc nhiều style properties cho selected elements?',
    answers: [
      'html()',
      'css()',
      'style()'
    ],
    correct: 1
  },
  {
    question: 'jQuery method nào được dùng để thực hiện asynchronous HTTP request?',
    answers: [
      'jQuery.ajaxSetup()',
      'jQuery.ajaxAsync()',
      'jQuery.ajax()'
    ],
    correct: 2
  },
  {
    question: 'jQuery code đúng để làm tất cả div elements cao 100 pixels là gì?',
    answers: [
      '$("div").height="100"',
      '$("div").height(100)',
      '$("div").yPos(100)'
    ],
    correct: 1
  },
  {
    question: 'Statement nào đúng?',
    answers: [
      'Để dùng jQuery, bạn có thể tham chiếu tới hosted jQuery library tại Google',
      'Để dùng jQuery, bạn không cần làm gì cả. Hầu hết browsers đều có sẵn jQuery library trong browser',
      'Để dùng jQuery, bạn phải mua jQuery library tại www.jquery.com'
    ],
    correct: 0
  },
  {
    question: 'jQuery được viết bằng scripting language nào?',
    answers: [
      'C#',
      'VBScript',
      'C++',
      'JavaScript'
    ],
    correct: 3
  },
  {
    question: 'jQuery function nào được dùng để ngăn code chạy trước khi document load xong?',
    answers: [
      '$(document).load()',
      '$(body).onload()',
      '$(document).ready()'
    ],
    correct: 2
  },
  {
    question: 'jQuery method nào nên được dùng để xử lý name conflicts?',
    answers: [
      'nameConflict()',
      'noNameConflict()',
      'conflict()',
      'noConflict()'
    ],
    correct: 3
  },
  {
    question: 'jQuery method nào được dùng để switch giữa adding/removing một hoặc nhiều classes từ selected elements?',
    answers: [
      'switch()',
      'switchClass()',
      'altClass()',
      'toggleClass()'
    ],
    correct: 3
  },
  {
    question: 'Nhìn selector sau: $("div p"). Nó select gì?',
    answers: [
      'p element đầu tiên bên trong div element',
      'Tất cả p elements bên trong div element',
      'Tất cả div elements có p element'
    ],
    correct: 1
  },
  {
    question: 'jQuery có phải W3C standard không?',
    answers: [
      'Không',
      'Có'
    ],
    correct: 0
  },
  {
    question: 'Nhìn selector sau: $("p#intro"). Nó select gì?',
    answers: [
      'p element có id="intro"',
      'Tất cả p elements có class="intro"'
    ],
    correct: 0
  },
  {
    question: 'jQuery method nào được dùng để remove selected elements?',
    answers: [
      'Cả hai methods đều có thể dùng',
      'remove()',
      'detach()'
    ],
    correct: 0
  },
  {
    question: 'Nhìn selector sau: $(":disabled"). Nó select gì?',
    answers: [
      'Tất cả disabled input elements',
      'Tất cả hidden elements',
      'Tất cả elements chứa text "disabled"',
      'Tất cả elements không chứa text "disabled"'
    ],
    correct: 0
  },
  {
    question: 'jQuery method nào return direct parent element của selected element?',
    answers: [
      'parent()',
      'ancestors()',
      'parents()',
      'ancestor()'
    ],
    correct: 0
  },
  {
    question: 'jQuery animate() method có thể dùng để animate BẤT KỲ CSS property nào không?',
    answers: [
      'Tất cả properties ngoại trừ shorthand properties',
      'Có',
      'Chỉ các properties chứa numeric values'
    ],
    correct: 2
  }
  ]
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

questionBank.totalReview = practiceQuestionBankIds.flatMap(function(subjectId) {
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
    id: 'totalReview',
    name: 'Tổng ôn',
    shortName: 'ALL',
    description: 'Trộn tất cả câu hỏi từ các bộ Practice',
    questionCount: questionBank.totalReview.length
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
