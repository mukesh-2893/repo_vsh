const initialState = {
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
  selectedUP: {},
  operation: "Add",
};

function userPolicy(state = initialState, actions) {
  switch (actions.type) {
    case "LOAD_UP":
      return {
        ...state,
        userPolicy: actions.payload,
      };

    case "ADD_UP":
      return {
        ...state,
        userPolicy: [...state.userPolicy, actions.payload],
      };

    case "DELETE_UP":
      var index = state.userPolicy.findIndex((i) => {
        return i.upid === actions.payload;
      });
      state.userPolicy.splice(index, 1);
      console.log(state.policies);
      return {
        ...state,
        userPolicy: [...state.userPolicy],
      };

    case "SELECTED_UP":
      var { upid, uid, pid, userName, policyName, amount, limit } =
        actions.payload;

      return {
        ...state,
        selectedUP: { upid, uid, pid, userName, policyName, amount, limit },
      };

    case "OPERATION":
      return {
        ...state,
        operation: actions.payload,
      };

    case "UPDATE_UP":
      index = state.userPolicy.findIndex((e) => {
        return e.upid === actions.payload.upid;
      });
      state.userPolicy[index].upid = actions.payload.upid;
      state.userPolicy[index].uid = actions.payload.uid;
      state.userPolicy[index].pid = actions.payload.pid;
      state.userPolicy[index].userName = actions.payload.userName;
      state.userPolicy[index].policyName = actions.payload.policyName;
      state.userPolicy[index].amount = actions.payload.amount;
      state.userPolicy[index].limit = actions.payload.limit;
      console.log(state.userPolicy);
      return {
        ...state,
        userPolicy: [...state.userPolicy],
      };

    case "LOAD_CLAIM":
      return {
        ...state,
        userPolicy: actions.payload,
      };

    default:
      return state;
  }
}

export default userPolicy;
