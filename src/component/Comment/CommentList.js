import {Component} from 'react'
import Comment from './Comment'
import './css/CommentList.css'

class CommentList extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const result = this.props.commentList.map(
            (data,index)=>(
            <Comment key={index}
                no={data.no}
                name={data.name}
                contents={data.contents}
                fulldate={data.fulldate}
            />
            )
        )
        return(

            <div id='commentmain'>
                {result}
            </div>
        )
    }
}

export default CommentList