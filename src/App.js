import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./config";
import React from 'react'
import HomePage from "./modules/home";
import "./index.scss";
import NFTItem from "./modules/home/components/nftItemPage";
import NFTCollections from "./modules/home/components/nftCollections";
import Navbar from "./modules/home/components/nav";
import Ex from "./modules/home/components/explorer";
import Footer from "./modules/home/components/footer";
import NFTBlock from "./modules/home/components/nftBlock";
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
    </Switch>
    <Ex />
    <Footer />
  </>);
};

export default App;
