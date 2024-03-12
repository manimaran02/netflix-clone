import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const GptMovieSuggestion = () => {
  const gptSelector = useSelector(store => store.gpt)

  const {moviesName,moviesResult} = gptSelector
  if(!moviesName) return null
  if(!moviesResult) return null


  return (
    <div className="p-8 m-10 bg-black bg-opacity-80">
      
      <div>
        {moviesName.map((movieName,index) => <MovieList key={movieName} title={movieName} movies={moviesResult[index]}/>)}
      </div>
     
    </div>
  )
}

export default GptMovieSuggestion