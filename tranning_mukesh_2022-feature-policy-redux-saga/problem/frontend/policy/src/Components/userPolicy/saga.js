import axios from "axios";
import {put, spawn, take} from "redux-saga/effects"

function * loadUPSaga(){
    let result = yield axios
    .get("http://localhost:9090/user.policy");
    // console.log(result.data);
    yield put({type : "LOAD_UP", payload : result.data})
}

function * addPolicySaga(){
    while(true){
       
        const {payload: obj} = yield take("EVENT_ADD_UP")
        
        let result = yield axios
        .post("http://localhost:9090/user.policy/add", obj);

        console.log(result.data);

        yield put({type : "ADD_UP", payload : result.data[result.data.length - 1]})
    }
}

function * updatePolicySaga(){
    while(true){
       
        const {payload: obj} = yield take("EVENT_UPDATE_UP")
        let result = yield axios
        .put(`http://localhost:9090/user.policy/update/${obj.upid}`, obj)

        console.log(result.data);

        yield put({type : "UPDATE_UP", payload : obj})
    }
}

function * deleteUP(){
    while(true){
       
        const {payload: id} = yield take("EVENT_DELETE_UP")
        let result = yield axios
        .delete(`http://localhost:9090/user.policy/delete/${id}`)

        console.log(result.data);

        yield put({type : "DELETE_UP", payload : id})
    }
}

function * claim(){
    while(true){
        const{payload : obj } = yield take("EVENT_CLAIM");
        console.log(obj);
        let result = yield axios
        .post("http://localhost:9090/user.policy/claim.request", obj)

        
        console.log(result.data);
        yield put({type : "LOAD_CLAIM", payload : result.data})
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