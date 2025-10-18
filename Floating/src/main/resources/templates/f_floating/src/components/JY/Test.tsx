import React from 'react';
import ProfileArea from './Profile';
import Contents from './Contents';
import './css/contentsView.css';
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