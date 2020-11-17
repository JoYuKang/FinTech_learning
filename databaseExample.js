var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',  //서버의 주소
  user     : 'root', // 계정 이름
  password : 'whdbrkd1!', //계정 비밀번호
  database : 'fintech1116' // 데이터베이스 이름
});
 
connection.connect();
 
connection.query('SELECT * from fintech1116.user', function (error, results, fields) {
  if (error) throw error;
 // console.log('The solution is: ', results[0].solution);
  console.log(results);
});
 
connection.end();
