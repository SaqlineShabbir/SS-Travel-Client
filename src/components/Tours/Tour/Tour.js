import React from 'react';
import { Link } from 'react-router-dom';
import './Tour.css'
const Tour = (props) => {
    const {img, name, description,number, _id} = props.tour
    return (
        <div className="tour-container shadow">
            <img src={img} alt="" />
               <div className="p-3">
               <h4>{name}</h4>
            <h5>$ {number}</h5>
            <p>{description}</p>
            <Link to={`/booking/${_id}`}><button className="purchase-btn fw-bold">Purchase <i className="fas fa-long-arrow-alt-right "></i></button></Link>
               </div>
        </div>
    );
};

export default Tour;