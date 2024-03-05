import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../utils/firbase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const SignOut = () =>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  // const [isHover,setisHover] = useState(false)

  // const handleMouseOver = () =>{

  //   setisHover(true)

  // }

  // const handleMouseOut = () =>{
  //   setisHover(false)
  // }'
 return (
    <div className='absolute bg-gradient-to-b from-black w-full z-10 flex justify-between'>
        <img className=' w-44 mx-8 my-1' src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

        alt='logo'/>

    {/* <div className=' w-8 h-8 my-7 flex  mr-24' onClick={handleMouseOver} >   */}
         {user && <div className='flex p-2'> 
      <img src = {user?.photoURL ? user?.photoURL : "https://occ-0-2164-58.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" }
      alt='signin-logo' className= "w-10 h-10 my-7 mx-2 "/>
       {/* <div>
       <svg className="mt-3 ml-3 w-2 h-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
    <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
</svg>
</div> */}

    {/* {isHover && <div className='p-5 w-30 h-15  bg-black text-white block absolute mt-9 mr-20'>

       <div >Manimaran</div>
       <div>Vignesh</div>
       <div>Maddy</div>
      
      </div>
      } */}
   <button onClick={SignOut} className='text-white'>(Sign Out)</button>
    </div>}
   

    </div>
  )
}

export default Header