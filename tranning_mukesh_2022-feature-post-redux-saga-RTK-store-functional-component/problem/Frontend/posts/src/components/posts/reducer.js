import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    posts: [],
    selectedPost: {},
    operation: "Add",
  };

const postSlice = createSlice({
  name: "policy",
  initialState,
  reducers: {
    loadPosts: (state, actions) => {
      state.posts = [...actions.payload];
    },

    deletePost: (state, actions) => {
      state.posts = [...actions.payload];
    },

    addPost: (state, actions) => {
      state.posts = [...actions.payload];
    },

    selectedPost: (state, actions) => {
      state.selectedPost = actions.payload;
    },

    operation: (state, actions) => {
      state.operation = actions.payload;
    },

    update: (state, actions) => {
      state.posts = [...actions.payload];
    },

    likes : (state, actions) =>{
      state.posts = [...actions.payload];
    }
  },
});

export const {
  loadPosts,
  deletePost,
  addPost,
  selectedPost,
  operation,
  update,
  likes
} = postSlice.actions;
export default postSlice.reducer;
