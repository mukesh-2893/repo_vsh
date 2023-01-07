import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./postApiSlice";

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    setOperation: (state, actions) => {
      state.operation = actions.payload;
    },
  },
});

export const getSelectedPost = (state) => state.postStore.selectedPost;
export const getOperation = (state) => state.postStore.operation;

export const { setSelectedPost, setOperation } = postSlice.actions;
export default postSlice.reducer;