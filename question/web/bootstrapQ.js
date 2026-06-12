const bootstrapQ = [
  {
    question: 'Bootstrap 3 là mobile-first.',
    answers: [
      'Đúng',
      'Sai'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4/5, class nào cung cấp responsive fixed width container?',
    answers: [
      '.container',
      '.container-fixed',
      '.container-fluid'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4/5, class nào cung cấp full width container, trải rộng toàn bộ width của viewport?',
    answers: [
      '.container-fluid',
      '.container-fixed',
      '.container'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Bootstrap grid system dựa trên bao nhiêu columns?',
    answers: [
      '12',
      '6',
      '9',
      '3'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4/5, class nào thêm zebra-stripes cho table?',
    answers: [
      '.table-striped',
      '.even and .odd',
      '.table-zebra',
      '.table-bordered'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3, class nào tạo shape image thành circle?',
    answers: [
      '.img-rounded',
      '.img-thumbnail',
      '.img-circle',
      '.img-round'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4, class nào được dùng để tạo big box nhằm thu hút extra attention?',
    answers: [
      '.jumbotron',
      '.container',
      '.bigbox'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4/5, button class nào được dùng để tạo large button?',
    answers: [
      '.btn-lg',
      '.btn-xl',
      '.btn-large',
      '.btn-l'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4/5, class nào được dùng để tạo button group?',
    answers: [
      '.btn-group',
      '.button-group',
      '.group-button',
      '.group-btn'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3, làm thế nào để chèn search icon?',
    answers: [
      '<span class="glyph glyph-search"></span>',
      '<span class="glyphicon glyphicon-search"></span>',
      '<span class="glyphicon-search"></span>',
      '<span class="glyphicon search"></span>'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4/5, class nào được dùng để tạo badge?',
    answers: [
      '.badge',
      '.label',
      '.flag',
      '.tag'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4/5, class nào được dùng để tạo basic pagination?',
    answers: [
      '.pagination',
      '.pages',
      '.navigation',
      '.page'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4/5, class nào được dùng để tạo basic list group?',
    answers: [
      '.group-list',
      '.list-group',
      '.grouped-list'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3, class nào thêm heading vào panel?',
    answers: [
      '.panel-heading',
      '.panel-header',
      '.panel-footer',
      '.panel-head'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Class nào biểu thị dropdown menu?',
    answers: [
      '.select',
      '.dropdown',
      '.dropdown-list'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4/5, một standard navigation tab được tạo bằng:',
    answers: [
      '<ul class="nav nav-navbar">',
      '<ul class="nav nav-tabs">',
      '<ul class="navigation-tabs">',
      '<ul class="nav tabs">'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3, một standard navigation bar được tạo bằng:',
    answers: [
      '<nav class="nav navbar">',
      '<nav class="navbar default-navbar">',
      '<nav class="navbar navbar-default">',
      '<nav class="navigationbar navbar-default">'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3, class nào được dùng để tạo black navigation bar?',
    answers: [
      '.navbar-dark',
      '.navbar-inverse',
      '.navbar-default',
      '.navbar-black'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4/5, plugin nào được dùng để cycle through elements, giống như slideshow?',
    answers: [
      'Carousel',
      'Orbit',
      'Scrollspy',
      'Slideshow'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4/5, plugin nào được dùng để tạo modal window?',
    answers: [
      'Popup',
      'Dialog Box',
      'Window',
      'Modal'
    ],
    correct: 3,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4, plugin nào được dùng để tạo tooltip?',
    answers: [
      'Popup',
      'Modal',
      'Tooltip',
      'Dialog Box'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4/5, contextual class nào biểu thị successful hoặc positive action?',
    answers: [
      '.text-success',
      '.text-info',
      '.text-warning',
      '.text-primary'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4/5, contextual class nào biểu thị dangerous hoặc potentially negative action?',
    answers: [
      '.text-danger',
      '.text-info',
      '.text-primary',
      '.text-warning'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4/5, class nào biểu thị uppercased text?',
    answers: [
      '.text-capitalize',
      '.text-uppercase',
      '.ucase',
      '.uppercase'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4/5, grid system hoạt động trên nhiều devices.',
    answers: [
      'Đúng',
      'Sai'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4/5, contextual class nào được dùng để tạo orange text color?',
    answers: [
      '.txt-orange',
      '.bg-warning',
      '.txt-warning',
      '.text-warning'
    ],
    correct: 3,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 5, class nào được dùng để tạo loader?',
    answers: [
      '.spinner-loader',
      '.spinner',
      '.loader',
      '.spinner-border'
    ],
    correct: 3,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 4/5, class nào thêm heading vào card?',
    answers: [
      '.card-heading',
      '.card-head',
      '.card-header',
      '.card-footer'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4/5, class nào được dùng để tạo vertical navigation bar?',
    answers: [
      '.navbar navbar-vertical',
      '.navbar',
      '.navbar-inverse',
      '.navbar-vertical'
    ],
    correct: 1,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 4, những classes nào có thể kết hợp để tạo custom checkbox?',
    answers: [
      'custom-check custom-checkbox',
      'checkbox control',
      'custom-control custom-checkbox'
    ],
    correct: 2,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 3/4, attribute nào được dùng để tạo tooltip?',
    answers: [
      'data-toggle="modal"',
      'data-toggle="collapse"',
      'data-toggle="popup"',
      'data-toggle="tooltip"'
    ],
    correct: 3,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 5, class nào tạo shape image thành circle?',
    answers: [
      '.rounded-circle',
      '.img-round',
      '.img-rounded',
      '.img-circle'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 5, class nào được dùng để tạo big box nhằm thu hút extra attention?',
    answers: [
      '.jumbotron',
      '.bigbox',
      '.container',
      'Không có class như vậy'
    ],
    correct: 3,
    explanation: ''
  },
  {
    question: 'Contextual background class nào biểu thị successful hoặc positive action?',
    answers: [
      '.bg-success',
      '.bg-warning',
      '.bg-info',
      '.bg-primary'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Contextual background class nào biểu thị dangerous hoặc potentially negative action?',
    answers: [
      '.bg-danger',
      '.bg-primary',
      '.bg-info',
      '.bg-dark'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 5, attribute nào được dùng để tạo tooltip?',
    answers: [
      'data-bs-toggle="tooltip"',
      'data-bs-toggle="collapse"',
      'data-bs-toggle="popup"',
      'data-bs-toggle="modal"'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 4/5, một standard navigation bar được tạo bằng:',
    answers: [
      '<nav class="navbar navbar-expand-sm">',
      '<nav class="navbar navbar-default">',
      '<nav class="navigationbar navbar-default">',
      '<nav class="nav navbar">'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 5, class nào được dùng để style close icon?',
    answers: [
      '.btn-close',
      '.x',
      '.close-icon',
      '.btn-x'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Trong Bootstrap 4, class nào có thể dùng để float một element sang bên phải của page?',
    answers: [
      '.float-right',
      '.float-r',
      '.float-start',
      '.float-end'
    ],
    correct: 0,
    explanation: ''
  }
  ];


