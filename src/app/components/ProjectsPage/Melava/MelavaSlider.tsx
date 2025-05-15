import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { imageKitLoader } from "../../../utils/ImageKitLoader";

const MelavaSlider = () => {
  let images = [
    {
      title: "MELAVA AVENUE LAYOUT PLAN – 1ST LEVEL",
      img: "/Melava/floor_plan/1.jpg",
    },
    {
      title: "MELAVA AVENUE LAYOUT PLAN – 2ND LEVEL",
      img: "/Melava/floor_plan/2.jpg",
    },
    {
      title: "MELAVA AVENUE LAYOUT PLAN – 2ND LEVEL",
      img: "/Melava/floor_plan/3.jpg",
    },
  ];
  return (
    <Swiper
      modules={[EffectCoverflow, Navigation]}
      navigation={true}
      grabCursor={true}
      speed={1000}
      // centeredSlides={true}
      spaceBetween={95}
      slidesPerView={1}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      }}
      className="md:mt-10 mt-0 w-full mx-auto"
    >
      {images.map((item, index) => (
        <SwiperSlide key={index}>
          <div className=" mx-auto  sm:p-0">
            <Image
              loader={imageKitLoader}
              width={600}
              height={600}
              src={item.img}
              alt="apartment image"
              className=" md:min-w-[1000px] mx-auto object-cover rounded-lg"
            />
            <p className="font-lato text-sm md:text-[18px] font-normal leading-[32px] mt-2 flex justify-center">
              {item.title}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MelavaSlider;
