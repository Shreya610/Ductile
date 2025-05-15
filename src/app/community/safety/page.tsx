"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/LandingPage/Header/Navbar";
import Image from "next/image";
import Section from "../../components/Engineer/Section";
import Footer from "../../common/Footer/Footer";
import CommunityCarousel from "../../components/Community/carousel/Carousel";
import { imageKitLoader } from "../../utils/ImageKitLoader";

const page = () => {
    const subDetails = [
        {
            title: "SAFETY IS NOT EXPENSIVE. IT IS PRICELESS",
            data: [
                "Duville Estates by its Safety Operational Policy ensures the implementation of robust safety management systems on site.",
                "External alliance partners on site are involved at a pre-determined frequency to regularly monitor and measure safety performance indicators.",
                "There are regular training programs to enhance employee awareness on safety measures.",
                "During the construction of the building, Duville Estates ensures that attention is paid to safety on site, safety of the labourers at work and also, the safety of the materials stored. The end product and its quality is in direct co-relation to the training & motivation of the labourers on site.",
            ],
        },
        {
            title: "SAFETY WEEK CAMPAIGNS ",
            data: [
                "It is a continuing endeavour at Duville Estates to run periodic Safety Week campaigns. Some of these are: ",
                "National Road Safety Week Campaign",
                "National Safety Day Celebrations ",
                "Engineers Day",
                "World Environment Day",
                "Safety & Motivation programs at Site",
            ],
        },
        {
            title: "INSPECTION BEST PRACTICES ARE BEING CONTINUALLY FOLLOWED ON SITE ",
            data: [
                "PASSENGER LIFT INSPECTION",
                "AMBULANCE INSPECTION",
                "INSPECTION OF MACHINES - POWER TOOLS | WELDING MACHINE | GRINDING MACHINE | DRILL MACHINIE | BREAKER MACHINE",
            ],
        },
        {
            title: "INDUSTRY BEST PRACTICES BEING FOLLOWED ON SITE",
            data: [
                "SAFETY SIGNAGE DISPLAY ON SITE",
                "INDUCTION AT OFFICE & FIRST AID OFFICE",
                "STATIONING OF FIRE EXTINGUISHERS ",
            ],
        },
    ];

    const subDetails2 = [
        {
            title: "USAGE OF SPRINKLER SYSTEMS ",
            data: [
                "Duville Estates follows appropriate building codes and standards that are required for the installation of sprinkler systems especially in high-rise in residential towers. Compliance with these regulations is essential for ensuring the safety of the building and its occupants.",
                "Sprinkler systems are designed to detect and respond to a fire at its early stages. Individual sprinkler heads are activated by heat, ensuring that the fire is suppressed quickly, minimizing potential damage and risk to occupants.",
                "Sprinkler systems are effective in limiting the spread of fire to other areas of the building. This containment helps prevent the fire from reaching neighboring units and floors, contributing to overall building safety.",
                "Sprinklers not only control flames but also help reduce the production of smoke and heat. This can improve visibility and facilitate safer evacuation routes for occupants.",
                "The Design & Usage of Sprinkler Systems are such that they can accommodate various building layouts and structures. This flexibility allows for customized designs to suit specific needs.",
                "Designed with low maintenance requirements. Also use significantly lesser water than the fore department hoses. ",
                "Routine inspections ensure the system remains operational and ready for use when needed.",
                "Effectiveness is far higher and has shown significantly lower fire-related losses in terms of lives, property, and valuables. Hence, the effectiveness in contributing to a safer and more secure living environment.",
            ],
        },
        {
            title: "MAINTENANCE OF MINIMUM WIDTH FOR FIRE TENDER MOVEMENT ",
            data: [
                "The minimum 6.00 meters width provides sufficient space for fire tenders to maneuver effectively. This is crucial for navigating turns, corners, and potential obstacles within the residential tower complex.",
                "Fire tenders may need to access critical infrastructure points within the residential tower, such as hydrants, water sources, or emergency exits. A clear movement path ensures unimpeded access to these essential elements.",
                "In addition to facilitating firefighting operations, a clear fire tender movement path can also serve as an evacuation route for residents and emergency personnel. It allows for the smooth evacuation of individuals from the building during a fire or other emergencies.",
                "Maintaining a clear fire tender movement path aligns with safety regulations and building codes. Many regulatory authorities specify minimum access widths to ensure that emergency services can operate effectively in the event of a fire or other emergencies.",
            ],
        },
    ];

    const safetyWeekImages = [
        "/Community/environment/1.png",
        "/Community/environment/2.png",
        "/Community/environment/3.png",
        "/Community/environment/4.png",
    ];

    const covidImages = [
        "/Community/safety/Covid/covid.jpg",
        "/Community/safety/Covid/covid2.jpg",
        "/Community/safety/Covid/Covid3.jpg",
        "/Community/safety/Covid/covid4.jpg",
    ];

    const safetyWeekCampaign = [
        "/Community/safety/Safety Week/Safety_week.jpg",
        "/Community/safety/Safety Week/safety_week2.jpg",
        "/Community/safety/Safety Week/Safety_week3.jpg",
        "/Community/safety/Safety Week/Safety_week4.jpg",
    ];

    const precautionsImages = [
        "/Community/safety/Precautions/precautions.jpg",
        "/Community/safety/Precautions/precautions2.jpg",
        "/Community/safety/Precautions/precautions4.jpg",
        "/Community/safety/Precautions/precautions5.jpg",
    ];

    const scaffoldingImages = [
        "/Community/safety/Scaffolding/scaffolding1.jpg",
        "/Community/safety/Scaffolding/scaffolding2.jpg",
        "/Community/safety/Scaffolding/scaffolding3.jpg",
        "/Community/safety/Scaffolding/scaffolding4.jpg",
    ];

    const safetyParkImages = [
        "/Community/safety/Safety Park/Safety_park1.jpeg",
        "/Community/safety/Safety Park/Safety_park2.jpeg",
        "/Community/safety/Safety Park/safety_park3.jpeg",
        "/Community/safety/Safety Park/Safety_park4.jpg",
    ];

    const HeadingData = {
        title: "AT THE CONSTRUCTION SITE, THE HEALTH OF THE LABOURERS IS PARAMOUNT",
        description:
            "“You can dream, create, design, and build the most wonderful place in the world. But it requires people to make the dream a reality.” ",

        createdBy: "Walt Disney",
    };

    const data = {
        heading1: "Labour Safety and Training",
        heading2: "Sensitivity",
        subDetails: subDetails,
        sectionHeading: "Safety",
        mainImg: "/Community/safety/main.jpg",
        cardHeading: "highlights of WORLD ENVIRONMENT DAY",
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
        <div className="w-full  space-y-10 md:space-y-32 font-plus-jakarta-sans max-w-[100vw]   ">
            <div className=" relative w-full ">
                <div
                    className="w-screen h-screen"
                    style={{
                        backgroundImage: `${
                            width >= 640
                                ? `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Community/safety/banner.jpg?updatedAt=1707285162303)`
                                : `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Community/safety/banner_mob.jpg?updatedAt=1707285162294})`
                        }`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <Navbar />
                </div>
                <div className="absolute top-[55%] md:top-[35%] left-[5%]">
                    <div className="w-full z-10   text-white font-plus-jakarta-sans font-extrabold text-mob-banner-heading uppercase md:capitalize md:text-[64px]  ">
                        <h1 className="text-white-600 ">
                            Labour Safety <br />{" "}
                            <p className="md:-mt-5">and Training</p>
                        </h1>
                    </div>
                    <div className="space-y-1 text-white z-50">
                        <h6 className="w-[50%] md:w-[70%] text-xs md:text-base font-medium md:leading-link-text md:ml-1">
                            {" "}
                            {HeadingData?.description}
                            <p className="font-medium text-[10px] md:text-base font-plus-jakarta-sans">
                                - {HeadingData?.createdBy}
                            </p>
                        </h6>
                        <h3 className="font-plus-jakarta-sans max-w-[200px] md:max-w-full text-xs md:text-card-heading font-semibold pt-4">
                            {HeadingData?.title}
                        </h3>
                        {HeadingData?.createdBy && (
                            <p className="font-medium text-[10px] md:text-base font-plus-jakarta-sans">
                                - DUVILLE ESTATES
                            </p>
                        )}
                    </div>
                </div>
                {/* <div className="absolute top-0  opacity-[0.3]  w-screen object-cover md:h-screen "></div> */}
                <Image
                    loader={imageKitLoader}
                    src={"/Common/banner-2.png"}
                    width={300}
                    height={400}
                    alt="banner"
                    className=" absolute right-5 bottom-0 md:right-14 w-[100px]  md:w-[250px] h-[200px] md:h-[500px] z-0"
                />
            </div>

            {/* Deatails Secttion */}
            <div className="flex flex-col  md:flex-row justify-center md:justify-center items-center md:items-start w-11/12  mx-auto md:mx-auto gap-8 md:gap-4 ">
                <div className="space-y-4 border h-fit border-slate-200 w-full md:w-1/2 mx-auto md:mx-0">
                    <Image
                        loader={imageKitLoader}
                        src={data.mainImg}
                        width={500}
                        height={500}
                        className="  w-full border-0  object-cover max-h-[300px] min-h-[300px] "
                        loading="lazy"
                        alt="image"
                    />
                    <h3 className="p-3 font-medium text-black uppercase">
                        {data.sectionHeading}
                    </h3>
                </div>

                <div className="flex flex-col w-full">
                    <div
                        className={`  ${
                            subDetails?.length && "border"
                        }  rounded-md border-slate-300 w-full  md:w-[100%]  h-fit  mb-6`}
                    >
                        {subDetails &&
                            subDetails?.map((section, idx) => (
                                <Section section={section} key={idx} />
                            ))}
                    </div>

                    <div
                        className={`  ${
                            subDetails2?.length && "border"
                        }  rounded-md border-slate-300 w-full  md:w-[100%]  h-fit  mb-6`}
                    >
                        {subDetails2 &&
                            subDetails2?.map((section, idx) => (
                                <Section section={section} key={idx} />
                            ))}
                    </div>
                </div>
            </div>

            {/* images section */}
            <div className="w-11/12 mx-auto space-y-5">
                <h1 className="uppercase font-bold text-mob-card-heading md:text-card-heading text-crimson-200 pl-3 md:pl-1">
                    national safety day celebration
                </h1>
                {/* <div className="grid sm:grid-cols-2 place-content-center md:grid-cols-3 xl:grid-cols-4 gap-10">
          {image?.map((src, idx) => (
            <img src={src} className="object-cover" />
          ))}
        </div> */}
                <CommunityCarousel images={safetyWeekImages} />
            </div>

            <div className="w-11/12 mx-auto space-y-5 pt-10 md:pt-0">
                <h1 className="uppercase font-bold text-mob-card-heading md:text-card-heading text-crimson-200 pl-3 md:pl-1">
                    National road Safety Week Campaign
                </h1>
                {/* <div className="grid sm:grid-cols-2 place-content-center md:grid-cols-3 xl:grid-cols-4 gap-10">
          {image?.map((src, idx) => (
            <img src={src} className="object-cover" />
          ))}
        </div> */}
                <CommunityCarousel images={safetyWeekCampaign} />
            </div>

            <div className="w-11/12 mx-auto space-y-5 pt-10 md:pt-0">
                <h1 className="uppercase font-bold text-mob-card-heading md:text-card-heading text-crimson-200 pl-3 md:pl-1">
                    SAFETY PRECAUTIONS TAKEN during covid-19
                </h1>
                {/* <div className="grid sm:grid-cols-2 place-content-center md:grid-cols-3 xl:grid-cols-4 gap-10">
          {image?.map((src, idx) => (
            <img src={src} className="object-cover" />
          ))}
        </div> */}
                <CommunityCarousel images={covidImages} />
            </div>

            <div className="w-11/12 mx-auto space-y-5 pt-10 md:pt-0">
                <h1 className="uppercase font-bold text-mob-card-heading md:text-card-heading text-crimson-200 pl-3 md:pl-1">
                    INSPECTION BEST PRACTICES ARE BEING CONTINUALLY FOLLOWED ON
                    SITE
                </h1>
                {/* <div className="grid sm:grid-cols-2 place-content-center md:grid-cols-3 xl:grid-cols-4 gap-10">
          {image?.map((src, idx) => (
            <img src={src} className="object-cover" />
          ))}
        </div> */}
                <CommunityCarousel images={precautionsImages} />
            </div>

            <div className="w-11/12 mx-auto space-y-5 pt-10 md:pt-0">
                <h1 className="uppercase font-bold text-mob-card-heading md:text-card-heading text-crimson-200 pl-3 md:pl-1">
                    {/* INDUSTRY BEST PRACTICES BEING FOLLOWED ON SITE */}
                    Safety & Motivation programs at Site
                </h1>
                {/* <div className="grid sm:grid-cols-2 place-content-center md:grid-cols-3 xl:grid-cols-4 gap-10">
          {image?.map((src, idx) => (
            <img src={src} className="object-cover" />
          ))}
        </div> */}
                <CommunityCarousel images={scaffoldingImages} />
            </div>

            <div className="w-11/12 mx-auto space-y-5 pt-10 md:pt-0">
                <h1 className="uppercase font-bold text-mob-card-heading md:text-card-heading text-crimson-200 pl-3 md:pl-1">
                    INSTALLATION OF SAFETY PARK FOR CONTINUAL TRAINING
                </h1>
                {/* <div className="grid sm:grid-cols-2 place-content-center md:grid-cols-3 xl:grid-cols-4 gap-10">
          {image?.map((src, idx) => (
            <img src={src} className="object-cover" />
          ))}
        </div> */}
                <CommunityCarousel images={safetyParkImages} />
            </div>

            <Footer />
        </div>
    );
};

export default page;
