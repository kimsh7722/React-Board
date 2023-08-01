import {Component} from 'react'
import '../css/Post.css'
import axios from 'axios'

class Post extends Component {
  constructor(props) {
    super(props)
    this.state={

    }
  }
  
  // View로 이동하겠다
  movePostView=async()=>{
    // └함수     └경로 이동함수
    window.location.href='/view?no='+this.props.no
                                        // └props안의 no라는 값을 가져온다
    const setlookup=await axios.put(`/update/lookup/no=${this.props.no}`)
    // └ DB로부터 값을 추가하는 문법을 가져와서 axios에 연결
  }

  render() {
    // ┌props에서 요청할 값
    const {no,title,name,write_date,lookup}=this.props

    // ┌날짜 함수           ┌props안의 값중 하나
    var myDate = new Date(write_date);
    // console.log(myDate.getFullYear())
    // console.log(myDate.getMonth()+1)
    // console.log(myDate.getDate())

    const year=myDate.getFullYear()
    const month=myDate.getMonth()+1
    const day=myDate.getDate()
    const fulldate=year+"-"+month+"-"+day

    return (
    <div id='post'>
        <div id='post-header'>
          {/* ┌위의 요청된 자료값을 html 대입 */}
            <span>{no}</span>
                            {/* ┌함수 요청 */}
            <span onClick={this.movePostView}>{title}</span>
            <span>{name}</span>
            <span>{fulldate}</span>
            <span>{lookup}</span>
        </div>
    </div>
    )
  }
}

export default Post;