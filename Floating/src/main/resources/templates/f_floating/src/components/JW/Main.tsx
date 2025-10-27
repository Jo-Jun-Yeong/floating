import React, { useEffect, useState } from 'react'
import './css/Main.css'
import messageCircle from './img/message-circle.svg'
import bookmark from './img/bookmark.svg'
import testImg from './img/backgroundImg.jpg'
import profileImg from './img/karina.jpg'
import kdhJOY from './img/kdhJOY.jpg'
import directMsgImg from './img/message-square-more.svg'
import fullScreenBtn from './img/maximize-2.svg'
import closeBtn from './img/x.svg'

const Main = () => {

    const [chatbox,setChatbox] = useState(false);

    interface Message{
        id: number;
        userNickName: string;
        message: string;
        timeAgo: string;
        profileImage: string;
    }

    const messages = [
        {
            id: 1,
            userNickName: 'userNickName',
            message: '안녕하세요',
            timeAgo: '2시간',
            profileImage: kdhJOY
        },
        {
            id: 2,
            userNickName: 'karina',
            message: '반가워요',
            timeAgo: '1시간',
            profileImage: profileImg
        }
    ]
    
    return (
        <div>
            {/* 스토리 업로드 한 사람의 프로필 사진 */}
            <div className='content-left'>
                <div className='story-upload'>
                    <img src={kdhJOY} className='story-profile'></img><div className='content-center'>userId1</div>
                    <img className='story-profile'></img><div className='content-center'>userId1</div>
                    <img className='story-profile'></img><div className='content-center'>userId1</div>
                    <img className='story-profile'></img><div className='content-center'>userId1</div>
                    <img className='story-profile'></img><div className='content-center'>userId1</div>
                    <img className='story-profile'></img><div className='content-center'>userId1</div>
                </div>
            </div>
            {/* 스토리 업로드 한 사람의 프로필 사진 */}
            {
            chatbox ||
                <div onClick={() => setChatbox(true)} className='content-right'>
                    <div className='chat-btn'>
                        <div className='message-box'>
                            <img src={directMsgImg} width={22} height={22}></img>
                            &nbsp;&nbsp;메시지
                        </div>
                    </div>
                </div>
            }
            {/* 채팅창 */}
            {chatbox &&
                <div className='content-right'>
                    <div className='chat-modal'>
                        <div style={{padding:'8px 0 0 0'}}>
                            <span style={{fontWeight:'bold', padding:'0px 0 10px 15px'}}>메시지</span>
                            <img src={fullScreenBtn} width={21} height={21} style={{marginLeft:'177px', marginBottom:'-3px'}}></img>
                            <img onClick={() => setChatbox(false)} src={closeBtn} width={26} height={26} style={{marginLeft:'10px', marginBottom:'-5px', cursor:'pointer'}}></img>
                            <div style={{borderBottom:'1px solid rgb(239, 239, 239)', width:'305px', marginTop:'11px'}}></div>
                            {
                                messages.map((msg) => (
                                    <div key={msg.id}>
                                        <div style={{margin:'10px', display:'flex', alignItems:'center'}}>
                                            <img src={msg.profileImage} style={{width:'46px', height:'46px', borderRadius:'23px'}}></img>
                                            <div style={{display:'flex', flexDirection:'column', marginLeft:'10px'}}>
                                                <div style={{fontSize:'10pt', fontWeight:'bold', marginBottom:'5px'}}>{msg.userNickName}</div>
                                                <div style={{fontSize:'9pt', fontWeight:'bold'}}>{msg.message}
                                                <span style={{fontSize:'8pt', color:'gray'}}>&nbsp;• {msg.timeAgo}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            }
            {/* 채팅창 */}
            {/* 게시글 */}
            <div className='middle'>
                <img src={profileImg} className='profile-img'></img>
                <div style={{marginLeft:'10px', paddingTop:'5px'}} className='content-center'>userId2 <span className='gray-font'>• 10시간</span></div>
                <div style={{marginLeft:'340px', paddingTop:'5px'}} className='content-center'> •••</div>
            </div>
            
            <div className='content-center'>
                <img className='story-img' src={testImg}></img>
            </div>

            <div className='content-center'>
                <div style={{fontSize:'22pt', justifyContent:'center', alignItems:'center', display:'flex'}}>
                    ♡<span style={{fontSize:'11pt', marginLeft:'3px', marginRight:'12px', paddingTop:'9px'}}>150</span>
                    <img src={messageCircle}></img><span style={{fontSize:'11pt', marginLeft:'3px', paddingTop:'9px'}}>200</span>
                    <img src={bookmark} style={{marginLeft:'360px'}}></img>
                </div>
            </div>

            <div className='content-center'>
                <div style={{borderBottom:'2px solid #dbdbdb', width:'500px', margin:'20px 20px'}}></div>
            </div>
            {/* 게시글 */}

            <div className='middle'>
                <img src={profileImg} className='profile-img'></img>
                <div style={{marginLeft:'10px', paddingTop:'5px'}} className='content-center'>userId2 <span className='gray-font'>• 10시간</span></div>
                <div style={{marginLeft:'340px', paddingTop:'5px'}} className='content-center'> •••</div>
            </div>

            <div className='content-center'>
                <img className='story-img' src={testImg}></img>
            </div>

            <div className='content-center'>
                <div style={{fontSize:'22pt', justifyContent:'center', alignItems:'center', display:'flex'}}>
                    ♡<span style={{fontSize:'11pt', marginLeft:'3px', marginRight:'12px', paddingTop:'9px'}}>150</span>
                    <img src={messageCircle}></img><span style={{fontSize:'11pt', marginLeft:'3px', paddingTop:'9px'}}>200</span>
                    <img src={bookmark} style={{marginLeft:'360px'}}></img>
                </div>
            </div>

            <div className='content-center'>
                <div style={{borderBottom:'2px solid #dbdbdb', width:'500px', margin:'20px 20px'}}></div>
            </div>            

        </div>
    );
};

export default Main;
