import { useEffect } from "react";
import { addTrailerVideo } from "../utils/MovieSlice";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";


const useMovieTrailer = (movies_id) => {

    const dispatch = useDispatch();
  
    const fetchData = async () =>{
        const mainMovie = await fetch("https://api.themoviedb.org/3/movie/"+movies_id+"/videos",options);
        const json = await mainMovie.json();
        
    
        const filteredData = json.results.filter(video => video.type === "Trailer")
        const trailer = (filteredData.length ? filteredData[0] : json.results[0])
       
        dispatch(addTrailerVideo(trailer));
      }
    
      useEffect(()=>{
        fetchData();
      },[])
}

export default useMovieTrailer