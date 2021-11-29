import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
// import firebase from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyArErEXX26kOsEpeWhabTcc_b3XT-T2q1o",
//   authDomain: "enterprise-8efcb.firebaseapp.com",
//   projectId: "enterprise-8efcb",
//   storageBucket: "enterprise-8efcb.appspot.com",
//   messagingSenderId: "1087080374663",
//   appId: "1:1087080374663:web:d73a125d2436419817f322",
//   measurementId: "G-4D97N2R8XX",
// };

// const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
