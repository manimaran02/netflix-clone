import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants"
import { addPopularMovies } from "../utils/MovieSlice";
import { useEffect } from "react";


const usePopularMovie = () => {
    const dispatch = useDispatch()
    //Memoisation  
    const popularMmovie = useSelector(store=>store.movies.PopularMovies)

    const getPopularMovies = async() =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",options);
    const json = await data.json();
    
    dispatch(addPopularMovies(json.results))
    }
 
  useEffect(()=>{
    //Memoisation  
  !popularMmovie && getPopularMovies();
  },[])
   
}

export default usePopularMovie