import React from 'react';
import './Banner.css'
import background from '../../images/tourbanner.jpg'
const Banner = () => {
    return (
        <>
    <div style={{ backgroundImage:`url(${background})` }} className="banner">
      
      <div className="banner-texts">
          <h1 className="">Welcome to React Bootstrap</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit cum illo, eum velit possimus! Eos dolore hic eveniet fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum molestias laudantium culpa numquam incidunt impedit distinctio odio beatae nam, placeat at, suscipit non tenetur exercitationem ullam debitis ex quod! Maxime, est! Aspernatur, molestiae impedit veritatis eum quos animi corporis laboriosam inventore voluptatibus assumenda quibusdam ullam ipsam rem sint voluptate soluta.</p>
      </div>
      
    </div>
        </>
    );
};

export default Banner;