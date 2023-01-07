export function loadAlbum(data) {
  return {
    type: "LOAD_ALBUM",
    payload: data,
  };
}

export function addAlbum(obj) {
  console.log("ADD_ALBUM");
  return {
    type: "ADD_ALBUM",
    payload: obj,
  };
}

export function deleteAlbum(id) {
  return {
    type: "DELETE_ALBUM",
    payload: id,
  };
}

export function selectedAlbum(obj) {
  return {
    type: "SELECTED_ALBUM",
    payload: obj,
  };
}

export function operation(obj) {
  return {
    type: "OPERATION",
    payload: obj,
  };
}

export function updateAlbum(obj) {
  return {
    type: "UPDATE_ALBUM",
    payload: obj,
  };
}
