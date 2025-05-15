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
    const [activeCard, setActiveCard] = useState<string>("clubhouse");

    const directorMessage: IDirectorMessage = {
        message:
            "As the adage goes, location is everything in real estate and when we were selecting the location for the 3 Bed residences, we felt that this piece of land by the riverside suited it best. We decided that the product typology would be only 3 Bed homes in two sizes. The plans being efficient and unique were designed not just for the affluent but for the discerning. and for those who would want to live here. We called these homes Riverdale Residences as these were limited and unique",
        signImage: "Riverdale Residences/Sign.jpg",
        position: "CHAIRMAN, DUVILLE ESTATES",
    };

    const Garden = [
        "Riverdale Residences/Garden/1.jpg",
        "Riverdale Residences/Garden/2.jpg",
        "Riverdale Residences/Garden/3.jpg",
        "Riverdale Residences/Garden/4.jpg",
        "Riverdale Residences/Garden/5.jpg",
    ];

    const LifestyleAmenitiesTabs = [
        "clubhouse",
        "building elevation",
        "swimming pool",
    ];

    const LifestyleAmenities = [
        {
            title: "clubhouse",
            images: [
                {
                    title: "library area",
                    img: "Riverdale Residences/Apartment/Clubhouse/1.jpg",
                },
                {
                    title: "Carrom game",
                    img: "Riverdale Residences/Apartment/Clubhouse/2.jpg",
                },
                {
                    title: "pool table",
                    img: "Riverdale Residences/Apartment/Clubhouse/3.jpg",
                },
                {
                    title: "creche",
                    img: "Riverdale Residences/Apartment/Clubhouse/4.jpg",
                },
                {
                    title: "multipurpose banquet hall",
                    img: "Riverdale Residences/Apartment/Clubhouse/5.jpg",
                },
                {
                    title: "gymnasium",
                    img: "Riverdale Residences/Apartment/Clubhouse/6.jpg",
                },
            ],
        },
        {
            title: "building elevation",
            images: [
                {
                    title: "",
                    img: "Riverdale Residences/Apartment/Building/1.jpg",
                },
                {
                    title: "",
                    img: "Riverdale Residences/Apartment/Building/2.jpg",
                },
                {
                    title: "",
                    img: "Riverdale Residences/Apartment/Building/3.jpg",
                },
                {
                    title: "",
                    img: "Riverdale Residences/Apartment/Building/4.jpg",
                },
                {
                    title: "",
                    img: "Riverdale Residences/Apartment/Building/5.jpg",
                },
                {
                    title: "",
                    img: "Riverdale Residences/Apartment/Building/6.jpg",
                },
            ],
        },
        {
            title: "swimming pool",
            images: [
                {
                    title: "",
                    img: "Riverdale Residences/Apartment/Swimming/1.jpg",
                },
                {
                    title: "",
                    img: "Riverdale Residences/Apartment/Swimming/2.jpg",
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
                            ? `url(https://res.cloudinary.com/dfvccxflr/image/upload/v1732799910/reverdale-residences/DBanner.jpg)`
                            : `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/ProjectPageMobBanner/Residences.jpg?updatedAt=1707284737267)`
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

            {/* Garden */}
            <div>
                <h1 className="font-lato text-mob-heading md:text-[30px] font-normal leading-[22px] uppercase md:pt-0 flex justify-center pt-14">
                    GARDEN APARTMENT
                </h1>

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
                                    width={1000}
                                    height={1000}
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
                            src="https://www.youtube.com/embed/yIMzjdH4SjU?si=vOMB9kDCJxtbxMlY"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className="w-full h-[200px]  md:h-[400px]"
                        ></iframe>
                    </div>
                    <div>
                        <iframe
                            src="https://www.youtube.com/embed/LZLiZFLLSBY?si=XzPTrY7_8hs1oTPN"
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
                                <div
                                    className={`grid  ${
                                        activeCard === "building elevation"
                                            ? "grid-cols-2 md:grid-cols-3"
                                            : " grid-cols-1 md:grid-cols-2"
                                    } gap-10`}
                                >
                                    {card?.images?.map((image, idx) => (
                                        <div>
                                            <Image
                                                loader={imageKitLoader}
                                                src={image?.img}
                                                width={1000}
                                                height={500}
                                                alt={image?.title}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7565.48138409142!2d73.93555685869141!3d18.54061660000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c32bdea78f7d%3A0xd887c6f465e40712!2sRiverdale%20Residences!5e0!3m2!1sen!2sin!4v1704442992157!5m2!1sen!2sin"
                scanner={"Scanner/residences.webp"}
                scannerText="Riverdale Residences"
                pdf="/pdf_files/Riverdale-Residences.pdf"
            />

            <Footer />
        </div>
    );
};

export default SubPage;
