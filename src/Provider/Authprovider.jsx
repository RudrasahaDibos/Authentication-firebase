import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Fribase/Fribase.init";
import { GoogleAuthProvider } from "firebase/auth";


 export const AuthContext = createContext(null)
 const googleprovider = new GoogleAuthProvider();

const Authprovider = ({children}) => {
    const [user,setuser] = useState(null)
    const [loading,setloading] = useState(true)

    const CreateRegister =(email,password)=>{
        setloading(true)
   return  createUserWithEmailAndPassword(auth,email,password)
   
    }
    const signlogin =(email,password)=>{
        setloading(true)
       return  signInWithEmailAndPassword(auth,email,password)
    }

    const logout =() =>{
        setloading(true)
        signOut(auth)
    }
    const googlesign =()=>{
        setloading(true)
      return signInWithPopup(auth,googleprovider)
    }
    
useEffect(()=>{
     const unScpcripe = onAuthStateChanged(auth,(currentUser)=>{
        console.log('User in here ',currentUser)
            setuser(currentUser)
            setloading(false)
     })
     return ()=>{
        unScpcripe()
     }
},[])
    
const authinfo ={user,CreateRegister,signlogin,logout,googlesign,loading}



    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;