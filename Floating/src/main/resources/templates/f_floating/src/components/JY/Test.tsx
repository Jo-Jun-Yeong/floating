import React, { useState } from 'react';
import ProfileArea from './Profile';
import Contents from './Contents';
import './css/mainView.css';
const ContentsView = () => {
    
    return (
        <div>
            <div className="main-area">
                <ProfileArea />
                <Contents />
            </div>
        </div>
    );
};

export default ContentsView;