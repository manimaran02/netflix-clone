import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";


const VideoBackground = ({movies_id}) => {

  useMovieTrailer(movies_id)
  const trailerSelector = useSelector(store => store.movies?.trailerVideo)



  return (
    <div>
      <iframe className="w-screen aspect-video top-0"
      src={"https://www.youtube.com/embed/" + trailerSelector?.key + "?autoplay=1&mute=1"}
      title="YouTube video player" 
      loop={true}
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
        web-share" allowFullScreen></iframe>
    </div>
    
  )
}

export default VideoBackground