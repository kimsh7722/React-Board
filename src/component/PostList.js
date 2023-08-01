import Post from './Post.js'
import {Component} from 'react'
import '../css/PostList.css'

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state={

    }
  }

  render() {
    // Post로부터 매핑시켜 값을 전달 받아 PostMain으로 옹겨간다
    // 예) PostMain -> PostList -> Post <값을 요청>
    // 예) Post -> PostList -> PostMain <값을 응답>
    const result=this.props.addPostList.map(
        (data)=>(
            <Post 
            key={data.no}
            no={data.no}
            title={data.title}
            name={data.name}
            write_date={data.write_date}
            lookup={data.lookup}
            />
        )
    )
    return (
      <div id='post-list'>
        {/* 위위 값을 HTML로 대입 */}
        {result}
      </div>
    )
  }
}

export default PostList;