"use client";

import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../components/LandingPage/Header/Navbar";
import Image from "next/image";
import Footer from "../common/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { LuDot } from "react-icons/lu";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { EffectCoverflow, Navigation } from "swiper/modules";

import ContactUs from "../common/ContactUs";
import { Dialog, Transition } from "@headlessui/react";
import { imageKitLoader } from "../utils/ImageKitLoader";
import Section from "../components/Engineer/Section";
import { section } from "../utils/interface/EngineerPage/section";
import Accordian from "../common/Accordian";

export const SubPage = () => {
    const [activeCard, setActiveCard] = useState<string>("ground");
    const [open, setOpen] = useState(false);
    const [apartmentPlan, setApartmentPlan] = useState(false);

    const imageData = [
        {
            image: "/RiverdaleGrand/InternalApartment1.jpg",
            text: "The Bedroom",
        },
        {
            image: "/RiverdaleGrand/InternalApartment2.jpg",
            text: "The Hall",
        },
        {
            image: "/RiverdaleGrand/InternalApartment3.webp",
            text: "The Living & Dining Room",
        },
        {
            image: "/RiverdaleGrand/InternalApartment4.webp",
            text: "The Kitchen",
        },
        {
            image: "/RiverdaleGrand/InternalApartment5.webp",
            text: "The Master Bedroom",
        },
        {
            image: "/RiverdaleGrand/InternalApartment6.webp",
            text: "The Children's Bedroom",
        },
    ];

    const imageDataMob = [
        {
            image: "/RiverdaleGrand/IAMob/IA1.jpg",
            text: "The Bedroom",
        },
        {
            image: "/RiverdaleGrand/IAMob/IA2.jpg",
            text: "The Hall",
        },
        {
            image: "/RiverdaleGrand/IAMob/IA3.jpg",
            text: "The Living & Dining Room",
        },
        {
            image: "/RiverdaleGrand/IAMob/IA4.jpg",
            text: "The Kitchen",
        },
        {
            image: "/RiverdaleGrand/IAMob/IA5.jpg",
            text: "The Master Bedroom",
        },
        {
            image: "/RiverdaleGrand/IAMob/IA6.jpg",
            text: "The Children's Bedroom",
        },
    ];

    const designInnovationImages = [
        {
            image: "/RiverdaleGrand/Design Innovation/Design1.jpg",
            text: "The Living Room",
            subText: [
                "High-pressure decorative laminate keeping everything fresh with anti-bacterial & anti-fungal properties.",
                "Improved dimensional stability.",
                "Scratch & stain-resistant.",
                " Laminated layers with Melamine, Resin Pressed, and Hardened under Heat.",
            ],
        },
        {
            image: "/RiverdaleGrand/Design Innovation/Design2.jpg",
            text: "The Dining Room",
            subText: [
                "Decorative laminate with Melamine, Resin Pressed, and Hardened under heat.",
                "Anti-fungal and anti-bacterial properties for beautiful accessories for a long time.",
                "Scratch & Stain resistant wooden decorative with resin.",
                "Improved dimensional efficiency.",
            ],
        },
        {
            image: "/RiverdaleGrand/Design Innovation/Design3.jpg",
            text: "The Master Bedroom",
            subText: [
                "Aesthetic walk-in closet.",
                "Huge & comfortable room size.",
                "Best-in-class wooden finished tiles.",
                "Smart Home technology deployed for a longer lifespan.",
                "Balcony with beautiful sunset views.",
            ],
        },
    ];

    const NearLocations = [
        {
            title: "Proximity to Healthcare",
            data: [
                "Gold Rush Hospital: 6 Mins",
                "Manipal Hospital: 10 Mins",
                "Bala Ji Hospital: 1 Min",
                "Nirmay Hospital: 3 Mins",
                "Jeevan Jyot Hospital: 2 Mins",
            ],
        },
        {
            title: "Proximity to The Central Business District",
            data: ["EDN IT Park: 5 Mins", "HUB: 7 Mins", "Down Town: 6 Mins", "WTC: 4 Mins", "Ascendas IT Park: 6 Mins"],
        },
        {
            title: "Proximity to Lifestyle",
            data: [
                "Global High Street: 5 Mins",
                "Phoenix Market City: 10 Mins",
                "The FML Lounge: 6 Mins",
                "Bollywood E-Square: 9 Mins",
                "Sky High The Club: 3 Mins",
            ],
        },
        {
            title: "Proximity to Schools",
            data: ["Vibgyor High School: 5 Mins", "Dhole Patil School: 7 Mins", "EURO School: 6 Mins", "Victorious Kidss Educares: 3 Mins"],
        },
    ];

    const Faq: section[] = [
        {
            title: "Riverdale Grand Location",
            data: [
                "Riverdale Grand is the latest project in development under Duville Constructions and is situated at Kharadi, Pune, at the Riverbank.",
            ],
        },
        {
            title: "Property Variants Available",
            data: ["Riverdale Grand offers luxurious 3, 4, & 4.5 Flats & Duplexes."],
        },
        {
            title: "Top Amenities in Riverdale",
            data: [
                "Amphitheatre",
                "Pet Park and Lawn",
                "Gravel Bed for Pet Park",
                "Paving Pattern on Driveway",
                "Residential-level parking access",
                "Multipurpose Court",
                "Club House with Indoor Games",
                "Multipurpose Party Lawn",
                "Outdoor Barbeque Space Adjoining the Clubhouse",
                "Outdoor Gardens",
                "Jacuzzi Pool Surrounded by Planting",
                "Kids Lap Pool",
            ],
        },
        {
            title: "More Information about Riverdale",
            data: [
                "Yes, download our Riverdale Grand Brochure for a detailed exposure or else fill the form and contact our discovery team.",
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
        <div className="overflow-x-hidden ">
            {/* Header  */}
            <div
                style={{
                    backgroundImage: `${
                        width >= 640
                            ? `url(https://res.cloudinary.com/dfvccxflr/image/upload/v1732800621/projects/DGrandBanner.jpg)`
                            : `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/ProjectPageMobBanner/RiverdaleGrand.jpg?updatedAt=1707284741100})`
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
            <section className="font-plus-jakarta-sans flex  flex-col items-center justify-center gap-3 md:gap-10 text-base max-w-[90%] md:max-w-[50%] mx-auto   text-[#6B7280] md:py-32 text-center mt-14 md:mt-0">
                <p className="font-plus-jakarta-sans text-sm md:text-base   leading-[30px] italic text-[#6B7280] text-center ">
                    <span className=" text-xl md:text-3xl font-bold leading-link-text ">"</span> This being the last piece of development at
                    Riverdale, we wanted to develop something spectacular in the framework of residential luxury. We wanted this to be a
                    holistic offering meant for every member of the family and this was the starting point for drawing inspiration.
                    Consequently, what was arrived at was four differently sized 3 bed offerings and an even larger 4.5 bed offering. For us
                    at Duville Estates, it is the culmination of years of rigour poured into the fruition of a long-held vision. It is with
                    a deep sense of pride that we welcome you to Riverdale Grand – a new standard of living built uniquely for the family
                    and one that is aptly positioned for simply living 'A Beautiful Life{" "}
                    <span className=" text-xl md:text-3xl font-bold leading-link-text ">"</span>{" "}
                </p>

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

            <div className="mb-20 max-w-7xl mx-auto py-7 ">
                <div className="flex flex-col   m-2 sm:m-0 md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                    {/* Left Column - Title and Table */}
                    <div className="md:w-3/4">
                        <div className=" gap-2  hidden sm:flex">
                            <div className="h-5 md:h-16 w-2 ml-2 bg-red"></div>
                            <p className="flex justify-center font-lato text-mob-heading md:text-[30px] font-normal leading-[22px] uppercase">
                                Duville Riverdale Grand
                                <br className="hidden sm:block"></br>
                                <br className="hidden sm:block"></br>3 BHK Gated Luxury Family Homes In kharadi
                                <br></br>
                                <br></br>
                            </p>
                        </div>

                        <div className="mt-4  w-full hidden sm:flow-root ">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:w-fit lg:mx-auto">
                                <div className="inline-block w-full py-2 align-middle p-2">
                                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                        <table className="divide-y divide-gray-300">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="py-3.5 pl-4 pr-3 text-center text-[7px] md:text-xs font-semibold text-gray-900 sm:pl-6"
                                                    >
                                                        Project Location
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-center text-[7px] md:text-xs font-semibold text-gray-900"
                                                    >
                                                        Total Area
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-center text-[7px] md:text-xs font-semibold text-gray-900"
                                                    >
                                                        Total Units
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-center text-[7px] md:text-xs font-semibold text-gray-900"
                                                    >
                                                        Variants
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-center text-[7px] md:text-xs font-semibold text-gray-900"
                                                    >
                                                        Price Range
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-center text-[7px] md:text-xs font-semibold text-gray-900"
                                                    >
                                                        Super-builtup Area (4.5 BHK)
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                <tr>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-[7px] md:text-xs font-medium text-gray-900 text-center sm:pl-6">
                                                        Kharadi, Pune
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500 text-center">
                                                        -
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500 text-center">
                                                        -
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500 text-center">
                                                        3, 3.5, 4, 4.5 BHK Flats & Duplexes
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500 text-center">
                                                        -
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500 text-center">
                                                        2290 sq ft.
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flow-root sm:hidden mx-3 ">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-300 border rounded-t-md">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                                                >
                                                    Name
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Title
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            <tr className="even:bg-gray-50">
                                                <td className=" border-r border-r-dimgray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                    Project Location
                                                </td>
                                                <td className=" px-3 py-4 text-sm text-gray-500">Kharadi, Pune </td>
                                            </tr>
                                            <tr className="even:bg-gray-50">
                                                <td className="border-r border-r-dimgray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                    Total Area
                                                </td>
                                                <td className=" px-3 py-4 text-sm text-gray-500">- </td>
                                            </tr>
                                            <tr className="even:bg-gray-50">
                                                <td className="border-r border-r-dimgray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                    Total Units
                                                </td>
                                                <td className=" px-3 py-4 text-sm text-gray-500">- </td>
                                            </tr>
                                            <tr className="even:bg-gray-50">
                                                <td className="border-r border-r-dimgray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                    Variants
                                                </td>
                                                <td className=" px-3 py-4 text-sm text-gray-500">3, 3.5, 4, 4.5 BHK Flats & Duplexes </td>
                                            </tr>
                                            <tr className="even:bg-gray-50">
                                                <td className="border-r border-r-dimgray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                    Price Range
                                                </td>
                                                <td className=" px-3 py-4 text-sm text-gray-500">- </td>
                                            </tr>
                                            <tr className="even:bg-gray-50">
                                                <td className="border-r border-r-dimgray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                    Super-builtup Area (4.5 BHK)
                                                </td>
                                                <td className=" px-3 py-4 text-sm text-gray-500">2290 sq ft. </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8  ">
                            <a
                                href="/Brochure/Grand.pdf"
                                download="Riverdale-Grand-Brochure.pdf"
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

                    {/* Right Column - Description */}
                    <div className="md:w-1/2 space-y-4 mx-4 sm:mx-0 ">
                        <p className="text-[#6C6A6A] flex  justify-center text-sm leading-link-text font-plus-jakarta-sans md:text-[16px]">
                            Duville Riverdale Grand Kharadi Pune welcomes you to the world of the next generation 3 BHK luxury family homes
                            community, situated at the bank of the Mula-Mathura river in Kharadi. With all the modern amenities for a
                            quality of life, Riverdale gives you a panoramic camera-worthy view of sunset every day. Each flat's balcony
                            opens up in front of the flowing river, wide greenery, and into the cool breeze, making each of your moments
                            like a painting.
                        </p>
                        <p className="text-[#6C6A6A] flex justify-center text-sm leading-link-text font-plus-jakarta-sans md:text-[16px]">
                            The Duville Riverdale Grand Kharadi features 3 BHK luxury family flats, a community garden, amphitheatre, indoor
                            & outdoor game spaces, a dedicated place for pets, and a lawn for elderly people to spend some quality time.We
                            don't only offer you a HOME, We promise you a JOYFUL LIFE.
                        </p>
                    </div>
                </div>
            </div>

            {/* Design Innovation  */}
            <div className="mb-20 space-y-5  ">
                <div className="flex gap-2 md:items-center  max-w-7xl mx-auto ">
                    <div className="h-5 md:h-7 ml-2 w-2 bg-red"></div>
                    <p className="flex justify-center font-lato text-mob-heading md:text-[30px] font-normal leading-[22px] uppercase">
                        Duville Riverdale Grand Innovative Designs for Beautiful Livelihood
                    </p>
                </div>

                <div className="hidden sm:block">
                    <Swiper
                        modules={[EffectCoverflow, Navigation]}
                        navigation={true}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        spaceBetween={1}
                        slidesPerView={1}
                        breakpoints={{
                            300: { slidesPerView: 1 },
                            640: { slidesPerView: 1 },
                            790: { slidesPerView: 1 },
                            1024: { slidesPerView: 1 },
                        }}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            depth: 50,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        className="md:mt-10 mt-0 w-full bg-white "
                    >
                        {designInnovationImages.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white max-w-7xl max-h-[600px] mx-auto flex flex-col xl:flex-row items-center justify-center p-10 sm:p-0">
                                    <Image
                                        loader={imageKitLoader}
                                        src={item.image}
                                        width={400}
                                        height={400}
                                        alt="apartment image"
                                        className="h-[500px] w-[810px]"
                                    />
                                    <div className=" m-4 flex flex-col">
                                        <p className="font-lato mb-2 text-[18px] font-normal leading-[32px] mt-2 flex ">{item.text}</p>
                                        <div className="list-disc">
                                            {item?.subText?.map((text, index) => (
                                                <li
                                                    key={index} // Always add a key prop when mapping
                                                    className="pl-4 mb-2" // Add margin-bottom for spacing
                                                    style={{
                                                        textIndent: "-1.4em",
                                                        listStylePosition: "inside",
                                                    }}
                                                >
                                                    {text}
                                                </li>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="sm:hidden">
                    <Swiper
                        modules={[EffectCoverflow, Navigation]}
                        navigation={true}
                        // effect={"coverflow"}
                        // grabCursor={true}
                        // centeredSlides={true}
                        spaceBetween={0}
                        slidesPerView={3}
                        breakpoints={{
                            300: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            790: { slidesPerView: 3 },
                            1024: { slidesPerView: 3 },
                        }}
                        loop={true}
                        // coverflowEffect={{
                        //     rotate: 0,
                        //     depth: 500,
                        //     modifier: 1,
                        //     slideShadows: true,
                        // }}
                        className=" "
                    >
                        {designInnovationImages.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="max-w-7xl mx-auto flex flex-col items-center justify-center sm:p-0">
                                    <Image
                                        loader={imageKitLoader}
                                        width={400}
                                        height={400}
                                        src={item.image}
                                        alt="apartment image"
                                        className="min-h-[300px] max-h-[300px] min-w-[800px]"
                                    />
                                    <div className=" m-4 h-fit flex flex-col">
                                        <p className="font-lato mb-2 text-[18px] font-normal leading-[32px] mt-2 flex ">{item.text}</p>
                                        <div className="list-disc">
                                            {item?.subText?.map((text, index) => (
                                                <li
                                                    key={index} // Always add a key prop when mapping
                                                    className="pl-4 mb-2" // Add margin-bottom for spacing
                                                    style={{
                                                        textIndent: "-1.4em",
                                                        listStylePosition: "inside",
                                                    }}
                                                >
                                                    {text}
                                                </li>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="space-y-6 max-w-sm sm:max-w-7xl mx-auto   py-7 ">
                <p className="font-lato text-mob-heading md:text-[30px] font-normal leading-[22px] uppercase md:pt-0 "></p>

                <div className="flex gap-2 md:items-center  ">
                    <div className="mt-1 sm:mt-0 h-5 md:h-7 w-2 ml-2 bg-red"></div>
                    <p className="flex justify-center font-lato text-mob-heading md:text-[30px] font-normal leading-[22px] uppercase">
                        A Majestic Landmark in the Heart of Pune- Duville Riverdale Grand:
                    </p>
                </div>

                <div className="">
                    <div className=" space-y-4 mx-4">
                        <p className="text-[#6C6A6A] text-sm leading-link-text font-plus-jakarta-sans md:text-[16px] my-2">
                            Duville Riverdale Grand Kharadi is designed to offer 4.5-bed Homes with the idea of giving luxury to each member
                            of the family, giving them a new beginning of Uber's luxury lifestyle. It is a home for people who understand
                            the value of 'Familial Living'. The panoramic views from the huge balconies of the Riverdale Grand are the
                            manifestation of planning, innovation, and ideas of a quality life. Riverdale Grand Kharadi - Giving Families an
                            Ode to Live Life.
                        </p>
                    </div>
                </div>
            </div>

            {/* Launch  */}
            <div className="bg-[#EFEFEF] p-12 md:mt-20 my-10">
                <div className="flex flex-col justify-center items-center">
                    <button className="text-[#DF3030] font-lato text-[20px] font-normal leading-[30px] uppercase border border-[#E34A4A] rounded-[25px] px-5 md:px-20">
                        isometric view{" "}
                    </button>
                    <p className="leading-link-text text-sm md:text-base flex justify-center mt-1 md:mt-2  uppercase">
                        {" "}
                        Of The New 4.5 BHK Apartment
                    </p>

                    <Image
                        loader={imageKitLoader}
                        src={"/RiverdaleGrand/Apartment.png"}
                        width={400}
                        height={400}
                        alt="Apartment Image"
                        className="mt-10 hover:scale-125 transition-transform duration-500 cursor-pointer"
                        onClick={() => setOpen(true)}
                    />

                    <Transition.Root show={open} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                                                src={"/RiverdaleGrand/Apartment.png"}
                                                alt="Apartment Image"
                                                width={5000}
                                                height={5000}
                                            />
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition.Root>
                </div>
            </div>

            {/*Flour Plan  */}
            <div className="space-y-6 mb-20 pb-10 bg-[#EFEFEF]">
                <div className="bg-[#EFEFEF] p-12 md:my-20 my-10">
                    <div className="flex flex-col justify-center items-center gap-0">
                        <button className="text-[#DF3030] font-lato text-[20px] font-normal leading-[30px] uppercase border border-[#E34A4A] rounded-[25px] px-5 md:px-20">
                            Floor Plan{" "}
                        </button>
                        <p className="font-lato text-sm  md:text-mob-heading font-normal md:leading-[30px] uppercase mt-2 text-center">
                            The 'EMBODIMENT' of 'LUXURY' meant only for the 'DISCERNING'
                        </p>

                        <Image
                            loader={imageKitLoader}
                            src={"/RiverdaleGrand/ApartmentFloor.jpg"}
                            alt="Apartment Image"
                            width={400}
                            height={400}
                            className="mt-10  md:max-w-[600px] hover:scale-125 transition-transform duration-500 cursor-pointer"
                            onClick={() => setApartmentPlan(true)}
                        />

                        <Transition.Root show={apartmentPlan} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={setApartmentPlan}>
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
                                                    src={"/RiverdaleGrand/ApartmentFloor.jpg"}
                                                    alt="Apartment Image"
                                                    width={5000}
                                                    height={5000}
                                                    className=" md:max-w-[900px] mx-auto"
                                                />
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition.Root>
                    </div>
                </div>

                <div className="px-4 sm:px-6 lg:px-8">
                    <div>
                        <h5 className="text-xs  mx-auto w-fit">
                            TYPICAL FLOOR PLAN OF THE 4.5 BHK – 2290* SQ.FT (CARPET AREA) AT RIVERDALE GRAND
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
                                                    UNIT
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
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-[7px] md:text-xs font-medium text-gray-900 sm:pl-6">
                                                    4.5 BHK
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4  text-[7px] md:text-xs text-gray-500">183.49</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500">29.23</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500">0</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500">212.72</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[7px] md:text-xs text-gray-500">2289.7</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* nearby explration */}
            <div className="space-y-6 mb-20 max-w-sm sm:max-w-7xl mx-auto   py-7 ">
                <div className="flex gap-2 md:items-center  ">
                    <div className="mt-1 sm:mt-0 h-5 md:h-7 w-2 ml-3 bg-red"></div>
                    <p className="flex justify-center font-lato text-mob-heading md:text-[30px] font-normal  sm:leading-heading lg:leading-[22px] uppercase">
                        Drive by the Riverside: Exploration of the Duville Riverdale Grand Kharadi
                    </p>
                </div>

                <div className="hidden md:grid grid-cols-4 m-4  ">
                    {NearLocations?.map((ele, idx) => (
                        <div>
                            <div className="w-full  min-h-[60px] p-2 line-clamp-1  bg-[#e5e5e5] m-2">
                                {ele.title === "Proximity to The Central Business District" ? (
                                    <div className="flex  flex-row gap-1  text-sm">
                                        {" "}
                                        Proximity to The <br></br>
                                        Central Business District
                                    </div>
                                ) : (
                                    <div className="flex  flex-row gap-1  text-sm"> {ele.title}</div>
                                )}
                            </div>
                            <div>
                                {ele.data?.map((listItem) => (
                                    <div className="flex flex-row items-center  ">
                                        <LuDot className="font-bold size-8 " />
                                        <div className="text-sm">{listItem}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="md:hidden">
                    <Accordian section={NearLocations as section[]} />
                </div>
            </div>

            {/* Internal Apartments  */}
            <div className="mb-20">
                <div>
                    <p className="font-lato text-mob-heading md:text-[30px] font-normal leading-[22px] uppercase md:pt-0 flex justify-center ">
                        Internal apartment
                    </p>

                    <p className="flex justify-center mt-1 md:mt-6">Apartment (1417 sq. ft.)</p>
                </div>

                <div className="flex items-center justify-center mt-8 w-11/12 md:w-auto mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
                        <Image
                            loader={imageKitLoader}
                            src={"/RiverdaleGrand/InternalApartment1.jpg"}
                            alt="internal apartment image"
                            width={548}
                            height={318}
                            className=" h-full min-h-[250px] md:min-h-[363px] object-cover"
                        />
                        <Image
                            loader={imageKitLoader}
                            src={"/RiverdaleGrand/InternalApartment6.webp"}
                            alt="internal apartment image"
                            width={548}
                            height={318}
                            className=" h-full min-h-[250px] md:min-h-[363px] object-cover"
                        />
                        <Image
                            loader={imageKitLoader}
                            src={"/RiverdaleGrand/InternalApartment3.webp"}
                            alt="internal apartment image"
                            width={548}
                            height={318}
                            className=" h-full min-h-[250px] md:min-h-[363px] object-cover"
                        />
                        <Image
                            loader={imageKitLoader}
                            src={"/RiverdaleGrand/InternalApartment4.webp"}
                            alt="internal apartment image"
                            width={548}
                            height={318}
                            className=" h-full min-h-[250px] md:min-h-[363px] object-cover"
                        />
                    </div>
                </div>

                {/* {width <= 640 ? (
          <SwiperSlider slidePerView={1} imageData={imageDataMob} />
        ) : (
          <SwiperSlider slidePerView={3} imageData={imageData} />
        )} */}

                {/* <p className="font-lato sm:text-[30px] text-md font-semibold md:leading-[55px] uppercase flex justify-center mt-10 text-[#123A57] sm:mt-40  text-center">
          EXPERIENCE THE PASSION OF LIVING EVERY SINGLE DAY
        </p> */}
            </div>

            {/* Videos Section  */}
            <div className=" my-20 w-11/12 mx-auto">
                <div className="flex flex-col justify-center items-center gap-1">
                    <p className="font-lato text-mob-heading md:text-[30px] font-normal leading-[22px] uppercase md:pt-0 flex justify-center ">
                        watch Apartment videos
                    </p>
                    <p className="flex justify-center md:mt-6">For Better Experience</p>
                </div>
                <div className="flex flex-col md:flex-row md:max-w-full mx-auto justify-center md:justify-between mt-10 items-center gap-10 md:gap-7 ">
                    <div>
                        <iframe
                            src="https://www.youtube.com/embed/c8xaWvJajYA?si=Pl5g-O26N292GQhU"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className="w-[320px] h-[200px] md:w-[450px] md:h-[315px]"
                        ></iframe>
                    </div>
                    <div>
                        <iframe
                            src="https://www.youtube.com/embed/HDgk-We0BRg?si=ag-hOFb-iBx4WcMj"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className="w-[320px] h-[200px] md:w-[450px] md:h-[315px]"
                        ></iframe>
                    </div>
                    <div>
                        <iframe
                            src="https://www.youtube.com/embed/9B849TUZMd0?si=1awA4v9CORn6eJ2j"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className="w-[320px] h-[200px] md:w-[450px] md:h-[315px]"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Lifestyle amenities  */}
            <div className="mt-20 flex flex-col items-center max-w-sm sm:max-w-7xl mx-auto">
                <p className="text-mob-heading md:text-section-heading font-lato font-normal leading-[22px] uppercase">
                    Lifestyle amenities
                </p>
                <div className="flex flex-row gap-4 sm:gap-8 my-7">
                    <button
                        className={`border ${
                            activeCard === "ground" ? "border-crimson-200 text-crimson-200" : "border"
                        } rounded-[30px] sm:px-8 px-4 py-2 uppercase hover:shadow-lg text-xs sm:text-lg`}
                        onClick={() => setActiveCard("ground")}
                    >
                        Ground
                    </button>
                    <button
                        className={`border ${
                            activeCard === "podium" ? "border-crimson-200 text-crimson-200" : "border"
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
                {activeCard === "ground" && (
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row space-y-8 sm:space-x-8 sm:space-y-0">
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    src={"/RiverdaleGrand/Ground/FootballCourt.png"}
                                    width={400}
                                    height={400}
                                    alt="Football court image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0"
                                />
                                <p className="flex justify-center font-lato md:text-[16px] font-normal leading-[36.5px] uppercase mt-3 text-mini">
                                    The All-Purpose Futsal Court
                                </p>
                            </div>
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    src={"/RiverdaleGrand/Ground/TennisCourt.png"}
                                    width={400}
                                    height={100}
                                    alt="Tennis court image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0"
                                />
                                <p className="flex justify-center font-lato text-mini md:text-[16px] font-normal leading-[36.5px] uppercase mt-3">
                                    The Multi-Purpose Games Court
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row space-y-8 sm:space-x-8 sm:space-y-0 mt-4 md:mt-0">
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    src={"/RiverdaleGrand/Ground/DogPark.png"}
                                    width={400}
                                    height={100}
                                    alt="dog park image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0"
                                />
                                <p className="flex justify-center font-lato text-mini md:text-[16px] font-normal leading-[36.5px] uppercase mt-3">
                                    Dog Park
                                </p>
                            </div>
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    src={"/RiverdaleGrand/Ground/PetGravelPark.png"}
                                    width={400}
                                    height={100}
                                    alt="pet gravel park image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0"
                                />
                                <p className="flex justify-center font-lato text-mini md:text-[16px] font-normal leading-[36.5px] uppercase mt-3">
                                    Pet Gravel Park
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Podium  */}
                {activeCard === "podium" && (
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row space-y-8 sm:space-x-8 sm:space-y-0">
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    src={"/RiverdaleGrand/Podium/Playground.png"}
                                    width={400}
                                    height={100}
                                    alt="Football court image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0"
                                />
                                <p className="flex justify-center font-lato text-mini md:text-[16px] font-normal leading-[36.5px] uppercase mt-3">
                                    The Outdoor Kids Experience Area
                                </p>
                            </div>
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    src={"/RiverdaleGrand/Podium/WalkWay.png"}
                                    width={400}
                                    height={100}
                                    alt="Tennis court image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0"
                                />
                                <p className="flex justify-center font-lato text-mini md:text-[16px] font-normal leading-[36.5px] uppercase mt-3">
                                    The Acupressure Walk Way
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-8 sm:space-x-8 sm:space-y-0 mt-8 md:mt-0">
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    src={"/RiverdaleGrand/Podium/Pool.png"}
                                    width={400}
                                    height={100}
                                    alt="dog park image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0"
                                />
                                <p className="flex justify-center font-lato text-mini md:text-[16px] font-normal leading-[36.5px] uppercase mt-3">
                                    The Poolside Deck
                                </p>
                            </div>
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    src={"/RiverdaleGrand/Podium/Garden.png"}
                                    width={400}
                                    height={100}
                                    alt="pet gravel park image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0"
                                />
                                <p className="flex justify-center font-lato text-mini md:text-[16px] font-normal leading-[36.5px] uppercase mt-3">
                                    The Herb Garden
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Clubhouse  */}
                {activeCard === "clubhouse" && (
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row space-y-8 sm:space-x-8 sm:space-y-0">
                            <div>
                                <Image
                                    src={"/RiverdaleGrand/Clubhouse/MiniTheater.png"}
                                    loader={imageKitLoader}
                                    width={400}
                                    height={100}
                                    alt="Football court image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0"
                                />
                                <p className="flex justify-center font-lato text-mini md:text-[16px] font-normal leading-[36.5px] uppercase mt-3">
                                    Mini-Theater
                                </p>
                            </div>
                            <div>
                                <Image
                                    src={"/RiverdaleGrand/Clubhouse/PlayArea.png"}
                                    loader={imageKitLoader}
                                    width={400}
                                    height={100}
                                    alt="Tennis court image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0"
                                />
                                <p className="flex justify-center font-lato text-mini md:text-[16px] font-normal leading-[36.5px] uppercase mt-3">
                                    Toddler's Play Area
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row space-y-8 sm:space-x-8 sm:space-y-0 mt-8 md:mt-0">
                            <div>
                                <Image
                                    src={"/RiverdaleGrand/Clubhouse/Gym.png"}
                                    loader={imageKitLoader}
                                    width={400}
                                    height={100}
                                    alt="dog park image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0"
                                />
                                <p className="flex justify-center font-lato text-mini md:text-[16px] font-normal leading-[36.5px] uppercase mt-3">
                                    Gymnasium
                                </p>
                            </div>
                            <div>
                                <Image
                                    src={"/RiverdaleGrand/Clubhouse/FirstFloor.png"}
                                    loader={imageKitLoader}
                                    width={400}
                                    height={100}
                                    alt="pet gravel park image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0"
                                />
                                <p className="flex justify-center font-lato text-mini md:text-[16px] font-normal leading-[36.5px] uppercase mt-3">
                                    Outdoor Seating Area-First Floor
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row space-y-8 sm:space-x-8 sm:space-y-0 mt-8 md:mt-0">
                            <div>
                                <Image
                                    src={"/RiverdaleGrand/Clubhouse/Banquat.png"}
                                    loader={imageKitLoader}
                                    width={400}
                                    height={100}
                                    alt="dog park image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0"
                                />
                                <p className="flex justify-center font-lato text-mini md:text-[16px] font-normal leading-[36.5px] uppercase mt-3">
                                    Multi-Purpose Banquet Hall
                                </p>
                            </div>
                            <div>
                                <Image
                                    src={"/RiverdaleGrand/Clubhouse/Bathroom.png"}
                                    loader={imageKitLoader}
                                    width={400}
                                    height={100}
                                    alt="pet gravel park image"
                                    className="px-4 md:px-0 mx-auto md:w-full md:mx-0"
                                />
                                <p className="flex justify-center font-lato text-mini md:text-[16px] font-normal leading-[36.5px] uppercase mt-3">
                                    The Steam And Sauna Room
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="">
                    {activeCard === "ground" && (
                        <div className="grid grid-cols-1 text-xs sm:text-sm md:grid-cols-2  gap-y-4">
                            <div className="flex flex-row items-center  ">
                                <LuDot size={15} className="font-bold size-8 min-w-[30px]" />
                                Amphitheatre: An open area with stairs for community functions, sports, and cultural programs.
                            </div>

                            <div className="flex flex-row items-center  ">
                                <LuDot size={15} className="font-bold size-8 min-w-[30px]" />
                                Pet Park and Lawn: A dedicated green area for your pet's everyday happy hours.
                            </div>

                            <div className="flex flex-row items-center  ">
                                <LuDot size={15} className="font-bold size-8 min-w-[30px]" />
                                Gravel Bed for Pet Park: Gravel bed area for your pets to enjoy the best of their evenings.
                            </div>

                            <div className="flex flex-row items-center  ">
                                <LuDot size={15} className="font-bold size-8 min-w-[30px]" />
                                Paving Pattern on Driveway: Paving pattern to give your everyday ride a comfortable and neat experience.
                            </div>

                            <div className="flex flex-row items-center  ">
                                <LuDot size={15} className="font-bold size-8 min-w-[30px]" />
                                Residential-level parking access: Access to the ground level residential parking.
                            </div>

                            <div className="flex flex-row items-center  ">
                                <LuDot size={15} className="font-bold size-8 min-w-[30px]" />
                                Multipurpose Court 1: Multipurpose games court for all kids to play and win challenges.
                            </div>
                        </div>
                    )}

                    {activeCard === "podium" && (
                        <div className="grid grid-cols-1 text-xs sm:text-sm md:grid-cols-2 gap-y-4">
                            <div className="flex flex-row items-center">
                                <LuDot size={15} className="font-bold size-8 min-w-[30px]" />
                                Club House with Indoor Games: A huge area dedicated only to kid's play time.
                            </div>

                            <div className="flex flex-row items-center">
                                <LuDot size={15} className="font-bold size-8 min-w-[30px]" />
                                Multipurpose Party Lawn: Multipurpose party for all beautiful gatherings and lovely evenings.
                            </div>

                            <div className="flex flex-row items-center">
                                <LuDot size={15} className="font-bold size-8 min-w-[30px]" />
                                Outdoor Barbeque Space Adjoining the Clubhouse: A place to eat, party, and celebrate everyday life
                                victories.
                            </div>

                            <div className="flex flex-row items-center">
                                <LuDot size={15} className="font-bold size-8 min-w-[30px]" />
                                Outdoor Gardens: Outdoor private gardens for podium level apartment residents.
                            </div>

                            <div className="flex flex-row items-center">
                                <LuDot size={15} className="font-bold size-8 min-w-[30px]" />
                                Jacuzzi Pool Surrounded by Planting: Shallow Leisure for a luxurious 'Me Time' for adults.
                            </div>

                            <div className="flex flex-row items-center">
                                <LuDot size={15} className="font-bold size-8 min-w-[30px]" />
                                Kids Lap Pool: A pool of 0.5M depth with an overflow edge only for kids.
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-7 space-y-6 max-w-sm sm:max-w-7xl mx-auto   pt-7 ">
                <p className="ml-2 font-lato text-mob-heading md:text-[30px] font-normal leading-[22px] uppercase md:pt-0 ">Faq</p>
                {Faq?.map((faqt, idx) => (
                    <Section section={faqt} key={""} />
                ))}
                <div className="pt-10 flex flex-col sm:flex-row w-full  sm:w-fit gap-4  mx-auto ">
                    <a
                        href="/NewsLetter/GRAND_January.pdf"
                        download="GRAND_January.pdf"
                        className="bg-red  mx-auto text-white px-6 py-4 rounded-md hover:bg-red-700 transition-colors duration-300 flex items-center w-full sm:w-fit justify-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                        </svg>
                        Riverdale Grand January Newsletter
                    </a>
                    <a
                        href="/NewsLetter/GRAND_February.pdf"
                        download="GRAND_February.pdf"
                        className="bg-red  mx-auto text-white px-6 py-4 rounded-md hover:bg-red-700 transition-colors duration-300 flex items-center w-full sm:w-fit justify-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                        </svg>
                        Riverdale Grand February Newsletter
                    </a>

                    <a
                        href="/NewsLetter/GRAND_March.pdf"
                        download="GRAND_March.pdf"
                        className="bg-red  mx-auto text-center text-white px-6 py-4 rounded-md hover:bg-red-700 transition-colors duration-300 flex items-center w-full sm:w-fit justify-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                        </svg>
                        Riverdale Grand March Newsletter
                    </a>
                </div>
            </div>

            <ContactUs
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.672683059927!2d73.93978650943568!3d18.543687782481584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c371dc77b805%3A0x317cf16d3ff747ae!2sRiverdale%20Grand%2C%20Kharadi%2C%20Pune!5e0!3m2!1sen!2sin!4v1704441340605!5m2!1sen!2sin"
                scanner={"/Scanner/grand.webp"}
                scannerText="Riverdale Grand"
                pdf="/pdf_files/Riverdale-Grand.pdf"
                showProjectLinkInScanner
                projectLink="https://maharerait.maharashtra.gov.in/project/view/31683"
            />

            <Footer />
        </div>
    );
};
