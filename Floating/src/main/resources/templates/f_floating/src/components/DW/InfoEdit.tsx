import React,{useState} from 'react';
import './InfoEdit.css';
import Adress from './InfoEditAdress';
import Birth from './InfoEditBirth';
import Exit from './InfoEditExit';


const InfoEdit = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [infoPageType,setInfoPageType] = useState<number>(0);

    const infoRenderModal = () => {
        
        switch (infoPageType) {
            case 1: 
                return <Adress/>;
            case 2: 
                return <Birth/>;
            case 3: 
                return <Exit/>;
            default: 
                return null;
        }
    };



    return (
        <div>
            <div className='aInfoDCAligCtonw'>
                <div className='INfhSTContainer'>개인정보 변경</div>
                
                <div className='InfTedriC'>
                    <div className='InfTeduriAnLC' onClick={()=>{setInfoPageType(1);setIsModalOpen(true)}}>
                        <div className='InfCBxInDae'>연락처 정보</div>
                        <div className='InfCBxInSoe'>useremail@naver.com,+821012345678</div>
                    </div>
                    
                    <div className='InfTeduriAnLC' onClick={()=>{setInfoPageType(2);setIsModalOpen(true)}}>
                        <div className='InfCBxInDae'>생일</div>
                        <div className='InfCBxInSoe'>1234년 1월 1일</div>
                    </div>

                    <div className='InfTeduriAnLC' onClick={()=>{setInfoPageType(3);setIsModalOpen(true)}}>
                        <div className='InfCBxInDae'>회원 탈퇴</div>
                        <div className='InfCBxInSoe'>계정을 삭제하고 회원을 탈퇴합니다. 2주간 복구기간을 가집니다.</div>
                    </div>
                </div>
            </div>

            {/* 모달창 열리는 부분들 */}
            {isModalOpen && (
                <div>
                    <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        {infoRenderModal()}
                        <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
                            <img className='closeXbtnSz' src='./images/DW/x.svg'/>
                        </button>
                        </div>
                    </div>
                </div>
            )}





        </div>
    );
};

export default InfoEdit;