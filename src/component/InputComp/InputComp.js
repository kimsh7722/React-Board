import {Component} from 'react'
import './css/InputComp.css'

class InputComp extends Component {
    constructor(props){
        super(props)
        this.state={
            title:''
        }
    }

    // 검색부분
    addSelect=()=>{
        alert("반응")
        window.location.href=`/search?title=${this.state.title}`;
    }

    inputChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            // [e.target.name]:e.target.value
            // └input안의 속성에 있는 name
            title:e.target.value
        })
    }
    render() {
        return (
            <div id='inputcomp'>
                <div id='inputmain'>
                    <input type='text' onChange={this.inputChange}></input>
                    <button onClick={this.addSelect}>검색</button>
                </div>
            </div>
        )
    }
}

export default InputComp;