import React, { Component } from 'react'
import './InfoEditBirth.css'

export default class InfoEditBirth extends Component {
  render() {
    return (
      <div>


          <div className='aInfoDCAligCtonwAAex'>
            <div className='INfhSTContainerAAex'>생년월일</div>
              <div className='yeonJeInfCex'>생일을 입력하면 회원님의 연령에 맞는 환경을 이용할 수 있습니다.</div>
              <div className='InfTedriCAAex'>
                  <div className='InfTeduriAnLCAAex'>
                      <div className='InfCBxInSoeAAex'>1234년 12월 12일</div>
                      <div className='EditBirthdta'>수정</div>
                  </div>
              </div>
              <div className='yeonJeInfCexa'>회원님의 생일이 회원님의 floating 프로필에 표시되지는 않지만 생일이 되면 사람들에게 알리도록 선택할 수 있습니다.</div>
          </div>


      </div>
    )
  }
}
