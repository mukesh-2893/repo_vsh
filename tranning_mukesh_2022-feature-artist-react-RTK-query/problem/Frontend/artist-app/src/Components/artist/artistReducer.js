import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./artistApiSlice";

const artistSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {
    setSelectedArtist: (state, action) => {
      state.selectedArtist = action.payload;
    },
    setOperation: (state, actions) => {
      state.operation = actions.payload;
    },
  },
});

export const getSelectedArtist = (state) => state.artistStore.selectedArtist;
export const getOperation = (state) => state.artistStore.operation;

export const { setSelectedArtist, setOperation } = artistSlice.actions;
export default artistSlice.reducer;
