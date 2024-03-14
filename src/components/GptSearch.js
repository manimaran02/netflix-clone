import { useSelector } from "react-redux"
import { BG_IMG } from "../utils/constants"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchPage from "./GptSearchPage"

const GptSearch = () => {
  
  return (
    <>
    <div className="fixed -z-10">
        <img className="w-screen h-screen object-cover" src= {BG_IMG} alt="bg_img"  />
        </div>
        <div> 
        <GptSearchPage/>
        <GptMovieSuggestion/>
        </div>

    
    </>
  )
}

export default GptSearch