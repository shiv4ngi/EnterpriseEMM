import "./App.css";
import Header from "./myComponents/Header";
import CreateEnterprise from "./myComponents/CreateEnterprise";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Configure from "./myComponents/Configure";
import Resource from "./myComponents/Policy/Resource";
import Devices from "./myComponents/Devices/Devices";
import { initializeApp } from "firebase/app";
import AllPolicy from "./myComponents/Policy/AllPolicy";

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
console.log(firebaseApp);

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CreateEnterprise} />
          <Route path="/configure/:name" exact component={Configure} />
          <Route path="/policy" exact component={Resource} />
          <Route path="/all-policy" exact component={AllPolicy} />
          {/* <Route path="/policy/:pname" exact component={Devices} /> */}
          <Route path="/device" exact component={Devices} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
