import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./movieSplice";
import { songSlice } from "./songSplice";

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
    movies: movieSlice.reducer,
  },
});

export { store };
