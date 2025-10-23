import React, { useState } from 'react';
import Story from './Story';

import './css/category.css';
const Caterory = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(prev => !prev);
  };

  const savedLoad = process.env.PUBLIC_URL;
  const saveIcon = active ? `${savedLoad}/JY/save_click.png` : `${savedLoad}/JY/save_unclick.png`;
  
    // {/* ?position: fixed; */}
  return (
    <div className="category-box">
      <div style={
        {width:"85px", height:"85px"
        , display:"flex", justifyContent:"center"
        , marginBottom:"5px", marginTop:"5px"
      , alignItems:"center"}
        }>
        <div className={`story${active ? '_active' : ''}`} onClick={handleClick}>
        <img src={saveIcon} alt="저장"></img>
          {/* <h2>스토리</h2> */}
        </div>
      </div>
    </div>

  );
};

export default Caterory;
