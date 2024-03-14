import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect} from 'react'
import { auth } from '../utils/firbase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { LANG_SUPPORT, LOGO } from '../utils/constants';
import { toggleGptSearch } from '../utils/Gptslice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const gptSearch = useSelector(store => store.gpt.showGptSerach)
  const dispatch = useDispatch();

 
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
  
  const handleSearch = ()=>{
    
    dispatch(toggleGptSearch())
    
  }

  useEffect(()=>{
 
  const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {displayName,email,uid,photoURL}= user
        
        dispatch(addUser({uid:uid , displayName : displayName , email : email , photoURL : photoURL}))
        navigate("/browse");
      
        // ...
      } else {
        dispatch(removeUser())
        navigate("/")
        // User is signed out
        // ...
      }
    });


    //Unsubscribe when  the components is unmount (because onAuthStateChanged is render every time header is rendered so that ,unmount the onAuth component)
    return () => unsubscribe();
  },[])

  const handleChange = (e) =>{
    dispatch(changeLanguage(e.target.value))
  }

 return (
    <div className='absolute bg-gradient-to-b from-black w-full z-10 flex flex-col md:flex-row justify-between '>
        <img className=' w-44 h-16 mx-auto md:mx-6 my-2 ' src = {LOGO}

        alt='logo'/>

    {/* <div className=' w-8 h-8 my-7 flex  mr-24' onClick={handleMouseOver} >   */}
         {user && <div className='flex p-2 justify-center'> 
         <div>
          
         {gptSearch && <select className='p-1 rounded-md bg-gray-700 text-white' onChange={handleChange}>
            {LANG_SUPPORT.map(lang => <option key={lang.identity} value={lang.identity}>{lang.name}</option>)}
          </select>
         }
         <button className='px-4 py-2 mx-4 my-3 bg-blue-700 text-white rounded-lg' onClick={handleSearch}>{gptSearch ? "Home Page": "GPT Search"  }</button>
        </div>
      <img src = {user?.photoURL}
      alt='signin-logo' className= "w-10 h-10 my-3 mx-2 "/>
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