"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/LandingPage/Header/Navbar";
import Image from "next/image";
import Footer from "../common/Footer/Footer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import "./swiper-navigation-button.css";

// import required modules

import MelavaCard from "../components/ProjectsPage/Melava/MelavaCard";
import { IMelavaCard } from "../utils/interface/Melava/IMelavaCard";
import ContactUs from "../common/ContactUs";
import MelavaSlider from "../components/ProjectsPage/Melava/MelavaSlider";
import { imageKitLoader } from "../utils/ImageKitLoader";

const SubPage = () => {
    const [activeCard, setActiveCard] = useState<string>("ground");

    const internalApartmentData = [
        {
            image: "RiverdaleGrand/InternalApartment1.jpg",
            heading: "Clear Compartmentalized Spaces within the Master Bedroom",
            bodyText:
                "Separate spaces for the Bedroom area, Walk-in closet and the washroom. Each of the 4 Bedrooms has attached balconies that are South-West facing and increase the air-flow and Natural Ventilation within the apartment",
        },
        {
            image: "RiverdaleGrand/InternalApartment2.jpg",
            heading: "Clear Compartmentalized Spaces within the Master Bedroom",
            bodyText:
                "Separate spaces for the Bedroom area, Walk-in closet and the washroom. Each of the 4 Bedrooms has attached balconies that are South-West facing and increase the air-flow and Natural Ventilation within the apartment",
        },
    ];

    const melaveOpportunity: IMelavaCard[] = [
        {
            img: "/Melava/melava-oppor-1.jpg",
            heading:
                "Vibrant restaurant spaces for the most exquisite culinary palettes",
            bodyText:
                "Indulging urban spaces for bars and pubs Exotic culinary palettes deserve the most exquisite dining spaces. A chic Sushi Bar, a cosy Mediterranean Café, a traditional American Diner or a beau French Patisserie…recreate any authentic overseas experience at Melava. That’s not all! Melava offers compliant spaces to set-up bars, breweries and liquor stores. Budding workstations and dwelling residences give the opportunity to let the open sign be on for longer hours A wise investment avenue in the heart of the city lights giving an opportunity to let the “open sign” be on for longer hours.",
            left: true,
        },
        {
            img: "/Melava/melava-oppor-2.jpg",
            heading: "Dynamic retail spaces for supermarket franchises",
            bodyText:
                "Bon vivants find nothing more satisfying than scavenging for gourmet foods, assorted groceries and epicurean delights at a premium supermarket. Melava offers impressive glass-front spaces with ample ceiling height ready to accommodate leading supermarket franchises. Making this type of establishment the center of attraction and bringing in heavy footfalls to keep the business impelling.",
            left: false,
        },
        {
            img: "/melava-oppor-3.jpg",
            heading: "Joyful toddler spaces for pre-schools and day cares",
            bodyText:
                "Speaking of safe, secure and vibrant spaces brings us to another booming service, i.e. Crèches and Day Cares. That’s right! Parents would love to see their little ones learn, create and socialize at a venue that is centrally located, well-connected and aesthetically soothing, particularly Melava. Kharadi has an expense of residential properties and working couple hence, a business opportunity that’s vibrant, cheerful and need of the hour.",
            left: true,
        },
        {
            img: "/Melava/melava-oppor-4.png",
            heading: "Rejuvenating therapy spaces for spas.",
            bodyText:
                "Pampering makeover spaces for salons. The best place to relax after a chaotic and hectic day. A deal that’s like striking gold with being surrounded by mushrooming business bays and residentials.",
            left: false,
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
    }, []);
    return (
        <div className="max-w-[100vw] overflow-x-hidden">
            {/* Header  */}
            <div
                style={{
                    backgroundImage: `${
                        width >= 640
                            ? `url(https://res.cloudinary.com/dfvccxflr/image/upload/v1732800296/projects/DMelavaBanner.jpg)`
                            : `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Melava/mob-banner.jpg?updatedAt=1707284774906)`
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
            <section className="font-plus-jakarta-sans flex flex-col items-center justify-center gap-4 md:gap-10 text-base max-w-[90%] md:max-w-[51%] mx-auto   text-[#6B7280]  text-center  my-9 md:my-14">
                <Image
                    loader={imageKitLoader}
                    src={"/Melava/Melava-page-logo.webp"}
                    height={100}
                    width={150}
                    alt="melava logo"
                    className=" mx-auto"
                />

                <p className="font-plus-jakarta-sans  text-base   leading-link-text italic text-[#6B7280] text-center  ">
                    <span className="text-base md:text-3xl font-bold ">"</span>
                    We present ‘Melava’ a consortium of high-street retail
                    showroom offering with sub-brands, ‘Highstreet’ and ‘Avenue’
                    alongside the Riverdale Riverfront road. Given the length of
                    the highstreet offering and the location and the expected
                    people flow to the area, this will become the social center
                    of Kharadi riverside. It is with this understanding that
                    ‘Melava’ has been rightfully positioned as ‘Bringing
                    together people and opportunity’
                    <span className="text-3xl font-bold">"</span>
                </p>
                <div>
                    {/* <div className="flex flex-row gap-1 items-center">
            <div className="w-[50px] h-[0.1px] bg-black"></div>
            <Image src={Sign} width={200} height={200} alt="signature" />
            <div className="w-[50px] h-[0.1px] bg-black"></div>
          </div> */}
                    {/* <p className="text-xs mb-1">DIRECTOR </p>
          <p className="text-xs"> DUVILLE ESTATES</p> */}
                </div>
            </section>

            <section className="w-[90%] mx-auto space-y-6 my-16">
                <div className="space-y-12">
                    <div className="flex gap-2 items-center">
                        <div className="h-5 md:h-7 w-1 bg-red"></div>
                        <h1 className="text-mob-heading  md:text-section-heading font-plus-jakarta-sans uppercase">
                            Investment Philosophy
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
                        <Image
                            loader={imageKitLoader}
                            src={"/Melava/Investment-Philosophy.png"}
                            height={500}
                            width={600}
                            alt="melava logo"
                            className=""
                        />

                        <ul className="text-sm md:text-base space-y-2 md:space-y-3 w-full  md:w-[60%] text-[#6B7280] font-plus-jakarta-sans">
                            <li>
                                ‘MELAVA’ borrows its origins from the local
                                cultural nuances and culture.
                            </li>
                            <li>
                                ‘MELAVA’ defines the spirit of togetherness and
                                exudes the spirit of a prolific culture.
                            </li>
                            <li>
                                ‘MELAVA’ celebrates people, companionship,
                                gathering and shopping and entertainment.
                            </li>
                            <li>
                                ‘MELAVA’ has its physical beginnings at the
                                ‘Riverdale Mile’ a significant majority of
                                stretch alongside the Riverfront-Riverside road
                                at Kharadi, Pune.
                            </li>
                            <li className="">
                                ‘MELAVA’ has two of its sub-brands located at
                                the ‘Riverdale Mile’ which are MELAVA-HIGHSTREET
                                and MELAVA-AVENUE.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="w-[90%] mx-auto space-y-12 mb-10">
                <div className="flex gap-2 items-center">
                    <div className="h-6 md:h-7 w-1 bg-red"></div>
                    <h1 className="text-mob-heading  md:text-section-heading font-plus-jakarta-sans uppercase">
                        Investment Opportunity
                    </h1>
                </div>
                <div className=" space-y-16 md:space-y-32">
                    {melaveOpportunity?.map((ele, idx) => (
                        <MelavaCard card={ele} />
                    ))}
                </div>
            </section>

            {/* floor plan */}
            <section className="w-[90%] mx-auto  my-20">
                <div className="flex gap-2 items-center">
                    <div className="h-12 md:h-7 w-1 bg-red"></div>
                    <h1 className="text-mob-heading   md:text-section-heading md:tracking-wider font-plus-jakarta-sans uppercase">
                        MELAVA AVENUE LAYOUT PLANS ACROSS BOTH LEVELS
                    </h1>
                </div>
                <MelavaSlider />
            </section>

            <section className="w-[90%] mx-auto space-y-6">
                <div className="flex gap-2 items-center">
                    <div className="h-6 md:h-7 w-1 bg-red"></div>
                    <h1 className=" text-mob-heading md:text-section-heading font-plus-jakarta-sans">
                        LOCATION
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row gap-5">
                    <Image
                        loader={imageKitLoader}
                        src={"/Melava/location-1.webp"}
                        height={500}
                        width={650}
                        alt="location"
                    />
                    <Image
                        loader={imageKitLoader}
                        src={"/Melava/location-2.webp"}
                        height={500}
                        width={650}
                        alt="location"
                    />
                </div>
            </section>

            <ContactUs
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6726830599355!2d73.93978650943565!3d18.54368778248158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c371dc77b805%3A0x317cf16d3ff747ae!2sRiverdale%20Grand%2C%20Kharadi%2C%20Pune!5e0!3m2!1sen!2sin!4v1706508056962!5m2!1sen!2sin"
                scanner={"/Scanner/avenue.webp"}
                scannerText="Melava Avenue"
            />

            <Footer />
        </div>
    );
};

export default SubPage;
