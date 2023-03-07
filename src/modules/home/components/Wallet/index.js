/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useCookies } from 'react-cookie'
import { Link } from "react-router-dom";

import metamask_img from '../../../../assets/images/metamask.png'


const Wallet = () => {

  const [cookies, setCookie, removeCookie] = useCookies(['selectedAddress', 'chain_id', "userData"])

  if (cookies.selectedAddress) {
    return (
      <>
        <div className="wallet-area section-padding-100-50-custom">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h6 className="heading-sub">Wallet</h6>
                <h2 className="heading-title">My NFT`s</h2>
              </div>
            </div>
            <div className="single-wallet-area two">
              <div className="wallet-content-text">
                <h4>NFT wallet is empty</h4>
                <p>View on the <a className="contact-links" href="#" target="_blank" rel="noreferrer">marketplace.</a></p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  else {
    return (<>
      <div className="wallet-area section-padding-100-50">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h6 className="heading-sub">Wallet</h6>
              <h2 className="heading-title">NFT Wallet</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="800">
              <div className="single-wallet-area two">
                <div className="wallet-image">
                  <img src={metamask_img} alt="" />
                </div>
                <div className="wallet-content-text">
                  <h4><a href="#">Metamask</a></h4>
                  <p>MetaMask is a global community of developers and designers dedicated to making the world a better place with blockchain technology.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-8" data-aos="fade-up" data-aos-duration="1000">
              <div className="single-wallet-area two">
                <div className="wallet-image">
                  <img src="img/icon-img/17.png" alt="" />
                </div>
                <div className="wallet-content-text">
                  <h4><a href="#">Picture shiping</a></h4>
                  <p /><ul>
                    <li>1) Connect your wallet to verify the ownership of NFT.</li>
                    <li>2) Order delivery to any country in the world.</li>
                    <li>3) If there is a problem, write to the <Link className="contact-links">contact center.</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>);
  }

}


export default Wallet;