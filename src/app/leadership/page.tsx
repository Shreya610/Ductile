"use client";

import React, { useEffect, useState } from "react";
import Footer from "../common/Footer/Footer";
import TeamSection from "../components/TeamPage/TeamSection";
import Navbar from "../components/LandingPage/Header/Navbar";
import Image from "next/image";
import { imageKitLoader } from "../utils/ImageKitLoader";

const TeamPage = () => {
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
            width >= 640 ? `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Leadership/Leadership_banner_Image.jpg?updatedAt=1707284796176)` : `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Leadership/LeadershipBannerMob.jpg?updatedAt=1707284804175)`
          }`,
          backgroundPosition: "center",
          backgroundPositionY: "10%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
        className="relative w-full h-full"
      >
        <div>
          <Navbar />
        </div>

        <Image
        loader={imageKitLoader}
          src={"/Common/banner-2.png"}
          width={300}
          height={400}
          alt="banner"
          className=" absolute right-5 bottom-0 md:right-14 w-[100px]  md:w-[250px] h-[200px] md:h-[500px] z-0"
        />
        <div className="w-full z-10   text-white font-plus-jakarta-sans font-extrabold text-mob-banner-heading uppercase md:capitalize md:text-[74px] absolute top-[580px] md:top-[350px] left-5 md:left-10">
          <h1 className="text-white-600 text-mob-banner-heading">Board Of Directors</h1>
        </div>
      </div>
      <TeamSection />
      <Footer />
    </>
  );
};

export default TeamPage;
