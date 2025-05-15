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
import { imageKitLoader } from "../../../utils/ImageKitLoader";
import { INews } from "../../../utils/interface/Landingpage/News";

interface IPROPS {
  news: INews[];
}
const WebNews: React.FC<IPROPS> = (props) => {
  const { news } = props;

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
    <div className="col-span-4 sm:col-span-2 md:col-span-1 row-span-2 ">
      <Swiper
        allowSlidePrev={true}
        slidesPerView={1}
        speed={3000}
        loop={true}
        modules={[Mousewheel, Navigation, Autoplay]}
        autoplay={true}
        spaceBetween={10}
        className="h-full"
      >
        {news?.map((data, idx) => (
          <SwiperSlide key={idx}>
            <Image
              //   loader={imageKitLoader}
              height={800}
              width={800}
              src={data?.img}
              alt="Cover Image"
              className=" object-cover min-h-[390px] md:min-h-[250px]"
            />
            <div className=" p-6 space-y-4 bg-white h-full">
              <h3 className="font-semibold  font-plus-jakarta-sans text-lg">
                {data?.heading}
              </h3>

              <div className="border-b-2 border-red w-[40%] opacity-[50%]"></div>
              <h3 className="font-medium  font-plus-jakarta-sans text-sm">
                {data?.subheading}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WebNews;
