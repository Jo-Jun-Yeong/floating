import React from 'react';
import './ProfileEdit.css';

const componentName = () => {
    return (
        <div>


            <div className='aCDVAlignCon'>

                <div className='hSTContainer'>프로필 편집</div>

                <div className='uPEdCon'>
                    <div>
                        <img className='uPIMGCon' src='images/DW/arnold.jfif'></img>
                    </div>
                    <div className='uNANMCont'>
                        <div className='uNMCont'>arnold_king</div>
                        <div className='uNameCont'>아놀드 슈월제네거</div>
                    </div>
                    <div className='uPicEditCon'>사진변경</div>
                </div>               

                <div className='hSTContainer'>소개</div>
                <div className='introCTBx'>
                    <input className='intrMyfIPT' type="text" placeholder="소개" />
                    <div className='PrBarCot'>1/100(useState사용)</div>
                </div>               

                <div className='hSTContainer'>성별</div>
                <div>
                    {/* 성별선택 추후에 다른 태그 사용해도됨 */}
                    <select className='gndrSlctBxC'>
                        <option className='gndrSlctBxOt'>남자</option>
                        <option className='gndrSlctBxOt'>여자</option>
                    </select>
                    <div className='thisInfDDAltC'>이 정보는 공개 프로필에 표시되지 않습니다</div>
                </div>

                <div className='eCmpltC'>수정 완료</div>
                
            </div>





        </div>
    );
};

export default componentName;