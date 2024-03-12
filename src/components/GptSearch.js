import { useSelector } from "react-redux"
import { BG_IMG } from "../utils/constants"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchPage from "./GptSearchPage"

const GptSearch = () => {
  
  return (
    <div >
        
        <img src= {BG_IMG} alt="bg_img" className="fixed -z-10" />
        <GptSearchPage/>
        <GptMovieSuggestion/>
       
    </div>
  )
}

export default GptSearch