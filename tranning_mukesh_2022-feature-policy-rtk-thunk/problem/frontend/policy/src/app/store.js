import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"
import { fetchUsers } from "../Components/users/userService";
import { allPolicy } from "../Components/policy/policyService";
import { allUserPolicy } from "../Components/userPolicy/userPolicyService";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    
  reducer: {
    rootReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([sagaMiddleware, thunk]),

});
store.dispatch(fetchUsers);
store.dispatch(allPolicy);
store.dispatch(allUserPolicy);

sagaMiddleware.run(rootSaga);
export default store;