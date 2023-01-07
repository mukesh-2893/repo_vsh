import { spawn } from "redux-saga/effects";
import userRootSaga from "../Components/users/saga";
import artistRootSaga from "../Components/artist/saga";
import albumRootSaga from "../Components/album/saga";
import ratingRootSaga from "../Components/album_rating/saga";

function * rootSaga(){
    yield spawn(userRootSaga);
    yield spawn(artistRootSaga);
    yield spawn(albumRootSaga);
    yield spawn(ratingRootSaga);
}

export default rootSaga;