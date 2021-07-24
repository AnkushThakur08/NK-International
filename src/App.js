import "./App.css";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route Path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
