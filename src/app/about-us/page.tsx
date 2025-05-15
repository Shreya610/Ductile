"use client";
 
import React, { useState } from "react";
import Footer from "../common/Footer/Footer";
import Navbar from "../components/LandingPage/Header/Navbar";
import Image from "next/image";
import Link from "next/link";
import { imageKitLoader } from "../utils/ImageKitLoader";
  
const Page = () => {
    const [show, setShow] = useState(false);
 
    return (
        <div className="w-full space-y-12 md:space-y-16  font-plus-jakarta-sans max-w-[100vw]  overflow-x-hidden ">
            {/* <Navbar /> */}
            <div className=" relative w-full ">
                <div
                    className="w-screen h-[400px] md:h-screen"
                    style={{
                        backgroundImage: `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/About-us/aboutus-banner.jpg?updatedAt=1707285200382)`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <Navbar />
                </div>
                <div className="w-[50%] z-10 absolute top-[35%] left-[25%] flex flex-row gap-8 font-extrabold text-[106px] text-white "></div>
                <div className="absolute top-0 bg-black opacity-[0.3]  w-screen object-cover md:h-screen "></div>
                <Image
                    loader={imageKitLoader}
                    src={"Common/banner-2.png"}
                    width={300}
                    height={400}
                    alt="banner"
                    className=" absolute right-9 bottom-0 md:right-14 w-[150px]  md:w-[250px] h-[200px] md:h-[500px]"
                />
            </div>
            {/* second section */}
            <div className=" w-[90%] md:w-[75%] mx-auto  md:space-y-16   ">
                <div className="flex gap-2 items-center">
                    <div className="h-6 md:h-7 w-1 bg-red"></div>
                    <h1 className=" text-mob-heading md:text-[30px] font-plus-jakarta-sans">
                        OUR HISTORY AND HERITAGE
                    </h1>
                </div>
                <div className=" flex justify-center items-center flex-col md:flex-row mt-10 sm:mt-0 gap-6 md:gap-12 w-full">
                    <Image
                        width={300}
                        height={400}
                        loader={imageKitLoader}
                        alt="1810"
                        src="1810.png"
                        className="object-cover w-[30%] md:w-[25%] "
                    />
                    <div className=" md:w-[70%]  text-sm text-[#6B7280] font-plus-jakarta-sans leading-[22px] space-y-3">
                        <div className=" font-plus-jakarta-sans space-y-3">
                            <div className="space-y-3">
                                <p className=" font-plus-jakarta-sans">
                                    With a rich heritage that dates back over a couple of centuries, it is not by
                                    happenchance that India’s second oldest family run business continues to thrive
                                    amidst landmark events and circumstances that have altered business trajectory over
                                    this time. With a belief system that aims at delivering to a customer higher value
                                    and more than what they can expect, Duville Estates has commenced its business
                                    operations launching Riverdale, a 31 acre micro-township that will be a landmark by
                                    the riverside at the fastest growing micro geography in Pune, Kharadi.
                                </p>
                                <p className=" font-plus-jakarta-sans">
                                    With the launch of successive residential projects at Riverdale from Riverdale
                                    Heights in 2016 and having launched a new project every year barring the tumultuous
                                    Covid period until Riverdale Grand in 2022, the commitment to engineering excellence
                                    ensures that every project undertaken stands as testament to our enduring legacy...{" "}
                                    <span
                                        className={`font-bold text-black cursor-pointer ${show ? "hidden" : ""}`}
                                        onClick={() => setShow(true)}
                                    >
                                        {" "}
                                        Show More
                                    </span>
                                </p>
                            </div>
                            {show ? (
                                <>
                                    <div className="space-y-3">
                                        <p>
                                            We understand the importance of preserving the timeless values of the past
                                            while embracing the opportunities of the present and future. Our dedication
                                            to this philosophy is what sets us apart in the real estate industry
                                        </p>
                                        <p>
                                            The legacy of Duville Estates will be the promise that it carries into the
                                            future as we continue to evolve, adapt, and innovate, always keeping our
                                            rich heritage as the guiding light. As we move forward, we remain committed
                                            to redefining the real estate landscape by crafting extraordinary living
                                            spaces by delivering extraordinary outcomes by driving excellence everyday.
                                            <span
                                                className={`font-bold text-black cursor-pointer ${
                                                    !show ? "hidden" : ""
                                                }`}
                                                onClick={() => setShow(false)}
                                            >
                                                {"  "}
                                                Show Less
                                            </span>
                                        </p>
                                    </div>
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* second section Leadship */}
            <div className=" w-[90%] md:w-[75%] mx-auto  space-y-8   ">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex gap-2 items-center">
                        <div className="h-6 md:h-7 w-1 bg-red"></div>
                        <h1 className=" text-mob-heading md:text-[30px] font-plus-jakarta-sans">OUR LEADERSHIP</h1>
                    </div>
                    <Link href={"/leadership"}>
                        <p className="border-b border-b-red text-sm ml-3"> View all</p>
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="relative w-full md:w-[35%]">
                        <Image
                            loader={imageKitLoader}
                            height={1000}
                            width={1000}
                            alt="bheram b dubash"
                            src="About-us/our_leadership-1.jpg"
                            className="object-cover w-[100%] h-full "
                        />
                        <h3 className="bg-red px-4 md:px-7 py-1 md:py-3 text-xs md:text-base absolute text-white bottom-0 md:bottom-0">
                            BEHRAM B. DUBASH
                        </h3>
                    </div>
                    <div className="relative md:w-[35%]">
                        <Image
                            loader={imageKitLoader}
                            height={300}
                            width={400}
                            alt="leaders "
                            src="About-us/our_leadership-2.jpg"
                            className="object-cover h-full"
                        />
                        <h3 className="bg-red px-4 md:px-7 py-1 md:py-3 text-xs md:text-base absolute text-white bottom-0 md:bottom-0">
                            TUSHAD B. DUBASH
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 justify-between gap-3">
                        {/* <div className="relative">
                            <Image
                                loader={imageKitLoader}
                                height={300}
                                width={400}
                                alt="leaders "
                                src="About-us/our_leadership-2.jpg"
                                className="object-cover md:min-h-[220px]"
                            />
                            <h1 className="bg-red  px-2 md:px-4 py-1 text-xs md:text-base  absolute text-white bottom-0 md:bottom-0">
                                TUSHAD B. DUBASH
                            </h1>
                        </div> */}
                        <div className="relative">
                            <Image
                                loader={imageKitLoader}
                                height={300}
                                width={400}
                                alt="leaders "
                                src="About-us/our_leadership-3.jpg"
                                className="object-cover md:min-h-[220px]"
                            />

                            <h3 className="bg-red px-4 md:px-7 py-1 md:py-3 text-xs md:text-base absolute text-white bottom-0 md:bottom-0">
                                PHILLIE D. KARKARIA
                            </h3>
                        </div>
                        <div className="relative">
                            <Image
                                loader={imageKitLoader}
                                height={300}
                                width={400}
                                alt="leaders "
                                src="About-us/our_leadership-4.jpg"
                                className="object-cover md:min-h-[220px]"
                            />
                            <h3 className="bg-red px-4 md:px-7 py-1 md:py-3 text-xs md:text-base absolute text-white bottom-0 md:bottom-0">
                                YAZDI P. DANDIWALA
                            </h3>
                        </div>
                        {/* <div className="relative">
                            <Image
                                loader={imageKitLoader}
                                height={300}
                                width={400}
                                alt="leaders "
                                src="About-us/our_leadership-5.jpg"
                                className="object-cover md:min-h-[220px]"
                            />
                            <h1 className="bg-red  px-2 md:px-4 py-1 text-xs md:text-base  absolute text-white bottom-0 md:bottom-0">
                                DHANSUKH H. PAREKH
                            </h1>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* third  */}
            <div className="w-[90%] md:w-[70%] mx-auto grid  grid-cols-1 md:grid-cols-3 gap-5 md:gap-20">
                <div className="space-y-3">
                    <h3 className="  font-plus-jakarta-sans  -mb-2 text-mob-subHeading md:text-[24px]  font-medium">
                        MISSION
                    </h3>
                    <div className="w-[20%] bg-red h-[1px] "></div>
                    <div className="font-plus-jakarta-sans  text-[#6B7280] tracking-widers text-[14px] leading-[22px] ">
                        Our mission is to to outperform ourselves with every project we undertake and to be admired for
                        our unparalleled standards of quality, value and excellence.
                    </div>
                </div>
                <div className="space-y-3">
                    <h3 className="  font-plus-jakarta-sans  -mb-2  text-mob-subHeading md:text-[24px]  font-medium">
                        VISION
                    </h3>
                    <div className="w-[20%] bg-red h-[1px]"></div>
                    <div className="font-plus-jakarta-sans text-[#6B7280] tracking-widers text-[14px]  leading-[22px] ">
                        Our vision is to transform the cityscape with the highest standards of design and quality
                        coupled with uncompromising integrity.
                    </div>
                </div>
                <div className="space-y-3">
                    <h3 className="  font-plus-jakarta-sans  -mb-2  text-mob-subHeading md:text-[24px]  font-medium">
                        VALUES
                    </h3>
                    <div className="w-[20%] bg-red h-[1px] "></div>
                    <div className="font-plus-jakarta-sans text-[#6B7280]  tracking-widers text-[14px]  leading-[22px] ">
                        Using its Time-Tested belief system that has been upheld over the last several decades, the
                        values, culture and the purpose of making a difference to the real estate sector stands
                        paramount to delivering unparalleled value.
                    </div>
                </div>
            </div>

            {/* fifth section */}
            <div className="w-[90%] md:w-[75%] mx-auto space-y-5 md:space-y-16 ">
                <div className="flex gap-2 items-center">
                    <div className="h-6 md:h-7 w-1 bg-red"></div>
                    <h1 className=" text-mob-heading md:text-section-heading font-plus-jakarta-sans">
                        BUSINESS VENTURES
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row gap-14 justify-between">
                    <Link href="/dbcsons">
                        <div className="relative transition-all duration-700 hover:scale-105 hover:shadow-2xl">
                            <Image
                                loader={imageKitLoader}
                                height={1000}
                                width={1000}
                                src={"Emblem.jpg"}
                                alt="Family legacy image"
                                className=" md:w-[550px]  md:h-[400px] object-cover"
                            />
                            <h1 className="absolute  left-[28%] top-[80%] md:top-[85%] z-10 text-white md:left-[37%] text-3xl  font-plus-jakarta-sans">
                                Family Legacy
                            </h1>
                        </div>
                    </Link>
                    <Link href="/duville-estate">
                        <div className="relative transition-all duration-700 hover:scale-105 hover:shadow-2xl">
                            <Image
                                loader={imageKitLoader}
                                height={1000}
                                width={1000}
                                alt="Duville Estate image"
                                src="duvilleState.jpg"
                                className="md:w-[550px] h-[350px] md:h-[400px] object-cover"
                            />
                            <h1 className="absolute  left-[28%] top-[80%] z-10  text-white md:left-[40%] md:top-[85%] text-3xl  font-plus-jakarta-sans">
                                Duville Estates
                            </h1>
                        </div>
                    </Link>
                </div>
            </div>
            {/* Navbar here */}
            <Footer />
        </div>
    );
};

export default Page;
