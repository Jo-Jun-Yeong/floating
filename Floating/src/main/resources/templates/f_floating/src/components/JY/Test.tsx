import React, { useState } from 'react';
import ProfileArea from './Profile';
import Contents from './Contents';
import './css/mainView.css';
import NeviBar from './css/NeviBar';
const ContentsView = () => {
    
    return (
        <div>
            <div className="main-area">
                <NeviBar/>
                <ProfileArea />
                <Contents />
            </div>
        </div>
    );
};

export default ContentsView; 