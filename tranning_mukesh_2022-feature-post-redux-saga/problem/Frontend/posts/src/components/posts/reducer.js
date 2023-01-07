const initialState = {
    posts: [],
    selectedPost: {},
    operation: "Add",
  };
  
  function posts(state = initialState, actions) {
    switch (actions.type) {
      case "LOAD_POSTS":
        return {
          ...state,
          posts: actions.payload,
        };
  
      case "ADD_POST":
        return {
          ...state,
          posts: [...state.posts, actions.payload],
        };
  
      case "DELETE_POST":
        var index = state.posts.findIndex((p) => {
          return p.pid === actions.payload;
        });
        state.posts.splice(index, 1);
        // console.log(state.users);
        return {
          ...state,
          posts: [...state.posts],
        };
  
        case "SELECTED_POST" :
          const { pid, uid, title, post, userName } = actions.payload;
          // console.log(actions.payload, uid, "reducer call");
          return {
            ...state,
            selectedPost : { pid, uid, title, post, userName }
          };
  
        case "OPERATION" :
          return {
            ...state,
            operation : actions.payload
          };
  
        case "UPDATE_POST" :
          console.log(actions.payload.uid);
          index = state.posts.findIndex((e)=>{ return e.pid === actions.payload.pid })
  
          state.posts[index].title = actions.payload.title;
          state.posts[index].post = actions.payload.post;
          console.log(state.users);
          return {
            ...state,
            posts : [...state.posts]
          }

          case "LIKE_POST":
            // console.log(actions.payload.uid);
            index = state.posts.findIndex((e)=>{ return e.pid === actions.payload.pid })
            state.posts[index].likes.push(actions.payload.uid)
            return{
              ...state,
              posts : [...state.posts]
            }
  
      default:
        return state;
    }
  }
  
  export default posts;