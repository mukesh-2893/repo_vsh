import axios from "axios";
import {put, putResolve, spawn, take} from "redux-saga/effects"
import { addPolicy, deletePolicy, loadPolicies, update } from "./reducer";

function * loadPolicySaga(){
    // console.log("loaduser saga calls");
    let result = yield axios
    .get("http://localhost:9090/policy");
    // console.log(result.data);
    // yield put({type : "LOAD_POLICIES", payload : result.data})
    yield putResolve(loadPolicies(result.data))
}

function * addPolicySaga(){
    while(true){
       
        const {payload: obj} = yield take("EVENT_ADD_POLICY")
        
        let result = yield axios
        .post("http://localhost:9090/policy/add", obj);

        console.log(obj);
        console.log(result.data);

        // yield put({type : "ADD_POLICY", payload : result.data[result.data.length - 1]})
        yield putResolve(addPolicy(result.data))
    }
}

function * updatePolicySaga(){
    while(true){
       
        const {payload: obj} = yield take("EVENT_UPDATE_POLICY")
        let result = yield axios
        .put(`http://localhost:9090/policy/update/${obj.pid}`, obj)

        console.log(result.data);

        // yield put({type : "UPDATE_POLICY", payload : obj})
        yield putResolve(update(result.data))
    }
}

function * deletePolicySaga(){
    while(true){
       
        const {payload: id} = yield take("EVENT_DELETE_POLICY")
        let result = yield axios
        .delete(`http://localhost:9090/policy/delete/${id}`)

        console.log(result);

        // yield put({type : "DELETE_POLICY", payload : id})
        yield putResolve(deletePolicy(result.data))
    }
}

function * policyRootSaga(){
    yield spawn(loadPolicySaga);
    yield spawn(addPolicySaga);
    yield spawn(updatePolicySaga);
    yield spawn(deletePolicySaga);
}

export default policyRootSaga;