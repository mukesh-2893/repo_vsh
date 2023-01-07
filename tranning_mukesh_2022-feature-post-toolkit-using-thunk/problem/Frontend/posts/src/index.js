import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Provider } from 'react-redux';
import store  from './app/store';
import { fetchUsers } from './components/users/userService';
import { fetchPosts } from './components/posts/postService';


const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(fetchUsers())
store.dispatch(fetchPosts())

root.render(
  <Provider store={store}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

reportWebVitals();
