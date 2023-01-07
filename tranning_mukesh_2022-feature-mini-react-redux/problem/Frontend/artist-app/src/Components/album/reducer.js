const initialState = {
  tableHeader: ["ID", "Album Name", "Artist Name", "Actions"],
  album: [],
  selectedAlbum: {},
  operation: "Add",
  artists: [],
};

function album(state = initialState, actions) {
  switch (actions.type) {
    case "LOAD_ALBUM":
      return {
        ...state,
        album: actions.payload,
      };
    case "LOAD_ARTIST":
      return {
        ...state,
        artist: actions.payload,
      };

    case "ADD_ALBUM":
      return {
        ...state,
        album: [...state.album, actions.payload],
      };

    case "DELETE_ALBUM":
      var index = state.album.findIndex((el) => {
        return el.id == actions.payload;
      });
      state.album.splice(index, 1);
      return {
        ...state,
        album: [...state.album],
      };

    case "SELECTED_ALBUM":
      var { id, name, artistName } = actions.payload;
      console.log(id, name, artistName);
      console.log(actions.payload);
      return {
        ...state,
        selectedAlbum: { id, name, artistName },
      };

    case "OPERATION":
      return {
        ...state,
        operation: actions.payload,
      };

    case "UPDATE_ALBUM":
      console.log(actions.payload, "reducer album call");
      var index = state.album.findIndex((e) => {
        return e.id === actions.payload.id;
      });
      console.log(state.album);

      state.album[index].id = actions.payload.id;
      state.album[index].name = actions.payload.albumName;
      state.album[index].artistName = actions.payload.artistName;
      console.log(state.album);
      return {
        ...state,
        album: [...state.album],
      };

    default:
      return state;
  }
}

export default album;
