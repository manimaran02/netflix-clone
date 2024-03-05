import React, { useEffect } from 'react'
import Login from "./Login"
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/UserSlice';
import {auth} from "../utils/firbase"
import { onAuthStateChanged } from 'firebase/auth'



const Body = () => {
  const dispatch = useDispatch();

   useEffect(()=>{
 
     onAuthStateChanged(auth, (user) => {
       if (user) {
         // User is signed in, see docs for a list of available properties
         // https://firebase.google.com/docs/reference/js/auth.user
         const {displayName,email,uid,photoURL}= user
         
         dispatch(addUser({uid:uid , displayName : displayName , email : email , photoURL : photoURL}))
       
         // ...
       } else {
         dispatch(removeUser())
    
         // User is signed out
         // ...
       }
     });
   },[])

  // const dispatch = useDispatch()
  const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Login/>
    },
    {
        path : "/browse",
        element : <Browse/>
    }
  ])  


  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;