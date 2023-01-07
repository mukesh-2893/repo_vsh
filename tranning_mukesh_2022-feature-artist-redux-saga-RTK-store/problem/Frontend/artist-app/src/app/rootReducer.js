import { combineReducers } from "redux";
import album from "../Components/album/reducer";
import artist from "../Components/artist/reducer";
import user from "../Components/users/reducer";
import ratings from "../Components/album_rating/reducer"

const rootReducer = combineReducers({
  userStore: user,
  artistStore: artist,
  albumStore: album,
  ratingStore : ratings,
});

export default rootReducer;
