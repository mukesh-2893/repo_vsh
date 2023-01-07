import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./albumApiSlice";

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    setSelectedAlbum: (state, action) => {
      state.selectedAlbum = action.payload;
    },
    setOperation: (state, actions) => {
      state.operation = actions.payload;
    },
  },
});

export const getSelectedAlbum = (state) => state.albumStore.selectedAlbum;
export const getOperation = (state) => state.albumStore.operation;

export const { setSelectedAlbum, setOperation } = albumSlice.actions;
export default albumSlice.reducer;
