// axios 요청
import axios from 'axios';
// component 요청
import {Component} from 'react';
// css 요청
import '../css/PostWrite.css'

class PostWrite extends Component {
    constructor(props){
        super(props)
        // 배열 추가
        this.state={
            title:'',
            name:'',
            contents:''
        }
    }

    // 각 input 값을 가져오는 작업
    setTitle=(e)=>{
        // console.log(e.target.value)
        this.setState({
            title:e.target.value
        })
    }
    setContents=(e)=>{
        // console.log(e.target.value)
        this.setState({
            contents:e.target.value
        })
    }
    setName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }

    // server.js로 보낼 함수
    setMove=async()=>{
        //window.location.href='/'
        const {title,contents,name}=this.state
        
        // 년도 함수 요청
        var myDate=new Date();
        // 년
        const year=myDate.getFullYear()
        // 월
        const month=myDate.getMonth()+1
        // 일
        const day=myDate.getDate()
        const write_date=year+"-"+month+"-"+day

        // 상위요소로부터 요청받는 값을 다시 배열에 재대입후 DB로 넘긴다
        const postObj={title:title,name:name,contents:contents,
            write_date:write_date,lookup:0}

        // postObj변수값을 axios로 추가
        const result=await axios.post('/post/write',postObj)
        window.location.href='/'
    }
    // Href으로 경로 이동
    moveHome=()=>{
        window.location.href='/'
    }
    render(){
        return(
            // 영화 글쓰기 페이지
           <div id='postwrite'>
                <h2>영화 글쓰기</h2>
                <div id='tag'>
                    <a href='#'>전체글 보기</a><a href='#'>영화이미지 보기</a>
                </div>
                <div id='input-Change'>
                        {/* 위의 함수안에 DB로부터 요청받은 값을 onchange로 적용시켜라 ┐ */}
                    <input type='text' placeholder='제목입력해주세요' onChange={this.setTitle}/>
                    <input type='text' placeholder='작성자' onChange={this.setName}/>
                    <button onClick={this.moveHome}>취소</button>
                    <button onClick={this.setMove}>등록</button>
                    <button >첨부</button>
                </div>

                <textarea onChange={this.setContents}></textarea>
           </div> 
        )
    }
}

export default PostWrite;