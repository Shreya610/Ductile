import React, { useState, useEffect } from "react";
import Navbar from "../LandingPage/Header/Navbar";
import Image from "next/image";
import Section from "../Engineer/Section";
import Footer from "../../common/Footer/Footer";
import CommunityCarousel from "./carousel/Carousel";
import SustainableSection from "./SustainableSection";
import { imageKitLoader } from "../../utils/ImageKitLoader";

interface IheadingData {
  title: string;
  description: string;
  createdBy: string;
}

interface section {
  data: string[];
  img: string;
  id: number;
}

interface IPROPS {
  subDetails: { title?: string; section1?: section; section2?: section }[];
  BgImage: string;
  BgImageMob: string;
  BgImage2: string;
  image: string[];
  mainImg: string;
  heading1: string;
  heading2?: string;
  sectionHeading: string;
  cardHeading: string;
  headingData?: IheadingData;
}
const CommunityPageSustainable: React.FC<IPROPS> = (props) => {
  const {
    subDetails,
    BgImage,
    BgImageMob,
    BgImage2,
    image,
    mainImg,
    heading1,
    heading2,
    cardHeading,
    headingData,
    sectionHeading,
  } = props;

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
    <div className="w-full  space-y-10 md:space-y-20 font-plus-jakarta-sans max-w-[100vw] overflow-x-hidden">
      <div className=" relative w-full ">
        <div
          className="w-screen h-screen "
          style={{
            backgroundImage: `${
              width >= 640
                ? `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Community/sustainability/banner.jpg?updatedAt=1707285138700)`
                : `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Community/sustainability/banner_mob.jpg?updatedAt=1707285138899)`
            }`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Navbar />
        </div>
        <div className="absolute top-[80%] left-[3%] ">
          <div className="w-full z-10   text-white font-plus-jakarta-sans font-extrabold text-mob-banner-heading uppercase md:capitalize md:text-[78px]  ">
            {heading1 === "Labour Training" ? (
              <h1 className="text-slate-600 "> {heading1}</h1>
            ) : (
              <h1>{heading1}</h1>
            )}
            <h1>{heading2}</h1>
          </div>
          <div className="space-y-1 text-white z-50">
            <h3 className="font-plus-jakarta-sans text-sm md:text-card-heading font-semibold">
              {headingData?.title}
            </h3>
            <h6 className="w-[50%] md:w-[70%] text-xs md:text-base font-medium md:leading-link-text md:ml-1">
              {" "}
              {headingData?.description}
            </h6>
            {headingData?.createdBy && (
              <p className="font-medium text-sm md:text-base font-plus-jakarta-sans">
                - {headingData?.createdBy}
              </p>
            )}
          </div>
        </div>
        <Image
          loader={imageKitLoader}
          src={BgImage2}
          width={300}
          height={400}
          alt="banner"
          className=" absolute right-5 bottom-0 md:right-14 w-[100px]  md:w-[250px] h-[200px] md:h-[500px]"
        />
      </div>

      {/* Deatails Secttion */}
      <div className="flex flex-col  md:flex-row justify-center md:justify-evenly items-start w-11/12 md:w-full mx-auto md:mx-0 gap-8 md:gap-4">
        <div
          className={`  ${
            subDetails?.length && ""
          }    w-full  md:w-11/12 h-fit  mb-6  space-y-10 `}
        >
          {subDetails &&
            subDetails?.map((section, idx) => (
              <SustainableSection key={idx} section={section} />
            ))}
        </div>
      </div>

      {/* images section */}
      {/* <div className="w-11/12 mx-auto space-y-5">
        <h1 className="uppercase font-bold text-red text-[17px]  md:text-card-heading md:ml-5">
          {cardHeading}
        </h1>

        <CommunityCarousel images={image} />
      </div> */}
      <Footer />
    </div>
  );
};

export default CommunityPageSustainable;
