"use client";

import React, { useState } from "react";
import Navbar from "../components/LandingPage/Header/Navbar";
import Image from "next/image";
import ProjectCard from "../components/ProjectList/ProjectCard";
import Footer from "../common/Footer/Footer";
import { imageKitLoader } from "../utils/ImageKitLoader";

const page = () => {
    const [tab, setTab] = useState<number>(0);
    const projectList = [
        {
            type: "Ongoing Residential",
            cards: [
                {
                    logo: "/Common/Reverdale-Grand-logo.png",
                    bodyText1:
                        "Discover the essence of luxury living at Riverdale Pune. Riverdale, the 31 acre micro-township is the absolute representation of bespoke development through execution of world class design by UHA London. The endeavor is to give customers across all of the residential projects at Riverdale a superior product that will exceed their expectations and create new benchmarks for the",
                    img: "/Project/ongoing-residential-1.png",
                    link: "/riverdale-grand",
                },
                {
                    logo: "/Common/Riverdale-Grove-logo.png",
                    bodyText1:
                        "Riverdale Suites brings you a very unique  investment opportunity in the form of ‘Compact  Urbane Condominiums’ in the very heart of  Kharadi.  Riverdale Suites is a unique offering created for  today’s astute investor. An investment at  Riverdale Suites allows you the achievement of  your financial goals by adding a unique real  estate asset to your portfolio and hitting the  sweet spot of maximizing appreciation of your",
                    img: "/Project/ongoing-residential-2.png",
                    link: "/riverdale-grove/",
                },
            ],
        },
        {
            type: "Ongoing  Commercial",
            cards: [
                {
                    logo: "/Common/Duville-Melava-logo.png",
                    bodyText1:
                        "  At Riverdale, one can indulge in the joy of Pune’s  urban charm and the natural riverside riverfront  beauty. The ‘Riverdale Mile’ a line of retail  stretching across from Riverdale Grand to  Riverdale Grove and then Riverdale Suites making  this the ‘Social Capital’ at the ‘Heart of Kharadi’ ",
                    bodyText2:
                        "Our thoughtfully crafted retail showrooms offer  the perfect blend of size, interior catering to a",
                    img: "/Project/ongoing-residential-2.png",
                    link: "/melava-highstreet/",
                },
            ],
        },
        {
            type: "Completed Residential",
            cards: [
                {
                    logo: "/Common/Riverdale-Height-logo.png",
                    bodyText1:
                        "Riverdale Heights is the INITIATION POINT for the 31 acre micro township called Riverdale. The master planning and elevation design has been planned upon by none other than Upton - Hansen Associates - London.",
                    bodyText2:
                        " Riverdale Heights is conspicuous by its spectacular bronzed fins which curve along the building top taking itscues from the ever flowing river and its lush green surround",
                    img: "/Project/completed-3.png",
                    link: "/riverdale-heights/",
                },
                {
                    logo: "/Common/Riverdale-Residences-logo.png",
                    bodyText1:
                        "Riverdale Residences is an iconic development by the riverbank alongside the Riverdale Riverfront Road. Known by the moniker, the ‘Trinity of Jewels by the Riverfront’, Riverdale Residences on the ‘Riverdale Mile’ is one of the most coveted addresses at Kharadi, Pune.",
                    bodyText2:
                        "Riverdale Residences provides absolute luxurious 3 bed homes meant exclusively for those who aspire to live in an ambit of contemporary and exclusive living which has been designed to be in tandem with the idyllic tranquillity of the river.",
                    img: "/Project/completed-1.png",
                    link: "/riverdale-residences/",
                },
                {
                    logo: "/Common/Riverdale-Suites-logo.png",
                    bodyText1:
                        "Riverdale Suites brings you a very unique investment opportunity in the form of ‘Compact Urbane Condominiums’ in the very heart of Kharadi.",
                    bodyText2:
                        "Riverdale Suites is a unique offering created for  today’s astute investor. An investment at  Riverdale Suites allows you the achievement of  your financial goals by adding a unique real  estate asset to your portfolio and hitting the  sweet spot of maximizing appreciation of your",
                    img: "/Project/completed-2.png",
                    link: "/riverdale-suites/",
                },
            ],
        },
    ];

    console.log(projectList);
    return (
        <main className="max-w-[100vw] ">
            <div className="bg-black  opacity-[0.9] ">
                <Navbar />
            </div>

            {/* section 1 */}
            <section className="font-plus-jakarta-sans flex flex-col items-center justify-center gap-10 text-base w-11/12 md:max-w-[50%] mx-auto   text-[#6B7280] py-32 text-center ">
                <p className="font-plus-jakarta-sans  text-base   leading-link-text italic text-[#6B7280] text-center ">
                    <span className="text-3xl font-bold ">"</span> Real estate
                    is as intriguing an opportunity as they comes and in
                    parallel, as complex as it could be in view of envisioning
                    and then developing a masterpiece to creating a landmark.
                    Investment in land represents an enormous opportunity when
                    it is developed and as far as the location goes, there is no
                    better piece of land than that which is abutting the curve
                    of the river to then becoming a home that is for the
                    discerning, the affluent and for those that finally want to
                    call it home. This is Riverdale{" "}
                    <span className="text-3xl font-bold">"</span>
                </p>
                <div>
                    <div className="flex flex-row gap-1 items-center">
                        <div className="w-[50px] h-[0.1px] bg-black"></div>
                        <Image
                            loader={imageKitLoader}
                            src={"Project/project-sign.png"}
                            width={200}
                            height={200}
                            alt="signature"
                        />
                        <div className="w-[50px] h-[0.1px] bg-black"></div>
                    </div>
                    <p className="text-sm">CHAIRMAN, DUVILLE ESTATES</p>
                </div>
            </section>

            {/* section 2 */}
            <section className=" hidden md:block w-11/12 mx-auto space-y-12 mb-20">
                <h1 className=" text-section-heading md:text-[30px] font-plus-jakarta-sans">
                    OUR PROJECTS
                </h1>

                <div className="flex flex-row justify-between">
                    <div className="  space-y-16 ">
                        {projectList?.map((ele, idx) => (
                            <h5
                                className={`text-3xl  font-plus-jakarta-sans cursor-pointer border-l-4 font-medium border-red pl-7 leading-link-text ${
                                    idx === tab ? "" : "opacity-[0.4]"
                                }`}
                                onClick={() => setTab(idx)}
                            >
                                {ele?.type}
                            </h5>
                        ))}
                    </div>
                    <div className="w-[60%] space-y-20">
                        {tab >= 0 &&
                            tab < projectList.length &&
                            projectList[tab].cards?.map((card, idx) => (
                                <ProjectCard card={card} key={idx} />
                            ))}
                    </div>
                </div>
            </section>

            {/* mob view section 2 */}
            <section className="md:hidden   w-11/12 mx-auto space-y-12 mb-20">
                <div className="flex gap-2 items-center">
                    <div className="h-7 w-1 bg-red"></div>
                    <h1 className=" text-mob-heading md:text-[30px] font-plus-jakarta-sans">
                        OUR PROJECTS
                    </h1>
                </div>
                <div className="space-y-20">
                    {projectList?.map((project, idx) => (
                        <div key={idx} className="space-y-7">
                            <h1 className="text-mob-subheading font-medium">
                                {project.type}
                            </h1>
                            {project?.cards?.map((card, index) => (
                                <ProjectCard card={card} key={index} />
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default page;
