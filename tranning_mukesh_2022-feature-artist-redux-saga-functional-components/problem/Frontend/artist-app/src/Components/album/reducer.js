const initialState = {
  tableHeader: ["ID", "Album Name", "Artist Name", "Actions"],
  album: [],
  selectedAlbum: {},
  operation: "Add",
};

function album(state = initialState, actions) {
  switch (actions.type) {
    case "LOAD_ALBUM":
      // console.log(actions.payload);
      return {
        ...state,
        album: actions.payload,
      };

    case "ADD_ALBUM":
      return {
        ...state,
        album: [...state.album, actions.payload],
      };

    case "DELETE_ALBUM":
      var index = state.album.findIndex((i) => {
        return i.id === actions.payload;
      });
      state.album.splice(index, 1);
      // console.log(state.album);
      return {
        ...state,
        album: [...state.album],
      };

    case "SELECTED_ALBUM":
      var { id, albumName, artistName } = actions.payload;
      return {
        ...state,
        selectedAlbum: { id, albumName, artistName },
      };

    case "OPERATION":
      return {
        ...state,
        operation: actions.payload,
      };

    case "UPDATE_ALBUM":
      console.log(actions.payload.id);
      index = state.album.findIndex((e) => {
        return e.id === actions.payload.id;
      });

      state.album[index].id = actions.payload.id;
      state.album[index].albumName = actions.payload.albumName;
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
