import React, { useState } from 'react';
import './css/NeviBar.css';
import { Search, MessageCircle, History, Plus, UserRoundPen, Menu } from 'lucide-react';
const NeviBar = () => {

    const [active , setActive] = useState(false);
    const handleClick = () => {
        setActive(prev => !prev);
    }

    const savedLoad = process.env.PUBLIC_URL;
    const searchIcon = active ? `${savedLoad}/JY/search_click.png`: `${savedLoad}/JY/search_unclick.png`;
    return (
        <div className="NeviContainer">
            <div className="logo-link">
                <div className="logo-box">
                LOGO ICON
                </div>
                
            </div>
        {/* 클릭되면 두꺼운 이미지로 변경하게 추후 변경 */}
            <div className="link-container">
                <div></div>
                <div className="link">
                    <label className='icon' onClick={handleClick}>
                        <Search/>
                    </label>
                    
                    <div className='icon-text'>
                        검색
                    </div>
                </div>

                <div className="link">
                    <label className='icon' onClick={handleClick}>
                        <MessageCircle/>
                    </label>
                    
                    <div className='icon-text'>
                        메세지
                    </div>
                </div>

                <div className="link">
                    <label className='icon' onClick={handleClick}>
                        <History/>
                    </label>
                    
                    <div className='icon-text'>
                        알림
                    </div>
                </div>

                <div className="link">
                    <label className='icon' onClick={handleClick}>
                        <Plus/>
                    </label>
                    
                    <div className='icon-text'>
                        만들기
                    </div>
                </div>

                <div className="link">
                    <label className='icon' onClick={handleClick}>
                        <UserRoundPen/>
                    </label>
                    
                    <div className='icon-text'>
                        프로필
                    </div>
                </div>
                <div></div>
            </div>
            <div className="more-icon">
                <div className="link">
                <label className='icon' onClick={handleClick}>
                    <Menu/>
                </label>
                <div className='icon-text'>
                        더보기
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NeviBar;