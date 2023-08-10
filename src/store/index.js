import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./movieSlice";
import { songSlice } from "./songSlice";

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
    movies: movieSlice.reducer,
  },
});

export { store };
