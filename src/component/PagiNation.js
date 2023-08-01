import {Component} from 'react'
import '../css/PagiNation.css'

class PagiNation extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    movePostPage=(page)=>{
        // alert('Pagination쪽 번호 클릭 '+page)
        this.props.movePostPage(page)
    }
    
    Prev=()=>{
        alert('이전!')
        const {CurrentPage,movePostPage}=this.props
        console.log(movePostPage)
        if(CurrentPage === 1){
            alert("더이상 이전불가")
            return
        }
        movePostPage(CurrentPage-1)
    }
    Next=()=>{
        alert('다음!')
        const {CurrentPage,movePostPage,total,addPostPerPage}=this.props
        alert(CurrentPage+1)
        const EndPage=Math.ceil(total/addPostPerPage)
        if(CurrentPage+1 > EndPage){
            alert("더이상 다음불가")
            return
        }
        movePostPage(this.props.CurrentPage+1)
    }

    
    render(){
        const {total,addPostPerPage}=this.props
        let pageNumber=[]
        const LastNumber=Math.ceil(total/addPostPerPage)
        console.log(LastNumber)
        for(var i=1; i<LastNumber+1; i++) {
            pageNumber.push(i)
        }
        console.log("pageNumber : "+pageNumber)

        const PageList=pageNumber.map(
            (data,index)=>(
                <button key={index} className='page' onClick={()=>this.movePostPage(data)}>{data}</button>
            )
        )

        return(
            <div id='pagination'>
                {/* <span>페이지당 : {addPostPerPage}</span>
                <span>전체 페이지 : {total}</span> */}
                <div id='div-btn'>
                    <div id='btn-css'>
                        <button onClick={this.Prev}>이전</button>
                        {/* ┌배열의 자료값을 호출 */}
                        {PageList}
                        <button onClick={this.Next}>다음</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PagiNation;