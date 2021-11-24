import "./App.css";
import Header from "./myComponents/Header";
import CreateEnterprise from "./myComponents/CreateEnterprise";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Configure from "./myComponents/Configure";
import Resource from "./myComponents/Policy/Resource";
// import ApplicationPolicy from "./myComponents/Policies/ApplicationPolicy";
// import ResourcePolicy from "./myComponents/Policies/ResourcePolicy";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CreateEnterprise} />
          <Route path="/configure/:name" exact component={Configure} />
          <Route path="/policy" exact component={Resource} />
          {/* <Route path="/app_policies" exact component={ApplicationPolicy} />
          <Route path="/resource_policies" exact component={ResourcePolicy} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
