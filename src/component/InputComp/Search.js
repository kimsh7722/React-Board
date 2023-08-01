import { Component } from "react";
import './css/Search-nav.css'
import './css/Search-header.css'
import axios from 'axios'
// 구문해석자 필요하다
import querySt from 'query-string';

import InputComp from "./InputComp";

class Search extends Component {
    constructor(props) {
      super(props)
      this.state={
        searchList:[]
      }
    }
    
    componentDidMount(){
      console.log(window.location)
      console.log(window.location.search)
      const queryObj=querySt.parse(window.location.search)
      console.log(queryObj.title)
      const title = queryObj.title
      this.setSearch(title)
    }
    
    setSearch=async(title)=>{
        const result = await axios.get(`/select/title=${title}`);
        console.log(result.data)
        this.setState({
            searchList:result.data[0]
        })
    }

    // View로 이동하겠다
    movePostView=async()=>{
      const {searchList}=this.state
      const no = searchList.no
      window.location.href='/view?no='+no
      const setlookup=await axios.put(`/update/lookup/no=${no}`)
    }

    render() {
        const {searchList}=this.state
        var myDate = new Date(searchList.write_date);
        const year = myDate.getFullYear()
        const month = myDate.getMonth()+1
        const day = myDate.getDay()
        var fullDate = year+"-"+month+"-"+day;
      return (
        <div id='Search'>
            <div id='Search-nav'>
                <span>no</span><span>제목</span><span>작성자</span>
                <span>작성일</span><span>조회</span>
            </div>
            <div id='Search-header'>
              <span>{searchList.no}</span>
              <span onClick={this.movePostView}>{searchList.title}</span>
              <span>{searchList.name}</span>
              <span>{fullDate}</span>
              <span>{searchList.lookup}</span>
            </div>
            <InputComp />
        </div>
      )
    }
  }
  
  export default Search;