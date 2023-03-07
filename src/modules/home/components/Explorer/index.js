/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Ex = () => {

    return (<>
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
                                    margin={30}
                                    autoplay={true}
                                    loop={true}
                                    coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                    }}
                                    modules={[EffectCoverflow, Pagination]}
                                    className="mySwiper">
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
    </>);

}

export default Ex;