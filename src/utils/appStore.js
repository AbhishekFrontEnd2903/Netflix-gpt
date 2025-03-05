import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    gpt: gptSlice,
    config: configReducer,
  },
});

export default appStore;
