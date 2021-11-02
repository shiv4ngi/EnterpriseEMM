import "./App.css";
import Header from "./myComponents/Header";
import CreateEnterprise from "./myComponents/CreateEnterprise";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Configure from "./myComponents/Configure";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CreateEnterprise} />
          <Route path="/configure" exact component={Configure} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
