
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { apiSlice } from "./api";
import userReducer from "../components/users/userReducer";
import postReducer from "../components/posts/postReducer";


const store = configureStore({
    
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    userStore : userReducer,
    postStore : postReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;