import React, { useState } from 'react';
import { Sailboat } from 'lucide-react';
// import { Modal } from 'react-modal';
import './css/category.css';
const Caterory = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(prev => !prev);
  };

  const boatColor = active ? `rgb(0,127,255)` : `rgb(0,0,0)`
  
    // {/* ?position: fixed; */}
  return (
    <div className="category-box">
      <div className="category-icon-box">
        <Sailboat  
        className={`my-Sailboat${active ? '_active' : ''}`} 
        onClick={handleClick} 
        color={boatColor}/>
      </div>
    </div>

  );
};

export default Caterory;
