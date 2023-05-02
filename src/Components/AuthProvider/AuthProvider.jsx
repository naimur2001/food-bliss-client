import React, { createContext } from 'react';
import {   createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext=createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null);
  
  const [load,setLoad]=useState(true);
  
   const createUser=(email,password)=>{
     setLoad(true);
     return createUserWithEmailAndPassword(auth,email,password);
   }
 const signIn=(email,password)=>{
   setLoad(true);
   return signInWithEmailAndPassword(auth,email,password);
 }
 const googleSignIn=(googleProvider)=>{
setLoad(true);
return signInWithPopup(auth,googleProvider)
 }

const gitSignIn=(gitProvider)=>{
  setLoad(true);
  return signInWithPopup(auth,gitProvider);
}

 const logOut=()=>{
   setLoad(true)
   return signOut(auth);
 }
 
 useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,loggedUser=>{
     console.log("logout");
     setUser(loggedUser);
     setLoad(false);
   })
   return ()=>{
     unsubscribe();
   }
 },[])
 
  const authInfo=
  {
    user,
    load,
    createUser,
    signIn,
    logOut,
    googleSignIn,
    gitSignIn
  }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
