import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { fetchUsers } from "../components/users/userService";
import thunk from "redux-thunk";
import { fetchPosts } from "../components/posts/postService";


const store = configureStore({
    
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([ thunk]),
});

store.dispatch(fetchUsers);
store.dispatch(fetchPosts)

export default store;