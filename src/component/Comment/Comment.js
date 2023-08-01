import {Component} from 'react'
import './css/Comment.css'


class Comment extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    render(){
        const {no,name,contents,fulldate}=this.props
        var myDate = new Date(fulldate);
        // const year=myDate.getFullYear()
        // const month=myDate.getMonth()+1;
        // const day=myDate.getDate();
        // const hours=myDate.getHours()
        // const minutes=myDate.getMinutes()
        // const second=myDate.getSeconds()

        // const reWorkDate=year+"-"+month+"-"+day+" // "+hours+":"+minutes+":"+second
        const reWorkDate=myDate.toLocaleString('ko-kr')

        return(
            <div id='comment'>
                <div id='comment-list'>
                    <div id='list'>
                        {/* <span>{no}</span> */}
                        <span>작성자: {name}</span>
                        <span>날짜 : {reWorkDate}</span> 
                        {/* (YYYY.MM.DD / HH:MM:SS) */}
                        <a href='#'>답글</a>
                        <span>{contents}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment