import React, { useState } from 'react';
import './css/NeviBar.css';
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

            <div className="link-container">
                <div></div>
                <div className="link">
                    <label className='icon' onClick={handleClick}>
                        <img src={searchIcon} alt='search'></img>
                    </label>
                    
                    <div className='search-text'>
                        검색
                    </div>
                </div>

                <div className="link">
                    <label className='icon' onClick={handleClick}>
                        <img src={searchIcon} alt='search'></img>
                    </label>
                    
                    <div className='search-text'>
                        메세지
                    </div>
                </div>

                <div className="link">
                    <label className='icon' onClick={handleClick}>
                        <img src={searchIcon} alt='search'></img>
                    </label>
                    
                    <div className='search-text'>
                        알림
                    </div>
                </div>

                <div className="link">
                    <label className='icon' onClick={handleClick}>
                        <img src={searchIcon} alt='search'></img>
                    </label>
                    
                    <div className='search-text'>
                        만들기
                    </div>
                </div>

                <div className="link">
                    <label className='icon' onClick={handleClick}>
                        <img src={searchIcon} alt='search'></img>
                    </label>
                    
                    <div className='search-text'>
                        프로필
                    </div>
                </div>
                <div></div>
            </div>
            <div className="more-icon">
                <div className="link">
                <label className='icon' onClick={handleClick}>
                    <img src={searchIcon} alt='search'></img>
                </label>
                    더보기
                </div>
            </div>
        </div>
    );
};

export default NeviBar;