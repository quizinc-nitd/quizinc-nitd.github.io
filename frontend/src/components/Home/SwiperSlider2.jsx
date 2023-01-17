import React from "react";
import biztech from '../../assets/Biztech.jpeg';
import interNit from "../../assets/Inter-NIT.jpeg";
import mela from "../../assets/MELA.jpeg";
import school from "../../assets/School.jpeg";
import Shatranj from "../../assets/Shatranj.jpeg";
import Sports from "../../assets/Sports.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/swiper.min.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

//Always write this important at last
import "./SwiperSlider2.css";
import logo from "../../assets/logo.png";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const SwiperSlider = ({title}) => {

  AOS.init({
    offset: 240,
    duration: 1000,
  });

  return (
    <div className="swiperSlidercontainer">
      <div className="title_wrapper">
        <div className="reactLogo" data-aos="fade-right">
          <img src={logo} alt="Aniket"/>
        </div>
        <div className="title_" data-aos="fade-left">
        <h4 className="title_actualheadtag" >{title}</h4>
        </div>
      </div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={biztech} alt="Aniket" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={interNit} alt="Aniket" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mela} alt="Aniket" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sports} alt="Aniket" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={school} alt="Aniket" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Shatranj} alt="Aniket" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;