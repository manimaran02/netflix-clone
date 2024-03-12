import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"
import movieReducer from "../utils/MovieSlice";
import gptReducer from "../utils/Gptslice";
import langReducer from "../utils/configSlice"

const appStore = configureStore({
    reducer : {
        user : userReducer,
        movies : movieReducer,
        gpt : gptReducer,
        config : langReducer,
    }
})

export default appStore;