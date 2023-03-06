import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCube, Pagination} from "swiper";
import { useCookies } from 'react-cookie'
import MetamaskBuy from '../../../metamask/getnft'



const HomeSlider = () => {
  return (<>
<div className="welcome-area home-2 bg-overlay-3 bg-img">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-md-7">
            <div className="welcome-content home-2">
              <h3>Discover digital art  <span>collect NFT</span></h3>
              <p> My inner world, Jasmi, is a realm that only a select few can understand.<br/>
It is a place where colors, images, and flowers come into reality.<br/>
I prefer anoint the palms of those around me with brushstrokes to open their souls to love.
</p>
                <MetamaskBuy/>
            </div>
          </div>


          <div className="col-md-5">
          <Swiper
        effect={"cube"}
        grabCursor={true}
        loop={true}
        autoplay={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          speed: 1500,
          shadowScale: 0.94,
        }}
       
        modules={[EffectCube, Pagination]}
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
      </Swiper>
          </div>
        </div>
      </div>

    </div>
  </>);
  
}

export default HomeSlider;