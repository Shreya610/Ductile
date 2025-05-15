import React, { useEffect, useState } from "react";
import Navbar from "../LandingPage/Header/Navbar";
import { section } from "../../utils/interface/EngineerPage/section";
import Image from "next/image";
import Section from "../Engineer/Section";
import Footer from "../../common/Footer/Footer";
import CommunityCarousel from "./carousel/Carousel";
import { imageKitLoader } from "../../utils/ImageKitLoader";

interface IheadingData {
  title: string;
  description: string;
  createdBy: string;
}

interface IPROPS {
  subDetails: section[];
  BgImage: string;
  BgImageMob: string;
  BgImage2: string;
  mainImg: string;
  image: string[];
  heading1: string;
  heading2?: string;
  sectionHeading: string;
  headingData?: IheadingData;
  cardHeading?: string;
}
const CommunityPage: React.FC<IPROPS> = (props) => {
  const {
    subDetails,
    BgImage,
    BgImageMob,
    BgImage2,
    mainImg,
    image,
    heading1,
    heading2,
    headingData,
    sectionHeading,
    cardHeading,
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
    <div className="w-full  space-y-10 md:space-y-32 font-plus-jakarta-sans max-w-[100vw]   ">
      <div className=" relative w-full ">
        <div
          className="w-screen h-screen md:h-screen"
          style={{
            backgroundImage: `${
              width >= 640 ? `url(${BgImage})` : `url(${BgImageMob})`
            }`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Navbar />
        </div>
        <div className="absolute top-[80%] md:top-[65%] left-[5%]">
          <div className="w-[70%] z-10   text-white font-plus-jakarta-sans font-extrabold md:leading-[65px] text-mob-banner-heading uppercase md:capitalize md:text-[64px]  ">
            {heading1 === "Labour Training" ? (
              <h1 className="text-white-600 "> {heading1}</h1>
            ) : (
              <h1 className="text-white-600 ">{heading1}</h1>
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
      <div className="flex flex-col  md:flex-row justify-center md:justify-between items-start w-11/12 mx-auto md:mx-auto gap-8 md:gap-4">
        <div className="space-y-4 border h-fit border-slate-200 w-full md:w-1/2 mx-auto md:mx-0">
          <Image
            loader={imageKitLoader}
            height={1000}
            width={1000}
            alt={heading1}
            src={mainImg}
            className="  w-full border-0  object-cover max-h-[300px] min-h-[300px] "
            loading="lazy"
          />
          <h3 className="p-3 font-medium text-black uppercase">
            {sectionHeading}
          </h3>
        </div>
        <div
          className={`  ${
            subDetails?.length && "border"
          }  rounded-md border-slate-300 w-full  md:w-[100%] min-h-full  mb-6`}
        >
          {subDetails &&
            subDetails?.map((section, idx) => (
              <Section section={section} key={idx} />
            ))}
        </div>
      </div>

      {/* images section */}
      <div className="w-11/12 mx-auto space-y-5">
        <h1 className="uppercase w-full mx-auto font-bold text-mob-card-heading md:text-card-heading text-crimson-200 pl-3 md:pl-1">
          {cardHeading}
        </h1>
        {/* <div className="grid sm:grid-cols-2 place-content-center md:grid-cols-3 xl:grid-cols-4 gap-10">
          {image?.map((src, idx) => (
            <img src={src} className="object-cover" />
          ))}
        </div> */}
        <CommunityCarousel images={image} />
      </div>

      <Footer />
    </div>
  );
};

export default CommunityPage;
