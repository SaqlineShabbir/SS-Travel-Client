import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const MyTours = () => {
  const [myTours, setMyTours]  =useState([])
    useEffect(()=>{
       fetch('http://localhost:5000/orders')
       .then(res => res.json())
       .then(data => setMyTours(data))
    },[])
    return (
        <div>

            <h1>This is my tours</h1>
            {
                myTours.map(myTour => <div>
                    <h5>{myTour.tourName}</h5>
                    <img src={myTour.tourImg} alt="" />
                </div> )
            }
        </div>
    );
};

export default MyTours;