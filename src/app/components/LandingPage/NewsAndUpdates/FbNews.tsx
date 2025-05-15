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
const FbNews: React.FC<IPROPS> = (props) => {
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
    <div className="col-span-4 sm:col-span-2 md:col-span-1 row-span-2">
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
              className=" object-cover"
            />
            <div className=" p-4 space-y-4 bg-white h-full">
              <div className="ml-auto w-fit ">
                <div className="ml-auto w-fit ">
                  <Image
                    width={100}
                    height={100}
                    src={data?.logo}
                    alt="Linkedin logo"
                    className="w-4 h-4"
                  />
                </div>
              </div>
              <h3 className="font-semibold  font-plus-jakarta-sans text-lg">
                Kids bedroom at riverdale Grand
              </h3>

              <div className="border-b-2 border-red w-[40%] opacity-[50%]"></div>
              <h3 className="font-medium  font-plus-jakarta-sans text-sm">
                This space is gift wrapped with tonnes of love; a private world
                for your child to explore
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FbNews;
