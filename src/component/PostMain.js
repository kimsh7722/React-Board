import '../css/PostMain.css';
import {Component} from 'react'
import PostList from './PostList.js'
import PagiNation from './PagiNation';
import axios from 'axios'
import InputComp from './InputComp/InputComp';


class App extends Component {
  constructor(props) {
    super(props)
    // ┌배열 생성
    this.state={
      postList:[],
      // ┌ 한개의 페이지에 나타낼 최대 배열 갯수
      PostPerPage:15,
      // ┌ 페이지의 갯수
      setCurrentPage:1
    }
  }

  // MySQL 불러오는 작업
  componentDidMount(){
      // └ DOM함수 호출
    this.getMovieDB()
  }

  // DB 전체 불러오기 
  getMovieDB=async()=>{
    const result=await axios.get('/select') 
    console.log(result)
    console.log(result.data)
    this.setState({
      postList:result.data
    })
    
  }

  // 이전,다음 페이지 함수
  PostPage=(page)=>{
    // alert('페이지 설정(PostMain.js)'+page)
    this.setState({
      setCurrentPage:page
    })
  } 

  // 글쓰기 이동
  setWrite=()=>{
    window.location.href='/write'
  }
  // 배열을 나눠서 짜르는 Slice구간
  PostCurrnt=(postList)=>{
    const {setCurrentPage,PostPerPage}=this.state

    const indexFirst=(setCurrentPage-1)*PostPerPage;
    const indexLast=indexFirst+PostPerPage;
    const sliceList=postList.slice(indexFirst,indexLast)
    return sliceList;
  }

  render() {
    //        ┌ state의 배열 자료 요청
    const {postList,PostPerPage,setCurrentPage}=this.state
    return (
      <div id='postmain'>
        <div id='btn-right'>
                          {/* ┌함수 요청 */}
        <button onClick={this.setWrite}>글쓰기</button>
        </div>
        <div id='post-nav'>
          <div id='nav-menu'>
            <span>no</span><span>제목</span><span>작성자</span>
            <span>작성일</span><span>조회</span>
          </div>
        </div>

        {/* 다른 page에 PostList Import요청 */}
        <PostList addPostList={this.PostCurrnt(postList)}/>
        {/*           └ 새변수 생성     └함수에 매개변수 삽입*/}

        {/* ┌Pagination Import 불러와서 하단부분에 페이지 이동 배열 생성*/}
        <PagiNation  
          total={postList.length} // 총배열
          addPostPerPage={PostPerPage} // 패이지당 겟수
          movePostPage={this.PostPage} // 페이지 함수
          CurrentPage={setCurrentPage} // 이전, 다음
        />

        {/* InputComp Import 요청 */}
        <InputComp />
      </div>
    )
  }
}

export default App;
