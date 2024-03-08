import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const Secondarycontainer = () => {
  const movies = useSelector(store => store.movies)
  // console.log(movies)
  
  return (
    <div className="bg-black">
      <div className="-mt-60 pl-16 relative z-20">
      <MovieList title = {"Top Rated "} movies = {movies?.Toprated}/>
      <MovieList title = {"Trending "} movies = {movies?.NowPlayingMovies}/>
      <MovieList title = {"Popular "} movies = {movies?.PopularMovies}/>
      <MovieList title = {"Now Playing"} movies = {movies?.NowPlayingMovies}/>
      {/* <MovieCard/> */}
    </div>
    </div>
  )
}

export default Secondarycontainer;