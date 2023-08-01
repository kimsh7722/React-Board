import './App.css';
import {Component} from 'react'
import Footer from './component/Footer';
// import axios from 'axios'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PostMain from './component/PostMain.js'
import PostWrite from './component/PostWrite.js'
import PostView from './component/PostView';
import Nav from './component/Nav';
import Search from './component/InputComp/Search'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      
    }
  }

  render() {
    return (
      <div id='app'>
          <h1>React 게시판</h1>
        <Nav />
        {/* ┌req,res이루어진 동적 페이지 제작에 사용, HTML UI업데이트  */}
        <BrowserRouter>
        {/* ┌최적의 경로로 이동하기위해 사용 - 네트워크2계층 역할 */}
          <Routes>
            {/*           ┌ Address      ┌다른경로 파일*/}
            <Route exact path='/' element={<PostMain />} />
          {/* └요청받은 Path 경로를 해당하는 컴포넌트를 렌더링 */}
            <Route path='/search' element={<Search />} />
                {/* └해당 Path가 정해진 것만 이동하게 렌더링
                    무슨말이냐 지정된경로가 벗어나지 않고 완벽히 일치하게 랜더링 한다 */}
            <Route exact path='/view'  element={<PostView />} />
            <Route exact path='/write' element={<PostWrite />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}
// 웹요청은 App으로 기본으로 잡는 다
export default App;
