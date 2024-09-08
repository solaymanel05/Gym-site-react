// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RoutApp from './RouteApp/RoutApp';
import { Provider } from 'react-redux';
import { store } from './Store/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RoutApp />
    </Provider>
  </React.StrictMode>
);
