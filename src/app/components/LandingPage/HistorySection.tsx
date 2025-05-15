import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectFade,
  Mousewheel,
  Scrollbar,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Timeline from "../../common/LandingPage/TimeLineSection/Timeline";
import Link from "next/link";
import { imageKitLoader } from "../../utils/ImageKitLoader";

const HistorySection = () => {
  return (
    <div className="md:mt-0 -mt-20">
      <div className=" ">
        <div className="w-[95%] md:max-w-7xl mx-auto flex gap-5 items-center">
          <div className="h-20 md:hidden w-1 bg-red"></div>
          <div>
            <p className="text-[#ED1C26] text-sm md:text-lg ">Our History</p>
            <h1 className="uppercase text-mob-heading md:text-section-heading font-medium">
              Over 200 YEARS OF AN UNINTERRUPTED GROWTH STORY
            </h1>
          </div>
        </div>

        <Timeline />

        <div className="flex flex-row gap-2 md:gap-0  uppercase w-[95%] md:max-w-7xl mx-auto md:mt-20 mt-10 text-mob-heading md:text-section-heading font-medium md:border-l-8 border-l-4 border-crimson-200 pl-2 md:pl-4">
          <p>old values</p>
          <p className="text-crimson-200 hidden md:block">.</p>
          <p>new structures</p>
          <p className="text-crimson-200 hidden md:block">.</p>
        </div>

        <div className="flex  flex-col md:flex-row gap-5 md:gap-20 w-[95%] mx-auto mt-7 justify-center">
          <div>
            <Image
              loader={imageKitLoader}
              height={800}
              width={800}
              src={"Landing Page/Darbshaw_House.jpg"}
              alt="cover image"
              className="w-full md:w-[474px] md:h-[362px] object-cover"
            />
          </div>
          <div className="max-w-xl md:py-4">
            <h2 className="text-sm md:text-[16px] text-[#ED1C26]">
              1810-2000 | OLD VALUES
            </h2>
            <h3 className=" text-mob-subHeading md:text-[22px] uppercase mt-2 font-plus-jakarta-sans">
              AN ICONIC RENAISSANCE INSPIRED MASTERPIECE OVERLOOKING THE BOMBAY
              DOCKS
            </h3>
            <p className="text-[#6C6A6A] text-sm leading-link-text font-plus-jakarta-sans md:text-[16px] my-2">
              The vision of Duville Estates is to give its customers a superior
              product that will exceed their expectations and create new
              benchmarks for the industry. The ideology emphasizes that 'To
              BUILD is TEMPORARY,' while 'To CREATE is FOREVER.' The build
              philosophy involves paying close attention to details and quality.
              The process entails crafting and building a product with
              best-in-class experts that will endure for generations. Therefore,
              it is the reliance on their values, consistent over time, spanning
              the past, the present, and into the future, that will help exceed
              their customers' expectations.
            </p>
            <Link
              href="/about-us"
              className="text-crimson-200 border-b border-crimson-200  text-sm md:text-base"
            >
              Read more
            </Link>
          </div>
        </div>

        <div className="flex  flex-col md:flex-row gap-5 md:gap-20 w-[95%] mx-auto md:mt-7 justify-center mt-10">
          <div>
            <Image
              loader={imageKitLoader}
              height={800}
              width={800}
              src={"History2.jpeg"}
              alt="cover image"
              className="w-full md:w-[474px] md:h-[362px] object-cover"
            />
          </div>
          <div className="max-w-xl">
            <p className="text-sm md:text-[16px] text-[#ED1C26]">
              2000-Today | NEW STRUCTURES
            </p>
            <h3 className="text-mob-subHeading md:text-[22px] uppercase mt-2 font-plus-jakarta-sans">
              AN ICONIC MASTERPIECE IN DEVELOPMENT BY THE RIVERSIDE
            </h3>
            <p className="text-[#6C6A6A] text-sm leading-link-text font-plus-jakarta-sans md:text-[16px] my-2">
              Duville Estates is committed to creating a holistic living
              environment, translating this into tangible benefits. Continuous
              efforts in new product development and innovative design enhance
              the liveability index. Meticulous research and floor plan
              re-design ensure efficiency and minimize wastage. Upholding a
              time-tested belief system, the company embeds values, culture, and
              a purpose of making a difference in the real estate sector. These
              principles contribute to delivering unparalleled value, with a
              persistent pursuit of constant improvement in every design,
              reflecting a commitment to concise and meaningful advancements.
            </p>
            <Link
              href="/about-us"
              className="text-crimson-200 border-b border-crimson-200  text-sm md:text-base"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
