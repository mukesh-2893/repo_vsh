const initialState = {
  tableHeader: ["UID", "Name", "Actions"],
  users: [],
  selectedUser: {},
  operation: "Add",
};

function users(state = initialState, actions) {
  switch (actions.type) {
    case "LOAD_USERS":
      return {
        ...state,
        users: actions.payload,
      };

    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, actions.payload],
      };

    case "DELETE_USER":
      var index = state.users.findIndex((i) => {
        return i.uid === actions.payload;
      });
      state.users.splice(index, 1);
      console.log(state.users);
      return {
        ...state,
        users: [...state.users],
      };

      case "SELECTED_USER" : 
        var { uid, name } = actions.payload;
        console.log(uid, name);
        console.log(actions.payload);
        return {
          ...state,
          selectedUser : {uid, name}
        };

      case "OPERATION" :
        return {
          ...state,
          operation : actions.payload
        };

      case "UPDATE" :
        console.log(actions.payload.uid);
        index = state.users.findIndex((e)=>{ return e.uid === actions.payload.uid })

        state.users[index].uid = actions.payload.uid;
        state.users[index].name = actions.payload.name;
        console.log(state.users);
        return {
          ...state,
          users : [...state.users]
        }

    default:
      return state;
  }
}

export default users;
