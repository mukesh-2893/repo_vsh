import axios from "axios";
import {put, putResolve, spawn, take} from "redux-saga/effects"
import { addUserPolicy, claimPolicy, deleteUserPolicy, loadUserPolicy, update } from "./reducer";

function * loadUPSaga(){
    let result = yield axios
    .get("http://localhost:9090/user.policy");
    // console.log(result.data);
    // yield put({type : "LOAD_UP", payload : result.data})
    yield putResolve(loadUserPolicy(result.data))
}

function * addPolicySaga(){
    while(true){
       
        const {payload: obj} = yield take("EVENT_ADD_UP")
        
        let result = yield axios
        .post("http://localhost:9090/user.policy/add", obj);

        // yield put({type : "ADD_UP", payload : result.data[result.data.length - 1]})
        yield putResolve(addUserPolicy(result.data))
    }
}

function * updatePolicySaga(){
    while(true){
       
        const {payload: obj} = yield take("EVENT_UPDATE_UP")
        let result = yield axios
        .put(`http://localhost:9090/user.policy/update/${obj.upid}`, obj)

        console.log(result.data);

        // yield put({type : "UPDATE_UP", payload : obj})
        yield putResolve(update(result.data))
    }
}

function * deleteUP(){
    while(true){
       
        const {payload: id} = yield take("EVENT_DELETE_UP")
        let result = yield axios
        .delete(`http://localhost:9090/user.policy/delete/${id}`)

        console.log(result.data);

        // yield put({type : "DELETE_UP", payload : id})
        yield putResolve(deleteUserPolicy(result.data))
    }
}

function * claim(){
    while(true){
        const{payload : obj } = yield take("EVENT_CLAIM");
        console.log(obj);
        let result = yield axios
        .post("http://localhost:9090/user.policy/claim.request", obj)

        
        console.log(result.data);
        // yield put({type : "LOAD_CLAIM", payload : result.data})
    yield putResolve(claimPolicy(result.data))
    }
}

function * userPolicyRootSaga(){
    yield spawn(loadUPSaga);
    yield spawn(addPolicySaga);
    yield spawn(updatePolicySaga);
    yield spawn(deleteUP);
    yield spawn(claim);
}

export default userPolicyRootSaga;