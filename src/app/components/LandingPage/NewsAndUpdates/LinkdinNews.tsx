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
const LinkdinNews: React.FC<IPROPS> = (props) => {
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
    <div className="col-span-4 md:col-span-3 row-span-1 h-fit">
      <Swiper
        allowSlidePrev={true}
        slidesPerView={1}
        speed={4000}
        loop={true}
        modules={[Mousewheel, Navigation, Autoplay]}
        autoplay={true}
        spaceBetween={20}
      >
        {news?.map((data, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex  flex-col sm:flex-row  ">
              <div>
                <Image
                  //   loader={imageKitLoader}
                  height={800}
                  width={800}
                  src={data?.img}
                  alt="Cover Image"
                  className="min-h-[320px]  xl:min-w-[630px] object-cover"
                />
              </div>
              <div className=" p-6  space-y-10 bg-white">
                <div className="ml-auto w-fit ">
                  <Image
                    loader={imageKitLoader}
                    width={100}
                    height={100}
                    src={data?.logo}
                    alt="Linkedin logo"
                    className="w-6 h-6 bg-black rounded-full border-none"
                  />
                </div>
                <h3 className="font-semibold  font-plus-jakarta-sans text-lg">
                  {data?.heading}
                </h3>

                <div className="border-b-2 border-red w-[40%] opacity-[50%]"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LinkdinNews;
