import { useEffect, useState } from "react"

import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signOut , createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";
initializeAuthentication()
const useFirebase = () =>{
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const [isLoading,setIsLoading] = useState(true)
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


const signInUsingGoogle = () =>{
  return  signInWithPopup(auth, googleProvider);
    
}

const logOut = () =>{
    setIsLoading(true);
    signOut(auth)
    .then(() =>{
    
    })
    .finally(() =>setIsLoading(false))
    setUser({})
    
}

const handleRegister =()=>{
    return( createUserWithEmailAndPassword(auth, email, password))

}


 const handleLogIn = (e) => {
   return( 
    signInWithEmailAndPassword(auth, email, password))
    
        

 }

    
   


const handleEmailChange = (e) => {
    setEmail(e.target.value)
}
const handlePasswordChange = (e) => {
    setPassword(e.target.value)
}
const handleNameChange = (e) =>{
    setName(e.target.value)
}

const setUserName =() =>{
    updateProfile(auth.currentUser, {
        displayName: name,photoURL: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png"
      })
  .then(result =>{ })
  
}

  useEffect(()=>{
  onAuthStateChanged(auth,(user) =>{
      if(user){
          setUser(user)
      }
      setIsLoading(false)
  })
  },[])


  return {
      user,
      signInUsingGoogle,
      logOut,
      handleRegister,
      handleEmailChange,
      handlePasswordChange,
      handleLogIn,
      error,
      handleNameChange,
      setIsLoading,
      isLoading,setError,setUser,setUserName

  }
}




export default useFirebase;