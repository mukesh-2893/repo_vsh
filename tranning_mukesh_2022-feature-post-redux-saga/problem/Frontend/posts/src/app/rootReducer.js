import { combineReducers } from "redux";

import user from "../components/users/reducer";
import post from '../components/posts/reducer'

const rootReducer = combineReducers({
  userStore: user,
  postStore : post,
});

export default rootReducer;