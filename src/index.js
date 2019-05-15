import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app";

firebase.initializeApp({
    "apiKey": "AIzaSyBOpZxh51xbEqQozkD81Q0azjQeLHo0A90",
    "appId": "1:1092086720542:web:6d1f3f04f790a515",
    "databaseURL": "https://my-secrets-182718.firebaseio.com",
    "storageBucket": "my-secrets-182718.appspot.com",
    "authDomain": "my-secrets-182718.firebaseapp.com",
    "messagingSenderId": "1092086720542",
    "projectId": "my-secrets-182718"
  });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
