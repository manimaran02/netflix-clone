import { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInForm,setSigninForm] = useState(true);

  const toggleForm = ()=>{
    setSigninForm(!isSignInForm);
  }

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>
      <form className="bg-black absolute w-3/12  p-12 my-28 m-auto right-0 left-0 text-white rounded-md bg-opacity-80">
        <h1 className="my-6 font-semibold text-teal-50 text-3xl ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        
        {!isSignInForm && <input
          className="p-3 my-2 w-full bg-gray-700 rounded-sm"
          type="text"
          placeholder="Full Name"
        /> }
        
        <input
          className="p-3 my-2 w-full bg-gray-700 rounded-sm"
          type="text"
          placeholder="Email or Phone Number"
        />
        <input
          className="p-3 my-2 mb-8  w-full bg-gray-700 rounded-sm"
          type="password"
          placeholder="Password"
        />
        <button className="p-3 my-4 w-full bg-red-700 rounded-md">
          Sign In
        </button>
        <p className="my-8 cursor-pointer" onClick={toggleForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already registerd : Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
