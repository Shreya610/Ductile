"use client";

import React from "react";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import ImageSlider from "../common/ImageSlider";
import Navbar from "../components/LandingPage/Header/Navbar";

const DbcsonsPage = () => {
    const images = [
        {
            bigImg: "https://res.cloudinary.com/dfvccxflr/image/upload/v1732802299/dbcsons/1.jpg",
            smallImg: "DuvilleTimelineImages/mob/1.jpg",
        },
        {
            bigImg: "https://res.cloudinary.com/dfvccxflr/image/upload/v1732802299/dbcsons/2.jpg",
            smallImg: "DuvilleTimelineImages/mob/2.jpg",
        },
        {
            bigImg: "https://res.cloudinary.com/dfvccxflr/image/upload/v1732802299/dbcsons/3.jpg",
            smallImg: "DuvilleTimelineImages/mob/3.jpg",
        },
        {
            bigImg: "https://res.cloudinary.com/dfvccxflr/image/upload/v1732802299/dbcsons/4.jpg",
            smallImg: "DuvilleTimelineImages/mob/4.jpg",
        },
        {
            bigImg: "https://res.cloudinary.com/dfvccxflr/image/upload/v1732802299/dbcsons/5.jpg",
            smallImg: "DuvilleTimelineImages/mob/5.jpg",
        },
        {
            bigImg: "https://res.cloudinary.com/dfvccxflr/image/upload/v1732802299/dbcsons/6.jpg",
            smallImg: "DuvilleTimelineImages/mob/6.jpg",
        },
        {
            bigImg: "https://res.cloudinary.com/dfvccxflr/image/upload/v1732802299/dbcsons/7.jpg",
            smallImg: "DuvilleTimelineImages/mob/7.jpg",
        },
        {
            bigImg: "/https://res.cloudinary.com/dfvccxflr/image/upload/v1732802299/dbcsons/8.jpg",
            smallImg: "/DuvilleTimelineImages/mob/8.jpg",
        },
        {
            bigImg: "https://res.cloudinary.com/dfvccxflr/image/upload/v1732802299/dbcsons/9.jpg",
            smallImg: "DuvilleTimelineImages/mob/9.jpg",
        },
        {
            bigImg: "https://res.cloudinary.com/dfvccxflr/image/upload/v1732802299/dbcsons/10.jpg",
            smallImg: "DuvilleTimelineImages/mob/10.jpg",
        },
        {
            bigImg: "https://res.cloudinary.com/dfvccxflr/image/upload/v1732802299/dbcsons/11.jpg",
            smallImg: "DuvilleTimelineImages/mob/11.jpg",
        },
    ];

    return (
        <>
            {/* <div className='w-full z-50   opacity-[0.8] outline-none'> */}
            <Navbar />
            {/* </div> */}
            <div className="-mt-[115px]">
                <ImageSlider images={images} />
            </div>
        </>
    );
};

export default DbcsonsPage;
