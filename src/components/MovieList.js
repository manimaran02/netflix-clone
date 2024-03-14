import MovieCard from "./MovieCard";


const MovieList = ({title,movies}) => {

    //  console.log(movies);
    if(!movies) return;
    return (
    <div className="px-6">
        <h1 className="text-xl md:text-3xl py-3 text-white">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar ">
       
        <div className="flex ">
        {movies.map(movie => <MovieCard key={movie.id} poster={movie.poster_path} />)}
    </div>
        </div>
    </div>
  )
}

export default MovieList;