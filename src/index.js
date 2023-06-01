import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcLNmkBTbmCfzCXZT3CGL5mS9xbHIcP7A",
  authDomain: "cart-e99d2.firebaseapp.com",
  projectId: "cart-e99d2",
  storageBucket: "cart-e99d2.appspot.com",
  messagingSenderId: "675290483830",
  appId: "1:675290483830:web:846dee1dbd8add5d4ea357"
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

