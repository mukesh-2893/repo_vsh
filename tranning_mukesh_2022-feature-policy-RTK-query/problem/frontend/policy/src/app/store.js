
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api";
import userReducer from "../Components/users/userReducer";
import policyReducer from "../Components/policy/policyReducer";
import userPolicyReducer from "../Components/userPolicy/userPolicyReducer";

const store = configureStore({
    
  reducer: {
    userStore : userReducer,
    policyStore : policyReducer,
    userPolicyStore : userPolicyReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

});

export default store;