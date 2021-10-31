import React from 'react';
import './WhySS.css'
const WhySS = () => {
    return (
        <div>
            <h2 className="text-center mt-5">Why you will choose Us</h2>
 <div className="why-ss-container">
            <div className="ss-card" >
            <h1><i className="fas fa-users icon"></i></h1>
              
                <h5>2000 + Our worldwide guide</h5>
            </div>
            <div className="ss-card">
                <h1><i className="fas fa-handshake icon"></i></h1>
               
                <h5>100% trusted travel agency</h5>
            </div>
            <div className="ss-card">
           <h1><i className="fas fa-fist-raised icon ms-3"></i></h1> 
                <h5>10 + year of travel experience</h5>
            </div>
            <div className="ss-card">
           <h1><i className="fas fa-smile-beam icon ms-3"></i></h1> 
                <h5>90% of our traveler happy</h5>
            </div>
        </div>
        </div>
       
    );
};

export default WhySS;