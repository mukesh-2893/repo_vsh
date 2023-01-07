import { combineReducers } from 'redux' ;
import album from '../Components/album/reducer';
import artist from '../Components/artist/reducer'
import user from "../Components/users/reducer"



const rootReducer = combineReducers({
    userStore : user,
    artistStore : artist,
    albumStore : album
  })
  // console.log("reducer is called")
  
  export default rootReducer
  