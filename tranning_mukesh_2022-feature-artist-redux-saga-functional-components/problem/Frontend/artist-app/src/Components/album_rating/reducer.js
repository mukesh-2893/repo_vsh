const initialState = {
    users: [],
    albumsRating: [],
    selectedUserId:0
  };

function images(state = initialState, actions) {
  switch (actions.type) {
    case "LOAD_RATINGS":
        // console.log(actions.payLoad, "reducer wala");
      return {
        ...state,
        albumsRating: actions.payload,
      };

    case "USER_RATING_ACTION" :
      // console.log("in ARreducer useridselected id is",actions.payload.id);
      // console.log("cont.. result is",actions.payload.result)
      return {
        ...state,
        selectedUserId : actions.payload.id,
        albumsRating : actions.payload.result,
      }

    default:
      return state;
  }
}

export default images;
