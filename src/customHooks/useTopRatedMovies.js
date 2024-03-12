import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants"
import { addTopRatedMovies } from "../utils/MovieSlice";
import { useEffect } from "react";


const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    //Memoisation  
    const topRated = useSelector(store => store.movies.Toprated)
    const getTopratedMovies = async()=>{

   const data =  await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',options);

   const json = await data.json();
   

   dispatch(addTopRatedMovies(json.results));
        
}

useEffect(()=>{
    //Memoisation  
  !topRated && getTopratedMovies();
},[])


}


export default useTopRatedMovies;