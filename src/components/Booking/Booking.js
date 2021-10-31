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
        fetch('https://spooky-asylum-65251.herokuapp.com/tours')
        .then(response => response.json())
        .then(data => setData(data))
    },[])
    const exactItem = data.filter(pd => pd._id === tourId)
    
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://spooky-asylum-65251.herokuapp.com/orders', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('Booked Successfully')
                reset()
            }
        })

};

    return (
        <div>
            <div className="booking-main ">
            <h3 className="text-center">Chosen Tour</h3>
   <div className="booking-details ">
   
         <div>
        
   <img className="m-4" src={exactItem[0]?.img}  alt="" />
         </div>
   <div className="booking-text">
   <h5> {exactItem[0]?.name}</h5> 
   <p>{exactItem[0]?.description} </p> 
   <h5>$ {exactItem[0]?.number} </h5> 
   </div>


   <div className="booking-form">
       <h5>Book This Tour</h5>
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

   </div >

    </div>
        </div>
    );
};

export default Booking;