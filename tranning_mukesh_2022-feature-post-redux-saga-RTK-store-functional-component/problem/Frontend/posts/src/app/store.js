import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import createSagaMiddleware from "redux-saga";
// import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);
export default store;