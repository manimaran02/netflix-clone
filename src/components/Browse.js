import Header from './Header'
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import usePopularMovie from '../customHooks/usePopularMovie';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';



const Browse = () => {
const gptSelector = useSelector(store => store.gpt.showGptSerach) 

useNowPlayingMovies();
usePopularMovie();
useTopRatedMovies();

 
  return (
    <div>
       
       <Header/>
       {gptSelector ?
       <GptSearch/> : 
       <>
       
       <Maincontainer/>
       <Secondarycontainer/>
       </>
      }
       
       


    </div>
  )
}

export default Browse