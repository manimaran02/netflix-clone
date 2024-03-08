import { IMG_CDN } from "../utils/constants"


const MovieCard = ({poster}) => {
  return (
    <div className="w-48 pr-4" >
        <img src = {IMG_CDN + poster} alt="cards"/>
    </div>
  )
}

export default MovieCard;