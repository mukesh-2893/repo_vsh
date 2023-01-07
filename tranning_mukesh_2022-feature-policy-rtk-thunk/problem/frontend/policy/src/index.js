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
import { allPolicy } from './Components/policy/policyService';
import { allUserPolicy } from './Components/userPolicy/userPolicyService';


const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(fetchUsers())
store.dispatch(allPolicy());
store.dispatch(allUserPolicy());

root.render(
  <Provider store={store}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

reportWebVitals();
