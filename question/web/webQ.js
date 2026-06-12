const webQ = [
  {
    question: '[JavaScript] Làm thế nào để viết chữ "Xin chào" trong box cảnh báo?',
    answers: [
      'msgBox("Xin chào");',
      'msg("Xin chào");',
      'alertBox("Xin chào");',
      'alert("Xin chào");'
    ],
    correct: 3,
    explanation: ''
  },
  {
    question: 'Phương thức jQuery nào được dùng để thực hiện yêu cầu HTTP không đồng bộ?',
    answers: [
      'jQuery.ajax()',
      'jQuery.ajaxAsync()',
      'jQuery.ajaxSetup()'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Với SQL, chọn mọi bản ghi từ bảng "DanhSach" nếu giá trị của cột "Ten" là "Nam" như thế nào?',
    answers: [
      "SELECT [all] FROM DanhSach WHERE Ten='Nam'",
      "SELECT * FROM DanhSach WHERE Ten<>'Nam'",
      "SELECT * FROM DanhSach WHERE Ten='Nam'",
      "SELECT [all] FROM DanhSach WHERE Ten LIKE 'Nam'"
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'Mã máy chủ PHP phải đặt trong cặp ký hiệu nào?',
    answers: [
      '<?php>...</?>',
      '<?php...?>',
      '<script>...<\/script>',
      '<&>...</&>'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Trong HTML, thuộc tính nào được dùng để xác định trường nhập bắt buộc phải điền?',
    answers: [
      'formvalidate',
      'required',
      'validate',
      'placeholder'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Hàm jQuery nào được dùng để tránh mã khởi chạy trước khi tài liệu được tải xong?',
    answers: [
      '$(document).ready()',
      '$(document).load()',
      '$(body).onload()'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'PHP cho phép ta gửi email trực tiếp từ script.',
    answers: [
      'Sai',
      'Đúng'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Phần tử HTML nào thêm màu nền?',
    answers: [
      '<background>yellow</background>',
      '<body style="background-color:yellow;">',
      '<body bg="yellow">'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: '[JavaScript] Sự kiện nào xảy ra khi người sử dụng kích chuột vào một phần tử HTML?',
    answers: [
      'onclick',
      'onmouseclick',
      'onmouseover',
      'onchange'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'XML instance là gì?',
    answers: [
      'Một phần tử XML',
      'Một thuộc tính XML',
      'Một tài liệu XML'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'Phần tử HTML nào tạo ra một siêu liên kết / hyperlink?',
    answers: [
      '<a href="http://www.w3schools.com">W3Schools</a>',
      '<a name="http://www.w3schools.com">W3Schools.com</a>',
      '<a url="http://www.w3schools.com">W3Schools.com</a>',
      '<a>http://www.w3schools.com</a>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Với SQL, làm thế nào để trả lại mọi bản ghi từ bảng "DanhSach" được sắp xếp giảm dần theo "Ten"?',
    answers: [
      'SELECT * FROM DanhSach ORDER BY Ten DESC',
      "SELECT * FROM DanhSach SORT 'Ten' DESC",
      "SELECT * FROM DanhSach SORT BY 'Ten' DESC",
      'SELECT * FROM DanhSach ORDER Ten DESC'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4/5, lớp nào thêm màu khác nhau (zebra-stripes) cho các dòng chẵn, lẻ?',
    answers: [
      '.table-striped',
      '.even and .odd',
      '.table-bordered',
      '.table-zebra'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Lệnh SQL nào được dùng để trả lại chỉ các giá trị khác nhau?',
    answers: [
      'SELECT UNIQUE',
      'SELECT DIFFERENT',
      'SELECT DISTINCT'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'Đâu là tên đúng của một phần tử XML?',
    answers: [
      '<xmldocument>',
      '<Name>',
      '<7eleven>',
      '<phone number>'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Tuyên bố nào đúng về việc sử dụng jQuery?',
    answers: [
      'Để sử dụng jQuery, ta phải tham chiếu đến thư viện jQuery ở máy chủ Google',
      'Để sử dụng jQuery, ta không phải làm gì cả. Hầu hết các trình duyệt đều có sẵn thư viện jQuery',
      'Để sử dụng jQuery, ta phải mua thư viện jQuery này tại trang www.jquery.com'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Cách viết một mảng JavaScript?',
    answers: [
      'var colors = (1:"red", 2:"green", 3:"blue")',
      'var colors = ["red", "green", "blue"]',
      'var colors = "red", "green", "blue"',
      'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Làm thế nào để thêm màu nền cho mọi phần tử <h1>?',
    answers: [
      'h1 {background-color:#FFFFFF;}',
      'h1.all {background-color:#FFFFFF;}',
      'all.h1 {background-color:#FFFFFF;}'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Đặc tính CSS nào điều chỉnh kích thước chữ?',
    answers: [
      'text-style',
      'text-size',
      'font-style',
      'font-size'
    ],
    correct: 3,
    explanation: ''
  },
  {
    question: 'Những phần tử nào đều thuộc phần tử <table>?',
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
    question: 'Plugin nào được dùng để quay vòng các phần tử như trình chiếu slide?',
    answers: [
      'Carousel',
      'Scrollspy',
      'Orbit',
      'Slideshow'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Cách thức để tạo ra một mảng trong PHP?',
    answers: [
      '$cars = array["Volvo", "BMW", "Toyota"];',
      '$cars = "Volvo", "BMW", "Toyota";',
      '$cars = array("Volvo", "BMW", "Toyota");'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'Câu lệnh nào khai báo phiên bản XML?',
    answers: [
      '<?xml version="1.0"?>',
      '<xml version="1.0" />',
      '<?xml version="1.0" />'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Hiển thị đường bao: top = 10px, bottom = 5px, left = 20px, right = 1px như thế nào?',
    answers: [
      'border-width:10px 20px 5px 1px;',
      'border-width:10px 1px 5px 20px;',
      'border-width:5px 20px 10px 1px;',
      'border-width:10px 5px 20px 1px;'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Câu lệnh JavaScript nào dùng để mở một cửa sổ mới có tên là "w2"?',
    answers: [
      'w2 = window.open("http://www.w3schools.com");',
      'w2 = window.new("http://www.w3schools.com");'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Lớp được dùng để tạo ra một nhóm các nút bấm?',
    answers: [
      '.btn-group',
      '.button-group',
      '.group-btn',
      '.group-button'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Với SQL, chọn mọi bản ghi từ bảng "DanhSach" khi "Ten" là "Nam" và họ là "Nguyễn" như thế nào?',
    answers: [
      "SELECT Ten='Nam', Ho='Nguyễn' FROM DanhSach",
      "SELECT * FROM DanhSach WHERE Ten='Nam' AND Ho='Nguyễn'",
      "SELECT * FROM DanhSach WHERE Ten<>'Nam' AND Ho<>'Nguyễn'"
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Lệnh $("div") chọn phần tử nào?',
    answers: [
      'Mọi phần tử div',
      'Phần tử div đầu tiên'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4/5, lớp nào tạo ra phần chứa nội dung có độ rộng cố định thích nghi?',
    answers: [
      '.container-fixed',
      '.container',
      '.container-fluid'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Đâu không phải là tên đúng của một phần tử XML?',
    answers: [
      'Cả 3 tên đều sai',
      '<h1>',
      '<1dollar>',
      '<Note>'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'Làm thế nào để hiển thị chữ "Xin chào" trong PHP?',
    answers: [
      '"Xin chào";',
      'Document.Write("Xin chào");',
      'echo "Xin chào";'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'Làm thế nào để thể hiện danh sách có đánh số?',
    answers: [
      'ul>',
      '<list>',
      '<dl>',
      '<ol>'
    ],
    correct: 3,
    explanation: ''
  },
  {
    question: '[JavaScript] Làm thế nào để gọi một hàm có tên là "myFunction"?',
    answers: [
      'call myFunction()',
      'call function myFunction()',
      'myFunction()'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3, lớp Bootstrap nào thêm heading vào panel?',
    answers: [
      '.panel-header',
      '.panel-heading',
      '.panel-footer',
      '.panel-head'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Thẻ HTML trỏ đến một style sheet ngoài đúng?',
    answers: [
      '<link rel="stylesheet" type="text/css" href="mystyle.css">',
      '<style src="mystyle.css">',
      '<stylesheet>mystyle.css</stylesheet>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Đoạn mã jQuery nào dùng để đặt màu nền của mọi phần tử p là màu đỏ?',
    answers: [
      '$("p").css("background-color","red");',
      '$("p").style("background-color","red");',
      '$("p").layout("background-color","red");',
      '$("p").manipulate("background-color","red");'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: '[PHP] Cách nào đúng để sử dụng include file "time.inc"?',
    answers: [
      '<?php include:"time.inc"; ?>',
      '<?php include file="time.inc"; ?>',
      '<!-- include file="time.inc" -->',
      '<?php include "time.inc"; ?>'
    ],
    correct: 3,
    explanation: ''
  },
  {
    question: 'Tuyên bố nào là đúng về XML?',
    answers: [
      'Mọi phần tử XML phải đóng đúng trật tự',
      'Mọi phần tử XML phải là chữ thường',
      'Tất cả các tuyên bố đều đúng',
      'Mọi tài liệu XML phải có DTD'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4, lớp Bootstrap nào tạo ra một box thu hút sự chú ý?',
    answers: [
      '.jumbotron',
      '.bigbox',
      '.container'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'JavaScript nằm trong phần tử HTML nào?',
    answers: [
      '<script>',
      '<js>',
      '<javascript>',
      '<scripting>'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Câu lệnh CSS nào đúng?',
    answers: [
      'body {color: black;}',
      'body:color=black;',
      '{body;color:black;}',
      '{body:color=black;}'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: '[PHP] Làm thế nào để lấy thông tin từ một form đã nhập sử dụng phương pháp GET?',
    answers: [
      'Request.Form;',
      'Request.QueryString;',
      '$_GET[];'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'XML là viết tắt của chữ nào?',
    answers: [
      'eXtensible Markup Language',
      'X-Markup Language',
      'Example Markup Language',
      'eXtra Modern Link'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'jQuery sử dụng các selector CSS để chọn phần tử?',
    answers: [
      'Đúng',
      'Sai'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Tổ chức nào tạo lập tiêu chuẩn web?',
    answers: [
      'Mozilla',
      'Microsoft',
      'The World Wide Web Consortium',
      'Google'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'Với SQL, chọn mọi bản ghi từ bảng "DanhSach" khi "Ten" nằm trong khoảng theo bảng chữ cái từ "Nam" đến "Trung" như thế nào?',
    answers: [
      "SELECT Ten>'Nam' AND Ten<'Trung' FROM DanhSach",
      "SELECT * FROM DanhSach WHERE Ten BETWEEN 'Nam' AND 'Trung'",
      "SELECT * FROM DanhSach WHERE Ten>'Nam' AND Ten<'Trung'"
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'CSS là chữ viết tắt của:',
    answers: [
      'Creative Style Sheets',
      'Computer Style Sheets',
      'Colorful Style Sheets',
      'Cascading Style Sheets'
    ],
    correct: 3,
    explanation: ''
  },
  {
    question: 'Các biến trong PHP bắt đầu bằng ký tự nào?',
    answers: [
      '!',
      '$',
      '&'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Với XML, tuyên bố nào là đúng?',
    answers: [
      'Các thuộc tính phải xuất hiện theo trật tự xác định',
      'Không có tuyên bố nào đúng',
      'Các thuộc tính luôn phải xuất hiện'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Lệnh SQL nào được dùng để tạo ra một bảng trong một cơ sở dữ liệu?',
    answers: [
      'CREATE DATABASE TABLE',
      'CREATE DB',
      'CREATE TABLE',
      'CREATE DATABASE TAB'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'Lệnh SQL nào được dùng để chèn dữ liệu vào một cơ sở dữ liệu?',
    answers: [
      'INSERT NEW',
      'INSERT INTO',
      'ADD NEW',
      'ADD RECORD'
    ],
    correct: 1,
    explanation: ''
  }
  ];


