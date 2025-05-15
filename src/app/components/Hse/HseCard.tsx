"use client";
import Image from "next/image";
import React from "react";
import { ICard } from "../../utils/interface/HscPage/IHscCard";
import { imageKitLoader } from "../../utils/ImageKitLoader";

interface IProps {
    card: ICard;
    idx: number;
}
const HscCard: React.FC<IProps> = (props) => {
    const { card, idx } = props;

    return (
        <div
            className={` md:border-l-8 space-y-7   md:space-y-16 ${
                idx % 2 === 0 ? "border-[#FF0000]" : "border-[#CECECE]"
            } ${idx !== 0 ? "md:px-20  pt-4" : "md:p-20 pb-0"}`}
        >
            <h1 className="text-[#FF0000] font-lato  font-bold text-mob-banner-heading  md:text-page-heading ">
                {card?.heading}
            </h1>
            {card?.heading === "SAFETY" && (
                <Image
                    loader={imageKitLoader}
                    src={"HSC/hsc-safety.png"}
                    alt="hsc-safety"
                    width={413}
                    height={275}
                    className="md:hidden"
                />
            )}
            <div className="flex flex-col md:flex-row gap-11">
                <Image
                    loader={imageKitLoader}
                    src={card?.safety?.img}
                    width={50}
                    height={50}
                    alt="safety"
                    className="hidden md:block  w-[100px] h-[100px]  p-2"
                />
                <div>
                    <h2 className="text-mob-subHeading    md:text-section-heading font-plus-jakarta-sans font-medium">
                        {card?.safety?.title}
                    </h2>
                    <p className=" md:w-[80%] text-sm md:text-base font-plus-jakarta-sans leading-link-text ml-1">
                        {card?.safety?.details}
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-11">
                <Image
                    loader={imageKitLoader}
                    src={card?.hazardousManagment?.img}
                    width={50}
                    height={50}
                    alt="safety"
                    className="hidden md:block  w-[100px] h-[100px]  p-2"
                />
                <div className="">
                    <p className="text-mob-subHeading  md:text-section-heading font-plus-jakarta-sans font-medium">
                        {card?.hazardousManagment?.title}
                    </p>
                    <p className=" md:w-[80%] text-sm md:text-base font-plus-jakarta-sans leading-link-text ml-1">
                        {card?.hazardousManagment?.details}
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-11">
                <Image
                    loader={imageKitLoader}
                    src={card?.wellness?.img}
                    width={50}
                    height={50}
                    alt="safety"
                    className="hidden md:block  w-[100px] h-[100px]  p-2"
                />
                <div>
                    <p className="text-mob-subHeading  md:text-section-heading font-plus-jakarta-sans font-medium">
                        {card?.wellness?.title}
                    </p>
                    <p className=" md:w-[80%] text-sm md:text-base font-plus-jakarta-sans leading-link-text ml-1">
                        {card?.wellness?.details}
                    </p>
                </div>
            </div>
            {card?.EmergencyResponse && (
                <div className="flex flex-col md:flex-row gap-11">
                    <Image
                        loader={imageKitLoader}
                        src={card?.EmergencyResponse?.img}
                        width={50}
                        height={50}
                        alt="safety"
                        className="hidden md:block  w-[100px] h-[100px]  p-2"
                    />
                    <div className="">
                        <p className="text-mob-subHeading  md:text-section-heading font-plus-jakarta-sans font-medium">
                            {card?.EmergencyResponse?.title}
                        </p>
                        <p className=" md:w-[80%] text-sm md:text-base font-plus-jakarta-sans leading-link-text ml-1">
                            {card?.EmergencyResponse?.details}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HscCard;
