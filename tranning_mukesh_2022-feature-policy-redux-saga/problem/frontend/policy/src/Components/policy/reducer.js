const initialState = {
    tableHeader: ["PID", "Name", "AMOUNT", "LIMIT", "Actions"],
    policies: [],
    selectedPolicy: {},
    operation: "Add",
  };
  
  function policies(state = initialState, actions) {
    switch (actions.type) {
      case "LOAD_POLICIES":
        return {
          ...state,
          policies: actions.payload,
        };
  
      case "ADD_POLICY":
        return {
          ...state,
          policies: [...state.policies, actions.payload],
        };
  
      case "DELETE_POLICY":
        var index = state.policies.findIndex((i) => {
          return i.pid === actions.payload;
        });
        state.policies.splice(index, 1);
        console.log(state.policies);
        return {
          ...state,
          policies: [...state.policies],
        };
  
        case "SELECTED_POLICY" : 
          var { pid, name, amount, limit } = actions.payload;

          return {
            ...state,
            selectedPolicy : { pid, name, amount, limit }
          };
  
        case "OPERATION" :
          console.log(actions.payload);
          console.log(state.operation); 
          return {
            ...state,
            operation : actions.payload
          };
  
        case "UPDATE_POLICY" :
          index = state.policies.findIndex((e)=>{ return e.pid === actions.payload.pid })
          state.policies[index].pid = actions.payload.pid;
          state.policies[index].name = actions.payload.name;
          state.policies[index].amount = actions.payload.amount;
          state.policies[index].limit = actions.payload.limit;
          console.log(state.policies);
          return {
            ...state,
            policies : [...state.policies]
          }
  
      default:
        return state;
    }
  }
  
  export default policies;
  