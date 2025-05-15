import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import "./swiper.css";

interface Data {
  image: string;
  text: string;
}

interface ISwiper {
  slidePerView: number;
  imageData: Data[];
}

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { imageKitLoader } from "../../utils/ImageKitLoader";

const SwiperSlider = (props: ISwiper) => {
  const { slidePerView, imageData } = props;
  return (
    <Swiper
      modules={[EffectCoverflow, Navigation]}
      navigation={true}
      effect={"coverflow"}
      grabCursor={true}
      // centeredSlides={true}
      spaceBetween={95}
      slidesPerView={slidePerView}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      }}
      className="md:mt-10 mt-0 w-full"
    >
      {imageData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="max-w-xl mx-auto p-10 sm:p-0">
            <Image
            loader={imageKitLoader}
              src={item.image}
              width={400}
              height={400}
              alt="apartment image"
              className="min-h-[363px] rounded-lg"
            />
            <p className="font-lato text-[18px] font-normal leading-[32px] mt-2 flex justify-center">
              {item.text}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
