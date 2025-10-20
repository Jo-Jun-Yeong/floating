import React from 'react'
import './css/Main.css'
import messageCircle from './img/message-circle.svg'
import bookmark from './img/bookmark.svg'

const Main = () => {
    return (
        <div>
            <div className='content-left'>
                <div className='story-upload'>
                    <img className='story-profile'></img>
                    <img className='story-profile'></img>
                    <img className='story-profile'></img>
                    <img className='story-profile'></img>
                    <img className='story-profile'></img>
                    <img className='story-profile'></img>
                    <img className='story-profile'></img>
                    <img className='story-profile'></img>
                </div>
            </div>

            <div className='content-right'>
                <div className='right-size'></div>
            </div>

            <div className='middle'>
                <img className='profile-img'></img>
                <div style={{marginLeft:'10px', paddingTop:'5px'}} className='content-center'>userId2 <span className='gray-font'>• 10시간</span></div>
                <div style={{marginLeft:'340px', paddingTop:'5px'}} className='content-center'> •••</div>
            </div>
            
            <div className='content-center'>
                <img className='story-img'></img>
            </div>

            <div className='content-center'>
                <div style={{fontSize:'22pt', justifyContent:'center', alignContent:'center', display:'flex'}}>
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
