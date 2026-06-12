const jqueryQ = [
  {
    question: 'Điều nào sau đây là đúng?',
    answers: [
      'jQuery là một JavaScript Library',
      'jQuery là một JSON Library'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'jQuery sử dụng CSS selectors để select elements?',
    answers: [
      'Đúng',
      'Sai'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'jQuery dùng sign nào làm shortcut cho jQuery?',
    answers: [
      'Dấu %',
      'Dấu ?',
      'Dấu $'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'Nhìn selector sau: $("div"). Nó select gì?',
    answers: [
      'Tất cả div elements',
      'Div element đầu tiên'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'jQuery là library cho client scripting hay server scripting?',
    answers: [
      'Client scripting',
      'Server scripting'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Có thể dùng jQuery cùng với AJAX không?',
    answers: [
      'Không',
      'Có'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'jQuery html() method hoạt động cho cả HTML và XML documents.',
    answers: [
      'Đúng',
      'Sai'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'jQuery code đúng để đặt background color của tất cả p elements thành red là gì?',
    answers: [
      '$("p").style("background-color","red");',
      '$("p").layout("background-color","red");',
      '$("p").manipulate("background-color","red");',
      '$("p").css("background-color","red");'
    ],
    correct: 3,
    explanation: ''
  },
  {
    question: 'Với jQuery, selector $("div.intro") select gì?',
    answers: [
      'Tất cả div elements có class="intro"',
      'Div element đầu tiên có id="intro"',
      'Tất cả div elements có id="intro"',
      'Div element đầu tiên có class="intro"'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'jQuery method nào được dùng để hide selected elements?',
    answers: [
      'hidden()',
      'hide()',
      'display(none)',
      'visible(false)'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'jQuery method nào được dùng để set một hoặc nhiều style properties cho selected elements?',
    answers: [
      'html()',
      'css()',
      'style()'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'jQuery method nào được dùng để thực hiện asynchronous HTTP request?',
    answers: [
      'jQuery.ajaxSetup()',
      'jQuery.ajaxAsync()',
      'jQuery.ajax()'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'jQuery code đúng để làm tất cả div elements cao 100 pixels là gì?',
    answers: [
      '$("div").height="100"',
      '$("div").height(100)',
      '$("div").yPos(100)'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Statement nào đúng?',
    answers: [
      'Để dùng jQuery, bạn có thể tham chiếu tới hosted jQuery library tại Google',
      'Để dùng jQuery, bạn không cần làm gì cả. Hầu hết browsers đều có sẵn jQuery library trong browser',
      'Để dùng jQuery, bạn phải mua jQuery library tại www.jquery.com'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'jQuery được viết bằng scripting language nào?',
    answers: [
      'C#',
      'VBScript',
      'C++',
      'JavaScript'
    ],
    correct: 3,
    explanation: ''
  },
  {
    question: 'jQuery function nào được dùng để ngăn code chạy trước khi document load xong?',
    answers: [
      '$(document).load()',
      '$(body).onload()',
      '$(document).ready()'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'jQuery method nào nên được dùng để xử lý name conflicts?',
    answers: [
      'nameConflict()',
      'noNameConflict()',
      'conflict()',
      'noConflict()'
    ],
    correct: 3,
    explanation: ''
  },
  {
    question: 'jQuery method nào được dùng để switch giữa adding/removing một hoặc nhiều classes từ selected elements?',
    answers: [
      'switch()',
      'switchClass()',
      'altClass()',
      'toggleClass()'
    ],
    correct: 3,
    explanation: ''
  },
  {
    question: 'Nhìn selector sau: $("div p"). Nó select gì?',
    answers: [
      'p element đầu tiên bên trong div element',
      'Tất cả p elements bên trong div element',
      'Tất cả div elements có p element'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'jQuery có phải W3C standard không?',
    answers: [
      'Không',
      'Có'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Nhìn selector sau: $("p#intro"). Nó select gì?',
    answers: [
      'p element có id="intro"',
      'Tất cả p elements có class="intro"'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'jQuery method nào được dùng để remove selected elements?',
    answers: [
      'Cả hai methods đều có thể dùng',
      'remove()',
      'detach()'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Nhìn selector sau: $(":disabled"). Nó select gì?',
    answers: [
      'Tất cả disabled input elements',
      'Tất cả hidden elements',
      'Tất cả elements chứa text "disabled"',
      'Tất cả elements không chứa text "disabled"'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'jQuery method nào return direct parent element của selected element?',
    answers: [
      'parent()',
      'ancestors()',
      'parents()',
      'ancestor()'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'jQuery animate() method có thể dùng để animate BẤT KỲ CSS property nào không?',
    answers: [
      'Tất cả properties ngoại trừ shorthand properties',
      'Có',
      'Chỉ các properties chứa numeric values'
    ],
    correct: 2,
    explanation: ''
  }
  ];


