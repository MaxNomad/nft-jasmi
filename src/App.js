import { Route, Switch } from "react-router-dom";
import React from 'react'

import HomePage from "./modules/home";
import NFTItem from "./components/NFTPage";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import NFTBlock from "./components/NFTBlock";
import Ex from "./modules/home/components/Explorer";

import { ROUTES } from "./config";
import "./index.scss";

const { root, item, collection } = ROUTES;

/**
 * @desc component "App".
 * @return {JSX.Element} - main component with routing
 */
const App = () => {
  return (<>
    <Navbar />
    <Switch>
      <Route exact path={root} component={HomePage} />
      <Route exact path={item} component={NFTItem} />
      <Route exact path={collection} component={NFTBlock} />
      <Route path='*' exact={true} component={HomePage} />
    </Switch>
    <Ex />
    <Footer />
  </>);
};

export default App;
