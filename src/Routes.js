import "./App.css";

import { Switch, Route, HashRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import allProducts from "./pages/AllProducts/AllProducts";
import Cart from "./pages/Cart";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/product" exact component={Product} />
        <Route path="/products" exact component={allProducts} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
