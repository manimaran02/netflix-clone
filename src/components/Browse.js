import Header from './Header'
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import usePopularMovie from '../customHooks/usePopularMovie';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';


const Browse = () => {
 
useNowPlayingMovies();
usePopularMovie();
useTopRatedMovies();
 
  return (
    <div>
       
       <Header/>
       <Maincontainer/>
       <Secondarycontainer/>


    </div>
  )
}

export default Browse