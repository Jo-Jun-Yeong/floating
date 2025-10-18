import React from 'react';
import { style } from '../../../node_modules/postcss-minify-font-values/types/lib/keywords.d';
import './css/infomation.css';
import { className } from '../../../node_modules/@sinonjs/commons/types/index.d';
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
                        <span>ID_SPACE</span><span> 프로필 편집</span>
                    </div>
                    <div className="info-item">
                        <div className='item-count'>
                            <span> 개시물</span>
                        </div>
                        <div className='follower-count'>
                            <span> 팔로워</span>
                        </div>
                        <div className='follow-count'>
                            <span> 팔로우</span>
                        </div>
                    </div>
                    <div className="info-memo">

                            <h4> name-space </h4>

                            <h5> memo space </h5>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProfileArea;