import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({

    name : "movies",
    initialState : {
        NowPlayingMovies : null,
        PopularMovies : null,
        Toprated : null,
        trailerVideo : null
    },
    reducers : {
        addNowPlayingMovies : (state,action) =>{
            state.NowPlayingMovies = action.payload
        },
        addPopularMovies : (state,action)=>{
            state.PopularMovies = action.payload 
        },
        addTopRatedMovies : (state,action)=>{
            state.Toprated = action.payload 
        },
        addTrailerVideo : (state,action)=>{
            state.trailerVideo = action.payload
        }
    }
});


export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies} = movieSlice.actions;
export default movieSlice.reducer;