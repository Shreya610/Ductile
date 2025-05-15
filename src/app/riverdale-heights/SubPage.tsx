"use client";
import React, { useEffect, useState } from "react";

import Navbar from "../components/LandingPage/Header/Navbar";
import Image from "next/image";
import Footer from "../common/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import "./swiper-navigation-button.css";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { IDirectorMessage } from "../utils/interface/directorMessage";
import DirectorMessage from "../components/ProjectsPage/DirectorMessage";
import SwiperSlider from "../components/ProjectsPage/SwiperSlider";
import Discourse from "../components/ProjectsPage/Discourse";
import ContactUs from "../common/ContactUs";
import { imageKitLoader } from "../utils/ImageKitLoader";

const SubPage = () => {
    const [activeCard, setActiveCard] = useState<string>("lifestyle");

    const directorMessage: IDirectorMessage = {
        message:
            "Given the lush green natural setting by the riverside and the river, these became the starting point for our conceptual thought process. We then developed various architectural concepts that seamlessly extended these elements into an elegant form. With an exceptionally beautiful view of the river and the range of incredibly amazing views into the horizon, we are certain that this development will become a landmark in the making alongside the banks of the river alongside Pune’s most picturesque riverfront.",
        signImage: "RiverdaleHeights/Sign.jpg",
        position: "MANAGING DIRECTOR, UHA LONDON",
    };

    const Garden = [
        "RiverdaleHeights/Garden/1.jpg",
        "RiverdaleHeights/Garden/2.jpg",
        "RiverdaleHeights/Garden/3.jpg",
        "RiverdaleHeights/Garden/4.jpg",
        "RiverdaleHeights/Garden/5.jpg",
        "RiverdaleHeights/Garden/6.jpg",
        "RiverdaleHeights/Garden/7.jpg",
        "RiverdaleHeights/Garden/8.jpg",
    ];

    const LifestyleAmenitiesTabs = [
        "lifestyle",
        "clubhouse",
        "building elevation",
    ];

    const LifestyleAmenities = [
        {
            title: "lifestyle",
            images: [
                {
                    title: "The Multi Purpose Games Court",
                    img: "RiverdaleHeights/Apartment/lifestyle/1.jpg",
                },
                {
                    title: "NET CRICKET PITCH",
                    img: "RiverdaleHeights/Apartment/lifestyle/2.jpg",
                },
                {
                    title: "BADMINTON COURT",
                    img: "RiverdaleHeights/Apartment/lifestyle/3.jpg",
                },
                {
                    title: "BASKETBALL COURT",
                    img: "RiverdaleHeights/Apartment/lifestyle/4.jpg",
                },
                {
                    title: "Swimming pool",
                    img: "RiverdaleHeights/Apartment/lifestyle/5.jpg",
                },
                {
                    title: "Swimming pool",
                    img: "RiverdaleHeights/Apartment/lifestyle/6.jpg",
                },
                {
                    title: "Walking area",
                    img: "RiverdaleHeights/Apartment/lifestyle/7.jpg",
                },
                {
                    title: "kids play area",
                    img: "RiverdaleHeights/Apartment/lifestyle/8.jpg",
                },
            ],
        },

        {
            title: "clubhouse",
            images: [
                {
                    title: "Foosball game ",
                    img: "RiverdaleHeights/Apartment/clubhouse/1.jpg",
                },
                {
                    title: "carrom game",
                    img: "RiverdaleHeights/Apartment/clubhouse/2.jpg",
                },
                {
                    title: "gymnasium",
                    img: "RiverdaleHeights/Apartment/clubhouse/3.jpg",
                },
                {
                    title: "gymnasium",
                    img: "RiverdaleHeights/Apartment/clubhouse/4.jpg",
                },
                {
                    title: "clubhouse entrance",
                    img: "RiverdaleHeights/Apartment/clubhouse/5.jpg",
                },
                {
                    title: "Table tennis",
                    img: "RiverdaleHeights/Apartment/clubhouse/6.jpg",
                },
                {
                    title: "Library area",
                    img: "RiverdaleHeights/Apartment/clubhouse/7.jpg",
                },
                {
                    title: "Library area",
                    img: "RiverdaleHeights/Apartment/clubhouse/8.jpg",
                },
            ],
        },
        {
            title: "building elevation",
            images: [
                {
                    title: "",
                    img: "RiverdaleHeights/Apartment/building/1.jpg",
                },
                {
                    title: "",
                    img: "RiverdaleHeights/Apartment/building/2.jpg",
                },
                {
                    title: "",
                    img: "RiverdaleHeights/Apartment/building/3.jpg",
                },
                {
                    title: "",
                    img: "RiverdaleHeights/Apartment/building/4.jpg",
                },
            ],
        },
    ];

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
        <div className="overflow-x-hidden">
            {/* Header  */}
            <div
                style={{
                    backgroundImage: `${
                        width >= 640
                            ? `url(https://res.cloudinary.com/dfvccxflr/image/upload/v1732799333/reverdale-heights/Dbanner.jpg)`
                            : `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/ProjectPageMobBanner/Heights.jpg?updatedAt=1707284735096)`
                    }`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "100vh",
                }}
            >
                <Navbar />
            </div>

            {/* Director Message  */}
            <DirectorMessage {...directorMessage} />

            {/* Garden Apartment */}
            <div>
                <h2 className="font-lato text-mob-heading md:text-[30px] font-normal leading-[22px] uppercase md:pt-0 flex justify-center pt-14">
                    GARDEN APARTMENT
                </h2>

                <Swiper
                    modules={[EffectCoverflow, Navigation]}
                    navigation={true}
                    effect={"coverflow"}
                    grabCursor={true}
                    // centeredSlides={true}
                    spaceBetween={100}
                    slidesPerView={3}
                    breakpoints={{
                        300: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        790: { slidesPerView: 3 },
                        1024: { slidesPerView: 3 },
                    }}
                    loop={true}
                    coverflowEffect={{
                        rotate: 0,
                        depth: 500,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    className="md:my-10 mt-0 w-full "
                >
                    {Garden.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="max-w-7xl max-h-[600px] mx-auto flex flex-col items-center justify-center p-10 sm:p-0">
                                <Image
                                    loader={imageKitLoader}
                                    src={item}
                                    height={100}
                                    width={1000}
                                    alt="apartment image"
                                    className="object-cover min-w-[600px]"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Videos */}
            <div className="my-10 md:my-28 w-11/12 mx-auto space-y-10">
                <div className="flex flex-col justify-center items-center gap-1 md:gap-2">
                    <h1 className="text-mob-heading md:text-section-heading font-lato font-normal leading-[22px] uppercase">
                        watch videos
                    </h1>
                    <p className="leading-link-text">For Better Experience</p>
                </div>
                <div className="grid grid-cols-1  md:grid-cols-2 w-11/12 mx-auto  place-content-center gap-20">
                    <div>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/jjBdoFX7dag?si=Q-cOkoqToc9ZBB_Z"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className="w-full h-[200px]  md:h-[400px]"
                        ></iframe>
                    </div>
                    <div>
                        <iframe
                            src="https://www.youtube.com/embed/7ve-2mVhXns?si=9V_d08402lJit6Bj"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className=" h-[200px] w-full md:h-[400px]"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Lifestyle amenities  */}
            <div className="flex flex-col items-center max-w-sm sm:max-w-7xl mx-auto mt-20 md:mt-0">
                <h2 className="text-mob-heading md:text-section-heading font-lato font-normal leading-[22px] uppercase">
                    Lifestyle amenities
                </h2>

                <div className="flex flex-row gap-2 sm:gap-8 my-10 md:ml-20">
                    {LifestyleAmenitiesTabs.map((item, index) => (
                        <button
                            key={index}
                            className={`border ${
                                item === activeCard
                                    ? "border-crimson-200 text-crimson-200"
                                    : "border border-slate-200"
                            } rounded-[30px] sm:px-8 px-2 py-2 capitalize md:uppercase hover:shadow-lg text-xs sm:text-lg`}
                            onClick={() => setActiveCard(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className="w-11/12 md:w-full">
                    {LifestyleAmenities?.map((card, idx) => (
                        <>
                            {card?.title === activeCard && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    {card?.images?.map((image, idx) => (
                                        <div>
                                            <Image
                                                loader={imageKitLoader}
                                                src={image?.img}
                                                width={1000}
                                                height={1000}
                                                alt={"img"}
                                                key={idx}
                                                className=" object-cover w-full"
                                            />
                                            <h4 className="text-center font-medium  text-base md:text-card-heading uppercase mt-3">
                                                {image?.title}
                                            </h4>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    ))}
                </div>
            </div>

            <ContactUs
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7565.497654645185!2d73.9320004793731!3d18.54024919038477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c32626857bc3%3A0x8a1529334f4bb8c9!2sRiverdale%20Heights!5e0!3m2!1sen!2sin!4v1704442839207!5m2!1sen!2sin"
                scanner="Scanner/heights.webp"
                scannerText="Riverdale Heights"
                pdf="/pdf_files/Riverdale-Heights.pdf"
            />

            <Footer />
        </div>
    );
};

export default SubPage;
