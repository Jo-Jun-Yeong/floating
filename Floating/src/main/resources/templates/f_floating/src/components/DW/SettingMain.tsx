import React, {useState} from 'react';
import './SettingMain.css';
import ProfileEdit from './ProfileEdit';
import PasswordEdit from './PasswordEdit';
import InfoEdit from './InfoEdit';

const SettingMain = () => {

    const [pageType, setPageType] = useState<number>(0);
    const handleClick = (type:number) => {
        // alert(type + "버튼 눌림!");
        setPageType(type);
      };

      const renderRightPage = () => {
        switch (pageType) {
          case 1:
            return <ProfileEdit/>;
          case 2:
            return <PasswordEdit/>;
          case 3:
            return <InfoEdit/>;
          default:
            return <div>좌측에서 선택</div>;
        }
      };


    return (
        <div>

            <div className='allDivContainerAlign'>

              <div className='LeftSetMenu'>

                  <div className='LeftSetMenuWayOrder'>내 floating 사용 방식</div>

                  <div className='onClickMenuSet' onClick={() => handleClick(1)}>
                    <img className='onClickMenuImgContSet' src="/images/DW/profileEdit3.png" alt="" />
                    <div>프로필 편집</div>
                  </div>

                  <div className='onClickMenuSet' onClick={() => handleClick(2)}>
                    <img className='onClickMenuImgContSet' src="/images/DW/pwEdit2.png" alt="" />
                    <div>비밀번호 변경</div>
                  </div>

                  <div className='onClickMenuSet' onClick={() => handleClick(3)}>
                    <img className='onClickMenuImgContSet' src="/images/DW/infoEdit1.png" alt="" />
                    <div>개인정보 변경</div>
                  </div>

              </div>

              <div>
                  {/* <div>오른쪽에 표시될 페이지</div> */}
                  <div>{renderRightPage()}</div>
              </div>

            </div>

        </div>
    );
};

export default SettingMain;