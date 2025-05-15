"use client";

import React, { useEffect, useRef, useState } from "react";

import Navbar from "./Header/Navbar";
import Image from "next/image";
import { imageKitLoader } from "../../utils/ImageKitLoader";

const HeroSection = () => {
    // const [volume, setVolume] = useState(0.1); // Initial volume set to 50%
    // const videoRef = useRef(null);

    // useEffect(() => {
    //   // Set the initial volume when the component mounts
    //   videoRef.current.volume = volume;
    // }, [volume]);

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
        <>
            <Navbar />
            <div className="h-screen flex">
                <video
                    src="https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Home/Banner.webm/ik-video.mp4?updatedAt=1744720455304"
                    muted
                    autoPlay
                    loop
                    className=" hidden md:block absolute top-0 scale-y-105  w-full  object-cover -z-20"
                ></video>
                <video
                    src="https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Home/Banner-mob.webm/ik-video.mp4?updatedAt=1744720848993"
                    muted
                    autoPlay
                    loop
                    className=" md:hidden absolute -top-3  md:top-0  w-full max-w-[100vw] h-full   -z-20"
                ></video>
            </div>
            {/* <div className="relative mb-32 sm:mb-7">
                <div className="absolute top-0 w-full">
                    <Navbar />
                </div>

                <div>
                    <div className="hidden md:block">
                        <Image
                            loader={imageKitLoader}
                            width={1600}
                            height={800}
                            alt="banner"
                            priority
                            src="HomePage.png"
                            objectFit="cover"
                            className="  md:h-[800px] w-full   "
                        />
                    </div>
                    <div className=" md:hidden">
                        <Image
                            loader={imageKitLoader}
                            height={600}
                            width={400}
                            alt="banner"
                            priority
                            src="MobileHomePage.jpg"
                            objectFit="cover"
                            className=" h-[600px] md:h-[600px] w-full   "
                        />
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default HeroSection;
