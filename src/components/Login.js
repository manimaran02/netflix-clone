import { useState,useRef } from "react";
import Header from "./Header";
import { CheckValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utils/firbase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { AVATAR, BG_IMG } from "../utils/constants";

const Login = () => {

  

  const [isSignInForm,setSigninForm] = useState(true);
  const [errormessage,setErrormessage] = useState(null);

  const dispatch = useDispatch();
  
  

  const toggleForm = ()=>{
    setErrormessage(null)
    setSigninForm(!isSignInForm);
  }

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)


  
  // console.log(email.current.value)
  // console.log(password.current.value)


  const handleValidate = () => {
  
    const message = CheckValidateData(email.current.value,password.current.value);
    setErrormessage(message)
  
    if(message)return;

    if(!isSignInForm){
      
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value,name.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: AVATAR
        }).then(() => {
          
          // Profile updated!
          const {displayName,email,uid,photoURL}= auth.currentUser;
          dispatch(addUser({uid:uid , displayName : displayName , email : email , photoURL : photoURL}))
        }).catch((error) => {
          // An error occurred
          // ...
        });
      
      })
      .catch((error) => {
         const errorCode = error.code;
        const errorMessage = error.message;
        setErrormessage(errorCode+ "-" +errorMessage)
      });
    }
else{
  
  signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

  

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormessage(errorCode+ "-" +errorMessage)
  });
}


  }
  
 
  return (
    <div>
      <Header />

      <div className="absolute ">
        <img className="h-screen object-cover w-screen"
          src= {BG_IMG}
          alt="bg-img"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="bg-black absolute w-[80%] sm:w-[80%] md:w-3/12 p-8 md:p-12 my-32 m-auto right-0 left-0 text-white rounded-md bg-opacity-80">
        <h1 className="mb-12 font-semibold text-teal-50 text-2xl md:text-3xl ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        
        {!isSignInForm && 
        <div>
        <input
          ref={name}
          className="p-3 my-2 w-full bg-gray-700 rounded-sm"
          type="text"
          placeholder="Full Name"
        />
        </div>
         }
        <div className="mt-2">
        <input
        ref={email}
          className="p-3  w-full bg-gray-700 rounded-sm"
          type="text"
          placeholder="Email or Phone Number"
        />
        </div>
        <div className="mt-4 mb-8">
        <input
        ref={password}
        className="p-3 w-full bg-gray-700 rounded-sm relative"
          type="password"
          placeholder="Password"
        />
        </div>
        <p className="text-red-500">{errormessage}</p>
        
        <button  className="p-3 my-4 w-full bg-red-700 rounded-md" onClick={handleValidate}>
         {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <span className="my-8 " onClick={toggleForm}>{isSignInForm ?  <span className="text-slate-400">New to Netflix?<span className="text-white cursor-pointer hover:underline underline-offset-2">Sign up now.</span></span> : <span className="text-slate-400">Already registerd :<span className="text-white cursor-pointer hover:underline underline-offset-2">Sign In</span></span>}</span>
       
      </form>
      
    </div>
  );
};
export default Login;
