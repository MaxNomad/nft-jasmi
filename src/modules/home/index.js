/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import AOS from "aos";

import HomeSlider from "./components/HomeSlider";
import Wallet from "./components/Wallet";
import NFTCollections from "../../components/NFTCollections";
import About from "./components/About";

import "./index.scss";

/**
 * @desc Module "Home page".
 * @return {JSX.Element} - module that includes a default page, when user opens the web-app
 */


const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);
  return (<>
    <HomeSlider />
    <Wallet />
    <About />
    <NFTCollections />
  </>)

}

export default HomePage;


