import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tableHeader: ["UID", "Name", "Actions"],
  users: [],
  selectedUser: {},
  operation: "Add",
};



const userSlice = createSlice({
  name: "policy",
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




// function users(state = initialState, actions) {
//   switch (actions.type) {
//     case "LOAD_USERS":
//       return {
//         ...state,
//         users: actions.payload,
//       };

//     case "ADD_USER":
//       return {
//         ...state,
//         users: [...state.users, actions.payload],
//       };

//     case "DELETE_USER":
//       var index = state.users.findIndex((i) => {
//         return i.uid === actions.payload;
//       });
//       state.users.splice(index, 1);
//       console.log(state.users);
//       return {
//         ...state,
//         users: [...state.users],
//       };

//       case "SELECTED_USER" : 
//         var { uid, name } = actions.payload;
//         return {
//           ...state,
//           selectedUser : {uid, name}
//         };

//       case "OPERATION" :
//         return {
//           ...state,
//           operation : actions.payload
//         };

//       case "UPDATE" :
//         console.log(actions.payload.uid);
//         index = state.users.findIndex((e)=>{ return e.uid === actions.payload.uid })

//         state.users[index].uid = actions.payload.uid;
//         state.users[index].name = actions.payload.name;
//         console.log(state.users);
//         return {
//           ...state,
//           users : [...state.users]
//         }

//     default:
//       return state;
//   }
// }

// export default users;
