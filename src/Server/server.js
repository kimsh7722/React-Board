// express -> Node를 위한 웹 프레임워크
const express = require('express') // -> Http 통신요청에대한 핸들러 (request,Get,Post,Delete) 가져옴
const app = express()
// Port 4000으로 정한다 React->3000 / MySQL->3306 / node->4000
const PORT = process.env.PORT || 4000;
// MySQL 연동시킬 경로
const mydb = require('./Conpig-DB/mysql.js')

const bodyParser = require('body-parser')
//                          └req.body 사용이 undefind값을 읽게 된다
//                          └그걸방지하기위해 body-parer사용하요 데이터를 읽는다

app.use(bodyParser.json())

// Node응답 실행
app.get('/',(req,res)=>{
    console.log('Hello')
})

// 전체 배열 불러오기 -> /select경로에 가져와 응답처리
app.get('/select',(req,res)=>{
    console.log('/select')
    // MySQL 문법 
    mydb.query(`select * from movie_list order by no desc`,(err,data)=>{
        // 데이터 트랜잭션 채크
        if(!err){
            res.send(data)
        }else {
            console.log(err)
        }
    })
})

// 해당 검색창 불러오기
app.get(`/select/title=:title`,(req,res)=>{
    console.log('/select/title')
    // title의 파라미터 값을 요청
    const title=req.params.title
    // 요청된 title 확인
    console.log(title)
    // 값을 받은 title을 데이터로 전송
    mydb.query(`select * from movie_list where title like '${title}%'`,(err,data)=>{
        if(!err){
            res.send(data)
        }else {
            console.log(err)
        }
    })
})


//?query='hello'&display=10&country=JPN
//query-string모듈 queryString.parse(?query='hello'&display=10&country=JPN)
//쿼리스트링
//{query:'hello',display:10,country:'JPN'}

// 추가하기
app.post('/post/write',(req,res)=>{
    // 경로 이동되었나 확인
    console.log('/post/write') 
                //  ┌PostWrite.js에 받아왔다
    console.log(req.body)
            //     └Json에 데이터담을 때 사용-Post에만 가능
    // 받아온 객체를 풀어서->body로 담아 다시 변수에 담는 다
    // 그후 클라이언트쪽에 받아논 값은 undefind이기에 body-parser로 파싱한다
    const title=req.body.title
    const name=req.body.name
    const contents=req.body.contents
    const write_date=req.body.write_date
    const lookup=req.body.lookup


    // 잘받앗는 가 확인
    console.log(title);console.log(name)
    console.log(contents);console.log(write_date)
    console.log(lookup)
    mydb.query(`insert into movie_list(title,name,contents,write_date,lookup)
        values('${title}','${name}','${contents}','${write_date}',${lookup})`,
        (err,data)=>{
        if(!err){
            res.send(data)
        }else {
            console.log(err)
        }
    })

})

// getPostByNo에 받아온 정보를 MySQL에 조회하여 다시 해당하는 정보를 다시 getPostByNo보낸다
app.get(`/post/get/no=:no`,(req,res)=>{
    // 경로 이동되었나 확인
    console.log(`/post/get/no=:no`)
    console.log(req.params.no)
    const no=req.params.no

    //SQL - where 
    mydb.query(`select no,title,name,contents,write_date,lookup from movie_list where no=${no}`,(err,data)=>{
        if(!err){
            res.send(data)
        }else {
            console.log(err)
        }
    })
})

// 보내기
app.put('/update/lookup/no=:no',(req,res)=>{
    console.log('/update/lookup')
    const no=req.params.no
    mydb.query(`update movie_list set lookup=lookup+1 where no=${no}`,(err,data)=>{
        if(!err){
            res.send(data)
        }else {
            console.log(err)
        }
    })
})

// 삭제
app.delete(`/post/delete/no=:no`,(req,res)=>{
    console.log('/post/delete')
    const no=req.params.no
    console.log(no)
    mydb.query(`delete from movie_list where no=${no}`,(data,err)=>{
        if(!err){
            //res.send(data)
            console.log(data)
        }else {
            console.log(err)
        }
    })
})

app.put('/post/update/',(req,res)=>{
    console.log('/post/update/')
    console.log(req.body)

    const title=req.body.title
    const name=req.body.name
    const contents=req.body.contents
    const no=req.body.no
    console.log(title)
    console.log(name)
    console.log(contents)

    mydb.query(`update movie_list set title='${title}',name='${name}',contents='${contents}' where no=${no}`,(err,data)=>{
        if(!err){
            res.send(data)
        }else {
            console.log(err)
        }
    })
})

//req.params
//req.body

// Comment DB 구간
app.get(`/comment/get/bno=:no`,(req,res)=>{
    console.log('commtent')
    const bno=req.params.no
    mydb.query(`select * from comment_list where bno=${bno}`,(err,data)=>{
        if(!err){
            res.send(data)
        }else {
            console.log(err)
        }
    })
})


// Comment DB 추가 
app.post (`/comment/post`,(req,res)=>{
    console.log('/comment/post')
    console.log('댓글 DB 추가되엇나?')
    console.log(req.body)
    const bno = req.body.bno
    const name = req.body.name
    const contents = req.body.contents
    const fulldate = req.body.fulldate
    console.log(name)
    console.log(contents)
    console.log(fulldate)

    mydb.query(`insert into comment_list(bno,name,fulldate,contents) values(${bno},'${name}','${fulldate}','${contents}')`,(err,data)=>{
        if(!err){
            res.send(data)
        }else {
            console.log(err)
        }
    })
})


// Host 연결
app.listen(PORT,()=>{
    console.log(`Server on : http://localhost:${PORT}`)
})