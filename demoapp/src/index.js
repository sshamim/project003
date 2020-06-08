import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dinner from './Dinner';
import Author from './Author';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Author />
    <App />
    <Dinner />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
