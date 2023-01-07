import axios from "axios";
import { put, spawn, take } from "redux-saga/effects";

function* loadAlbumSaga() {
  let result = yield axios.get("http://localhost:9090/album");
  // console.log(result.data);
  yield put({ type: "LOAD_ALBUM", payload: result.data });
}

function* addAlbumSaga() {
  while (true) {
    const { payload: obj } = yield take("EVENT_ADD_ALBUM");
    // console.log(obj, "saga obj called");
    let result = yield axios.post("http://localhost:9090/album/add", obj);

    console.log(result.data);
    yield put({
      type: "ADD_ALBUM",
      payload: result.data[result.data.length - 1],
    });
  }
}

function* deleteAlbumSaga() {
  while (true) {
    const { payload: id } = yield take("EVENT_DELETE_ALBUM");
    console.log(id);
    yield axios.delete(`http://localhost:9090/album/delete/${id}`);
    yield put({ type: "DELETE_ALBUM", payload: id });
  }
}

function* updateAlbumSaga() {
  while (true) {
    const { payload: obj } = yield take("EVENT_UPDATE_ALBUM");
    console.log(obj);
    let result = yield axios.put(
      `http://localhost:9090/album/update/${obj.id}`,
      obj
    );
    console.log(result);

    yield put({ type: "UPDATE_ALBUM", payload: obj });
  }
}

function* albumRootSaga() {
  yield spawn(loadAlbumSaga);
  yield spawn(addAlbumSaga);
  yield spawn(deleteAlbumSaga);
  yield spawn(updateAlbumSaga);
}

export default albumRootSaga;
