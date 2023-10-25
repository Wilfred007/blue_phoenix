"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AutoSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default AutoSlider;
