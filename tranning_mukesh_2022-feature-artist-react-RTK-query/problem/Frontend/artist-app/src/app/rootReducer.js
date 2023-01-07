import { combineReducers } from "redux";
import album from "../Components/album/reducer";

import ratings from "../Components/album_rating/reducer"

const rootReducer = combineReducers({
  
  ratingStore : ratings,
});

export default rootReducer;
