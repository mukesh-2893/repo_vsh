import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./userPolicyApiSlice";

const userPolicySlice = createSlice({
  name: "userPolicy",
  initialState,
  reducers: {
    setSelectedUserPolicy: (state, action) => {
      state.selectedUserPolicy = action.payload;
    },
    setOperation: (state, actions) => {
      state.operation = actions.payload;
    },
  },
});

export const getSelectedUserPolicy = (state) =>
  state.userPolicyStore.selectedUserPolicy;
export const getOperation = (state) => state.userPolicyStore.operation;

export const { setSelectedUserPolicy, setOperation } = userPolicySlice.actions;
export default userPolicySlice.reducer;
