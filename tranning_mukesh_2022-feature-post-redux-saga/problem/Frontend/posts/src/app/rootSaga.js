import { spawn } from "redux-saga/effects";
import userRootSaga from "../components/users/saga";
import postRootSaga from '../components/posts/saga';


function * rootSaga(){
    yield spawn(userRootSaga);    
    yield spawn(postRootSaga);    
}

export default rootSaga;