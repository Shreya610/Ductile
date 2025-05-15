"use client";
import { AnimateSharedLayout } from "framer-motion";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { useState } from "react";
import Image from "next/image";
import { EffectFade, Navigation } from "swiper/modules";

import "./timeline.css";
import { imageKitLoader } from "../../../utils/ImageKitLoader";
import { awsImageLoader } from "../../../utils/AwsImageLoader";

const YearListOld = [
    "1810",
    "1837",
    "1860",
    "1912",
    "1915",
    "1929",
    "1936",
    "1986",
    "1990",
    "1997",
    "2002",
];

const YearListNew = [
    "1985",
    "2010",
    "2015",
    "2016",
    "2017",
    "2018",
    "2021",
    "2022",
    "2022",
];

const Timeline = () => {
    const [swiper, setSwiper] = useState(null);
    const [activeTab, setActiveTab] = useState("old");
    const [currentIndx, setCurrentIndx] = useState<number>(null);

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

    const dbcImages = [
        { DImg: "1920+x1072+edits-01.jpg", MImg: "DuvilleTimelineImages/mob/1.jpg" },
        { DImg: "1920+x1072+edits-02.jpg", MImg: "DuvilleTimelineImages/mob/2.jpg" },
        { DImg: "1920 x1072+edits-03.jpg", MImg: "DuvilleTimelineImages/mob/3.jpg" },
        { DImg: "1920 x1072+edits-04.jpg", MImg: "DuvilleTimelineImages/mob/4.jpg" },
        {
            DImg: "1915+timeline+images-04.jpg",
            MImg: "DuvilleTimelineImages/mob/5.jpg",
        },
        { DImg: "1920 x1072+edits-05.jpg", MImg: "DuvilleTimelineImages/mob/6.jpg" },
        { DImg: "1920 x1072+edits-06.jpg", MImg: "DuvilleTimelineImages/mob/7.jpg" },
        { DImg: "1920 x1072+edits-07.jpg", MImg: "DuvilleTimelineImages/mob/8.jpg" },
        { DImg: "1920 x1072+edits-08.jpg", MImg: "DuvilleTimelineImages/mob/9.jpg" },
        { DImg: "1920 x1072+edits-09.jpg", MImg: "DuvilleTimelineImages/mob/10.jpg" },
        { DImg: "1920 x1072+edits-10.jpg", MImg: "DuvilleTimelineImages/mob/11.jpg" },
    ];

    const estateImages = [
        {
            DImg: "Duville-Estate/mob/desktop/1.jpg",
            MImg: "Duville-Estate/mob/1.jpg",
        },
        {
            DImg: "Duville-Estate/mob/desktop/2.jpg",
            MImg: "Duville-Estate/mob/2.jpg",
        },
        {
            DImg: "Duville-Estate/mob/desktop/3.jpg",
            MImg: "Duville-Estate/mob/3.jpg",
        },
        {
            DImg: "Duville-Estate/mob/desktop/4.jpg",
            MImg: "Duville-Estate/mob/4.jpg",
        },
        {
            DImg: "Duville-Estate/mob/desktop/5.jpg",
            MImg: "Duville-Estate/mob/5.jpg",
        },
        {
            DImg: "Duville-Estate/mob/desktop/6.jpg",
            MImg: "Duville-Estate/mob/6.jpg",
        },
        {
            DImg: "Duville-Estate/mob/desktop/7.jpg",
            MImg: "Duville-Estate/mob/7.jpg",
        },
        {
            DImg: "Duville-Estate/mob/desktop/8.jpg",
            MImg: "Duville-Estate/mob/8.jpg",
        },
        {
            DImg: "Duville-Estate/mob/desktop/9.jpg",
            MImg: "Duville-Estate/mob/9.jpg",
        },
    ];

    return (
        <div>
            <div className="flex flex-row items-center mt-4 mx-auto max-w-max space-y-4 md:space-y-0 space-x-4 md:space-x-0">
                <div>
                    <button
                        className={`flex justify-center text-[16px] md:mx-auto ${
                            activeTab === "old"
                                ? "text-[#ED1C26]"
                                : "text-slate-300"
                        } md:text-[#ED1C26]`}
                        onClick={() => {
                            setActiveTab("old");
                            swiper.slideTo(0);
                        }}
                    >
                        Family Legacy
                    </button>

                    <div className="hidden md:flex justify-between gap-8 bg-[#D9D9D9] mt-2 ml-[310px] md:ml-0">
                        {YearListOld.map((item, index) => (
                            <button
                                className={`${index === 0 && "ml-4"} ${
                                    index === YearListOld.length - 1 &&
                                    "md:mr-4 mr-8"
                                } py-2 border-b-2  hover:border-crimson-200 transition-colors ${
                                    currentIndx == index
                                        ? "border-red"
                                        : "border-transparent"
                                }`}
                                onClick={() => {
                                    swiper.slideTo(index);
                                    setCurrentIndx(index);
                                }}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <button
                        className={`flex justify-center text-[16px] md:mx-auto ${
                            activeTab === "new"
                                ? "text-[#ED1C26]"
                                : "text-slate-300"
                        } pb-4 md:pb-0 md:text-[#ED1C26]`}
                        onClick={() => {
                            setActiveTab("new");
                            swiper.slideTo(11);
                        }}
                    >
                        Duville Estates
                    </button>
                    <div className="hidden md:flex justify-between gap-8 bg-[#A9A8A8] text-[#FF2F39] mt-2 ml-[310px] md:ml-0">
                        {YearListNew.map((item, index) => (
                            <button
                                className={`${index === 0 && "ml-4"} ${
                                    index === YearListNew.length - 1 && "mr-4"
                                } py-2 border-b-2  hover:border-crimson-200 transition-colors ${
                                    currentIndx == index + 11
                                        ? "border-red"
                                        : "border-transparent"
                                }`}
                                onClick={() => {
                                    swiper.slideTo(index + 11);
                                    setCurrentIndx(index + 11);
                                }}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* For Mobile view  */}
            <div className="relative h-[100vh]">
                <div className="absolute flex flex-col space-y-3 md:hidden z-20 h-full left-[-20px] opacity-70 justify-between py-2">
                    {activeTab === "old" &&
                        YearListOld.map((item, index) => (
                            <button
                                className={`p-3 shadow-xl  rotate-90 font-semibold text-crimson-200 bg-rose-100 bg-opacity-40`}
                                onClick={() => {
                                    swiper.slideTo(index);
                                }}
                            >
                                {item}
                            </button>
                        ))}
                </div>
                <div className="absolute flex flex-col space-y-4 justify-center md:hidden z-20 h-full left-[-20px] opacity-70  py-2">
                    {activeTab === "new" &&
                        YearListNew.map((item, index) => (
                            <button
                                className={`p-3 shadow-xl  rotate-90 font-semibold text-crimson-200 bg-rose-100 bg-opacity-40`}
                                onClick={() => {
                                    swiper.slideTo(index + 11);
                                }}
                            >
                                {item}
                            </button>
                        ))}
                </div>

                <Swiper
                    modules={[Navigation, EffectFade]}
                    spaceBetween={0}
                    navigation={true}
                    fadeEffect={{ crossFade: true }}
                    effect="fade"
                    centeredSlides={true}
                    slidesPerView={1}
                    onSwiper={(swiper) => {
                        setSwiper(swiper);
                    }}
                    className="z-20 max-h-full"
                >
                    {dbcImages.map((ele) => (
                        <SwiperSlide>
                            <div className="hidden sm:block">
                                <Image
                                    loader={awsImageLoader}
                                    height={2000}
                                    width={2000}
                                    src={width >= 640 ? ele.DImg : ele.MImg}
                                    alt=""
                                />
                            </div>
                            <div className=" sm:hidden">
                                <Image
                                    loader={imageKitLoader}
                                    height={1000}
                                    width={1000}
                                    src={width >= 640 ? ele.DImg : ele.MImg}
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                    {estateImages.map((ele) => (
                        <SwiperSlide>
                            <div className="hidden sm:block">
                                <Image
                                    loader={imageKitLoader}
                                    height={2000}
                                    width={2000}
                                    src={width >= 640 ? ele.DImg : ele.MImg}
                                    alt=""
                                />
                            </div>
                            <div className=" sm:hidden">
                                <Image
                                    loader={imageKitLoader}
                                    height={1000}
                                    width={1000}
                                    src={width >= 640 ? ele.DImg : ele.MImg}
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Timeline;
