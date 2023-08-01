import {Component} from 'react'
import '../css/PostView.css'
import queryString from 'query-string'
import axios from 'axios'
import CommentList from './Comment/CommentList.js'
import CommentInput from './Comment/CommentInput.js'
import CommentPage from './Comment/CommentPage'
import Footer from './Footer'

class PostView extends Component {
    constructor(props){
        super(props)
        this.state={
            postView:[],
            edit:false,
            commentList:[],
            PerPageList:10,
            commentPage:1
        }
    }

componentDidMount(){
    console.log(window.location)
    console.log(window.location.search)

    const queryST=queryString.parse(window.location.search)
    console.log("queryST")
    console.log(queryST.no)
    const no=queryST.no
    this.getPostByNo(no)
    // console.log(queryST.title)
    // const no=queryST.no

    // 댓글 불러오기
    this.getComentList(no)
}

// 댓글 server로부터 호출하여 가져온것
getComentList=async(no)=>{

    console.log('getCommentList')
    console.log(no)
    const result=await axios.get(`/comment/get/bno=${no}`)
    const commentDB = result.data
    console.log(commentDB)
    
    // concat : 문자합치기 
    const Comconcat=this.state.commentList.concat(commentDB).slice(0,commentDB.length)

    this.setState({
        commentList:Comconcat
    })

}

// 댓글 현배열을 가져온것 ↑ 호출로 보낸다
addComment=(commentObj)=>{
    alert("댓글 등록(PostView)")
    console.log('PostView에서 넘어온 DB')
    console.log(commentObj)
    console.log(commentObj.name)
    console.log(commentObj.contents)
    const name=commentObj.name
    const contents=commentObj.contents
    const fulldate=commentObj.fulldate
    const bno=commentObj.bno
    const length=this.state.commentList.length
    const no=length+1
    
    const comObj={no:no,bno:bno,name:name,fulldate:fulldate,contents:contents}
    const concatCommentList=this.state.commentList.concat(comObj)
    this.setState({
        commentList:concatCommentList
    })
    
}

// 해당 no가져와서 날짜수정후 넣어라
getPostByNo=async(no)=>{
    const result=await axios.get(`/post/get/no=${no}`)
    console.log(result)
    console.log(result.data)
    // DB에서 불러온 배열을 뜯어라
    console.log(result.data[0].title)

    // 날짜 데이터 불러와서
    var myDate=new Date();
    // 날짜별로 배열을 쪼개어
    const year=myDate.getFullYear()
    const month=myDate.getMonth()+1
    const day=myDate.getDate()
    // 합치어
    const write_date=year+"-"+month+"-"+day
    // 날짜배열에 다시 넣는 다
    result.data[0].write_date=write_date

    console.log(result.data[0].write_date)
    
    this.setState({
        postView:result.data[0]
    })
}


// 삭제
setDelete=async()=>{
    alert('delete!')
    const {postView}=this.state
    console.log(postView.no)
    const no=postView.no
    //const result=await axios.delete(`/post/delete/no=${no}`) 
    window.location.href='/'
    await axios.delete(`/post/delete/no=${no}`)
    // axios.delete밑에서 부터는 실행 절~~~대로 안댄다 이유는 모르겟다..
    
}

// 갱신
moveUpdate=async()=>{
    alert("update")
    const {postView,edit}=this.state
    console.log(postView)
    const title=postView.title
    const name=postView.name
    const contents=postView.contents
    console.log(title)
    console.log(name)
    console.log(contents)
    
    if(edit === true) {
        await axios.put(`/post/update/`,postView)
    }
    this.setState({
        edit:!this.state.edit
    })
}


setContent=(e)=>{
    console.log(e.target.value)

    let viewContent=this.state.postView
    viewContent.contents=e.target.value

    this.setState({
        postView:viewContent
    })
}
setTitle=(e)=>{
     console.log(e.target.value)

     let updatePostView=this.state.postView
     updatePostView.title=e.target.value

    this.setState({
        postView:updatePostView
    })
}
setName=(e)=>{
    console.log(e.target.value)
    let updatePostView=this.state.postView
    updatePostView.name=e.target.value
    this.setState({
        postView:updatePostView
    })
}
moveHome=()=>{
    alert('move home!')
    window.location.href='/'
}

// CommentPage에서 불러와 적용
setMoveComment=(Cpage)=>{
    this.setState({
        commentPage:Cpage       
    })
}
// PagiNation 적용
CommentPageN=(commentList)=>{
    //      10              1
    const {PerPageList,commentPage}=this.state
    // 배열 계산 
    const First = (commentPage-1)*PerPageList  // 1번째
    const Last = First+PerPageList;            // 마지막까지 
    const SliceComment=commentList.slice(First,Last)
    return SliceComment;
}

render(){
    const {postView,edit,commentList,PerPageList}=this.state
        if(edit === false){
        return(
            <div id='postview'>
                <div id='btn'>
                    <button onClick={this.moveHome}>홈</button>
                    <button onClick={this.setDelete}>삭제</button>
                    <button onClick={this.moveUpdate}>수정</button>
                </div>
                <div id='menu'>
                    <div id='top-menu'>
                    <span>작성자 : {postView.name}</span>
                    <span>{postView.write_date}</span>
                    <span>조회수 : {postView.lookup}</span>
                    </div>
                    <div id='buttom-menu'>
                    <span>{postView.title}</span>
                    <span>{postView.contents}</span>
                    </div>

                    {/* 버튼 구간 */}
                    <CommentInput setComment={this.addComment} />
                    {/* 댓글 리스트 구간 */}
                    <CommentList commentList={this.CommentPageN(commentList)}/>
                    {/* 댓글 페이지 네이션 구간 */}
                    <CommentPage 
                    total={commentList.length}
                    addPerPageList={PerPageList}
                    moveComment={this.setMoveComment}
                    />
                </div>
            </div>
        )
        }else{
        return(
            <div id='postview'>
                 <div id='btn'>
                     <button onClick={this.setDelete}>삭제</button>
                     <button onClick={this.moveUpdate}>수정</button>
                 </div>
                 <div id='menu'>
                    <div id='top-update'>
                     <input type='text' defaultValue={postView.title} onChange={this.setTitle}/> 
                     <input type='text' defaultValue={postView.name} onChange={this.setName}/> 
                     <span>날짜 : {postView.write_date}</span>
                    </div>
                    <textarea defaultValue={postView.contents} onChange={this.setContent}></textarea>
                 </div>
            </div>
        )
        }
    }
}

export default PostView