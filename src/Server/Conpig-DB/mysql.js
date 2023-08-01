// MySQL DB 불러오기 - Node문법인 require()사용
//                              └import역할을 한다
const mysql = require('mysql')

// MySQL을 연결하기위해 createPool사용하요 계정을 연동한다
const mydb = mysql.createPool({
    // 주소 이름
    host: 'localhost',
    // 사용자 이름
    user: 'root',
    // 사용자 패스워드
    password: '1234',
    // MySQL Data
    database: 'movie',
    // MySQL Port
    port:3306
})

// MySQl 묘듈화 시켜서 다음 server.js사용
module.exports = mydb