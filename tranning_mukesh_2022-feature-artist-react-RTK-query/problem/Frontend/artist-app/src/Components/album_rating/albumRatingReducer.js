import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./albumRatingApiSlice";

const albumRatingSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    setSelectedUserId: (state, action) => {
      state.selectedUserId = action.payload;
    },
    
  },
});

export const getSelectedUserId = (state) => state.albumRatingStore.selectedUserId;

export const { setSelectedUserId } = albumRatingSlice.actions;
export default albumRatingSlice.reducer;
