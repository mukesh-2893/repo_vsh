import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tableHeader: ["Id ", "Policy Name", "Amount", "Max Limit", "Actions"],
  policies: [],
  selectedPolicy: {},
  operation: "Add",
  status: "policy",
};

const policySlice = createSlice({
  name: "policy",
  initialState,
  reducers: {
    loadPolicies: (state, actions) => {
      state.policies = [...actions.payload];
    },

    deletePolicy: (state, actions) => {
      state.policies = [...actions.payload];
    },

    addPolicy: (state, actions) => {
      state.policies = [...actions.payload];
    },

    selectedPolicy: (state, actions) => {
      state.selectedPolicy = actions.payload;
    },

    operation: (state, actions) => {
      state.operation = actions.payload;
    },

    update: (state, actions) => {
      state.policies = [...actions.payload];
    },
  },
});

export const {
  loadPolicies,
  deletePolicy,
  addPolicy,
  selectedPolicy,
  operation,
  update,
} = policySlice.actions;
export default policySlice.reducer;
