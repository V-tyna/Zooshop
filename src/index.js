import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app"; 
// import { getDatabase, ref, set } from "firebase/database";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZd6A5dEUMLePwD3LifMdj_ODNW8Bd5wA",
  authDomain: "zoo-shop-e14b4.firebaseapp.com",
  projectId: "zoo-shop-e14b4",
  storageBucket: "zoo-shop-e14b4.appspot.com",
  messagingSenderId: "28690138419",
  appId: "1:28690138419:web:77d60fb0fc87b3c1606a46"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//запись юзеров в Authentication 
// const auth = getAuth();
// createUserWithEmailAndPassword(auth, 'v@gmail.com', '123456')
//   .then((userCredential) => {
//     const user = userCredential.user;
//     console.log(user);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode, errorMessage);
//   });

// Write to realtimeDB
// function writeUserData(userId, name, email) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//       username: name,
//       email: email,
//   });
// }

reportWebVitals();