import "./App.css";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import allProducts from "./pages/AllProducts/AllProducts";

const Routes = () => {
  return (
    <Router basename={`${process.env.PUBLIC_URL} + "/"`}>
      <Switch>
<<<<<<< HEAD
=======
        <Route path="/" component={Home} />
>>>>>>> 6fdec7563f709738ffb46564442df89df1246ae4
        <Route path="/product" exact component={Product} />
        <Route path="/products" exact component={allProducts} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
