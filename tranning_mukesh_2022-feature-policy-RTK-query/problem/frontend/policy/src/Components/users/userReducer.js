import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./userApiSlice";

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setOperation: (state, actions) => {
      state.operation = actions.payload;
    },
  },
});

export const getSelectedUser = (state) => state.userStore.selectedUser;
export const getOperation = (state) => state.userStore.operation;

export const { setSelectedUser, setOperation } = usersSlice.actions;
export default usersSlice.reducer;
