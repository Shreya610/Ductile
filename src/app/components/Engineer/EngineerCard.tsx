import Image from "next/image";
import React from "react";
import { imageKitLoader } from "../../utils/ImageKitLoader";

const EngineerCard = ({ idx, card, setShowDetails }) => {
    const { heading1, heading2, paragraph, img } = card;
    return (
        <div
            className={`${
                idx % 2 === 1 ? "bg-[#EDEDED]" : ""
            } w-[300px] min-h-[437px] border border-slate-200 font-plus-jakarta-sans flex flex-col  justify-between `}
            onClick={() => setShowDetails(heading1)}
        >
            <div className="p-4 pb-0 w-full  h-[140px] flex flex-col justify-between ">
                <div className="w-full">
                    <h1 className="font-semibold text-[18px] font-plus-jakarta-sans">
                        {heading1}{" "}
                    </h1>
                    {heading2 && (
                        <h2 className="font-semibold text-[18px] font-plus-jakarta-sans">
                            {heading2}{" "}
                        </h2>
                    )}
                </div>
                <p className=" text-sm leading-5 min-h-[45%] text-slate-600 font-plus-jakarta-sans">
                    {paragraph}{" "}
                </p>
            </div>
            <div className="space-y-4 ">
                <button className="text-red font-raleway font-semibold text-sm mt-auto p-4 cursor-pointer">
                    See Details
                </button>

                <Image
                    loader={imageKitLoader}
                    height={400}
                    width={600}
                    src={img}
                    alt={heading1}
                    className="w-full h-[223px] object-cover"
                />
            </div>
        </div>
    );
};

export default EngineerCard;
