import React, { useState } from 'react';
import Story from './Story';

import './css/category.css';
const Caterory = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(prev => !prev);
  };

    // {/* ?position: fixed; */}
  return (
    <div className="category-box">

        <div className={`story ${active ? 'active' : ''}`} onClick={handleClick}>
          <h2>스토리</h2>
        </div>

    </div>

  );
};

export default Caterory;
