/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "./index.scss";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "./components/nav";
import HomeSlider from "./components/homeslider";
import Wallet from "./components/wallet";

import { EffectCube, Pagination, EffectCoverflow} from "swiper";


/**
 * @desc Module "Home page".
 * @return {JSX.Element} - module that includes a default page, when user opens the web-app
 */


const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (<div>
   <Navbar/>
   <HomeSlider/>
   <Wallet/>
    

   


    <div className="about-us-area bg-color-cu section-padding-100-50">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="about-image-area text-center mb-50">
              <div className="about-feature-img welcome-thumb">
                <img src="img/bg-img/about1.png" alt="" />
              </div>
              <div className="about-image-2">
                <img src="img/bg-img/about.png" alt="" />
              </div>
            </div>
          </div>


          <div className="col-md-6">
            <div className="about-content-text pb-50">
              <h2>Lorem ipsum dolor sit amet</h2>

              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vo luptas de leniti
                voluptatibus officia! Ipsum porro repellendu quis fuga illooxe in officia consectetur
                adipisicing elitRe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
                facilis impedit repellendus veritatis, placeat inventore. Fugiat commodi animi obcaecati
                similique?</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="about-us-area bg-color-my section-padding-100-50">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="about-content-text pb-50">
              <h2>Lorem ipsum dolor sit amet</h2>

              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vo luptas de leniti
                voluptatibus officia! Ipsum porro repellendu quis fuga illooxe in officia consectetur
                adipisicing elitRe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
                facilis impedit repellendus veritatis, placeat inventore. Fugiat commodi animi obcaecati
                similique?</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-image-area text-center mb-50">
              <div className="about-feature-img welcome-thumb">
                <img src="img/bg-img/about1.png" alt="" />
              </div>
              <div className="about-image-2">
                <img src="img/bg-img/about.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="live-auctions-area section-padding-100-50 bg-overlay-2 bg-img">
      <div className="container">
        <div className="row">

          <div className="col-12 text-center">
            <h6 className="heading-sub">New Collection</h6>
            <h2 className="heading-title">All Collections</h2>
          </div>
        </div>

        <div className="row justify-content-center">

          <div className="col-sm-6 col-lg-4">
            <div className="single-live-auction home-2">
              <div className="auction-thumb home-2">
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Image" />
              </div>


              <div className="collection-text home-2 text-center">
                <a href="#">Jisan Donan</a>
                <p>20% of the part</p>
              </div>
            </div>
          </div>


          <div className="col-sm-6 col-lg-4">
            <div className="single-live-auction home-2">
              <div className="auction-thumb home-2">
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Image" />
              </div>


              <div className="collection-text home-2 text-center">
                <a href="#">Trihana Donan</a>
                <p>40% of the part</p>
              </div>
            </div>
          </div>


          <div className="col-sm-6 col-lg-4">
            <div className="single-live-auction home-2">
              <div className="auction-thumb home-2">
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Image" />
              </div>


              <div className="collection-text home-2 text-center">
                <a href="#">Jisan Donan</a>
                <p>20% of the part</p>
              </div>
            </div>
          </div>


          <div className="col-sm-6 col-lg-4">
            <div className="single-live-auction home-2">
              <div className="auction-thumb home-2">
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Image" />
              </div>


              <div className="collection-text home-2 text-center">
                <a href="#">Jisan Donan</a>
                <p>20% of the part</p>
              </div>
            </div>
          </div>


          <div className="col-sm-6 col-lg-4">
            <div className="single-live-auction home-2">
              <div className="auction-thumb home-2">
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Image" />
              </div>


              <div className="collection-text home-2 text-center">
                <a href="#">Jisan Donan</a>
                <p>20% of the part</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <div className="single-live-auction home-2">
              <div className="auction-thumb home-2">
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Image" />
              </div>


              <div className="collection-text home-2 text-center">
                <a href="#">Jisan Donan</a>
                <p>20% of the part</p>
              </div>
            </div>
          </div>




          <div className="col-12">
            <div className="btn-area mb-50 text-center">
              <a className="btn btn-box" href="#">View All</a>
            </div>
          </div>
        </div>
      </div>
    </div>

   

   

   

    <div className="explore-area bg-color-cu section-padding-100-50">
      <div className="container-fluid">
        <div className="row">

          <div className="col-12 text-center">
            <h6 className="heading-sub">New Explore</h6>
            <h2 className="heading-title">Explore All</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">



              <Swiper
        effect={"coverflow"}
        grabCursor={true}
        
        centeredSlides={true}
        slidesPerView={"auto"}
        margin = {30}
        autoplay = {true}

        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>

              </div>
              <div className="swiper-pagination"></div>
            </div>

          </div>

        </div>
      </div>
    </div>

   



  

    <div className="footer-contact-area bg-img bg-overlay  bg-fixed section-padding-100">



      <div className="container">
        <div className="row justify-content-center">

          <div className="col-sm-5 col-lg-4">
            <div className="footer-single-widget mb-50">
              <div className="footer-logo">
                <a href="#"><img src="img/logo.png" alt="Image" /></a>
              </div>
              <div className="f-add-info mt-30">
                <p>Location - <span>Houston, USA 14</span></p>
                <p>Phone - <a href="#">01258452</a></p>
                <p>E-mail - <a href="#">example12@gmail.com</a></p>
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
  </div>)

}

export default HomePage;


