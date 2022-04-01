import React from 'react';
import ReactDOM from 'react-dom';
import MyData from "./App"
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css"
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


ReactDOM.render(
  <MyData/>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();