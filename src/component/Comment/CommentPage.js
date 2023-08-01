import { Component } from "react";
import './css/CommentPage.css'

class CommentPage extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    moveCom=(Cpage)=>{
        this.props.moveComment(Cpage)
    }
    render(){
        const {total,addPerPageList}=this.props
        // 댓글창 페이지네이션
        let commentNumber=[]
        const nowNuber=Math.ceil(total/addPerPageList)
        for(var i=1; i<nowNuber+1; i++) {
            commentNumber.push(i)
        }
        const CommentList=commentNumber.map(
            (data,index)=>(
                <a key={index} className='Cpage' href='#' onClick={()=>this.moveCom(data)}>{data}</a>
            )
        )
        return(
            
            <div id="commentPage">
                {/* <span>배열 전체 : {total}</span>
                <span>배열 당 페이지 : {addPerPageList}</span> */}
                {CommentList}
            </div>
        )
    }
}
export default CommentPage;