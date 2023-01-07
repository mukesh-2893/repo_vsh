import axios from "axios";
import {put, spawn, take} from "redux-saga/effects"

function * loadPostSaga(){
    let result = yield axios
    .get("http://localhost:9090/posts");
    yield put({type : "LOAD_POSTS", payload : result.data})
}

function * addPostSaga(){
    while(true){
       
        const {payload: obj} = yield take("EVENT_ADD_POST")
        let result = yield axios
        .post("http://localhost:9090/posts/add", obj);

        console.log(result);

        yield put({type : "ADD_POST", payload : result.data[result.data.length - 1]})
    }
}

function * updatePostSaga(){
    while(true){
       
        const {payload: obj} = yield take("EVENT_UPDATE_POST")
        console.log(obj, "update users wala");
        let result = yield axios
        .put(`http://localhost:9090/posts/update/${obj.pid}`, obj)

        console.log(result);

        yield put({type : "UPDATE_POST", payload : obj})
    }
}

function * deletePostSaga(){
    while(true){
       
        const {payload: id} = yield take("EVENT_DELETE_POST")
        console.log(id, "delete wala");
        let result = yield axios
        .delete(`http://localhost:9090/posts/delete/${id}`)

        console.log(result.data);

        yield put({type : "DELETE_POST", payload : id})
    }
}

function * likePostSaga(){
    while(true){
       
        const {payload: obj} = yield take("EVENT_LIKE_POST")
        // console.log(obj, "delete wala");
        let result = yield axios
        .post(`http://localhost:9090/posts/like`, obj)

        console.log(result);

        yield put({type : "LIKE_POST", payload : obj})
    }
}



function * postRootSaga(){
    yield spawn(loadPostSaga);
    yield spawn(addPostSaga);
    yield spawn(updatePostSaga);
    yield spawn(deletePostSaga);
    yield spawn(likePostSaga);
}

export default postRootSaga;