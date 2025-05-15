import Image from "next/image";
import React from "react";
import { imageKitLoader } from "../../utils/ImageKitLoader";
import InstaNews from "./NewsAndUpdates/InstaNews";
import WebNews from "./NewsAndUpdates/WebNews";
import FbNews from "./NewsAndUpdates/FbNews";
import LinkdinNews from "./NewsAndUpdates/LinkdinNews";
import { INews } from "../../utils/interface/Landingpage/News";

const News = () => {
  const instagram: INews[] = [
    {
      heading: "Absolute Design Fitment in Luxury Living",
      subheading: "Announcing the 2290* Sq.Ft. 4.5 BHK Apartment",
      tags: "#riverdale #duvilleestates #kharadi",
      date: "a mont ago",
      img: "/News/InternalApartment.png",
      logo: "/Instagram.svg",
    },
    // {
    //   heading: "Absolute Design Fitment in Luxury Living",
    //   subheading: "Announcing the 2290* Sq.Ft. 4.5 BHK Apartment",
    //   tags: "#riverdale #duvilleestates #kharadi",
    //   date: "a mont ago",
    //   img: "/News/InternalApartment.png",
    //   logo: "/Instagram.svg",
    // },
    // {
    //   heading: "Absolute Design Fitment in Luxury Living",
    //   subheading: "Announcing the 2290* Sq.Ft. 4.5 BHK Apartment",
    //   tags: "#riverdale #duvilleestates #kharadi",
    //   date: "a mont ago",
    //   img: "/News/InternalApartment.png",
    //   logo: "/Instagram.svg",
    // },
  ];

  const web: INews[] = [
    {
      heading:
        "Duville Estates to invest Rs 500 crore on three housing projects in Pune",
      subheading:
        "The investment is being funded through internal accruals, advances from customers and construction finance",
      img: "/News/sunset-big-city 1.png",
    },
    // {
    //   heading:
    //     "Duville Estates to invest Rs 500 crore on three housing projects in Pune",
    //   subheading:
    //     "The investment is being funded through internal accruals, advances from customers and construction finance",
    //   img: "/News/InternalApartment.png",
    //   logo: "/Instagram.svg",
    // },
    // {
    //   heading:
    //     "Duville Estates to invest Rs 500 crore on three housing projects in Pune",
    //   subheading:
    //     "The investment is being funded through internal accruals, advances from customers and construction finance",
    //   img: "/News/InternalApartment.png",
    //   logo: "/Instagram.svg",
    // },
  ];

  const facebook: INews[] = [
    {
      heading: "Kids bedroom at riverdale Grand",
      subheading:
        "This space is gift wrapped with tonnes of love a private world for your child to explore",
      img: "/News/bedroom.png",

      logo: "/News/fb.png",
    },
    // {
    //   heading: "Kids bedroom at riverdale Grand",
    //   subheading:
    //     "This space is gift wrapped with tonnes of love a private world for your child to explore",
    //   img: "/News/bedroom.png",

    //   logo: "/News/fb.png",
    // },
    // {
    //   heading: "Kids bedroom at riverdale Grand",
    //   subheading:
    //     "This space is gift wrapped with tonnes of love a private world for your child to explore",
    //   img: "/News/bedroom.png",

    //   logo: "/News/fb.png",
    // },
  ];

  const linkdin: INews[] = [
    {
      heading: "An exclusive gated  community with 3 BHK prime edition homes",
      subheading:
        "This space is gift wrapped with tonnes of love a private world for your child to explore",

      img: "/News/hall.png",

      logo: "/LinkedInIcon.svg",
    },
    // {
    //   heading: "An exclusive gated  community with 3 BHK prime edition homes",
    //   subheading:
    //     "This space is gift wrapped with tonnes of love a private world for your child to explore",

    //   img: "/News/hall.png",

    //   logo: "/LinkedInIcon.svg",
    // },
    // {
    //   heading: "An exclusive gated  community with 3 BHK prime edition homes",
    //   subheading:
    //     "This space is gift wrapped with tonnes of love a private world for your child to explore",

    //   img: "/News/hall.png",

    //   logo: "/LinkedInIcon.svg",
    // },
  ];
  return (
    <div className="w-[95%] mx-auto md:mt-32 mt-10 md:max-w-7xl space-y-5 ">
      <div className="flex gap-5 items-center">
        <div className="h-7 md:h-9 w-1 md:w-2 bg-red"></div>
        <p className="uppercase text-mob-heading md:text-section-heading font-medium">
          NEWS AND UPDATES
        </p>
      </div>

      <div className="grid grid-cols-4 gap-5 w-full  bg-[#d3d3d3] bg-opacity-30 p-5 ">
        {/* instagram */}

        <InstaNews news={instagram} />

        {/* News */}
        <WebNews news={web} />

        {/* Facebook */}
        <FbNews news={facebook} />

        {/* xender */}
        <div className="col-span-4 md:col-span-2  row-span-1 bg-white p-3 pb-10  h-full  ">
          <div className="w-[90%] md:w-[70%] mx-auto space-y-5 ">
            <Image
              loader={imageKitLoader}
              width={100}
              height={100}
              src={"/X.svg"}
              alt="Linkedin logo"
              className="w-6 h-6 ml-auto bg-black rounded-full"
            />{" "}
            <div className="flex flex-row gap-4">
              <Image
                loader={imageKitLoader}
                src="/Navbar/Logo.png"
                width={100}
                height={100}
                alt="Logo"
                className="p-1 w-10 h-10 rounded-full bg-[#444444]"
              />
              <div>
                <h5 className="font-medium font-plus-jakarta-sans text-sm">
                  Duville Estates
                </h5>
                <h5 className="font-medium font-plus-jakarta-sans text-xs italic">
                  2 years ago{" "}
                </h5>
              </div>
            </div>
            <h3 className="font-medium  font-plus-jakarta-sans text-sm w-[90%]">
              A New Riverfront development in Kharadi Prime Location : Proximity
              to CBD in Kharadi An impressive investment at just Rs. 45 Lacs
              Onwards
            </h3>
            <h3 className="font-semibold   font-plus-jakarta-sans italic text-sm ">
              #punerealestate #investment #1bhkflats #luxuryhome{" "}
            </h3>
          </div>
        </div>

        {/* linkdin */}

        <LinkdinNews news={linkdin} />
      </div>
    </div>
  );
};

export default News;
