import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api";
import userReducer from "../Components/users/userReducer";
import artistReducer from "../Components/artist/artistReducer";
import albumReducer from "../Components/album/albumReducer";
import albumRatingReducer from "../Components/album_rating/albumRatingReducer";

const store = configureStore({
    
  reducer: {
    userStore : userReducer,
    artistStore : artistReducer,
    albumStore : albumReducer,
    albumRatingStore : albumRatingReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

});

export default store;