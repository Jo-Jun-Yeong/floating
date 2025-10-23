import React, { Component } from 'react'
import './InfoEditExit.css'

export default class InfoEditExit extends Component {
  render() {
    return (
      <div>

        <div className='alldivBxExC'>
          <div>
            <div className='InfoExtDmon'>정말 탈퇴하시겠습니까?</div>
            <div className='infoCtCli'>계정 삭제를 신청하시면 14일의 유예기간이 제공됩니다.</div>
            <div className='infoCtClitw'>이 기간이 지나면 계정 및 모든 데이터가 영구적으로 삭제되며 <b style={{color:'black'}}>복구가 불가능합니다.</b></div>
          </div>

          <div className='infAnneC'>
            <img className='infAnnImg' src='/images/DW/info.svg'/>
            <div className='infAnDMoon'>2주 이내에 로그인하시면 탈퇴 요청은 자동으로 취소됩니다.</div>
          </div>

          <div className='cAEBtnCtin'>
            <div className='infExCcBtn'>취소</div>
            <div className='infExtPrgsBtn'>탈퇴 진행</div>
          </div>
        </div>

      </div>
    )
  }
}
