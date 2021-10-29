import React from 'react';
import { Link, useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
import useFirebase from '../../../hooks/useFirebase';


import './Login.css'
const Login = () => {
    const {signInUsingGoogle ,setIsLoading, handleLogIn,handleEmailChange, handlePasswordChange, error,setError,setUser} = useFirebase()
    const location = useLocation()
    const redirect_uri = location.state?.from || '/home'
   const history = useHistory()
    const handleGoogleLogIn = () =>{
        setIsLoading(true)
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
        .finally(()=>setIsLoading(false))
    }
    const handleRedirectLogin = (e) =>{
        e.preventDefault()
        handleLogIn()
        .then(result =>{
            
            setUser(result.user)
            history.push(redirect_uri)

            setError('')

            
         })
         .catch(error =>{
            setError(error.message)
        })
    }
    return (
        <div className="register">
        <div>
            
            </div>
            <div className="login">
        <div className="  p-4 my-5 py-5 ">
        <h3 className="mb-4 fw-bold">Log In</h3>
            <form onSubmit={handleRedirectLogin}>
 <label for="exampleInputEmail1" class="form-label">Email address</label>
<input type="email" onBlur={handleEmailChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/><br/>

<label for="exampleInputPassword1" class="form-label">Password</label>
<input type="password" onBlur={handlePasswordChange} class="form-control" id="exampleInputPassword1"/>
<br/>
<p className="text-danger">{error}</p>
                <input className="register-button mt-2 w-100" type="submit" value="Log In" />
            </form>
            <p className="my-3">New To SS Dental? <Link to="/signup">Sign Up</Link></p>
         <button onClick={handleGoogleLogIn} className="register-button w-100 "><i class="fab fa-google"></i> Sign In with Google</button>
        </div>
    </div>
        
    </div>
    );
};

export default Login;