import axios from "axios";
import {put, spawn, take } from "redux-saga/effects"

function * loadArtistSaga(){
    // console.log("artist saga load");
    let result = yield axios
    .get("http://localhost:9090/artists");

    yield put({type : "LOAD_ARTIST", payload : result.data})
    // console.log(result.data);
}

function * addArtistSaga(){
    while(true){
        const { payload : obj} = yield take("EVENT_ADD_ARTIST");
        console.log(obj, "saga obj called");
        let result = yield axios
        .post("http://localhost:9090/artists/add", obj);

        console.log(result.data);
        yield put({ type : "ADD_ARTIST", payload : result.data[result.data.length - 1]})
    }
}

function * deleteArtistSaga(){
    while(true){
       
        const {payload: id} = yield take("EVENT_DELETE_ARTIST")
        console.log(id);
        let result = yield axios
        .delete(`http://localhost:9090/artists/delete/${id}`)

        console.log(result);

        yield put({type : "DELETE_ARTIST", payload : id})
    }
}

function * updateArtistSaga(){
    while(true){
        const {payload: obj} = yield take("EVENT_UPDATE_ARTIST")
        console.log(obj);
        let result = yield axios
        .put(`http://localhost:9090/artists/update/${obj.aid}`, obj)

        console.log(result);

        yield put({type : "UPDATE_ARTIST", payload : obj})
    }
}

function * artistRootSaga(){
    yield spawn(loadArtistSaga);
    yield spawn(addArtistSaga);
    yield spawn(deleteArtistSaga);
    yield spawn(updateArtistSaga);
}

export default artistRootSaga;