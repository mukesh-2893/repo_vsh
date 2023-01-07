import axios from "axios";
import {put, putResolve, spawn, take} from "redux-saga/effects"
import { addPost, deletePost, likes, loadPosts, update } from "./reducer";

function * loadPostSaga(){
    let result = yield axios
    .get("http://localhost:9090/posts");
    yield putResolve(loadPosts(result.data))
}

function * addPostSaga(){
    while(true){
       
        const {payload: obj} = yield take("EVENT_ADD_POST")
        let result = yield axios
        .post("http://localhost:9090/posts/add", obj);

        yield putResolve(addPost(result.data))
    }
}

function * updatePostSaga(){
    while(true){
       
        const {payload: obj} = yield take("EVENT_UPDATE_POST")
        console.log(obj, "update users wala");
        let result = yield axios
        .put(`http://localhost:9090/posts/update/${obj.pid}`, obj)

        yield putResolve(update(result.data))
    }
}

function * deletePostSaga(){
    while(true){
       
        const {payload: id} = yield take("EVENT_DELETE_POST")
        let result = yield axios
        .delete(`http://localhost:9090/posts/delete/${id}`)

        yield putResolve(deletePost(result.data));
    }
}

function * likePostSaga(){
    while(true){
       
        const {payload: obj} = yield take("EVENT_LIKE_POST")
        let result = yield axios
        .post(`http://localhost:9090/posts/like`, obj)
        yield putResolve(likes(result.data));
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