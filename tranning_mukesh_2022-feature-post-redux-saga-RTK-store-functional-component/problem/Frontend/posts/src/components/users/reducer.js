
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tableHeader: ["UID", "Name", "Actions"],
  users: [],
  selectedUser: {},
  operation: "Add",
};



const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadUsers: (state, actions) => {
      state.users = [...actions.payload];
    },

    deleteUser: (state, actions) => {
      state.users = [...actions.payload];
    },

    addUser: (state, actions) => {
      state.users = [...actions.payload];
    },

    selectedUser: (state, actions) => {
      state.selectedUser = actions.payload;
    },

    operation: (state, actions) => {
      state.operation = actions.payload;
    },

    update: (state, actions) => {
      state.users = [...actions.payload];
    },
  },
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