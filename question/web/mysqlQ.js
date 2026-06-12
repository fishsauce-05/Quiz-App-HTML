const mysqlQ = [
  {
    question: 'MySQL là gì?',
    answers: [
      'Tất cả các lựa chọn đều đúng',
      'Cross-platform, open-source và miễn phí',
      'Một relational database management system',
      'Được phát triển, phân phối và hỗ trợ bởi Oracle Corporation'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'MySQL statement nào được dùng để select data từ database?',
    answers: [
      'SELECT',
      'EXTRACT',
      'OPEN',
      'GET'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'MySQL statement nào được dùng để update data trong database?',
    answers: [
      'UPDATE',
      'MODIFY',
      'INSERT',
      'SAVE'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'MySQL statement nào được dùng để delete data từ database?',
    answers: [
      'DELETE',
      'REMOVE',
      'COLLAPSE'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'MySQL statement nào được dùng để insert data mới vào database?',
    answers: [
      'INSERT INTO',
      'INSERT NEW',
      'ADD RECORD',
      'ADD NEW'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Với MySQL, làm thế nào để select một column tên là "FirstName" từ table tên là "Persons"?',
    answers: [
      'SELECT FirstName FROM Persons',
      'SELECT Persons.FirstName',
      'EXTRACT FirstName FROM Persons'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Với MySQL, làm thế nào để select tất cả columns từ table tên là "Persons"?',
    answers: [
      'SELECT * FROM Persons',
      'SELECT [all] FROM Persons',
      'SELECT Persons',
      'SELECT *.Persons'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Với MySQL, làm thế nào để select tất cả records từ table "Persons" khi value của column "FirstName" là "Peter"?',
    answers: [
      "SELECT * FROM Persons WHERE FirstName='Peter'",
      "SELECT * FROM Persons WHERE FirstName<>'Peter'",
      "SELECT [all] FROM Persons WHERE FirstName LIKE 'Peter'",
      "SELECT [all] FROM Persons WHERE FirstName='Peter'"
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Với MySQL, làm thế nào để select tất cả records từ table "Persons" khi value của column "FirstName" bắt đầu bằng "a"?',
    answers: [
      "SELECT * FROM Persons WHERE FirstName LIKE 'a%'",
      "SELECT * FROM Persons WHERE FirstName='%a%'",
      "SELECT * FROM Persons WHERE FirstName LIKE '%a'",
      "SELECT * FROM Persons WHERE FirstName='a'"
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'OR operator hiển thị một record nếu BẤT KỲ condition nào được liệt kê là true. AND operator hiển thị một record nếu TẤT CẢ conditions được liệt kê là true.',
    answers: [
      'Đúng',
      'Sai'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Với MySQL, làm thế nào để select tất cả records từ table "Persons" khi "FirstName" là "Peter" và "LastName" là "Jackson"?',
    answers: [
      "SELECT * FROM Persons WHERE FirstName='Peter' AND LastName='Jackson'",
      "SELECT * FROM Persons WHERE FirstName<>'Peter' AND LastName<>'Jackson'",
      "SELECT FirstName='Peter', LastName='Jackson' FROM Persons"
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Với MySQL, làm thế nào để select tất cả records từ table "Persons" khi "LastName" nằm trong khoảng theo thứ tự alphabet từ "Hansen" đến "Pettersen", bao gồm cả hai giá trị?',
    answers: [
      "SELECT * FROM Persons WHERE LastName BETWEEN 'Hansen' AND 'Pettersen'",
      "SELECT LastName>'Hansen' AND LastName<'Pettersen' FROM Persons",
      "SELECT * FROM Persons WHERE LastName>'Hansen' AND LastName<'Pettersen'"
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'MySQL statement nào được dùng để return chỉ các values khác nhau?',
    answers: [
      'SELECT DISTINCT',
      'SELECT DIFFERENT',
      'SELECT UNIQUE'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'MySQL keyword nào được dùng để sort result-set?',
    answers: [
      'ORDER BY',
      'SORT',
      'SORT BY',
      'ORDER'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Với MySQL, làm thế nào để return tất cả records từ table "Persons" được sort descending theo "FirstName"?',
    answers: [
      'SELECT * FROM Persons ORDER BY FirstName DESC',
      "SELECT * FROM Persons SORT BY 'FirstName' DESC",
      "SELECT * FROM Persons SORT 'FirstName' DESC",
      'SELECT * FROM Persons ORDER FirstName DESC'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Với MySQL, làm thế nào để insert một record mới vào table "Persons"?',
    answers: [
      "INSERT INTO Persons VALUES ('Jimmy', 'Jackson')",
      "INSERT VALUES ('Jimmy', 'Jackson') INTO Persons",
      "INSERT ('Jimmy', 'Jackson') INTO Persons"
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Với MySQL, làm thế nào để insert "Olsen" làm "LastName" trong table "Persons"?',
    answers: [
      "INSERT INTO Persons (LastName) VALUES ('Olsen')",
      "INSERT INTO Persons ('Olsen') INTO LastName",
      "INSERT ('Olsen') INTO Persons (LastName)"
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Làm thế nào để đổi "Hansen" thành "Nilsen" trong column "LastName" của table "Persons"?',
    answers: [
      "UPDATE Persons SET LastName='Nilsen' WHERE LastName='Hansen'",
      "MODIFY Persons SET LastName='Nilsen' WHERE LastName='Hansen'",
      "UPDATE Persons SET LastName='Hansen' INTO LastName='Nilsen'",
      "MODIFY Persons SET LastName='Hansen' INTO LastName='Nilsen"
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Với MySQL, làm thế nào để delete records khi "FirstName" là "Peter" trong table "Persons"?',
    answers: [
      "DELETE FROM Persons WHERE FirstName = 'Peter'",
      "DELETE FirstName='Peter' FROM Persons",
      "DELETE ROW FirstName='Peter' FROM Persons"
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Với MySQL, làm thế nào để return số lượng records trong table "Persons"?',
    answers: [
      'SELECT COUNT(*) FROM Persons',
      'SELECT COLUMNS(*) FROM Persons',
      'SELECT LEN(*) FROM Persons',
      'SELECT NO(*) FROM Persons'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Các kiểu joins nào được hỗ trợ trong MySQL?',
    answers: [
      'INNER JOIN, LEFT JOIN, RIGHT JOIN, CROSS JOIN',
      'INNER JOIN, OUTER JOIN, LEFT JOIN, RIGHT JOIN'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Operator nào được dùng để select values trong một range cho trước?',
    answers: [
      'BETWEEN',
      'UNION',
      'RANGE',
      'IN'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'NOT NULL constraint buộc một column không được accept NULL values.',
    answers: [
      'Đúng',
      'Sai'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: 'Operator nào được dùng để search một pattern được chỉ định trong column?',
    answers: [
      'LIKE',
      'GET',
      'FROM'
    ],
    correct: 0,
    explanation: ''
  },
  {
    question: "MySQL statement nào được dùng để create một database table tên là 'Customers'?",
    answers: [
      'CREATE TABLE Customers',
      'CREATE DATABASE TAB Customers',
      'CREATE DB Customers',
      'CREATE DATABASE TABLE Customers'
    ],
    correct: 0,
    explanation: ''
  }
  ];


