// import { createStore, applyMiddleware } from 'redux' ;
// import rootReducer from './rootReducer';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from "./rootSaga";
// import { composeWithDevTools } from 'redux-devtools-extension';

// const sagaMiddleware = createSagaMiddleware();

// const middleware = [sagaMiddleware];

// const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(...middleware)))

// sagaMiddleware.run(rootSaga);

// export default store

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