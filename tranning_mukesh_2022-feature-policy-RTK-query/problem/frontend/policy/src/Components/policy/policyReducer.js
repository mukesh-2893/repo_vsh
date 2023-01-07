import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./policyApiSlice";

const policySlice = createSlice({
  name: "policy",
  initialState,
  reducers: {
    setSelectedPolicy: (state, action) => {
      state.selectedPolicy = action.payload;
    },
    setOperation: (state, actions) => {
      state.operation = actions.payload;
    },
  },
});

export const getSelectedPolicy = (state) => state.policyStore.selectedPolicy;
export const getOperation = (state) => state.policyStore.operation;

export const { setSelectedPolicy, setOperation } = policySlice.actions;
export default policySlice.reducer;
