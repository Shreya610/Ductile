import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { imageKitLoader } from "../../utils/ImageKitLoader";

const CardSection = () => {
    const [activeCard, setActiveCard] = useState<string>("ongoing");

    return (
        <div className="md:mt-32 mt-10">
            <div className="flex flex-col md:flex-row justify-between w-[95%] mx-auto md:max-w-7xl ">
                <div className="flex gap-5 items-center">
                    <div className="h-14 md:h-9 w-1 md:w-2 bg-red"></div>
                    <h2 className="uppercase text-mob-heading md:text-section-heading font-medium">
                        DESIGN MANIFESTATION <br className="md:hidden" /> IN
                        REAL ESTATE
                    </h2>
                </div>
                <Link
                    href="/duville-projects"
                    className="hidden md:block text-right md:text-left mr-3 md:mr-0"
                >
                    View All
                </Link>
            </div>

            <div className="flex w-[95%]  md:max-w-7xl mx-auto gap-8 my-8">
                <button
                    className={`uppercase border-b-2 pb-2 hover:border-crimson-200 text-[16px] font-light leading-[20px] ${
                        activeCard === "ongoing"
                            ? "border-crimson-200"
                            : "border-transparent"
                    }`}
                    onClick={() => setActiveCard("ongoing")}
                >
                    Ongoing
                </button>
                <button
                    className={`uppercase border-b-2 pb-2 hover:border-crimson-200 text-[16px] font-light leading-[20px] ${
                        activeCard === "completed"
                            ? "border-crimson-200"
                            : "border-transparent"
                    }`}
                    onClick={() => setActiveCard("completed")}
                >
                    Completed
                </button>
                <Link
                    href="/duville-projects"
                    className="md:hidden absolute right-0 mr-5 text-crimson-200"
                >
                    View All
                </Link>
            </div>

            {activeCard === "ongoing" ? (
                <div className=" w-[95%] md:max-w-7xl mx-auto mt-8 flex flex-col md:flex-row  gap-7 md:gap-4">
                    <Link href={"/riverdale-grand"} className="text-sm">
                        <div className="bg-[#ECEDEF] max-w-[428px]">
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    height={800}
                                    width={800}
                                    src={"Home/RIVERDALEGRAND.png"}
                                    alt="Cover Image"
                                />
                            </div>
                            <div className="px-6 pt-10 flex flex-col gap-2">
                                <p className="text=[18px] font-semibold">
                                    RIVERDALE GRAND
                                </p>
                                <p>3 & 4.5 BHK Homes</p>
                                <hr />
                            </div>
                            <div className="px-6 pt-2 flex flex-col gap-2">
                                <div className="flex flex-row justify-between pr-3 ">
                                    <div className="flex flex-col ">
                                        <div className="font-semibold">
                                            Central Kharadi, Pune
                                        </div>
                                        <div className="font-normal text-[15px] text-[#666]">
                                            Riverdale Riverside Road{" "}
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="px-6 py-6 text-[#ED1C26] uppercase text-lg font-semibold leading-[25px]">
                                See Details
                            </div>
                        </div>
                    </Link>

                    <Link href={"/riverdale-grove"} className="text-sm">
                        <div className="bg-[#ECEDEF] max-w-[428px]">
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    height={800}
                                    width={800}
                                    src={"Home/Riverdale-Grove.png"}
                                    alt="Cover Image"
                                />
                            </div>
                            <div className="px-6 pt-10 flex flex-col gap-2">
                                <p className="text=[18px] font-semibold">
                                    RIVERDALE GROVE
                                </p>
                                <p>2,3 & 3.5 BHK Homes</p>
                                <hr />
                            </div>
                            <div className="px-6 pt-2 flex flex-col gap-2">
                                <div className="flex flex-row justify-between pr-3">
                                    <div className="flex flex-col">
                                        <div className="font-semibold">
                                            Central Kharadi, Pune
                                        </div>
                                        <div className="font-normal text-[15px] text-[#666]">
                                            Riverdale Riverside Road
                                        </div>
                                    </div>
                                    {/* <div className="flex flex-col">
                  <div className="font-semibold">Jan 2026</div>
                  <div className="font-normal text-[15px] text-[#666]">
                    Possession by
                  </div>
                </div> */}
                                </div>
                                <hr />
                            </div>
                            <div className="px-6 py-6 text-[#ED1C26] uppercase text-lg font-semibold leading-[25px]">
                                See Details
                            </div>
                        </div>
                    </Link>
                    <Link href={"/melava-avenue"} className="text-sm">
                        <div className="bg-[#ECEDEF] max-w-[428px]">
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    height={800}
                                    width={800}
                                    src={"Home/MILAVA-HIGHSTREET.png"}
                                    alt="Cover Image"
                                />
                            </div>
                            <div className="px-6 pt-10 flex flex-col gap-2">
                                <p className="text=[18px] font-semibold">
                                    MELAVA HIGHSTREET
                                </p>
                                <p>Retail Highstreet Showrooms</p>
                                <hr />
                            </div>
                            <div className="px-6 pt-2 flex flex-col gap-2">
                                <div className="flex flex-row justify-between pr-3">
                                    <div className="flex flex-col">
                                        <div className="font-semibold">
                                            Central Kharadi, Pune
                                        </div>
                                        <div className="font-normal text-[15px] text-[#666]">
                                            Riverdale Riverside Road
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="px-6 py-6 text-[#ED1C26] uppercase text-lg font-semibold">
                                See Details
                            </div>
                        </div>
                    </Link>
                </div>
            ) : (
                <div className="w-[95%] md:max-w-7xl mx-auto mt-8 flex flex-col md:flex-row  gap-7 md:gap-4">
                    {/* Heights  */}
                    <Link href={"/riverdale-heights"} className="text-sm">
                        <div className="bg-[#ECEDEF] max-w-[428px]">
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    height={800}
                                    width={800}
                                    src={
                                        "Design Manifestation/RivedaleHeights.jpeg"
                                    }
                                    alt="Cover Image"
                                    className="h-[320px]"
                                />
                            </div>
                            <div className="px-6 pt-10 flex flex-col gap-2">
                                <p className="text=[18px] font-semibold">
                                    RIVERDALE HEIGHTS
                                </p>
                                <p>2 BHK Homes</p>
                                <hr />
                            </div>
                            <div className="px-6 pt-2 flex flex-col gap-2">
                                <div className="flex flex-row justify-between pr-3 ">
                                    <div className="flex flex-col ">
                                        <div className="font-semibold">
                                            Central Kharadi, Pune
                                        </div>
                                        <div className="font-normal text-[15px] text-[#666]">
                                            Riverdale Riverside Road{" "}
                                        </div>
                                    </div>
                                    <div className="flex flex-col ">
                                        <div className="font-semibold">
                                            Completed
                                        </div>
                                        <div className="font-normal text-[15px] text-[#666666]">
                                            Status
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="px-6 py-6 text-[#ED1C26] uppercase text-lg font-semibold">
                                See Details
                            </div>
                        </div>
                    </Link>

                    {/* Residences  */}
                    <Link href={"/riverdale-residences"} className="text-sm">
                        <div className="bg-[#ECEDEF] max-w-[428px]">
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    height={800}
                                    width={800}
                                    src={
                                        "Design Manifestation/RivedaleResidences.jpg"
                                    }
                                    alt="Cover Image"
                                    className="h-[320px]"
                                />
                            </div>
                            <div className="px-6 pt-10 flex flex-col gap-2">
                                <p className="text=[18px] font-semibold uppercase">
                                    Riverdale Residences
                                </p>
                                <p>3 BHK Homes</p>
                                <hr />
                            </div>
                            <div className="px-6 pt-2 flex flex-col gap-2">
                                <div className="flex flex-row justify-between pr-3">
                                    <div className="flex flex-col">
                                        <div className="font-semibold">
                                            Central Kharadi, Pune
                                        </div>
                                        <div className="font-normal text-[15px] text-[#666]">
                                            Riverdale Riverside Road
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-semibold">
                                            Completed
                                        </div>
                                        <div className="font-normal text-[15px] text-[#666]">
                                            Status
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="px-6 py-6 text-[#ED1C26] uppercase text-lg font-semibold">
                                See Details
                            </div>
                        </div>
                    </Link>

                    <Link href={"/riverdale-suites"} className="text-sm">
                        {/* Suites  */}
                        <div className="bg-[#ECEDEF] max-w-[428px]">
                            <div>
                                <Image
                                    loader={imageKitLoader}
                                    height={800}
                                    width={800}
                                    src={
                                        "Design Manifestation/Riverdale Suites.png"
                                    }
                                    alt="Cover Image"
                                    className="h-[320px]"
                                />
                            </div>

                            <div className="px-6 pt-10 flex flex-col gap-2">
                                <p className="text=[18px] font-semibold">
                                    RIVERDALE SUITES
                                </p>
                                <p>Compact Urbane Condominiums</p>
                                <hr />
                            </div>

                            <div className="px-6 pt-2 flex flex-col gap-2">
                                <div className="flex flex-row justify-between pr-3">
                                    <div className="flex flex-col">
                                        <div className="font-semibold">
                                            Central Kharadi, Pune
                                        </div>
                                        <div className="font-normal text-[15px] text-[#666]">
                                            Riverdale Riverside Road
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-semibold">
                                            Completed
                                        </div>
                                        <div className="font-normal text-[15px] text-[#666]">
                                            Status
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            <div className="px-6 py-6 text-[#ED1C26] uppercase text-lg font-semibold">
                                See Details
                            </div>
                        </div>
                    </Link>
                </div>
            )}

            {/* Duville Engineering Card  */}
            <div className="w-[95%] md:max-w-7xl mx-auto md:mt-20 mt-10">
                <div className="flex gap-5 items-center">
                    <div className="h-7 md:h-9 w-1 md:w-2 bg-red"></div>
                    <h2 className="uppercase text-mob-heading md:text-section-heading font-medium">
                        DUVILLE ENGINEERING
                    </h2>
                </div>

                <div className="flex flex-col-reverse md:flex-row mt-20 md:mt-8">
                    <div className="flex flex-col items-start justify-center gap-1 md:gap-4  bg-[#ECEDEF] py-4 md:py-0 px-4 md:px-12 -mt-11  md:mt-0 ">
                        <div className="text-mob-subHeading md:text-[22px] font-medium leading-[22px]">
                            RESIDENTIAL COMMUNITY DESIGN{" "}
                        </div>
                        <div className="text-[#6C6A6A] text-[14px] font-normal leading-[22px]">
                            We ensure that the community design has a sense of
                            authenticity in its spatial form.
                        </div>
                        <Link
                            href="duville-engineering"
                            className="text-[#ED1C26] text-[12px] font-semibold leading-[25px]"
                        >
                            READ MORE
                        </Link>
                    </div>
                    <div className="mb-[90px]">
                        <Image
                            loader={imageKitLoader}
                            height={800}
                            width={800}
                            src={"Fourth.png"}
                            alt="Cover Image"
                            className="scale-y-150"
                        />
                    </div>
                </div>
            </div>

            <div className="w-[95%] md:max-w-7xl mx-auto mt-10 md:h-96  flex flex-col md:flex-row gap-10">
                <div
                    style={{
                        backgroundImage: `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Fifth.png?updatedAt=1707284444954)`,
                    }}
                    className="-z-0 w-full h-full min-h-[400px] md:min-h-0 bg-no-repeat border-solid border border-[#DFDEDE] bg-right"
                >
                    <div className="flex flex-col gap-2 p-4 md:p-6 w-[60%]">
                        <div className=" md:text-[18px]  font-medium md:font-semibold uppercase">
                            Construction Staging
                        </div>
                        <div className="text-[#6C6A6A] text-sm md:text-[16px] w-[65%] ">
                            We believe in protecting the local environment to
                            preserve the ecosystem.
                        </div>
                        <Link
                            href="duville-engineering"
                            className="text-[#ED1C26] text-[12px] font-semibold leading-[25px]"
                        >
                            READ MORE
                        </Link>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/frame@2x.png?updatedAt=1707284450995)`,
                        backgroundPosition: "100px 130px",
                        backgroundSize: "300px",
                    }}
                    className="-z-0 w-full h-full min-h-[400px] md:min-h-0 bg-no-repeat border-solid border border-[#DFDEDE] bg-bottom md:bg-right"
                >
                    <div className="flex flex-col gap-2 p-4 md:p-6">
                        <div className=" md:text-[18px]  font-medium md:font-semibold uppercase">
                            ENVIRONMENT
                        </div>
                        <div className="text-[#6C6A6A] text-sm md:text-[16px] w-[65%] md:w-full">
                            At a technical level, we ensure that there is
                            minimization of solar heat gain.
                        </div>
                        <Link
                            href="duville-engineering"
                            className="text-[#ED1C26] text-[12px] font-semibold leading-[25px]"
                        >
                            READ MORE
                        </Link>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Seventh.png?updatedAt=1707284492207)`,
                    }}
                    className="-z-0 w-full h-full min-h-[400px] md:min-h-0 bg-no-repeat border-solid border border-[#DFDEDE]  bg-bottom"
                >
                    <div className="flex flex-col gap-2 p-4 md:p-6">
                        <div className=" md:text-[18px]  font-medium md:font-semibold uppercase">
                            MATERIAL USAGE - GLASS
                        </div>
                        <div className="text-[#6C6A6A] text-sm md:text-[16px] w-[65%] md:w-full">
                            We ensure that the usage of glass helps primarily in
                            the utility conditions within the apartment.
                        </div>
                        <Link
                            href="duville-engineering"
                            className="text-[#ED1C26] text-[12px] font-semibold leading-[25px]"
                        >
                            READ MORE
                        </Link>
                    </div>
                </div>
            </div>
            {/* ---------------------------------------------------------------- */}

            {/* Design Thinking Section  */}
            <div className="w-[95%] md:w-full md:mt-32 md:max-w-7xl mx-auto mt-10">
                <div className="border-l-4 md:border-l-8 border-crimson-200 md:pl-[33px] pl-[20px]">
                    <div className="text-[#ED1C26] md:text-[16px] text-[15px]">
                        TO BUILD IS TEMPORARY | TO CREATE IS FOREVER
                    </div>
                    <div className="text-mob-heading md:text-section-heading font-medium">
                        DESIGN THINKING IS A DERIVATIVE OF THE BUSINESS IDEOLOGY
                    </div>
                </div>

                {/* <div className="flex gap-5 items-center">
          <div className="h-32 md:h-24  w-1 md:w-2 bg-red"></div>
          <div>
            <p className="text-[#ED1C26] text-[15px] md:text-[16px] "> TO BUILD IS TEMPORARY | TO CREATE IS FOREVER</p>
            <p className="uppercase text-mob-heading md:text-section-heading font-medium">
              DESIGN THINKING IS A DERIVATIVE OF THE BUSINESS IDEOLOGY
            </p>
          </div>
        </div> */}

                <div className="mt-10 flex flex-col md:flex-row gap-9 md:gap-6">
                    <div className="flex flex-col gap-10 border border-solid border-[#DFDEDE] ">
                        <div className="flex flex-col gap-2 px-4 md:px-8 py-4">
                            <div className="text-[18px] font-medium md:font-semibold leading-[25px]">
                                THE DESIGN <br className="hidden md:block" />
                                IDEOLOGY
                            </div>
                            <div className="normal-case text-[14px] text-[#6C6A6A] leading-link-text">
                                We believe that the final design must meet,
                                without debate, the functional as well as the
                                emotional needs of the end user.
                            </div>
                            <Link
                                href={"/design-thinking"}
                                className="text-[#ED1C26] text-link-text font-semibold uppercase leading-link-text"
                            >
                                See Details
                            </Link>
                        </div>
                        <div className="mx-auto  overflow-hidden md:pt-5">
                            <Image
                                loader={imageKitLoader}
                                height={800}
                                width={800}
                                src={"Design-Thinking/Design-01.jpg"}
                                alt="cover image"
                                className="scale-y-150"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-10 border border-solid border-[#DFDEDE]  bg-[#EDEDED]">
                        <div className="flex flex-col gap-2 px-4 md:px-8 py-4">
                            <div className="text-[18px] font-medium md:font-semibold leading-[25px]">
                                METHODOLOGY TO DESIGN BORROWING
                            </div>
                            <div className="text-[14px] text-[#6C6A6A] leading-link-text">
                                It is important to determine, research & execute
                                customer requirements in terms of acceptable
                                sizes and specifications.
                            </div>
                            <Link
                                href={"design-thinking"}
                                className="text-[#ED1C26] text-link-text font-semibold uppercase leading-link-text"
                            >
                                See Details
                            </Link>
                        </div>
                        <div className="mx-auto pt-8 w-full h-full overflow-hidden">
                            <Image
                                loader={imageKitLoader}
                                height={800}
                                width={800}
                                src={"Design-Thinking/Design-02.jpg"}
                                alt="cover image"
                                className="scale-125"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-10 border border-solid border-[#DFDEDE] ">
                        <div className="flex flex-col gap-2 px-4 md:px-8 py-4">
                            <div className="text-[18px] font-medium md:font-semibold leading-[25px]">
                                MANIFESTATION OF DESIGN THROUGH THE RESIDENTIAL
                                PROJECTS
                            </div>
                            <div className="text-[14px] text-[#6C6A6A] leading-link-text">
                                It is not just the beauty of the building that
                                one must admire, it is the natural daylight &
                                cross ventilation.
                            </div>
                            <Link
                                href={"/design-thinking"}
                                className="text-[#ED1C26] text-link-text font-semibold uppercase leading-link-text"
                            >
                                See Details
                            </Link>
                        </div>
                        <div className="mx-auto pt-6">
                            <Image
                                loader={imageKitLoader}
                                width={800}
                                height={800}
                                src={"Design-Thinking/Design-03.jpg"}
                                alt="cover image"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-10 border border-solid border-[#DFDEDE]  bg-[#EDEDED] ">
                        <div className="flex flex-col gap-2 px-8 py-4">
                            <div className="text-[18px] font-semibold leading-[25px]">
                                SUBSTANTIATION & PROOF OF DESIGN
                            </div>
                            <div className="text-[14px] text-[#6C6A6A] leading-link-text">
                                We were left amazed on seeing the reflection of
                                the clouds in the sky over the glass curtain
                                walls of the building.
                            </div>
                            <Link
                                href={"/design-thinking"}
                                className="text-[#ED1C26] text-link-text font-semibold uppercase leading-link-text"
                            >
                                See Details
                            </Link>
                        </div>
                        <div className="mx-auto md:pt-10 h-full scale-y-110">
                            <Image
                                loader={imageKitLoader}
                                height={800}
                                width={800}
                                src={"Design-Thinking/Design-04.jpg"}
                                alt="cover image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSection;
