import {Component} from 'react'
import '../css/Footer.css'


class Footer extends Component {
    constructor(props){
        super(props)
        this.stat={

        }
    }
    render() {
        return (
                <div id='footer'>
                    <div id='fot-con'>
                        <ul>
                            <li>
                                <a href="http://www.naver.com/rules/service.html" target="_blank">이용약관</a>
                            </li>

                            <li>
                                <a href="http://www.naver.com/rules/privacy.html" target="_blank">
                                    <strong>개인정보처리방침</strong>
                                </a>
                            </li>

                            <li>
                                <a href="http://www.naver.com/rules/disclaimer.html" target="_blank">책임의 한계와 법적고지</a>
                            </li>

                            <li>
                                <a href="https://help.naver.com/support/service/main.nhn?serviceNo=800" target="_blank">영화 고객센터</a>
                            </li>

                        </ul>
                    </div>

                    <p className="info">
                        본 콘텐츠의 저작권은 저작권자 또는 제공처에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 법적 책임을 질 수 있습니다.
                    </p>

                    <p className="info">
                        사업자등록번호 : 220-81-62517  <span>통신판매업 신고번호</span> : 경기성남 제 2006 - 692호<span>대표이사 : 최수연</span> 
                        <span>
                            <a href="http://www.ftc.go.kr/info/bizinfo/communicationList.jsp">사업자등록정보 확인</a>
                        </span><br/> 
                        
                            주소 : 경기도 성남시 분당구 정자일로 95, NAVER 1784, 13561  <span>대표전화 : 1588-3820</span>
                    </p>
                    <br/>
                    <address>
                        <a href="https://www.navercorp.com/" target="_blank" className="logo">
                            <img src="https://ssl.pstatic.net/static/movie/2013/07/logo_naver.png" width="63" height="11" alt="NAVER"/>
                        </a>
                        <em>Copyright ©</em>
                        <a href="https://www.navercorp.com/" target="_blank">NAVER Corp.</a>
                        <span>All Rights Reserved.</span>
                    </address>
                </div>
        )
    }
}

export default Footer