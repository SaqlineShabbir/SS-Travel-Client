import React, { useState } from 'react';
import { Link, useLocation,useHistory } from 'react-router-dom';
import './Register.css'
import img from '../../../images/login2.jpg'


import useFirebase from '../../../hooks/useFirebase';
import useAuth from '../../../hooks/useAuth';
const Register = () => {

    const location = useLocation()
    const redirect_uri = location.state?.from || '/home'
   const history = useHistory()

    const {signInUsingGoogle, handleRegister,handleEmailChange,handlePasswordChange, error, handleNameChange,setError,setUserName} = useAuth()

  

    const handleRegistration = (e) =>{
         e.preventDefault();
        handleRegister()
        .then(result =>{
            history.push(redirect_uri);
            setUserName();
            reloadPage()
             setError('')
             
         })
         
         .catch(error =>{
             setError(error.message)
         })
          
        
     }

    
    const reloadPage = () => {
        window.location.reload();
     }

    return (
        <div className="register">
            <img src={img} alt="" />
                <div className="login">
            <div className="  p-4 my-5 py-5 ">
            <h3 className="mb-4 fw-bold">Creat Account</h3>
        <form onSubmit={handleRegistration}>
     <label htmlFor="inputName" className="form-label">Your Name</label>
    <input type="text" onBlur={handleNameChange}className="form-control" required aria-describedby=""/><br/>
     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" onBlur={handleEmailChange} className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp"/><br/>

    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" onBlur={handlePasswordChange} className="form-control" id="exampleInputPassword1"/>
  <br/>
  <p className="text-danger">{error}</p>
                    <input className="register-button mt-2 w-100" type="submit" value="Creat your SS Dental  account" />
                </form>
                <p className="my-3">Already Have An Account? <Link to="/login">  Log In</Link></p>
             <button onClick={signInUsingGoogle} className="register-button w-100 "><i className="fab fa-google"></i> Sign In with Google</button>
            </div>
        </div>
            
        </div>
    );
};

export default Register;