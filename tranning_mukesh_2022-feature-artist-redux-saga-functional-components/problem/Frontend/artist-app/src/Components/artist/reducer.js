const initialState = {
  tableHeader: ["UID", "Name", "Actions"],
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

    case "ADD_ARTIST":
      console.log("reducer call when add click");
      return {
        ...state,
        artist: [...state.artist, actions.payload],
      };

    case "DELETE_ARTIST":
      var index = state.artist.findIndex((i) => {
        return i.aid === actions.payload;
      });
      state.artist.splice(index, 1);
      console.log(state.artist);
      return {
        ...state,
        artist: [...state.artist],
      };

    case "SELECTED_ARTIST":
      var { aid, name } = actions.payload;
      console.log(aid, name);
      console.log(actions.payload);
      return {
        ...state,
        selectedArtist: { aid, name },
      };

    case "OPERATION":
      return {
        ...state,
        operation: actions.payload,
      };

    case "UPDATE_ARTIST":
      console.log(actions.payload.aid);
      index = state.artist.findIndex((e) => {
        return e.aid === actions.payload.aid;
      });

      state.artist[index].aid = actions.payload.aid;
      state.artist[index].name = actions.payload.name;
      console.log(state.artist);
      return {
        ...state,
        artist: [...state.artist],
      };

    default:
      return state;
  }
}

export default artist;
