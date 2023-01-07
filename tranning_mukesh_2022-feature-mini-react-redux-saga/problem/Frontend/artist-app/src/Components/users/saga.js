import axios from "axios";
import {put, spawn, take} from "redux-saga/effects"

function * loadUserSaga(){
    // console.log("loaduser saga calls");
    let result = yield axios
    .get("http://localhost:9090/users");

    yield put({type : "LOAD_USERS", payload : result.data})
}

function * addUserSaga(){
    while(true){
       
        const {payload: obj} = yield take("EVENT_ADD_USER")
        console.log(obj, "Add users wala");
        let result = yield axios
        .post("http://localhost:9090/users/add", obj);

        console.log(result);

        yield put({type : "ADD_USER", payload : result.data[result.data.length - 1]})
    }
}

function * deleteUserSaga(){
    while(true){
       
        const {payload: id} = yield take("EVENT_DELETE_USER")
        console.log(id, "delete users wala");
        let result = yield axios
        .delete(`http://localhost:9090/users/delete/${id}`)

        console.log(result);

        yield put({type : "DELETE_USER", payload : id})
    }
}

function * updateUserSaga(){
    while(true){
       
        const {payload: obj} = yield take("EVENT_UPDATE_USER")
        console.log(obj, "update users wala");
        let result = yield axios
        .put(`http://localhost:9090/users/update/${obj.uid}`, obj)

        console.log(result);

        yield put({type : "UPDATE", payload : obj})
    }
}

function * userRootSaga(){
    yield spawn(loadUserSaga);
    yield spawn(addUserSaga);
    yield spawn(deleteUserSaga);
    yield spawn(updateUserSaga);
}

export default userRootSaga;