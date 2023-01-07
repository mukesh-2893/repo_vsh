export function loadAlbum(data) {
  return {
    type: "LOAD_ALBUM",
    payload: data,
  };
}

export function addAlbum(obj) {
  return {
    type: "ADD_ALBUM",
    payload: obj,
  };
}

export function deleteAlbum(obj) {
  return {
    type: "DELETE_ALBUM",
    payload: obj,
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

export function update(obj) {
  return {
    type: "UPDATE_ALBUM",
    payload: obj,
  };
}
