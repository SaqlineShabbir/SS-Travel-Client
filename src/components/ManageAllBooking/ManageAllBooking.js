import React, { useEffect, useState } from 'react';
import ShowAllBooking from './ShowAllBooking/ShowAllBooking';
import './ManageAllBooking.css'
const ManageAllBooking = () => {
    const [allBooking, setAllBooking] =useState([])
    useEffect(()=>{
        fetch('https://spooky-asylum-65251.herokuapp.com/orders')
        .then(res=> res.json())
        .then(data => setAllBooking(data))
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
                    const remaining = allBooking.filter(book => book._id !== id)
                    setAllBooking(remaining)
                }
            })

          }
        }
    return (
        <div className="manageAllBooking-container">
            {
                allBooking.map(book => <ShowAllBooking handleDelete={handleDelete} key={book._id} book={book}></ShowAllBooking>)
            }
        </div>
    );
};

export default ManageAllBooking;