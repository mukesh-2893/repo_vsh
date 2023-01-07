import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Provider } from 'react-redux';
import store  from './app/store';
import { fetchUsers } from './Components/users/userService';
import { fetchArtists } from './Components/artist/artistService';
import {fetchAlbumService} from './Components/album/albumService'
import {  onLoadRating } from './Components/album_rating/albumRatingService';


const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(fetchUsers())
store.dispatch(fetchArtists())
store.dispatch(fetchAlbumService())
store.dispatch(onLoadRating())

root.render(
  <Provider store={store}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

reportWebVitals();
