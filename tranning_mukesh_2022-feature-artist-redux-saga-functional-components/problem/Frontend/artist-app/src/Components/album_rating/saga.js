import axios from "axios";
import { put, spawn, take } from "redux-saga/effects";

function * onLoadRating(){
  let result = yield axios
    .get("http://localhost:9090/ratings/userRating/-1");

    // console.log(result);
    yield put({type : "LOAD_RATINGS", payload : result.data})
}


function * userRating(){
  while(true){
    const {payload : id} = yield take("EVENT_USERID_SELECTED");
    // console.log(id);

    var result = yield axios
    .get(`http://localhost:9090/ratings/userRating/${id}`);
    console.log(result.data);

    yield put({ type : "USER_RATING_ACTION", payload :{id : id, result : result.data}})
  }
}

function * newRatings(){
  while(true){
    const {payload :obj} = yield take("NEW_RATINGS")
    var result = yield axios
    .post("http://localhost:9090/ratings/update.ratings", obj);

    console.log(result.data);

  }
}



function * ratingRootSaga() {
  yield spawn(onLoadRating);
  yield spawn(userRating);
  yield spawn(newRatings);
}

export default ratingRootSaga;
