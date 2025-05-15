"use client";
import React, { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  
  Autoplay,  
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Image, { StaticImageData } from "next/image";

import "./corousel.css";
import { imageKitLoader } from "../../utils/ImageKitLoader";

interface Iprops {
  heading?: string;
  imagesData: string[];
}
const Carousel: React.FC<Iprops> = (props) => {
  const { heading, imagesData } = props;

  const [width, setWidth] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

  return (
    <div className="md:max-w-3xl  md:mx-auto max-w-[300px]">
      <h1 className="mb-6 text-3xl font-semibold font-plus-jakarta-sans uppercase flex justify-center">
        {heading}
      </h1>
      <Swiper
        allowSlidePrev={true}
        slidesPerView={1}
        modules={[Mousewheel, Navigation]}
        navigation={true}
        centeredSlides={true}
      >
        {imagesData?.map((src, idx) => (
          <SwiperSlide key={idx}>
            <Image
              loader={imageKitLoader}
              src={src}
              height={900}
              width={800}
              alt="img"
              loading="lazy"
              className="md:max-w-3xl md:max-h-[600px] md:min-h-[600px] w-full h-full rounded-md min-h-[365px] max-h-[365px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
