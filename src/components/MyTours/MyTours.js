import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import MyTour from './MyTour/MyTour';
import './MyTours.css'
const MyTours = () => {
    const {user} = useAuth();
  const [myTours, setMyTours] =useState([])
    useEffect(()=>{
        fetch(`https://spooky-asylum-65251.herokuapp.com/myTours/${user?.email}`)
        .then(res =>res.json())
        .then(data =>setMyTours(data))
    },[])

    const handleDelete=(id) => {
      const proceed =window.confirm('Are you sure you want to delete?')
      if(proceed) {

        const url = (`https://spooky-asylum-65251.herokuapp.com/orders/${id}`)
        fetch(url, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data =>{
            if(data.deletedCount > 0){
                alert('Deleted successfully');
                const remaining = myTours.filter(tour => tour._id !== id)
                setMyTours(remaining)
            }
        })

      }
    }

    return (

      <div className="my-all-tours">

        <h4 className="text-center mt-5"> Welcome {user?.displayName} </h4>
        <h4 className="text-center mt-1"> Your All Booking</h4>
        <div className="my-tours">

            
          {
              myTours.map(myTour =><MyTour handleDelete={handleDelete} myTour={myTour}></MyTour>)
          }
        </div>
        </div>
    );

    }
export default MyTours;