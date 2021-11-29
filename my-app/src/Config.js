import { initializeApp } from "firebase/app";

// const settings = { timestampsInSnapshots: true };

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
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebaseApp;
