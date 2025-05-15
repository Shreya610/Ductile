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
import DirectorMessage from "../components/ProjectsPage/DirectorMessage";
import { IDirectorMessage } from "../utils/interface/directorMessage";
import Discourse from "../components/ProjectsPage/Discourse";
import SwiperSlider from "../components/ProjectsPage/SwiperSlider";
import ContactUs from "../common/ContactUs";
import { Dialog, Transition } from "@headlessui/react";
import { imageKitLoader } from "../utils/ImageKitLoader";

const SubPage = () => {
    const [activeCard, setActiveCard] = useState<string>("podium");
    const [openLower, setOpenLower] = useState<boolean>(false);
    const [openUpper, setOpenUpper] = useState<boolean>(false);
    const [openLowerPlan, setOpenLowerPlan] = useState<boolean>(false);
    const [openUpperPlan, setOpenUpperPlan] = useState<boolean>(false);

    const imageData = [
        {
            image: "/Riverdale Grove/Internal Apartment/living.webp",
            text: "Living Room + Dining Room",
        },
        {
            image: "/Riverdale Grove/Internal Apartment/bathroom.webp",
            text: "Bathroom",
        },
        {
            image: "/Riverdale Grove/Internal Apartment/kitchen.webp",
            text: "Kitchen",
        },
        {
            image: "/Riverdale Grove/Internal Apartment/bedroom.webp",
            text: "Bedroom",
        },
    ];

    const imageDataMob = [
        {
            image: "/Riverdale Grove/IAMob/IA1.jpg",
            text: "Living Room + Dining Room",
        },
        {
            image: "/Riverdale Grove/IAMob/IA2.jpg",
            text: "Bathroom",
        },
        {
            image: "/Riverdale Grove/IAMob/IA3.jpg",
            text: "Kitchen",
        },
        {
            image: "/Riverdale Grove/IAMob/IA4.jpg",
            text: "Bedroom",
        },
    ];

    const designInnovationImages = [
        {
            image: "/Riverdale Grove/Design1.jpg",
            text: "Master Bedroom",
        },
        {
            image: "/Riverdale Grove/Design2.jpg",
            text: "Living Room",
        },
        {
            image: "/Riverdale Grove/Design3.jpg",
            text: "Living Room",
        },
        {
            image: "/Riverdale Grove/Design4.jpg",
            text: "Living Room",
        },
    ];

    const directorMessage: IDirectorMessage = {
        message:
            "We believe that our Customer Value Proposition should be focussed on being ‘INSPIRATIONAL’ and ‘RELEVANT’ to living life. We’ve put our living amenities at the centre of our strategy to create a superior value proposition to fit in with the epi-centre of living. This is essentially how we have driven value through our customer-centric approach This is Riverdale Grove",
        signImage: "RiverdaleGrand/TushadSign.svg",
        position: "DIRECTOR, DUVILLE ESTATES",
    };

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
                            ? `url(https://res.cloudinary.com/dfvccxflr/image/upload/v1732800461/projects/DGroveBanner.jpg)`
                            : `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/ProjectPageMobBanner/Grove.jpg?updatedAt=1707284733708)`
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
            <section className="font-plus-jakarta-sans flex flex-col items-center justify-center gap-3 md:gap-10 text-base max-w-[90%] md:max-w-[50%] mx-auto   text-[#6B7280] md:py-32 text-center mt-14 md:mt-0">
                <div className="font-plus-jakarta-sans text-sm md:text-base   leading-[30px] italic text-[#6B7280] text-center ">
                    <p>
                        <span className=" text-xl md:text-3xl font-bold leading-link-text ">"</span> We began with naming this product
                        offering after the location which along the riverside road has a lining of a green belt of groves, woods and other
                        plantation running alongside both banks of the river.
                    </p>
                    <p>
                        This product offering consisting of 2, 3 and 3.5 BHK Duplexes are the most sought after product mix and hence it is
                        with this understanding that we have developed this range of product offering with different sizes within each
                        configuration. Each of these sizes have been designed to deliver the most efficient utilization of space from a
                        living point of view. Further, the living amenities have been designed to fulfil the various needs of our buyers.
                        Given the location being equi-distant from either road at either end, this was positioned at the Center of Life.
                        <span className=" text-xl md:text-3xl font-bold leading-link-text ">"</span>{" "}
                    </p>{" "}
                </div>

                <div>
                    <div className="flex flex-row gap-1 items-center">
                        <div className="w-[50px] h-[0.1px] bg-black"></div>
                        <Image loader={imageKitLoader} src={"/RiverdaleGrand/TushadSign.svg"} width={200} height={200} alt="signature" />
                        <div className="w-[50px] h-[0.1px] bg-black"></div>
                    </div>
                    <p className="text-xs mb-1">DIRECTOR </p>
                    <p className="text-xs"> DUVILLE ESTATES</p>
                </div>
            </section>

            {/* Design Innovation  */}
            <div>
                <h1 className="font-lato text-mob-heading md:text-[30px] font-normal leading-[22px] uppercase md:pt-0 flex justify-center pt-14">
                    Design Innovation
                </h1>

                <h3 className="leading-link-text text-sm md:text-base flex justify-center mt-1 md:mt-2 ">
                    3.5 BHK APARTMENT (1360 sq. ft.)
                </h3>

                <Swiper
                    modules={[EffectCoverflow, Navigation]}
                    navigation={true}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    spaceBetween={0}
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
                    className="md:mt-10 mt-0 w-full "
                >
                    {designInnovationImages.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="max-w-7xl max-h-[600px] mx-auto flex flex-col items-center justify-center p-10 sm:p-0">
                                <Image
                                    loader={imageKitLoader}
                                    width={400}
                                    height={400}
                                    src={item.image}
                                    alt="apartment image"
                                    className="min-h-[300px] min-w-[800px]"
                                />
                                <p className="font-lato text-[18px] font-normal leading-[32px] mt-2 flex justify-center">{item.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Launch */}
            <div className="bg-[#EFEFEF] pt-10 mt-20">
                <div>
                    <h3 className="text-[#DF3030] w-fit mx-auto font-lato text-[20px] font-normal leading-[30px] uppercase border border-[#E34A4A] rounded-[25px] px-5 md:px-20">
                        isometric view{" "}
                    </h3>
                    <h3 className="leading-link-text text-sm md:text-base flex justify-center mt-1 md:mt-2 uppercase">
                        Of The New 3.5 BHK DUPLEX
                    </h3>
                </div>

                <div className="flex  flex-col md:flex-row w-full bg-[#EFEFEF] mx-auto justify-center">
                    <div className="bg-[#EFEFEF]  md:p-12 space-y-5 md:space-y-20 ">
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                loader={imageKitLoader}
                                src={"/Riverdale Grove/Apartment/lower.webp"}
                                width={400}
                                height={400}
                                alt="Apartment Image"
                                className="mt-10 md:max-w-[500px] md:min-h-[400px] object-cover hover:scale-125 transition-transform duration-500 cursor-pointer"
                                onClick={() => setOpenLower(true)}
                            />

                            <Transition.Root show={openLower} as={Fragment}>
                                <Dialog as="div" className="relative z-10" onClose={setOpenLower}>
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
                                                        loader={imageKitLoader}
                                                        src={"/Riverdale Grove/Apartment/lower.webp"}
                                                        alt="Apartment Image"
                                                        width={5000}
                                                        height={5000}
                                                        className=" max-w-[300px] md:max-w-[800px]  mx-auto"
                                                    />
                                                </Dialog.Panel>
                                            </Transition.Child>
                                        </div>
                                    </div>
                                </Dialog>
                            </Transition.Root>
                        </div>
                        <h2 className="text-mob-heading md:text-section-heading mx-auto w-fit">Lower Level View </h2>
                    </div>
                    <div className="bg-[#EFEFEF] p-7 md:p-12  md:space-y-10">
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                loader={imageKitLoader}
                                src={"/Riverdale Grove/Apartment/upper.webp"}
                                width={400}
                                height={400}
                                alt="Apartment Image"
                                className="mt-10 md:max-w-[500px] md:min-h-[400px]  object-cover hover:scale-125 transition-transform duration-500 cursor-pointer"
                                onClick={() => setOpenUpper(true)}
                            />

                            <Transition.Root show={openUpper} as={Fragment}>
                                <Dialog as="div" className="relative z-10" onClose={setOpenUpper}>
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
                                                        loader={imageKitLoader}
                                                        src={"/Riverdale Grove/Apartment/upper.webp"}
                                                        alt="Apartment Image"
                                                        width={5000}
                                                        height={5000}
                                                        className=" max-w-[300px] md:max-w-[800px] mx-auto"
                                                    />
                                                </Dialog.Panel>
                                            </Transition.Child>
                                        </div>
                                    </div>
                                </Dialog>
                            </Transition.Root>
                        </div>
                        <h2 className="text-mob-heading md:text-section-heading mx-auto w-fit">Upper Level View </h2>
                    </div>
                </div>
            </div>

            {/* Floor  */}
            <div className="space-y-3  mb-10 md:mb-20 pb-10 bg-[#EFEFEF]">
                <div className="bg-[#EFEFEF] pt-10 my-10">
                    <div>
                        <h3 className="text-[#DF3030] w-fit mx-auto font-lato text-[20px] font-normal leading-[30px] uppercase border border-[#E34A4A] rounded-[25px] px-5 md:px-20">
                            Floor Plan
                        </h3>
                        <h3 className="leading-link-text text-sm md:text-base flex justify-center mt-1 md:mt-2 uppercase">
                            OF THE NEW 3.5 BHK DUPLEX
                        </h3>
                    </div>
                    <h3 className="font-lato font-base md:text-[22px] w-[85%] mx-auto font-normal leading-link-text md:leading-[30px] uppercase mt-6 text-center">
                        SEPARATELY TUCKED AWAY SPACES FOR THE LIVING ROOM, THE BEDROOM & THE DINING ROOM
                    </h3>
                    <div className="flex flex-col md:flex-row w-11/12 mx-auto md:w-full bg-[#EFEFEF]  justify-center">
                        <div className="bg-[#EFEFEF] md:p-12 space-y-5 md:space-y-14 ">
                            <div className="flex flex-col justify-center items-center">
                                <Image
                                    loader={imageKitLoader}
                                    src={"/Riverdale Grove/Apartment/lower-plan.jpg"}
                                    width={400}
                                    height={400}
                                    alt="Apartment Image"
                                    className="mt-10  md:max-w-[500px] md:min-h-[400px] object-cover hover:scale-125 transition-transform duration-500 cursor-pointer"
                                    onClick={() => setOpenLowerPlan(true)}
                                />

                                <Transition.Root show={openLowerPlan} as={Fragment}>
                                    <Dialog as="div" className="relative z-10" onClose={setOpenLowerPlan}>
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
                                                            loader={imageKitLoader}
                                                            src={"/Riverdale Grove/Apartment/lower-plan.jpg"}
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
                            <h3 className="text-mob-heading md:text-section-heading mx-auto w-fit">Lower Level Plan </h3>
                        </div>
                        <div className="bg-[#EFEFEF] md:p-12 space-y-5 md:space-y-14">
                            <div className="flex flex-col justify-center items-center">
                                <Image
                                    src={"/Riverdale Grove/Apartment/upper-plan.jpg"}
                                    loader={imageKitLoader}
                                    width={400}
                                    height={400}
                                    alt="Apartment Image"
                                    className="mt-10 md:max-w-[500px] md:min-h-[400px] object-cover hover:scale-125 transition-transform duration-500 cursor-pointer"
                                    onClick={() => setOpenUpperPlan(true)}
                                />

                                <Transition.Root show={openUpperPlan} as={Fragment}>
                                    <Dialog as="div" className="relative z-10" onClose={setOpenUpperPlan}>
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
                                                            loader={imageKitLoader}
                                                            src={"/Riverdale Grove/Apartment/upper-plan.jpg"}
                                                            alt="Apartment Image"
                                                            width={5000}
                                                            height={5000}
                                                            className=" md:max-w-[800px] mx-auto"
                                                        />
                                                    </Dialog.Panel>
                                                </Transition.Child>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition.Root>
                            </div>
                            <h3 className="text-mob-heading md:text-section-heading mx-auto w-fit">Upper Level Plan </h3>
                        </div>
                    </div>
                </div>
                <div className="px-4 sm:px-6 lg:px-8">
                    <div>
                        <h5 className="text-xs  mx-auto w-fit">
                            TYPICAL FLOOR PLAN OF THE 3.5 BHK – 1360* SQ.FT (CARPET AREA) AT RIVERDALE GROVE
                        </h5>
                    </div>

                    <div className="mt-4 flow-root w-full">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:w-fit  lg:mx-auto">
                            <div className="inline-block  py-2 align-middle sm:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                    <table className=" divide-y divide-gray-300">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 pl-4 pr-3 text-left text-[7px] md:text-xs font-semibold text-gray-900 sm:pl-6"
                                                >
                                                    UNIT 3.5 BHK
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-[7px] md:text-xs font-semibold text-gray-900"
                                                >
                                                    CARPET AREA RERA (SQ. MTR.)
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-[7px] md:text-xs font-semibold text-gray-900"
                                                >
                                                    BALCONY (SQ. MTR.)
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-[7px] md:text-xs font-semibold text-gray-900"
                                                >
                                                    TERRACE (SQ. MTR.)
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-[7px] md:text-xs font-semibold text-gray-900"
                                                >
                                                    TOTAL (SQ. MTR.)
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-[7px] md:text-xs font-semibold text-gray-900"
                                                >
                                                    TOTAL (SQ. FT.)
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            <tr>
                                                <td className="whitespace-nowrap font-semibold py-4 pl-4 pr-3 text-[7px] md:text-xs  text-gray-900 sm:pl-6">
                                                    TOTAL
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4  text-[7px] md:text-xs text-gray-500">118.12</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500">8.05</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500">0</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500">126.18</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500">1358.2</td>
                                            </tr>
                                            <tr>
                                                <td className="whitespace-nowrap font-semibold py-4 pl-4 pr-3 text-[7px] md:text-xs  text-gray-900 sm:pl-6">
                                                    LOWER
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4  text-[7px] md:text-xs text-gray-500">70.15</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500">6.12</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500">0</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500">76.27</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500">820.97</td>
                                            </tr>
                                            <tr>
                                                <td className="whitespace-nowrap font-semibold py-4 pl-4 pr-3 text-[7px] md:text-xs font-medium text-gray-900 sm:pl-6">
                                                    UPPER
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4  text-[7px] md:text-xs text-gray-500">47.97</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500">1.93</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500">0</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500">49.91</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500">537.23</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8  ">
                        <a
                            href="/Brochure/Grove.pdf"
                            download="Riverdale-Grove-Brochure.pdf"
                            className="bg-red text-white px-6 py-4 rounded-md hover:bg-red-700 transition-colors duration-300 flex items-center gap-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                            </svg>
                            Download Brochure
                        </a>
                    </div>
                </div>
            </div>

            {/* Internal Apartments  */}
            <div>
                <h1 className="font-lato text-mob-heading md:text-[30px] font-normal leading-[22px] uppercase  flex justify-center pt-10">
                    Internal apartment
                </h1>

                {width <= 640 ? (
                    <SwiperSlider slidePerView={1} imageData={imageDataMob} />
                ) : (
                    <SwiperSlider slidePerView={3} imageData={imageData} />
                )}
            </div>

            {/* Lifestyle amenities  */}
            <div className="flex flex-col items-center max-w-sm sm:max-w-7xl my-10 mx-auto md:mt-32">
                <h1 className="text-mob-heading md:text-section-heading font-lato font-normal leading-[22px] uppercase">
                    Lifestyle amenities
                </h1>

                <div className="flex flex-row gap-4 sm:gap-8 my-10">
                    {/* <button
    className={`border ${
      activeCard === "ground"
        ? "border-crimson-200 text-crimson-200"
        : "border"
    } rounded-[30px] sm:px-8 px-4 py-2 uppercase hover:shadow-lg text-xs sm:text-lg`}
    onClick={() => setActiveCard("ground")}
  >
    Ground
  </button> */}
                    <button
                        className={`border ${
                            activeCard === "podium" || activeCard === "ground" ? "border-crimson-200 text-crimson-200" : "border"
                        } rounded-[30px] sm:px-8 px-4 py-2 uppercase hover:shadow-lg text-xs sm:text-lg`}
                        onClick={() => setActiveCard("podium")}
                    >
                        Podium
                    </button>
                    <button
                        className={`border ${
                            activeCard === "clubhouse" ? "border-crimson-200 text-crimson-200" : "border"
                        } rounded-[30px] sm:px-8 px-4 py-2 uppercase hover:shadow-lg text-xs sm:text-lg`}
                        onClick={() => setActiveCard("clubhouse")}
                    >
                        Clubhouse
                    </button>
                </div>

                {/* Ground  */}
                {activeCard === "podium" && (
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row sm:flex-row space-y-10 sm:space-x-8 sm:space-y-0">
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    width={400}
                                    height={400}
                                    src={"/Riverdale Grove/Ground/SportsArea.webp"}
                                    alt="Football court image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0"
                                />
                                <h4 className="flex justify-center font-lato text-mini md:text-[16px] font-normal md:leading-[36.5px] uppercase mt-3 text-center">
                                    Aerial View Of Multi-Purpose Sports Area
                                </h4>
                            </div>

                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    width={400}
                                    height={400}
                                    src={"/Riverdale Grove/Ground/ChessLawn.webp"}
                                    alt="Tennis court image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0"
                                />
                                <h4 className="flex justify-center font-lato text-mini md:text-[16px] font-normal md:leading-[36.5px] uppercase mt-3 text-center">
                                    Ariel View of Live-Size Chess Lawns
                                </h4>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center gap-7 mt-8 md:mt-0">
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    width={400}
                                    height={400}
                                    src={"/Riverdale Grove/Ground/PlayArea.webp"}
                                    alt="dog park image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0"
                                />
                                <h4 className="flex justify-center font-lato text-mini md:text-[16px] font-normal md:leading-[36.5px] uppercase mt-3 text-center">
                                    Childrens' Play Area
                                </h4>
                            </div>
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    width={400}
                                    height={400}
                                    src={"/Riverdale Grove/Podium/Pool.webp"}
                                    alt="Football court image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0"
                                />
                                <h4 className="flex justify-center font-lato text-mini md:text-[16px] font-normal leading-[36.5px] uppercase mt-3">
                                    Outdoor Pool On Podium
                                </h4>
                            </div>
                        </div>
                    </div>
                )}

                {/* Podium  */}
                {activeCard === "podium" && (
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row space-x-8"></div>
                    </div>
                )}

                {/* Clubhouse  */}
                {activeCard === "clubhouse" && (
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row space-y-8 sm:space-x-8 sm:space-y-0">
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    width={400}
                                    height={400}
                                    src={"/Riverdale Grove/Clubhouse/table-tenis.png"}
                                    alt="Football court image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0 object-cover max-h-[250px] md:min-w-[600px] md:max-w-[600px] md:max-h-[500px]"
                                />
                                <p className="flex justify-center font-lato text-mini md:text-[16px] font-normal leading-[36.5px] uppercase mt-3">
                                    Yoga Area
                                </p>
                            </div>
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    width={400}
                                    height={400}
                                    src={"/Riverdale Grove/Clubhouse/gym.png"}
                                    alt="Tennis court image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0 object-cover max-h-[250px] md:min-w-[600px] md:max-w-[600px] md:max-h-[500px]"
                                />
                                <p className="flex justify-center font-lato text-mini md:text-[16px] font-normal leading-[36.5px] uppercase mt-3">
                                    Riverdale Grove Clubhouse Reception
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-8 sm:space-x-8 sm:space-y-0 mt-8 md:mt-0">
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    width={400}
                                    height={400}
                                    src={"/Riverdale Grove/Clubhouse/Creche.webp"}
                                    alt="dog park image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0 object-cover max-h-[250px] md:min-w-[600px] md:max-w-[600px] md:max-h-[500px]"
                                />
                                <p className="flex justify-center font-lato text-mini md:text-[16px] font-normal leading-[36.5px] uppercase mt-3">
                                    Creche
                                </p>
                            </div>
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    width={400}
                                    height={400}
                                    src={"/Riverdale Grove/Clubhouse/Entrance.webp"}
                                    alt="pet gravel park image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0 object-cover max-h-[250px] md:min-w-[600px] md:max-w-[600px] md:max-h-[500px]"
                                />
                                <p className="flex justify-center font-lato text-mini md:text-[16px] font-normal leading-[36.5px] uppercase mt-3">
                                    Riverdale Grove Clubhouse Entrance
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="my-10 md:my-20 w-11/12 mx-auto">
                <div className="flex flex-col justify-center items-center gap-1 md:gap-2">
                    <h1 className="text-mob-heading md:text-section-heading font-lato font-normal leading-[22px] uppercase">
                        watch Apartment videos
                    </h1>
                    <h4 className="leading-link-text">For Better Experience</h4>
                </div>
                <div className="flex flex-col md:flex-row md:max-w-full mx-auto justify-center md:justify-between mt-10 items-center gap-10 md:gap-7">
                    <div>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/u623FKKndQA?si=CR2wIEA2LWHkNFU0"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className="w-[280px] h-[200px] md:w-[450px] md:h-[315px]"
                        ></iframe>
                    </div>
                    <div>
                        <iframe
                            src="https://www.youtube.com/embed/NkHqnm30NW4?si=d6HkWZMwtdd8iyia"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className="w-[280px] h-[200px] md:w-[450px] md:h-[315px]"
                        ></iframe>
                    </div>
                    <div>
                        <iframe
                            src="https://www.youtube.com/embed/Jx6HO-fGHyg?si=WbnKYSH2HeC3VELK"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className="w-[280px] h-[200px] md:w-[450px] md:h-[315px]"
                        ></iframe>
                    </div>
                </div>
            </div>

            <ContactUs
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60523.056082120995!2d73.90051585960425!3d18.54286043381532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3006e59ccbd%3A0xc4394d0f1111662!2sRiverdale%20Grove!5e0!3m2!1sen!2sin!4v1745316673327!5m2!1sen!2sin"
                scanner={"/Scanner/grove.webp"}
                scannerText="Riverdale Grove"
                pdf="/pdf_files/Riverdale-Grove.pdf"
                showProjectLinkInScanner
                projectLink="https://maharerait.maharashtra.gov.in/project/view/29414"
            />

            <div className="pt-10 flex flex-col sm:flex-row justify-end  w-fit gap-4 ml-auto mr-5">
                <a
                    href="/NewsLetter/Grove_January.pdf"
                    download="Grove_January.pdf"
                    className="bg-red  mx-auto  text-white px-6 py-4 rounded-md hover:bg-red-700 transition-colors duration-300 flex items-center justify-center w-full sm:w-fit gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                    </svg>
                    Riverdale Grove January Newsletter
                </a>

                <a
                    href="/NewsLetter/Grove_February.pdf"
                    download="Grove_February.pdf"
                    className="bg-red   mx-auto text-white px-6 py-4 rounded-md hover:bg-red-700 transition-colors duration-300 flex items-center justify-center w-full sm:w-fit gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                    </svg>
                    Riverdale Grove February Newsletter
                </a>
                <a
                    href="/NewsLetter/Grove_March.pdf"
                    download="Grove_March.pdf"
                    className="bg-red  mx-auto text-white px-6 py-4 rounded-md hover:bg-red-700 transition-colors duration-300 flex items-center justify-center w-full sm:w-fit gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                    </svg>
                    Riverdale Grove March Newsletter
                </a>
            </div>

            <Footer />
        </div>
    );
};

export default SubPage;
