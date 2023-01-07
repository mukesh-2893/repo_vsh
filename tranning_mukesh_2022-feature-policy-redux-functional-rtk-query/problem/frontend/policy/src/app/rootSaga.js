import { spawn } from "redux-saga/effects";
import userRootSaga from "../Components/users/saga";
import policyRootSaga from "../Components/policy/saga"
import userPolicyRootSaga from '../Components/userPolicy/saga';


function * rootSaga(){
    yield spawn(userRootSaga);
    yield spawn(policyRootSaga);
    yield spawn(userPolicyRootSaga);
    
    
}

export default rootSaga;