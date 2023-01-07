import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { allUserPolicy , updateUserPolicy, addUserPolicy, deleteUserPolicy, claimSettlement} from "./userPolicyService";
const userPolicyAdapter = createEntityAdapter();
const initialState = userPolicyAdapter.getInitialState( {
  tableHeader: [
    "UPID",
    "User Name",
    "Policy Name",
    "Amount",
    "Limit",
    "Actions",
    "Req Amount",
    " ",
  ],
  userPolicy: [],
  selectedUserPolicy: {},
  operation: "Add",
});


const UserPolicySlice = createSlice({
  name: "policy",
  initialState,
  reducers: {
    load: (state, actions) => {
      // state.userPolicy = [...actions.payload];
      userPolicyAdapter.addMany(state, actions)
    },

    deleteuserpolicy: (state, actions) => {
      // state.userPolicy = [...actions.payload];
      userPolicyAdapter.removeOne(state, actions.payload)
    },

    add: (state, actions) => {
      // state.userPolicy = [...actions.payload];
      userPolicyAdapter.addOne(state, actions.payload)
    },

    selectedUserPolicy: (state, actions) => {
      state.selectedUserPolicy = actions.payload;
    },

    operation: (state, actions) => {
      state.operation = actions.payload;
    },

    update: (state, actions) => {
      // state.userPolicy = [...actions.payload];
      userPolicyAdapter.updateOne(state, actions.payload)
    },
    claimPolicy : (state, actions)=>{
      userPolicyAdapter.updateOne(state, actions.payload);
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(allUserPolicy.pending, (state, action) => {
        state.isPending = true;
      })
      .addCase(allUserPolicy.fulfilled, (state, action) => {
        UserPolicySlice.caseReducers.load(state, action);
        state.isSuccess = true;
      })
      .addCase(addUserPolicy.pending, (state, action) => {})
      .addCase(addUserPolicy.fulfilled, (state, action) => {
        UserPolicySlice.caseReducers.add(state, action);
      })
      .addCase(deleteUserPolicy.pending, (state, action) => {})
      .addCase(deleteUserPolicy.fulfilled, (state, action) => {
        console.log(action);
        UserPolicySlice.caseReducers.deleteuserpolicy(state, action);
      })
      .addCase(updateUserPolicy.pending, (state, action) => {})
      .addCase(updateUserPolicy.fulfilled, (state, action) => {
        UserPolicySlice.caseReducers.update(state, action);
      })
      .addCase(claimSettlement.pending, (state, action) => {})
      .addCase(claimSettlement.fulfilled, (state, action) => {
        UserPolicySlice.caseReducers.claimPolicy(state, action);
      });
  },
});

export const {
  load,
  deleteuserpolicy,
  add,
  selectedUserPolicy,
  operation,
  update,
  claimPolicy
} = UserPolicySlice.actions;
export default UserPolicySlice.reducer;
