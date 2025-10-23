import React from 'react';
import './PasswordEdit.css';

const componentName = () => {
    return (
        <div >

            <div className='aDCAligCtonw'>
                <div className='uNmeAfltlgo'>dog_bird · floating</div>
                <div className='PEhSTContainer'>비밀번호 변경</div>
                <div className='infPWEdC'>비밀번호는 최소 6자 이상이어야 하며 숫자,영문,특수 문자(!$@%)의 조합을 포함해야 합니다.</div>
                <div className='PWEIACont'>
                    <input className='PEintrMyfIPT' type="text" placeholder="현재 비밀번호" />
                    <input className='PEintrMyfIPT' type="text" placeholder="새 비밀번호" />
                    <input className='PEintrMyfIPT' type="text" placeholder="새 비밀번호 재입력" />
                </div>
            <div className='PWeCmpltC'>수정 완료</div>
            </div>


        </div>
    );
};

export default componentName;