import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png"


const Footer = () => {
  return (<>
 <div className="footer-contact-area bg-img bg-overlay  bg-fixed section-padding-100">



<div className="container">
  <div className="row justify-content-center">

    <div className="col-sm-5 col-lg-4">
      <div className="footer-single-widget mb-50">
        <div className="footer-logo">
          <Link to="/"><img src={logo} alt="Image" /></Link>
        </div>
        <div className="f-add-info mt-30">
          <p>Location - <span>Ukraine</span></p>
          <p>E-mail - <a href="#">contact@jasmi.ink</a></p>
        </div>
        <div className="footer-socila-icon">
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-twitter"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-whatsapp"></i></a>
        </div>


      </div>
    </div>

    <div className="col-sm-7 col-lg-8">
      <div className="row">

        <div className="col-sm-6 col-lg-3">
          <div className="footer-single-widget first mb-50">
            <h4>Quick links</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Terms-condition</a></li>
              <li><a href="#">Privacy-policy</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
        </div>


        <div className="col-sm-6 col-lg-3">
          <div className="footer-single-widget second mb-50">
            <h4>Marketplace</h4>
            <ul>
              <li><a href="#">Authors</a></li>
              <li><a href="#">Collection</a></li>
              <li><a href="#">Author Profile</a></li>
              <li><a href="#">Create item</a></li>
              <li><a href="#">Create Api</a></li>
            </ul>
          </div>
        </div>


        <div className="col-sm-6 col-lg-3">
          <div className="footer-single-widget third mb-50">
            <h4>Company</h4>
            <ul>
              <li><a href="#">All Nfts</a></li>
              <li><a href="#">Collectibless</a></li>
              <li><a href="#">Author Profile</a></li>
              <li><a href="#">Sports</a></li>
              <li><a href="#">Tranding</a></li>
            </ul>
          </div>
        </div>


        <div className="col-sm-6 col-lg-3">
          <div className="footer-single-widget four mb-50">
            <h4>Community</h4>
            <ul>
              <li><a href="#">NFT Token</a></li>
              <li><a href="#">Voting</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">Discussion </a></li>
              <li><a href="#">Tranding</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>


<div className="copy-right-area">
  <div className="container">
    <div className="row">

      <div className="col-md-6">
        <div className="copy-right-content-text">
          <p>© Copyright & Develop By Theme-Zome (2022).</p>
        </div>
      </div>

      <div className="col-md-6">
        <div className="copy-right-content-text">
          <ul className="d-flex flex-wrap justify-content-end">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
  </>);
  
}

export default Footer;