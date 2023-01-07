import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import {
  allPolicy,
  addPolicy,
  updatePolicy,
  deletePolicy,
} from "./policyService";
const policyAdapter = createEntityAdapter();

const initialState = policyAdapter.getInitialState({
  tableHeader: ["Id ", "Policy Name", "Amount", "Max Limit", "Actions"],
  policies: [],
  selectedPolicy: {},
  operation: "Add",
  status: "policy",
});

const policySlice = createSlice({
  name: "policy",
  initialState,
  reducers: {
    loadPolicies: (state, actions) => {
      // console.log(actions.payload);
      // state.policies = [...actions.payload];
      policyAdapter.addMany(state, actions.payload);
    },

    deletePolicies: (state, actions) => {
      // state.policies = [...actions.payload];
      policyAdapter.removeOne(state, actions.payload);
    },

    add: (state, actions) => {
      // state.policies = [...actions.payload];
      policyAdapter.addMany(state, actions.payload);
    },

    selected: (state, actions) => {
      state.selectedPolicy = actions.payload;
    },

    operation: (state, actions) => {
      state.operation = actions.payload;
    },

    update: (state, actions) => {
      // console.log(actions.payload);
      // state.policies = [...actions.payload];
      policyAdapter.updateOne(state, actions.payload)
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(allPolicy.pending, (state, action) => {
        state.isPending = true;
      })
      .addCase(allPolicy.fulfilled, (state, action) => {
        policySlice.caseReducers.loadPolicies(state, action);
        state.isSuccess = true;
      })
      .addCase(addPolicy.pending, (state, action) => {})
      .addCase(addPolicy.fulfilled, (state, action) => {
        policySlice.caseReducers.add(state, action);
      })
      .addCase(deletePolicy.pending, (state, action) => {})
      .addCase(deletePolicy.fulfilled, (state, action) => {
        console.log(action);
        policySlice.caseReducers.deletePolicies(state, action);
      })
      .addCase(updatePolicy.pending, (state, action) => {})
      .addCase(updatePolicy.fulfilled, (state, action) => {
        policySlice.caseReducers.update(state, action);
      });
  },
});

export const {
  loadPolicies,
  add,
  deletePolicies,
  selected,
  operation,
  update,
} = policySlice.actions;

export default policySlice.reducer;
