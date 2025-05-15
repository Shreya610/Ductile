import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import "./Carousel.css";
import Image from "next/image";
import { imageKitLoader } from "../../../utils/ImageKitLoader";

interface IPROPS {
  images: string[];
}
const CommunityCarousel: React.FC<IPROPS> = (props) => {
  const { images } = props;
  return (
    <div className="w-full ">
      <Swiper
        allowSlidePrev={true}
        speed={1500}
        loop={true}
        slidesPerView={4}
        breakpoints={{
          300: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          790: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Mousewheel, Navigation, Autoplay]}
        spaceBetween={20}
        freeMode={true}
        // className="mySwiper mb-4"
        // style={{
        //     "--swiper-navigation-size": "20px",
        // }}
        navigation={true}
      >
        {images?.map((src, idx) => (
          <SwiperSlide key={idx}>
            <Image
              loader={imageKitLoader}
              width={500}
              height={500}
              alt="image"
              src={src}
              className=" mx-auto min-w-80 max-w-80 min-h-52 max-h-52"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommunityCarousel;
