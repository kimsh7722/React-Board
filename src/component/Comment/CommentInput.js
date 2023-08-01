import {Component} from 'react'
import './css/CommentInput.css'
import axios from 'axios'
import inputquery from 'query-string'

class CommentInput extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            content:''
        }
    }

    setComment=async()=>{
        alert("댓글 등록(CommentInput)")
        const {name,contents}=this.state
        console.log("setComment 쪽 log")
        console.log(window.location.search)
        const noObj = inputquery.parse(window.location.search) 
        console.log(noObj)
        console.log(noObj.no)
        const bno = noObj.no

        var getDate = new Date()
        const setYear = getDate.getFullYear();
        const setMonth = getDate.getMonth()+1;
        const setDay = getDate.getDay();
        // const setHours = getDate.getHours();
        // const setMinutes = getDate.getMinutes();
        // const setSecond = getDate.getSeconds();
        // const fulldate = setYear+"-"+setMonth+"-"+setDay+" // "+setHours+":"+setMinutes+":"+setSecond;
        const fulldate=setYear+"-"+setMonth+"-"+setDay

        const commentObj = {bno:bno,name:name,contents:contents,fulldate:fulldate}
        await axios.post('/comment/post',commentObj)
        window.location.href=`/view?no=${bno}`
    }
    
    ComName=(e)=> {
        // console.log(e.target.value)
        this.setState({
            name:e.target.value
        })
    }

    ComText=(e)=> { 
        // console.log(e.target.value)
        this.setState({
            contents:e.target.value
        })
    }

    render(){
        return(
            <div id='comment-click'>
                <div id='comment-top'>
                    <input type='text' placeholder='작성자' onChange={this.ComName}/>
                    <textarea placeholder='작성글 남기세요' onChange={this.ComText}></textarea>
                    <button onClick={this.setComment}>등록</button>
                </div>
            </div>
        )
    }
}

export default CommentInput