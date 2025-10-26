import React from 'react';
import { style } from 'postcss-minify-font-values/types/lib/keywords';
import './css/infomation.css';
import { className } from '@sinonjs/commons';
const ProfileArea = () => {
    return (
        
        <div className="profile-container">
             {/* profile area + info */}

            <div className="profile-header">

                {/* profile area */}
                <div className="profile-box">
                    {/* 프로필 이미지 */}
                    <div className="img-box">
                        <img src="https://avatars.githubusercontent.com/u/109330290?v=4" alt="Profile"/>
                    </div>
                </div>
                {/* info */}
                <div className="info-box">
                    <div className="info-name">
                        <span
                        className="info-id">ID_SPACE
                        </span>
                        <span> 프로필 편집</span>
                    
                    {/* 사용자 이름 */}
                    <h4> USER_NAME</h4>
                    </div>

                    {/* 개시물, 팔로워, 팔로우 */}
                    <div className="info-item">
                        <div className='item-count'>
                            <span> 개시물</span><span>??</span>
                        </div>
                        <div className='follower-count'>
                            <span> 팔로워</span><span>??</span>
                        </div>
                        <div className='follow-count'>
                            <span> 팔로우</span><span>??</span>
                        </div>
                    </div>

                    <div className="info-memo">
                            <h5> memo space </h5>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProfileArea;