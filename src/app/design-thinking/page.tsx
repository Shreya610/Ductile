"use client";
import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../components/LandingPage/Header/Navbar";

import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { card_section } from "../utils/interface/DesignThinking/section";
import Footer from "../common/Footer/Footer";
import Carousel from "../common/Corousel/Carousel";
import { imageKitLoader } from "../utils/ImageKitLoader";

const DesignThinking = () => {
    const heightsImages = [
        "/Design-Thinking/carousel/Heights/1.jpg",
        "/Design-Thinking/carousel/Heights/2.jpg",
        "/Design-Thinking/carousel/Heights/3.jpg",
        "/Design-Thinking/carousel/Heights/4.jpg",
        "/Design-Thinking/carousel/Heights/5.jpg",
        "/Design-Thinking/carousel/Heights/6.jpg",
        "/Design-Thinking/carousel/Heights/7.jpg",
        "/Design-Thinking/carousel/Heights/8.jpg",
        "/Design-Thinking/carousel/Heights/9.jpg",
        "/Design-Thinking/carousel/Heights/10.jpg",
        "/Design-Thinking/carousel/Heights/11.jpg",
    ];

    const residencesImages = [
        "/Design-Thinking/carousel/Residences/1.jpg",
        "/Design-Thinking/carousel/Residences/2.jpg",
        "/Design-Thinking/carousel/Residences/3.jpg",
        "/Design-Thinking/carousel/Residences/4.jpg",
        "/Design-Thinking/carousel/Residences/5.jpg",
    ];

    const cards: card_section[] = [
        {
            number: "01",
            main_heading: "THE DESIGN IDEOLOGY",
            images: "/Design-Thinking/section/Design Ideology.png",
            sub_heading:
                "WE BELIEVE THAT THE FINAL DESIGN MUST MEET WITHOUT DEBATE THE FUNCTIONAL AS WELL AS THE EMOTIONAL NEEDS OF THE END USER",
            sub_sections: [
                "Allocating space for recreational greens, amenities, and services contributes to a more attractive and enjoyable living environment, positively impacting the quality of life for residents.",
                "Recreation greens and amenities such as parks, sports facilities, and fitness areas promote physical activity and well-being among residents. Access to green spaces has been linked to improved mental health and stress reduction.",
                "Amenities and recreational areas provide opportunities for residents to interact and build a sense of community. Social spaces contribute to a more vibrant and connected residential community.",
            ],
        },
        {
            number: "02",
            main_heading: "METHODOLOGY TO DESIGN BORROWING",
            images: "/Design-Thinking/section/Design Methodology.png",
            sub_heading:
                "IT IS IMPORTANT TO DETERMINE, RESEARCH & EXECUTE CUSTOMER REQUIREMENT IN TERMS OF ACCEPTABLE SIZES AND SPECIFICATIONS",
            sub_sections: [
                "Being able to introduce new and innovative floor plans that are in consonance as per the requirement of the prospect buyer.",
                "These are in different sizes of a 2.5 BHK, a 3 BHK, a 3.5 BHK, and a 4.5 BHK.",
                "Being able to custom design and convert a 4 BHK into a 4.5, or a 5 BHK, or a 5.5 BHK.",
            ],
        },
        {
            number: "03",
            main_heading:
                "MANIFESTATION OF DESIGN THROUGH THE RESIDENTIAL PROJECTS",
            images: "/Design-Thinking/section/Design Manifestation.png",
            sub_heading:
                "IT IS NOT JUST THE BEAUTY OF THE BUILDING THAT ONE MUST ADMIRE, IT IS THE NATURAL DAYLIGHT & CROSS VENTILATION",
            sub_sections: [
                "The flow of air through a building helps regulate indoor temperatures by dissipating heat and providing cooling. This natural ventilation method can be especially effective in moderate climates, reducing the reliance on artificial cooling systems.",
                "By harnessing natural airflow, cross ventilation reduces the need for mechanical ventilation systems, such as air conditioning and exhaust fans. This, in turn, leads to energy savings and lower utility bills.",
                "Good cross ventilation helps in controlling indoor humidity levels. Proper air circulation prevents the buildup of moisture, which can contribute to issues like mold growth and mildew.",
                "Maximizing natural daylight reduces the need for artificial lighting during daylight hours, leading to lower electricity consumption and cost savings.",
                "Natural daylight provides a softer, more evenly distributed light that reduces eye strain and promotes visual comfort compared to artificial lighting.",
                "Sunlight stimulates the production of serotonin, a neurotransmitter associated with mood elevation, which can contribute to a more positive living experience.",
            ],
        },
        {
            number: "04",
            main_heading: "SUBSTANTIATION & PROOF OF DESIGN",
            sub_heading: "",
            sub_sections: [],
        },
    ];

    const [isActive, setIsActive] = useState<string>();

    const handleToggle = (index) => {
        if (isActive === index) {
            setIsActive("0");
        } else {
            setIsActive(index);
        }
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
        <>
            <div
                style={{
                    backgroundImage: `${
                        width >= 640
                            ? `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Design-Thinking/HeaderImage.jpg?updatedAt=1707285046008)`
                            : `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Design-Thinking/HeaderImageMob.jpg?updatedAt=1707285042409)`
                    }`,
                    backgroundPosition: "center",
                    backgroundPositionY: "10%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "100vh",
                }}
                className="relative"
            >
                <div className="bg-black bg-opacity-40">
                    <Navbar />
                </div>

                {/* Header  */}
                <div className="flex max-w-3xl h-full mt-24 md:mt-20">
                    <h1 className="font-lato md:leading-[65px] uppercase text-white md:text-[60px] font-bold md:mx-auto mx-5 md:my-auto text-mob-banner-heading md:mt-[170px] mt-[200px]">
                        Duville <br />
                        Design Th
                        {width >= 640 && (
                            <p className="text-red inline-block h-80 bg-crimson-200 bg-current mt-2 text-3xl mx-1">
                                i
                            </p>
                        )}
                        <span className="md:hidden">i</span>
                        nking
                    </h1>
                </div>
            </div>
            <Image
                loader={imageKitLoader}
                src={"/Common/banner-2.png"}
                height={300}
                width={width <= 640 ? 100 : 300}
                alt="banner image"
                className="absolute right-5 md:-bottom-4 bottom-0"
            />

            {/* Sub Section  */}
            <div className="flex flex-col md:flex-row space-x-9">
                <h2 className="normal-case max-w-sm text-3xl font-lato font-medium md:text-right p-16 text-center">
                    Duville Estates engineering & project team incorporates the
                    4 stages of design thinking into the product
                </h2>

                <div className="flex flex-col">
                    {cards.map((item, index) => (
                        <div className="flex flex-row" key={index}>
                            <div className="bg-[#F1F1F1] md:w-[9px] md:ml-5">
                                <p className="z-10 text-black rounded-full p-3 absolute md:left-[423px] font-normal bg-[#D9D9D9] mx-auto font-lato items-center mt-12">
                                    {item.number}
                                </p>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex flex-row justify-between items-center md:max-w-5xl md:space-x-[650px] max-w-xs pr-4 md:pr-0">
                                    <h2 className="p-12 ml-2 md:ml-0 uppercase md:text-3xl font-medium">
                                        {item.main_heading}
                                    </h2>
                                    <button
                                        className="text-[43px] font-semibold pb-4 flex items-end"
                                        onClick={() =>
                                            handleToggle(item.number)
                                        }
                                    >
                                        {isActive === item.number ? "-" : "+"}
                                    </button>
                                </div>

                                {isActive === item.number && (
                                    <div
                                        className={`${
                                            item.number === "04"
                                                ? ""
                                                : "py-8 pr-6"
                                        }`}
                                    >
                                        {item.number === "04" ? (
                                            <div className="flex flex-col space-y-20">
                                                <Carousel
                                                    heading="Riverdale Heights"
                                                    imagesData={heightsImages}
                                                />
                                                <Carousel
                                                    heading="Riverdale Residences"
                                                    imagesData={
                                                        residencesImages
                                                    }
                                                />
                                            </div>
                                        ) : (
                                            <>
                                                <div className="md:max-w-xl mx-auto max-w-sm">
                                                    <Image
                                                        loader={imageKitLoader}
                                                        src={item.images}
                                                        width={600}
                                                        height={300}
                                                        alt="image"
                                                        className="md:max-w-lg"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-4 mt-10 max-w-3xl mx-auto">
                                                    <div className="text-sm font-semibold">
                                                        {item.sub_heading}
                                                    </div>

                                                    <div className="flex flex-col gap-6 max-w-2xl">
                                                        {item.sub_sections.map(
                                                            (
                                                                subItem,
                                                                subIndex
                                                            ) => (
                                                                <div
                                                                    key={
                                                                        subIndex
                                                                    }
                                                                    className="pl-6 border-l-4 border-crimson-200 text-[#6C6A6A]"
                                                                >
                                                                    {subItem}
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}

                                {isActive !== item.number && (
                                    <hr className="border-b-4 border-[#F1F1F1]" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DesignThinking;
