import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { imageKitLoader } from "../../utils/ImageKitLoader";

interface section {
  data: string[];
  img: string;
  id: number;
}
interface Iprops {
  section: { title?: string; section1?: section; section2?: section };
}

const SustainableSection: React.FC<Iprops> = (props) => {
  const { section } = props;
  const [showSection, setShowSection] = useState<boolean>(false);

  return (
    <div className="w-11/12 md:w-full mx-auto flex flex-col border-b border-slate-400 pb-5 ">
      <div
        className="flex flex-row   transition-[0.3s] justify-between p-4 "
        onClick={() => setShowSection(!showSection)}
      >
        <h2 className="text-mob-[14px]  md:text-[0.9rem] font-plus-jakarta-sans font-semibold text-slate-700 ">
          {section?.title}
        </h2>
        {showSection ? (
          <IoIosArrowUp className="text-slate-1000 " />
        ) : (
          <IoIosArrowDown className="text-slate-700 " />
        )}
      </div>

      {showSection && (
        <div className="md:p-4 space-y-20 pt-5  md:space-y-10 font-plus-jakarta-sans leading-[22px] text-slate-700 md:w-[90%] mx-auto">
          <div
            className={`flex  justify-between gap-5 items-center flex-col ${
              section?.section1?.id % 2 === 0
                ? " md:flex-row-reverse"
                : "md:flex-row"
            }`}
          >
            <Image
            loader={imageKitLoader}
              src={section.section1?.img}
              width={400}
              height={100}
              className="w-full md:max-w-[460px] h-[240px] md:h-[310px] object-cover rounded-md"
              alt="image"
            />
            <div className="space-y-2">
              {section?.section1?.data?.map((ele, idx) => (
                <li className=" text-sm md:text-base  leading-link-text font-medium font-plus-jakarta-sans  md:w-[90%] ml-auto">
                  {ele}
                </li>
              ))}
            </div>
          </div>
          {section?.section2 && (
            <div
              className={`flex  justify-between items-center gap-5 flex-col ${
                section?.section2?.id % 2 === 0
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              }`}
            >
              <Image
                loader={imageKitLoader}
                src={section.section2?.img}
                width={300}
                height={400}
                className="w-full md:max-w-[460px] h-[240px] md:h-[310px] object-cover rounded-md"
                alt="section_image"
              />
              <div className="space-y-2">
                {section?.section2?.data?.map((ele, idx) => (
                  <li className=" text-sm md:text-base leading-link-text font-medium font-plus-jakarta-sans w-full md:w-[90%] ml-auto  ">
                    {ele}
                  </li>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SustainableSection;
