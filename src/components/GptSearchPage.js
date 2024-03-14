import { useDispatch, useSelector } from "react-redux"
import LangSupport from "./LangSupport"
import { useRef } from "react"
import openai from "../utils/openai"
import { options } from "../utils/constants"
import { addMovieResults } from "../utils/Gptslice"


const GptSearchPage = () => {

  const langSelector = useSelector(store => store.config.lang)

  // console.log(langSelector)
  const searchText = useRef(null);
  const dispatch = useDispatch()

  const gptSearchMovie = async(movie) => {
    const movieGPT = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", options)
    const json =await movieGPT.json()
    return json.results
}  

  const handleChange = async() =>{

    const query = "Act as Movie Recommendation system and suggest some movies for the query" + searchText.current.value + ". only give my 5 movies,comma separated like example result given ahead. Example Results : Makkatha,Jilla,Theri,Thallumalla,RDX"
    const GPTSearch = await openai.chat.completions.create({
      messages: [{ role: 'user', content: query }],
      model: 'gpt-3.5-turbo',
     
    })
    // console.log(GPTSearch.choices[0].message.content)
    // console.log(searchText.current.value)

    const gptMovie = GPTSearch.choices[0].message.content.split(",")
     

    const movieResults = gptMovie.map(movie => gptSearchMovie(movie))

    const tmdbResults =await Promise.all(movieResults)
    console.log(tmdbResults)
    dispatch(addMovieResults({moviesName : gptMovie,moviesResult : tmdbResults}))

    // if(!movieResults){
    //   console.log("No movies")
    // }
    // dispatch(addMovieResults(tmdbResults))
}


  return (
    <div className="pt-[45%] md:pt-28 flex justify-center">
        <form className="w-full  md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
            <input
            ref={searchText}
             type="text" 
             placeholder={LangSupport[langSelector].placeholder} 
             className="col-span-8 md:col-span-9 m-4 p-2 md:p-3 md:rounded-lg rounded-sm"
              />
            <button className= "col-span-4 md:col-span-3 bg-red-600 text-white md:rounded-lg rounded-sm  py-1 md:px-4 md:py-2 m-4" onClick={handleChange} >{LangSupport[langSelector].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchPage