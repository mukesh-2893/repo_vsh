import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { addUsers, deleteUsers, fetchUsers, updateUser } from "./userService";
const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState({
  tableHeader: ["UID", "Name", "Actions"],
  users: [],
  selectedUser: {},
  operation: "Add",
});



const userSlice = createSlice({
  name: "policy",
  initialState,
  reducers: {
    load: (state, actions) => {
      // state.users = [...actions.payload];
      // console.log(actions.payload);
      userAdapter.addMany(state, actions.payload)
    },

    // deleteUser : userAdapter.removeOne(),
    deleteUser: (state, actions) => {
      // state.users = [...actions.payload];
      console.log(actions.payload);
      userAdapter.removeOne(state, actions.payload)
    },

    addUser: (state, actions) => {
      console.log(actions.payload);
      userAdapter.addMany(state, actions.payload)
      // state.users = [...actions.payload];
    },

    selectedUser: (state, actions) => {
      state.selectedUser = actions.payload;
    },

    operation: (state, actions) => {
      state.operation = actions.payload;
    },

    updateUser: (state, actions) => {
      // state.users = [...actions.payload];
      userAdapter.updateOne(state, actions.payload)
    },
  },
  
extraReducers: (builder) => {
  builder
    .addCase(fetchUsers.pending, (state, action) => {
      state.isPending = true;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      userSlice.caseReducers.load(state, action);
      state.isSuccess = true;
    })
    .addCase(addUsers.pending, (state, action) => { })
    .addCase(addUsers.fulfilled, (state, action) => {
      userSlice.caseReducers.addUser(state, action);
    })
    .addCase(deleteUsers.pending, (state, action) => { })
    .addCase(deleteUsers.fulfilled, (state, action) => {
      userSlice.caseReducers.deleteUser(state, action);
    })
    .addCase(updateUser.pending, (state, action) => { })
    .addCase(updateUser.fulfilled, (state, action) => {
      userSlice.caseReducers.updateUser(state, action);
    })
  }

});


export const {
  loadUsers,
  deleteUser,
  addUser,
  selectedUser,
  operation,
  update,
} = userSlice.actions;
export default userSlice.reducer;