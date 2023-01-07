import { createStore, applyMiddleware } from 'redux' ;
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(...middleware)))

sagaMiddleware.run(rootSaga);

export default store