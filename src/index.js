import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {NavContextApiProvider} from "./components/contextApi/navContextApi"

ReactDOM.render(
  <React.StrictMode>
    <NavContextApiProvider>
    <App />
    </NavContextApiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
;
