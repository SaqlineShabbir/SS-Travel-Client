import React from 'react';
import './Banner.css'
import background from '../../images/tourbanner.jpg'
const Banner = () => {
    return (
        <>
    <div style={{ backgroundImage:`url(${background})` }} className="banner">
      
      <div className="banner-texts">
          <h1 className="">Welcome To SS Travel</h1>
          <p>To get the best of your adventure you just need to leave and go where you like . We are working for you .we understands that every client is individual, however all have the same goal, to SAVE TIME AND MONEY. Whether it's business class, economy or low cost travel you require, we guarantee to find the best cost effective route for you.</p>
      </div>
      
    </div>
        </>
    );
};

export default Banner;