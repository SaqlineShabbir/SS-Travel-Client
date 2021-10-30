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
        fetch(`http://localhost:5000/myTours/${user?.email}`)
        .then(res =>res.json())
        .then(data =>setMyTours(data))
    },[])

    const handleDelete=(id) => {
      const proceed =window.confirm('Are you sure you want to delete')
      if(proceed) {

        const url = (`http://localhost:5000/orders/${id}`)
        fetch(url, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data =>{
            if(data.deletedCount > 0){
                alert('Delete successfully');
                const remaining = myTours.filter(tour => tour._id !== id)
                setMyTours(remaining)
            }
        })

      }
    }

    return (
        <div className="my-tours">

            
          {
              myTours.map(myTour =><MyTour handleDelete={handleDelete} myTour={myTour}></MyTour>)
          }
        </div>
    );

    }
export default MyTours;