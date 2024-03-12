import { createSlice } from "@reduxjs/toolkit"



  const Gptslice = createSlice({
    name : "gpt",
    initialState : {
        showGptSerach : false,
        moviesName : null,
        moviesResult : null
    },
   reducers :{ 
    toggleGptSearch : (state)=>{
        state.showGptSerach = !state.showGptSerach;
    },
    addMovieResults : (state,action)=>{
      const {moviesName,moviesResult} = action.payload
      state.moviesName = moviesName
      state.moviesResult = moviesResult
    },
  
    
}
  })


export default Gptslice.reducer;

export const {toggleGptSearch,addMovieResults} = Gptslice.actions;