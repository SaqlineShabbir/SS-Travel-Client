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
    const {user} = useAuth()
    useEffect(()=>{
        fetch('http://localhost:5000/tours')
        .then(response => response.json())
        .then(data => setData(data))
    },[])
    const exactItem = data.filter(pd => pd._id === tourId)
    
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/orders', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('Booked Successfully')
                reset()
            }
        })

};

    return (
        <div>
            <div className="booking-main">

   <div className="booking-details">
       <h3>Choosen Tour</h3>
   <img src={exactItem[0]?.img}  alt="" />
  <h5> {exactItem[0]?.name}</h5> 
   <p>{exactItem[0]?.description} </p> 
   <p>{exactItem[0]?.number} </p> 
  

   </div >
   <div className="booking-form">
       <h4>Book Here</h4>
   <form onSubmit={handleSubmit(onSubmit)}>
 
  <input defaultValue={(user?.displayName)} {...register("name")} />
  <input defaultValue={user?.email}  {...register("email")} />
  
     {
         exactItem[0]?.name && <input defaultValue={exactItem[0]?.name}  {...register("tourName")} />
     }
     {
      exactItem[0]?.img &&  <input defaultValue={exactItem[0]?.img} {...register("tourImg")} />
     }
     { 
     exactItem[0]?.description &&  <input defaultValue={exactItem[0]?.description} {...register("description")} />
     
     }
     {
         exactItem[0]?.number &&<input defaultValue={exactItem[0]?.number} {...register("number")} />
        
     }
        
      <input type="submit" value="Confirm Book"/>


    </form>
    </div>
    </div>
        </div>
    );
};

export default Booking;