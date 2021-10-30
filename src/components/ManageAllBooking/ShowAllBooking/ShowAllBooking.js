import React from 'react';
import './ShowAllBooking.css'
const ShowAllBooking = (props) => {
    const {tourImg, tourName,number,description,_id} = props.book


    return (
        <div className="showAllBooking-container shadow">
            <img src={tourImg} alt="" />
            <div className="p-3">
            <h4>{tourName}</h4>
            <h5>$ {number}</h5>
            <p>{description}</p>
            <button onClick={()=>props.handleDelete(_id)} className="cancel-btn">Delete</button>
            </div>
           
        </div>
    );
};

export default ShowAllBooking;