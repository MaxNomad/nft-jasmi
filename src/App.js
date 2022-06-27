import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./config";
import React from 'react'
import HomePage from "./modules/home";
import "./index.scss";
const { root } = ROUTES;

/**
 * @desc component "App".
 * @return {JSX.Element} - main component with routing
 */
const App = () => {
  return (
    <Switch>
      <Route exact path={root} component={HomePage} />
    </Switch>
  );
};

export default App;
