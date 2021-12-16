import "firebase/database";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArErEXX26kOsEpeWhabTcc_b3XT-T2q1o",
  authDomain: "enterprise-8efcb.firebaseapp.com",
  projectId: "enterprise-8efcb",
  storageBucket: "enterprise-8efcb.appspot.com",
  messagingSenderId: "1087080374663",
  appId: "1:1087080374663:web:d73a125d2436419817f322",
  measurementId: "G-4D97N2R8XX",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const dbfs = getFirestore();

export { dbfs };
