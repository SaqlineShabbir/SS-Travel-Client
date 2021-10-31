import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Tour from '../Tour/Tour';
import "./Tours.css"
const Tours = () => {
    const[tours, setTours] = useState([])
    useEffect(()=>{
        fetch('https://spooky-asylum-65251.herokuapp.com/tours')
        .then(res => res.json())
        .then(data => setTours(data))
    },[])

    const {isLoading} = useAuth()
    if(isLoading) {
        return <div className="spin">
            <div class="spinner-border text-center" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
        </div>
    }
    return (
       <div>
           <h2 className="mt-5 text-center">Available Tours</h2>
 <div className="tours-container">
            {
                tours.map((tour, index) =><Tour key={tour._id} index={index} tour={tour}></Tour>)
            }
        </div>

       </div>
    );
};
   


export default Tours;