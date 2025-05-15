"use client";
import React, { Fragment, useEffect, useState } from "react";
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
import ContactUs from "../common/ContactUs";
import { Dialog, Transition } from "@headlessui/react";
import { imageKitLoader } from "../utils/ImageKitLoader";

const SubPage = () => {
    const [activeCard, setActiveCard] = useState<string>("lifestyle");
    const [unitPlan, setUnitPlan] = useState<boolean>(false);
    const [floorPlan, setFloorPlan] = useState<boolean>(false);

    const directorMessage: IDirectorMessage = {
        message:
            "We looked at the trends in the market place which showed increased work force migration into East Pune and this younger buying audience was looking for convenience in travelling to their workplace  closer to the various IT hubs in the vicinity. We looked at their willingness to buy smaller sized homes within  a smaller budget and which were their own vis-à-vis renting. Hence, Riverdale Suites was introduced to  the marketplace as compact urbane condominiums",
        signImage: "Riverdale Suites/TushadSign.svg",
        position: "DIRECTOR, DUVILLE ESTATES",
    };

    const LifestyleAmenitiesTabs = [
        "lifestyle",
        "clubhouse",
        "building elevation",
    ];

    const Apartments = [
        "Riverdale Suites/Internal_Apartment/1.jpg",
        "Riverdale Suites/Internal_Apartment/2.jpg",
        "Riverdale Suites/Internal_Apartment/3.jpg",
        "Riverdale Suites/Internal_Apartment/4.jpg",
    ];

    const LifestyleAmenities = [
        {
            title: "lifestyle",
            images: [
                {
                    title: "gymmnasium",
                    img: "Riverdale Suites/Amenities/Lifestyle/1.jpg",
                },
                {
                    title: "convenience retail",
                    img: "Riverdale Suites/Amenities/Lifestyle/2.jpg",
                },
                {
                    title: "Garden area",
                    img: "Riverdale Suites/Amenities/Lifestyle/3.jpg",
                },
                {
                    title: "BasketBall court",
                    img: "Riverdale Suites/Amenities/Lifestyle/4.jpg",
                },
            ],
        },
        {
            title: "clubhouse",
            images: [
                {
                    title: "pool table",
                    img: "Riverdale Suites/Amenities/Clubhouse/1.jpg",
                },
                {
                    title: "yoga room",
                    img: "Riverdale Suites/Amenities/Clubhouse/2.jpg",
                },
            ],
        },
        {
            title: "building elevation",
            images: [
                {
                    title: "",
                    img: "Riverdale Suites/Amenities/Building/1.jpg",
                },
                {
                    title: "",
                    img: "Riverdale Suites/Amenities/Building/2.jpg",
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
                            ? `url(https://res.cloudinary.com/dfvccxflr/image/upload/v1732800096/reverdale-suites/DBanner.jpg)`
                            : `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/ProjectPageMobBanner/Suites.jpg?updatedAt=1707284739945)`
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
            <div className="space-y-10">
                <h1 className="font-lato text-mob-heading md:text-[30px] font-normal leading-[22px] uppercase md:pt-0 flex justify-center pt-14">
                    Internal APARTMENT
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
                    {Apartments?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="max-w-7xl max-h-[600px] mx-auto flex flex-col items-center justify-center p-10 sm:p-0">
                                <Image
                                    loader={imageKitLoader}
                                    height={1000}
                                    width={1000}
                                    src={item}
                                    alt="apartment image"
                                    className="object-cover min-w-[600px]"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Floor  */}
            <div className="space-y-3 mt-20  mb-10 md:mb-20 pb-10 bg-[#EFEFEF]">
                <div className="bg-[#EFEFEF] pt-10 my-10">
                    <h1 className="font-lato text-mob-heading md:text-[30px] font-normal leading-[22px] uppercase md:pt-0 flex justify-center pt-14">
                        floor plan
                    </h1>

                    <div className="flex flex-col md:flex-row w-11/12 mx-auto md:w-full  bg-[#EFEFEF]  justify-center">
                        <div className="bg-[#EFEFEF] md:p-12 space-y-5 md:space-y-20 ">
                            <div className="flex flex-col justify-center items-center">
                                <Image
                                    loader={imageKitLoader}
                                    width={5000}
                                    height={5000}
                                    src={"Riverdale Suites/Floor_Plan/2.jpg"}
                                    alt="Apartment Image"
                                    className="mt-10 md:max-w-[500px] md:min-h-[400px] object-cover hover:scale-125 transition-transform duration-500 cursor-pointer"
                                    onClick={() => setUnitPlan(true)}
                                />

                                <Transition.Root show={unitPlan} as={Fragment}>
                                    <Dialog
                                        as="div"
                                        className="relative z-10"
                                        onClose={setUnitPlan}
                                    >
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity" />
                                        </Transition.Child>

                                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-out duration-300"
                                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                    leave="ease-in duration-200"
                                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                >
                                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-7xl sm:p-6">
                                                        <Image
                                                            src={
                                                                "Riverdale Suites/Floor_Plan/2.jpg"
                                                            }
                                                            alt="Apartment Image"
                                                            width={5000}
                                                            height={5000}
                                                            className="md:max-w-[800px] mx-auto"
                                                        />
                                                    </Dialog.Panel>
                                                </Transition.Child>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition.Root>
                            </div>
                            <h1 className="text-mob-heading md:text-section-heading  uppercase mx-auto w-fit">
                                INDIVIDUAL UNIT PLAN{" "}
                            </h1>
                        </div>
                        <div className="bg-[#EFEFEF] md:p-12 space-y-5 md:space-y-20">
                            <div className="flex flex-col justify-center items-center">
                                <Image
                                    loader={imageKitLoader}
                                    src={"Riverdale Suites/Floor_Plan/1.jpg"}
                                    height={1000}
                                    width={1000}
                                    alt="Apartment Image"
                                    className="mt-10 md:max-w-[500px] md:min-h-[400px] object-cover hover:scale-125 transition-transform duration-500 cursor-pointer"
                                    onClick={() => setFloorPlan(true)}
                                />

                                <Transition.Root show={floorPlan} as={Fragment}>
                                    <Dialog
                                        as="div"
                                        className="relative z-10"
                                        onClose={setFloorPlan}
                                    >
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity" />
                                        </Transition.Child>

                                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-out duration-300"
                                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                    leave="ease-in duration-200"
                                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                >
                                                    <Dialog.Panel className="relative   transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-7xl sm:p-6">
                                                        <Image
                                                            loader={
                                                                imageKitLoader
                                                            }
                                                            src={
                                                                "Riverdale Suites/Floor_Plan/1.jpg"
                                                            }
                                                            alt="Apartment Image"
                                                            width={1000}
                                                            height={1000}
                                                            className=" md:max-w-[800px] mx-auto"
                                                        />
                                                    </Dialog.Panel>
                                                </Transition.Child>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition.Root>
                            </div>
                            <h1 className="text-mob-heading md:text-section-heading uppercase mx-auto w-fit">
                                Floor plan
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lifestyle amenities  */}
            <div className="flex flex-col items-center max-w-sm sm:max-w-7xl mx-auto mt-20 md:mt-0">
                <h1 className="text-mob-heading md:text-section-heading font-lato font-normal leading-[22px] uppercase">
                    Lifestyle amenities
                </h1>

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
                                    className={`grid grid-cols-1 md:grid-cols-2 gap-10`}
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

            {/* React out  */}

            <ContactUs
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7565.48138409142!2d73.93555685869141!3d18.54061660000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1457f9a9771%3A0xc36f97c9dbf9765b!2sRiverdale%20Suites!5e0!3m2!1sen!2sin!4v1704443082123!5m2!1sen!2sin"
                scanner={"Scanner/suites.webp"}
                scannerText="Riverdale Suites"
                pdf="/pdf_files/Riverdale-Suites.pdf"
            />

            <Footer />
        </div>
    );
};

export default SubPage;
