import React, { useState } from "react";
import Image from "next/image";
import Section from "./Section";
import { RxCross2 } from "react-icons/rx";
import { engineerCard } from "../../utils/interface/EngineerPage/engineerDetails";
import { imageKitLoader } from "../../utils/ImageKitLoader";

interface IPROPS {
    card: engineerCard;
    setShowDetails: any;
    idx: number;
}

const EngineerDetails: React.FC<IPROPS> = (props) => {
    const { setShowDetails, card, idx } = props;

    return (
        <>
            <div className="w-full md:w-[80%] mx-auto flex  flex-col md:flex-row gap-4 md:gap-0 pb-4">
                <div className="w-full">
                    <div className="relative space-y-4  p-4  md:border border-slate-200 w-full   ">
                        <div className="flex flex-row justify-between">
                            <div>
                                <h1 className="font-semibold font-plus-jakarta-sans">
                                    {card?.heading1}
                                </h1>
                                <h2 className="font-semibold font-plus-jakarta-sans">
                                    {card?.heading2}
                                </h2>
                            </div>
                            <RxCross2
                                onClick={() => setShowDetails(false)}
                                size="25"
                                className=" md:hidden  cursor-pointer   "
                            />
                        </div>

                        <Image
                            loader={imageKitLoader}
                            height={800}
                            width={900}
                            alt={card?.heading1}
                            src={card?.img}
                            className="   max-h-[250px]   w-full border-0  object-cover rounded-md "
                        />
                        <h6 className=" text-black font-plus-jakarta-sans text-sm leading-[22px]">
                            {card?.paragraph}
                        </h6>
                    </div>
                    <div
                        className={`hidden md:block ${
                            card?.subDetails?.length && "border"
                        }  rounded-md border-slate-300 w-[95%]   my-6`}
                    >
                        {card?.subDetails &&
                            card?.subDetails?.map((section, idx) => (
                                <Section section={section} key={idx} />
                            ))}
                    </div>
                </div>
                <div className=" md:border  relative border-slate-200">
                    <div className="space-y-7 p-4 md:p-16   ">
                        <div className="space-y-10">
                            {card?.details?.map((details, idx) => (
                                <p
                                    key={idx}
                                    className={`border-l-4 min-h-[40px]  border-opacity-[0.6]  pl-6 text-[14px]  leading-[22px] text-slate-600 font-lato ${
                                        idx < 3
                                            ? "border-[#ED1C26]"
                                            : "border-[#7A7979]"
                                    } `}
                                >
                                    {details}
                                </p>
                            ))}
                        </div>
                    </div>
                    <RxCross2
                        onClick={() => setShowDetails(false)}
                        size="25"
                        className="absolute right-0 hidden md:block   cursor-pointer mr-3 md:top-2 self-start"
                    />

                    <div
                        className={` md:hidden ${
                            card?.subDetails && "border"
                        }  rounded-md border-slate-300 w-[95%] mx-auto  my-6`}
                    >
                        {card?.subDetails?.map((section, idx) => (
                            <Section section={section} key={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EngineerDetails;
