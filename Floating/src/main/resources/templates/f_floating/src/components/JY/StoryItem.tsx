import React from 'react';
import './css/story.css';
const StoryItem = () => {
    return (

        <div className="item-box">
                <div className="item">
                    <div id="like_comment_container">
                        <div className="like_container">
                            <div className="like_icon">
                                <span>##</span>
                            </div>
                                <div className="like_count">
                            <span>999</span>
                            </div>
                        </div>
                    <div className="comment_container">
                        <div className="comment_icon">
                        <span>##</span>
                            </div>
                        <div className="comment_count">
                        <span>999</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    );
};

export default StoryItem;