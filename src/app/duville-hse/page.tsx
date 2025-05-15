"use client";
import Image from "next/image";
import React from "react";
import Footer from "../common/Footer/Footer";
import Navbar from "../components/LandingPage/Header/Navbar";
import HscCard from "../components/Hse/HseCard";
import { ICard } from "../utils/interface/HscPage/IHscCard";
import { imageKitLoader } from "../utils/ImageKitLoader";

const page = () => {
    const data = [
        {
            heading: "HEALTH",
            safety: {
                title: " Occupational health and safety (OHS)",
                details:
                    "Duville Engineering prioritizes the implementation of OHS measures to safeguard the health of its workforce. This includes providing and ensuring the proper use of personal protective equipment (PPE), conducting regular health assessments, Alcohol Testing and training programs to enhance awareness.",
                img: "/HSC/Occupational-health-01.png",
            },
            hazardousManagment: {
                title: "Hazardous Materials Management",
                details:
                    " Duville Engineering is committed to responsible handling, storage, and disposal of hazardous materials commonly used in construction to ensure that the workers and the environment are protected from potential health risks associated with these materials.",
                img: "/HSC/Hazardous-M-management-01.png",
            },
            wellness: {
                title: "Wellness Programs",
                details:
                    "Duville Engineering routinely implements wellness initiatives to ensure the well-being of the labourers on site.",
                img: "/HSC/Wellness-programs-01.png",
            },
        },
        {
            heading: "SAFETY",
            safety: {
                title: "Training",
                details:
                    "Duville Engineering ensures that all labours go through adequate training for safety in the awareness and usage of materials, machinery, assembling & dismantling of tools, mock drills etc",
                img: "/HSC/Training-01.png",
            },
            hazardousManagment: {
                title: "Fall Protection",
                details:
                    "In the context of operational risk at the construction site, Duville Engineering ensures robust fall protection measures which involve the installation of safety barriers, nets, and the implementation of personal fall arrest systems to prevent accidents.",
                img: "/HSC/Fall-protection-01.png",
            },
            wellness: {
                title: "Equipment Safety",
                details:
                    " Duville Engineering ensures that all machinery and equipment deployed at the construction site are inspected and maintained to adhere to safe operations and to ensure that stringent safety standards are met.",
                img: "/HSC/Equipment-safety-01.png",
            },
            EmergencyResponse: {
                title: "Emergency Response Planning",
                details:
                    " Duville Engineering has well-orchestrated emergency response plans in place which include evacuation procedures, first aid protocols, and firefighting measures to address any unforeseen emergencies on construction sites.",
                img: "/HSC/Emergency-response-01.png",
            },
        },
        {
            heading: "ENVIRONMENT",
            safety: {
                title: "Waste Management",
                details:
                    "Duville Engineering focuses on efficient waste management practices, including recycling and responsible disposal of construction waste minimizing the environmental impact associated with construction activities.",
                img: "/HSC/Waste-management-01.png",
            },
            hazardousManagment: {
                title: "Sustainable Construction Practices",
                details:
                    "Duville Engineering deploys sustainable design, use of eco-friendly materials, energy-efficient systems, construction practices and renewable energy sources to reduce the environmental footprint of its projects.",
                img: "/HSC/Sustainable-construction-01.png",
            },
            wellness: {
                title: "Landscaping and Biodiversity",
                details:
                    " Duville Engineering prioritizes the preservation of biodiversity involving planting of native vegetation, creating green spaces, and incorporating eco-friendly landscaping practices. ",
                img: "/HSC/Landscaping-biodiversity-01.png",
            },
        },
    ];
    return (
        <main className="w-full max-w-[100vw] overflow-x-hidden ">
            {/* section 1 */}

            <section className="relative z-20 w-full bg-black opacity-[0.9] ">
                <Navbar />
                <Image
                    loader={imageKitLoader}
                    src={"HSC/hsc-header.png"}
                    alt="hsc header"
                    width={1100}
                    height={600}
                    priority
                    className="ml-[21%] w-[78%]  max-h-[90vh] fill-white"
                />
                {/* <div className='absolute top-0 bg-black opacity-[0.8] w-full h-[750px]'></div> */}

                <div className="absolute top-[50%] md:top-[50%]  left-[21%] md:left-[20%] text-white text-mob-banner-heading  md:font-medium md:text-[60px]   font-plus-jakarta-sans space-y-0 ">
                    <h1 className="-m-1"> Benchmarking</h1>
                    <h1 className="-m-1">Industry</h1>
                    <h1 className=" ml-1 md:ml-6">Standards</h1>
                </div>

                <div className=" absolute  h-[170px] md:h-[390px] w-[6px] md:w-[12px]   left-[20%] top-[47%] md:-[50%] bg-[#FF0000]"></div>
            </section>

            {/* section 2 */}
            <section className="relative w-full mt-10 md:mt-auto  ">
                <div className="w-[90%] mx-auto md:w-[98%] flex  flex-col md:flex-row justify-around  md:ml-auto">
                    <div className=" flex flex-col justify-around">
                        <h3 className="text-mob-banner-heading md:text-[51px] text-[#FF0000] font-lato md:ml-auto mr-12">
                            02
                        </h3>
                        <div className=" md:text-left">
                            <h1 className="text-mob-heading md:text-page-heading text-[#FF0000] font-bold ">
                                HSE
                            </h1>
                            <div className="text-sm md:text-base font-plus-jakarta-sans  ml-1 ">
                                <p className="font-semibold">
                                    Mock Drills - Training:
                                </p>
                                <p>A. accident prevention</p>
                                <p>B. compliance to labour laws</p>
                            </div>
                        </div>
                    </div>
                    <Image
                        loader={imageKitLoader}
                        src={"HSC/hsc-section2.png"}
                        alt="engineer image"
                        height={535}
                        width={962}
                        className=" mt-5"
                    />
                </div>
                {/* vertical arrow */}
                <Image
                    loader={imageKitLoader}
                    src={"HSC/hsc-verticalArrow.png"}
                    height={50}
                    width={50}
                    alt="hsc-verticalArrow"
                    className="absolute -top-3 left-[18.9%] hidden md:block"
                />
            </section>

            {/* section 3 */}
            <section className="w-[95%] mx-auto flex flex-col md:flex-row  gap-8 md:ml-auto my-11">
                <div>
                    <Image
                        loader={imageKitLoader}
                        src={"HSC/hsc-safety.png"}
                        alt="hsc-safety"
                        width={413}
                        height={275}
                        className="hidden md:block"
                    />
                    <div className=" mx-auto md:w-[413px] p-1 md:p-8 font-lato text-[16px] space-y-2 md:space-y-5  md:pl-36 ">
                        <p className="text-sm md:text-base   md:text-right leading-link-text font-plus-jakarta-sans">
                            Duville Estates places a very high priority on
                            standards being set and adhered to on the Health,
                            Safety & the Environment at any construction site at
                            Duville Estates.
                        </p>
                        <p className=" text-sm md:text-base md:text-right leading-link-text font-plus-jakarta-sans">
                            Of paramount importance is the attention paid to the
                            training of workers on site and even the specific
                            motivational interventions to keep the momentum of
                            activity on site.
                        </p>
                    </div>
                </div>

                <div className="space-y-8 md:space-y-16 md:mt-5">
                    {data?.map((card, idx) => (
                        <HscCard card={card as ICard} idx={idx} key={idx} />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default page;
