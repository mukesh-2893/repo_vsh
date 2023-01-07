import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { addPostThunk, deletePostThunk, fetchPosts, likePostThunk, updatePostThunk } from "./postService";

const postAdapter = createEntityAdapter();

const initialState = postAdapter.getInitialState({
    posts: [],
    selectedPost: {},
    operation: "Add",
  });

const postSlice = createSlice({
  name: "policy",
  initialState,
  reducers: {
    loadPosts: (state, actions) => {
      // state.posts = [...actions.payload];
      postAdapter.addMany(state, actions.payload)
    },

    deletePost: (state, actions) => {
      // state.posts = [...actions.payload];
      postAdapter.removeOne(state, actions.payload)
    },

    addPost: (state, actions) => {
      // state.posts = [...actions.payload];
      postAdapter.addOne(state, actions.payload)
    },

    selectedPost: (state, actions) => {
      state.selectedPost = actions.payload;
    },

    operation: (state, actions) => {
      state.operation = actions.payload;
    },

    update: (state, actions) => {
      postAdapter.updateOne(state, actions.payload)
    },

    likes : (state, actions) =>{
      // state.posts = [...actions.payload];
      postAdapter.upsertMany(state, actions.payload)
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.isPending = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        postSlice.caseReducers.loadPosts(state, action);
        state.isSuccess = true;
      })
      .addCase(addPostThunk.pending, (state, action) => { })
      .addCase(addPostThunk.fulfilled, (state, action) => {
        postSlice.caseReducers.addPost(state, action);
      })
      .addCase(deletePostThunk.pending, (state, action) => { })
      .addCase(deletePostThunk.fulfilled, (state, action) => {
        postSlice.caseReducers.deletePost(state, action);
      })
      .addCase(updatePostThunk.pending, (state, action) => { })
      .addCase(updatePostThunk.fulfilled, (state, action) => {
        postSlice.caseReducers.update(state, action);
      })
      .addCase(likePostThunk.pending, (state, action) => { })
      .addCase(likePostThunk.fulfilled, (state, action) => {
        postSlice.caseReducers.likes(state, action);
      })
    }
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
