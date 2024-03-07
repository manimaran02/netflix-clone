import { useDispatch } from "react-redux";
import { Upcoming, options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/MovieSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
    const getUpcomingMovie = async() =>{
  
      const upcoming = await fetch(Upcoming,options);
  
      const data =await upcoming.json();
      // console.log(data.results);
      dispatch(addNowPlayingMovies(data.results))  
    }
  
    useEffect(()=>{
  
      getUpcomingMovie();
      
    },[])
   
}

export default useNowPlayingMovies;