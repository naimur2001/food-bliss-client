import React, { createContext } from 'react';
import {   GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext=createContext(null);
const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider();
const gitProvider=new GithubAuthProvider()
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
 const googleSignIn=()=>{
  setLoad(true);
  
return signInWithPopup(auth,googleProvider)

 }

const gitSignIn=()=>{
  setLoad(true);
  return signInWithPopup(auth,gitProvider);
}

 const logOut=()=>{
   setLoad(true)
   return signOut(auth);
 }
 
 useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,loggedUser=>{
     setUser(loggedUser);
     setLoad(false);
   })
   return ()=>{
     unsubscribe();
   }
 },[])
 
const updateInfo=(name,photo)=>{
  setLoad(true);
  return updateProfile(auth.currentUser, {
    displayName: name, photoURL:photo 
  })
}


  const authInfo=
  {
    user,
    load,
    createUser,
    signIn,
    logOut,
    googleSignIn,
    gitSignIn,
    updateInfo
  }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
