"use client";

import React, { useEffect, useRef } from "react";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    EffectFade,
    Mousewheel,
    Autoplay,
} from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { imageKitLoader } from "../utils/ImageKitLoader";

const ImageSlider = (props) => {
    const { images } = props;

    return (
        <section className="relative bg-gray-100 max-h-[104vh] max-w-[100vw] overflow-hidden">
            <Swiper
                modules={[
                    Navigation,
                    Pagination,
                    EffectFade,
                    Mousewheel,
                    Autoplay,
                ]}
                effect="fade"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                direction="vertical"
                slidesPerView={1}
                spaceBetween={0}
                autoHeight={true}
                mousewheel={{
                    forceToAxis: true,
                    sensitivity: 1,
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                onReachEnd={() => {}}
                touchReleaseOnEdges={true}
            >
                {images?.map((img, idx) => (
                    <SwiperSlide key={idx} className="swiper-slide relative ">
                        <Image
                            // loader={imageKitLoader}
                            height={2000}
                            width={2000}
                            src={img.bigImg}
                            alt="Duville-Estate"
                            className="hidden min-h-[104vh] md:block"
                        />

                        <Image
                            loader={imageKitLoader}
                            height={1500}
                            width={700}
                            alt="Duville-Estate"
                            src={img.smallImg}
                            className=" md:hidden min-h-screen  max-w-[100vw] object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <div className="flex animate-bounce  absolute bottom-10 z-30 left-[35%] md:left-[47%]  space-y-2 flex-col justify-center items-center ">
                <div className=" h-10 w-10 md:h-14 md:w-14 ">
                    <ArrowDownIcon className="text-white " />{" "}
                </div>
                <h2 className="text-white font-semibold text-lg font-plus-jakarta-sans">
                    Scroll Down
                </h2>
            </div> */}
        </section>
    );
};

export default ImageSlider;
