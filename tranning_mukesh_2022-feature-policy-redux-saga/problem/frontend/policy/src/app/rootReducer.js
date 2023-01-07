import { combineReducers } from "redux";

import user from "../Components/users/reducer";
import policy from "../Components/policy/reducer"
import userPolicy from '../Components/userPolicy/reducer';

const rootReducer = combineReducers({
  userStore: user,
  policyStore: policy,
  userPolicyStore : userPolicy,
});

export default rootReducer;
