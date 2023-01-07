// import rootReducer from "./rootReducer";
// import rootSaga from "./rootSaga";
// import createSagaMiddleware from "redux-saga";
// // import { composeWithDevTools } from "redux-devtools-extension";
// import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk"

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
    
//   reducer: {
//     rootReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().prepend([sagaMiddleware, thunk]),
// });

// sagaMiddleware.run(rootSaga);
// export default store;

import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"
import { fetchUsers } from "../Components/users/userService";
import { fetchArtists } from "../Components/artist/artistService";
import { fetchAlbumService } from "../Components/album/albumService";
import { onLoadRating } from "../Components/album_rating/albumRatingService";



const store = configureStore({
    
  reducer: {
    rootReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([thunk]),

});
store.dispatch(fetchUsers);
store.dispatch(fetchArtists);
store.dispatch(fetchAlbumService);
store.dispatch(onLoadRating);

export default store;