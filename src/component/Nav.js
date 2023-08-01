import '../css/Nav.css'
import {useEffect} from 'react'
import $ from 'jquery'

function Nav() {

  // useEffect(()=>{
  //   menu()
   
  // },[])

  // const menu=()=>{
  //   $("#main-menu>li").hover(
  //     function() {
  //       const idx=$(this).index()
  //       console.log(idx)
  //       $("#main-menu>li").eq(idx).find(".menu-list").slideDown(1)
  //     },
  //     function() {
  //        $(".menu-list").slideUp(1);
  //     }
  //   )
  // }

  return(
      <div id='header'>
        <div id='nav'>
          <ul id='main-menu'>
            <li>
              <a href='#'>menu1</a>
                <ul className='menu-list'>
                  <li>sub1</li>
                  <li>sub2</li>
                  <li>sub3</li>
                  <li>sub3</li>
                </ul>
              </li>

              <li>
                <a href='#'>menu2</a>
                <ul className='menu-list'>
                  <li>sub1</li>
                  <li>sub2</li>
                  <li>sub3</li>
                  <li>sub3</li>
                </ul>
              </li>

              <li>
                <a href='#'>menu3</a>
                <ul className='menu-list'>
                  <li>sub1</li>
                  <li>sub2</li>
                  <li>sub3</li>
                  <li>sub3</li>
                </ul>
              </li>

              <li>
                <a href='#'>menu4</a>
                <ul className='menu-list'>
                  <li>sub1</li>
                  <li>sub2</li>
                  <li>sub3</li>
                  <li>sub3</li>
                </ul>
              </li>

              <li>
                <a href='#'>menu4</a>
                <ul className='menu-list'>
                  <li>sub1</li>
                  <li>sub2</li>
                  <li>sub3</li>
                  <li>sub3</li>
                </ul>
              </li>

              <li>
                <a href='#'>menu4</a>
                <ul className='menu-list'>
                  <li>sub1</li>
                  <li>sub2</li>
                  <li>sub3</li>
                  <li>sub3</li>
                </ul>
              </li>
          </ul>
        </div>
      </div>
    )
}

export default Nav; 