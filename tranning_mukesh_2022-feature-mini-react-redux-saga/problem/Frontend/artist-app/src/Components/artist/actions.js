export function loadArtist(data) {
  console.log("load artist in actions");
  return {
    type: "LOAD_ARTIST",
    payload: data,
  };
}

export function addArtist(obj) {
  console.log("ADD_Artist action");
  return {
    type: "ADD_ARTIST",
    payload: obj,
  };
}

export function deleteArtist(obj) {
  return {
    type: "DELETE_ARTIST",
    payload: obj,
  };
}

export function selectedArtist(obj) {
  console.log(obj);
  return {
    type: "SELECTED_ARTIST",
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
    type: "UPDATE_ARTIST",
    payload: obj,
  };
}
