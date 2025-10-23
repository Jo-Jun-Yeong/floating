import React from 'react';
import './css/contents.css';
import Caterory from './Category';
import Story from './Story'
const Contents = () => {
    return (

    <div className='contents-container'>
        <Caterory/>
        <Story/>
    </div>

    );
};

export default Contents;