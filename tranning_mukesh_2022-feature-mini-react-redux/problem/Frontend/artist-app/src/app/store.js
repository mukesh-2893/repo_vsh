import { createStore } from 'redux' ;
import rootReducer from './rootReducer';

console.log("root store.js is called")
const store = createStore(rootReducer)

export default store