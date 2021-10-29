import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Booking.css'

const Booking = () => {
    const {tourId} = useParams()
    
    const [data,setData] = useState([])
    const {user} = useFirebase()
    useEffect(()=>{
        fetch('http://localhost:5000/tours')
        .then(response => response.json())
        .then(data => setData(data))
    },[])
    const exactItem = data.filter(pd => pd._id === tourId)
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/orders', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('Booked Successfully')
            }
        })

};
    return (
        <div>
            <div className="booking-main">

   <div className="booking">
   <img src={exactItem[0]?.img}  alt="" />
  <h5> {exactItem[0]?.name}</h5> 
   <p>{exactItem[0]?.description} </p> 
  <button>AddToCart</button>

   </div >
   <div className="booking-form">
   <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={(user?.displayName)} {...register("name")} />
      <input defaultValue={user?.email}  {...register("email")} />
      <input defaultValue={exactItem[0]?.name}  {...register("tourName")} />
      <input defaultValue={exactItem[0]?.img} {...register("tourImg")} />
      
      
      <input type="submit" />
    </form>
    </div>
    </div>
        </div>
    );
};

export default Booking;