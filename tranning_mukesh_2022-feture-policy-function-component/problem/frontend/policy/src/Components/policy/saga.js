import axios from "axios";
import {put, spawn, take} from "redux-saga/effects"

function * loadPolicySaga(){
    // console.log("loaduser saga calls");
    let result = yield axios
    .get("http://localhost:9090/policy");
    // console.log(result.data);
    yield put({type : "LOAD_POLICIES", payload : result.data})
}

function * addPolicySaga(){
    while(true){
       
        const {payload: obj} = yield take("EVENT_ADD_POLICY")
        
        let result = yield axios
        .post("http://localhost:9090/policy/add", obj);

        console.log(obj);
        console.log(result.data);

        yield put({type : "ADD_POLICY", payload : result.data[result.data.length - 1]})
    }
}

function * updatePolicySaga(){
    while(true){
       
        const {payload: obj} = yield take("EVENT_UPDATE_POLICY")
        let result = yield axios
        .put(`http://localhost:9090/policy/update/${obj.pid}`, obj)

        console.log(result);

        yield put({type : "UPDATE_POLICY", payload : obj})
    }
}

function * deletePolicySaga(){
    while(true){
       
        const {payload: id} = yield take("EVENT_DELETE_POLICY")
        let result = yield axios
        .delete(`http://localhost:9090/policy/delete/${id}`)

        console.log(result);

        yield put({type : "DELETE_POLICY", payload : id})
    }
}

function * policyRootSaga(){
    yield spawn(loadPolicySaga);
    yield spawn(addPolicySaga);
    yield spawn(updatePolicySaga);
    yield spawn(deletePolicySaga);
}

export default policyRootSaga;