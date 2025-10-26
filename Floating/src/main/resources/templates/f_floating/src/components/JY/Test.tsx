import React, { useState } from 'react';
import ProfileArea from './Profile';
import Contents from './Contents';
import './css/mainView.css';
import NeviBar from './NeviBar';
const ContentsView = () => {
    
    return (
        <div className="full-area">
                <NeviBar/>
            <div className="main-area">
                <ProfileArea />
                <Contents />
            </div>
        </div>
    );
};

export default ContentsView; 