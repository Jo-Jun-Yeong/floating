import React, { Component } from 'react'
import './InfoEditAdress.css';

export default class InfoEditAdress extends Component {
  render() {
    return (
      <div>


          <div className='aInfoDCAligCtonwAA'>
            <div className='INfhSTContainerAA'>연락처 정보</div>
              <div className='yeonJeInfC'>연락처를 현재 사용 중인 정확한 정보로 유지할 수 있도록 휴대폰 번호와 이메일 주소를 관리하세요.</div>
              <div className='InfTedriCAA'>
                  <div className='InfTeduriAnLCAA'>
                      <img className='INfcBxIcnAA' src='/images/DW/mail.svg'/>
                      <div className='InfCBxInSoeAA'>useremail@naver.com</div>
                  </div>
                  
                  <div className='InfTeduriAnLCAA' >
                      <img className='INfcBxIcnAAaf' src='/images/DW/phone.svg'/>
                      <div className='InfCBxInSoeAA'>+821012345678</div>
                  </div>

                  <div className='InfTeduriAnLCAA' >
                      <img className='INfcBxIcnAAafasdf' src='/images/DW/circle-plus.svg'/>
                      <div className='InfCBxInSoeAAad'>새 연락처 추가</div>
                  </div>
              </div>
          </div>


      </div>
    )
  }
}
