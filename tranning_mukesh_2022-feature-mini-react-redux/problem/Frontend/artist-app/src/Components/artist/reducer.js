const initialState = {
  tableHeader: ["AID", "Name", "Actions"],
  artist: [],
  selectedArtist: {},
  operation: "Add",
};

function artist(state = initialState, actions) {
  switch (actions.type) {
    case "LOAD_ARTIST":
      return {
        ...state,
        artist: actions.payload,
      };

    case "SELECTED_ARTIST":
      return {
        ...state,
        selectedArtist: actions.payload,
      };

    case "OPERATION":
      console.log(actions.payload);
      return {
        ...state,
        operation: actions.payload,
      };

    default:
      return state;
  }
}

export default artist;
