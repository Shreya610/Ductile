"use client";

import React, { useEffect, useState } from "react";
import Footer from "../common/Footer/Footer";
import Image from "next/image";
import Navbar from "../components/LandingPage/Header/Navbar";
import EngineerCard from "../components/Engineer/EngineerCard";
import EngineerDetails from "../components/Engineer/EngineerDetails";
import { engineerCard } from "../utils/interface/EngineerPage/engineerDetails";
import { imageKitLoader } from "../utils/ImageKitLoader";
import { useSearchParams } from "next/navigation";

const EngineerPage = () => {
    const [showDetails, setShowDetails] = useState<string>("");

    const searchParams = useSearchParams();

    console.log(searchParams);
    const scrollToId = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (searchParams?.get("card") == "true") {
            scrollToId("EngineerCards");
        }
    }, []);

    console.log("searhc params ,", searchParams);
    const engineerCard: engineerCard[] = [
        {
            heading1: "RESIDENTIAL COMMUNITY DESIGN",
            heading2: "",
            paragraph: "We ensure that the community design has a sence of authenticity in its spatial design",
            img: "engineercard1.png",

            details: [
                "Recreation greens and amenities such as parks, sports facilities, and fitness areas promote physical activity and well-being among residents. Access to green spaces has been linked to improved mental health and stress reduction.",
                "A mix of amenities, such as a clubhouse, swimming pool, play areas, and sports facilities, offers residents a variety of recreational opportunities, catering to different interests and age groups.",
                "Adequate parking spaces help manage vehicle traffic within the residential tower, preventing congestion and ensuring a smoother flow of traffic. This is particularly important in densely populated areas.",
                "Tree plantation belts and green spaces can act as natural barriers, helping to reduce noise pollution from surrounding areas and contributing to a quieter and more peaceful residential environment.",
                "Residential towers with well-planned and maintained amenities, recreational spaces.",
            ],

            subDetails: [
                {
                    title: "NATURAL DAYLIGHT ",
                    data: [
                        "Studies have shown that natural daylight positively influences cognitive performance, concentration, and productivity, making it beneficial for home offices and study areas within residential spaces.",
                        "While excessive solar heat gain can be a concern, well-designed daylighting strategies can control heat gain, ensuring a comfortable indoor temperature without relying solely on mechanical systems.",
                        "Exposure to nature through daylight supports biophilic design principles, which emphasize the innate human connection to nature and its positive impact on well-being.",
                        "Maximizing natural daylight reduces the need for artificial lighting during daylight hours, leading to lower electricity consumption and cost savings.",
                        "Natural daylight provides a softer, more evenly distributed light that reduces eye strain and promotes visual comfort compared to artificial lighting.",
                    ],
                },
                {
                    title: "CROSS VENTILATION ",
                    data: [
                        "Cross ventilation facilitates the exchange of indoor and outdoor air, helping to remove pollutants and bring in fresh air. This is particularly beneficial for reducing indoor air pollution and creating a healthier living environment.",
                        "The flow of air through a building helps regulate indoor temperatures by dissipating heat and providing cooling. This natural ventilation method can be especially effective in moderate climates, reducing the reliance on artificial cooling systems.",
                        "By harnessing natural airflow, cross ventilation reduces the need for mechanical ventilation systems, such as air conditioning and exhaust fans. This, in turn, leads to energy savings and lower utility bills.",
                        "Good cross ventilation helps in controlling indoor humidity levels. Proper air circulation prevents the buildup of moisture, which can contribute to issues like mold growth and mildew.",
                    ],
                },
                {
                    title: "UNIFORM FLOOR LEVEL",
                    data: [
                        "A uniform floor level ensures a consistent layout across all floors, making it easier for residents and visitors to navigate the building. This predictability enhances the overall user experience and reduces the likelihood of confusion.",
                        "In the event of an emergency, such as a fire or evacuation, uniform floor levels simplify the process of exiting the building. Residents can move quickly and efficiently without encountering unexpected changes in floor elevation.",
                        "A uniform floor level provides flexibility in furniture arrangement, allowing residents to easily plan and rearrange their living spaces without constraints posed by uneven floors.",
                        "A consistent floor level accommodates the needs of aging residents who may face challenges associated with stairs or uneven surfaces. It supports age-friendly design principles, ensuring a comfortable living environment for all residents.",
                        "A uniform floor level contributes to visual continuity and a harmonious aesthetic throughout the residential tower. This design approach can create a more appealing and cohesive living space.",
                    ],
                },
            ],
        },
        {
            heading1: "CONSTRUCTION STAGING",
            heading2: "DESIGN",
            paragraph: "We believe in protecting the local environment to preserve the ecosystem",
            img: "engineercard2.png",
            details: [
                "Minimizing soil erosion helps protect the local environment by preventing sediment runoff into nearby water bodies. This protects aquatic ecosystems and maintains water quality.",
                "Soil erosion can lead to sedimentation in stormwater drains, causing blockages and reducing drainage efficiency. Minimizing soil erosion during construction helps prevent these issues and ensures proper stormwater management.",
                "Sediment runoff from construction sites can negatively impact local water bodies by degrading water quality and harming aquatic life. Minimizing soil erosion helps protect nearby streams, rivers, and lakes.",
                "Construction activities often involve excavation and grading, creating slopes that are susceptible to erosion. Implementing erosion control measures stabilizes these slopes, preventing soil loss and potential landslides.",
                "Minimizing soil erosion supports the successful establishment of vegetation in landscaping efforts. Healthy plant cover helps prevent further erosion and contributes to a more sustainable and visually appealing environment.",
            ],
            subDetails: [
                {
                    title: "STORAGE & RE-USE FOR LANDSCAPING",
                    data: [
                        "Topsoil is rich in nutrients and organic matter, making it crucial for healthy plant growth. Storing and reusing excavated topsoil helps preserve its quality, providing an ideal foundation for landscaping.",
                        "Reusing excavated topsoil eliminates the need to purchase new soil or amendments for landscaping. This results in significant cost savings for the residential project, especially for large-scale landscaping initiatives.",
                        "Reusing topsoil reduces the demand for new soil resources and minimizes the environmental impact associated with soil extraction and transportation. It aligns with sustainable practices by maximizing the use of existing resources.",
                        "Topsoil contains microorganisms and beneficial organisms that contribute to soil health and biodiversity. Reusing excavated topsoil supports the conservation of these organisms, promoting a more diverse and resilient ecosystem.",
                        "Excavated topsoil provides an optimal growing medium for plants, promoting healthy root development and overall plant vitality. This contributes to the success of landscaping efforts and enhances the aesthetic appeal of the residential project",
                        "The use of topsoil with good structure and organic content helps prevent soil erosion. Properly applied topsoil acts as a protective layer, stabilizing slopes and minimizing the risk of erosion during landscaping activities.",
                        "Topsoil has good water retention properties, allowing it to hold moisture and provide a consistent water supply to plants. This is beneficial for the establishment and growth of vegetation in landscaping projects.",
                    ],
                },
                {
                    title: "REDUCTION OF AIR POLLUTION ",
                    data: [
                        "Duville Estates ensures that proper guidelines are implemented on the construction site inorder to help minimize the release of pollutants into the air, protecting the local environment and ecosystems. This contributes to the overall sustainability of the construction project",
                        "Duville Estates plans construction activities in such a manner inorder to minimize the disturbance of soil and vegetation, reducing the potential for airborne pollutants",
                        "Measures such as water spraying, dust suppressants, and covering stockpiles are implemented to minimize the generation and spread of dust.",
                    ],
                },
            ],
        },
        {
            heading1: "ENVIRONMENT ",
            paragraph: "At a technical level we ensure that there is minimization of solar heat gain",
            img: "engineercard3.png",
            details: [
                "Minimizing solar heat gain helps maintain a more consistent and comfortable indoor temperature. It prevents excessive heat buildup, reducing the need for residents to use additional cooling measures and improving overall thermal comfort.",
                "Low solar heat gain glass helps control glare by limiting the amount of direct sunlight entering the building. This creates a visually comfortable environment for residents, especially during bright and sunny days.",
                "Minimizing solar heat gain allows for ample natural light penetration without the associated heat gain. This promotes a well-lit and visually appealing interior while maintaining a comfortable indoor temperature.",
                "Low solar heat gain glass often includes features that block a significant portion of harmful ultraviolet (UV) rays. This UV protection helps prevent fading and damage to furniture, flooring, and interior finishes.",
                "Many building codes and energy standards set limits on the solar heat gain of windows and doors to ensure that buildings meet certain energy efficiency criteria. Using glass with low solar heat gain helps meet these requirements.",
                "By minimizing solar heat gain, the demand on HVAC (Heating, Ventilation, and Air Conditioning) systems is reduced. This can extend the life of the HVAC equipment and improve its overall efficiency.",
            ],

            subDetails: [
                {
                    title: "LOWER 'U' VALUE ",
                    data: [
                        "A lower U-value signifies better insulation and, consequently, reduced heat loss through the roof. This contributes to overall energy efficiency in residential buildings, as less energy is required for heating",
                        "Improved thermal performance results in lower heating costs for residents. Buildings with roofs having U-values below 1.0 W/m²K typically require less energy to maintain comfortable indoor temperatures",
                        "Enhanced insulation provided by a low U-value helps maintain more consistent indoor temperatures. Residents experience greater comfort with reduced temperature variations.",
                        "Effective insulation helps prevent condensation within the roof assembly, reducing the risk of moisture-related issues such as mold growth and structural damage.",
                        "A low U-value provides effective insulation against external temperature extremes, whether hot or cold. This insulation helps buffer the impact of external weather conditions on indoor comfort.",
                    ],
                },
            ],
        },
        {
            heading1: "MATERIAL USAGE -  ",
            heading2: "GLASS ",
            paragraph:
                "We ensure that the usage of glass helps primarily in the utility conditions within the apartment ",

            img: "engineercard4.png",
            details: [
                "The combination of high VLT and low SHGC supports daylight harvesting strategies, optimizing the use of natural light and reducing the reliance on artificial lighting during daylight hours",
                "The combination of low SHGC and low U-value contributes to a well-balanced indoor thermal environment, enhancing the overall comfort of residents throughout the year.",
                "Depending on the type of glass, high-performance options may also offer acoustic insulation benefits, reducing external noise and enhancing acoustic comfort inside residential units.",
                "The glass specifications contribute to climate-responsive design, allowing for the optimization of building performance in different climates.",
                "Using glass with these specifications aligns with green building standards, promoting sustainability by reducing energy usage and environmental impact",
                "The glass specifications help regulate temperatures year-round, providing a comfortable interior environment regardless of external weather conditions.",
            ],
        },
        {
            heading1: "CONSTRUCTION EXPERTISE",
            paragraph: "From engineering drawings, blue-prints, construction techniques & planning schedules",

            img: "Engineer/engineercard5.png",
            details: [
                "Duville Estates uses a repertoire of construction systems that deliver on structural stability and strength especially for High-Rise structures. ",
                "Duville Estates ensures that the community & the residential tower is designed with sound engineering principles. It deploys the expertise of consultants in structural analysis and design contributing to the safety &  stability of the building.",
                "Duville Estates partners with consultants of high repute that bring the best pf practices, organization, coordination, and efficiency to the construction process ensuring that the project is completed on schedule and within budget.",
                "Duville Estates uses Systems & Processes to facilitate rapid construction. Ease of assembly and disassembly becomes critical to achieving construction timelines set especially in the case of High-Rise structures. .",
                "Duville Estates deploys formwork which essentially proide a consistent and smooth finish to the building elevation. ",
                "Duville Estates believes in the simplicity of construction systems in order to primarily reduce unnecessary labour requirement on the construction sites. ",
            ],
        },
        {
            heading1: "SYSTEM FORMWORK ",
            paragraph:
                "On-ground construction management is transforming materials effectively & efficiently into the finished product ",

            img: "Engineer/engineercard6.png",
            details: [
                "The Aluform shuttering used is lightweight compared to traditional formwork materials like wood or steel. ",
                "Aluminum has a high strength-to-weight ratio despite its lightweight nature.",
                "Using of Aluform shuttering makes it easier to handle, transport, and set up on the construction site leading to increased efficiency.",
                "The reusability of aluminum formwork systems minimizes waste generation on construction sites. This aligns with sustainable construction practices by reducing the amount of material discarded after each use.",
                "Aluminum has excellent corrosion resistance, providing durability and longevity to the formwork system. This durability ensures that the material can withstand harsh environmental conditions and maintain its structural integrity over time.",
                "Aluminum formwork components are manufactured with precision, ensuring consistent dimensions and accurate formwork alignment. This helps in achieving uniformity in construction elements and reduces errors during the building process.",
            ],
        },
        {
            heading1: "ALTERNATIVE MATERIALS USAGE",
            paragraph:
                "While we design, create & build, we have in parallel the responsibility to conserve natural resources",

            img: "Engineer/engineercard7.png",
            details: [
                "Alternative materials often have a lower environmental impact compared to traditional materials which include  reduced resource extraction, lower energy consumption, and minimized pollution during the process.",
                "Utilizing alternative materials helps in conserving natural resources, as many of these materials are derived from renewable or recycled sources. This supports sustainable and responsible resource management.",
                "Some alternative materials are made from recycled or reclaimed sources, contributing to the reduction of waste in landfills. This aligns with the principles of a circular economy by promoting recycling and reuse.",
                "Alternative materials may require less energy during production compared to traditional counterparts resulting in lower greenhouse gas emissions and reduced overall energy consumption in the construction process.",
                "Alternative materials have a lower carbon footprint throughout their life cycle, from production to transportation and use crucial for mitigating climate change and promoting sustainable construction practices.",
                "The use of alternative materials in construction materials provides resilience against supply chain disruptions and reduce dependence on a limited range of materials.",
            ],
        },
        {
            heading1: "IGBC CERTIFICATION",
            paragraph:
                "Making beautiful buildings compete with  something far dearer, the practices deployed for environmental impact reduction ",

            img: "Engineer/engineercard8.png",
            details: [
                "Rapidly renewable wood & composite materials sourced from sustainable agricultural practices reduces the environmental impact associated with deforestation and supports responsible forestry practices.",
                "Rapidly renewable and recycled wood often have a lower carbon footprint compared to traditional wood sources helping mitigate the project's contribution to climate change reducing greenhouse gas emissions",
                "FSC certified wood and agri-based materials often involve local sourcing, providing economic benefits to local communities including job creation and income generation, contributing to the overall well-being of the community.",
                "Many green building standards and certifications, such as LEED (Leadership in Energy and Environmental Design), reward the use of rapidly renewable and FSC certified wood. Compliance with these standards enhances the project's environmental credentials.",
                "Consumer preferences are increasingly favoring environmentally friendly and sustainable products. Using responsibly sourced wood materials aligns with market trends and can enhance the marketability of the constructed project.",
                "Supporting sustainable wood practices contributes to the long-term economic viability of the wood industry. By investing in responsible sourcing, the construction project contributes to the resilience and stability of the wood market.",
            ],
        },
    ];
    return (
        <>
            <div className="w-full   min-h-screen max-w-[100vw] overflow-x-hidden ">
                {/* first section */}
                <div className="relative">
                    <div className="absolute top-0 w-full">
                        <Navbar />
                    </div>

                    <div className="absolute top-[40%] left-5 md:top-[40%] md:left-28 font-lato text-white z-10 ">
                        <h1 className="text-mob-heading md:text-[38px] font-lato font-light">Duville</h1>
                        <h1 className="text-mob-banner-heading md:text-[60px] tracking-wider font-bold">ENGINEERING</h1>
                    </div>
                    <div>
                        <div className="hidden md:block">
                            <Image
                                loader={imageKitLoader}
                                width={1600}
                                height={600}
                                alt="banner"
                                priority
                                src="engineer.png"
                                objectFit="cover"
                                className="  md:h-[600px] w-full   "
                            />
                        </div>
                        <div className=" md:hidden">
                            <Image
                                loader={imageKitLoader}
                                height={200}
                                width={400}
                                alt="banner"
                                priority
                                src="engineer.png"
                                objectFit="cover"
                                className=" h-[300px] md:h-[600px] w-full   "
                            />
                        </div>
                    </div>
                    <div className="top-0 absolute h-[300px] md:h-[600px] w-full object-cover bg-black  opacity-[0.6]"></div>
                    <div>
                        <div className="md:hidden">
                            <Image
                                loader={imageKitLoader}
                                className="absolute  z-10 bottom-0 right-10 md:right-14 h-[200px] md:h-[500px]"
                                height={300}
                                width={100}
                                alt="banner"
                                src="Common/banner-2.png"
                            />
                        </div>
                        <div className="hidden md:block">
                            <Image
                                loader={imageKitLoader}
                                className="absolute  z-10 bottom-0 right-10 md:right-14 h-[200px] md:h-[500px]"
                                height={300}
                                width={300}
                                alt="banner"
                                src="Common/banner-2.png"
                            />
                        </div>
                    </div>
                </div>

                {/* second section */}
                {/* <div className={`flex   flex-row  gap-6 w-full items-center  w-fit md:w-[90%] mx-auto   `}>
                    <div className="space-y-2 min-w-[35%] max-w-[35%]  ">
                        <div className="bg-green-gradien bg-black  min-w-full">
                            <img
                                alt=""
                                src={
                                    "https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Home/RIVERDALEGRAND.png?updatedAt=1707284842819"
                                }
                                className="  "
                            />
                        </div>
                    </div>

                    <div className="space-y-5   h-fit  w-[45%] ">
                        <h1 className="heading4 text-wrap font-semibold text-[18px] font-plus-jakarta-sans ">
                            New Title
                        </h1>
                        <div className="text-sm leading-5 min-h-[45%] text-slate-600 font-plus-jakarta-sans  ">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque inventore quisquam commodi
                            voluptatum odit vero aperiam incidunt ratione nemo! Beatae sit cupiditate quibusdam tempore
                            tempora rerum unde blanditiis odit delectus.
                        </div>
                    </div>
                </div> */}

                <div>
                    <img
                        src="https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Engineer/assocham%20duviile.png?updatedAt=1744717348268"
                        className="hidden sm:block"
                    />
                    <img
                        src="https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Engineer/mob.png?updatedAt=1744717917100"
                        className="sm:hidden"
                    />
                </div>

                {/* third section */}
                {!showDetails ? (
                    <div
                        id="EngineerCards"
                        className=" grid grid-cols-1    md:grid-cols-3 lg:grid-cols-4 gap-11   w-fit md:w-[90%] mx-auto  pb-10"
                    >
                        {engineerCard?.map((ele, idx) => (
                            <EngineerCard card={ele} idx={idx} key={idx} setShowDetails={setShowDetails} />
                        ))}
                    </div>
                ) : (
                    <>
                        {engineerCard
                            ?.filter((card) => card.heading1 === showDetails)
                            ?.map((card, idx) => (
                                <EngineerDetails card={card} idx={idx} setShowDetails={setShowDetails} />
                            ))}
                    </>
                )}

                <Footer />
            </div>
        </>
    );
};

export default EngineerPage;
