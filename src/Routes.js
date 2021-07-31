import "./App.css";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" exact component={Product} />
      </Switch>
    </Router>
  );
};

export default Routes;
