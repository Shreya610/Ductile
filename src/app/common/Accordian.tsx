import React, { useState } from "react";
import { section } from "../utils/interface/EngineerPage/section";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
  
interface IPROPS {
    section: section[]; 
}
const Accordian: React.FC<IPROPS> = ({ section }) => { 
    return (
        <div
            className={` md:hidden ${
                section && "border"
            }  rounded-md border-slate-300 w-[95%] mx-auto  my-6`}
        >
            {section?.map((section, idx) => (
                <DropDown section={section} key={idx} />
            ))}
        </div>
    );
};

export default Accordian;

interface IDropDown {
    section: section;
}
const DropDown: React.FC<IDropDown> = (props) => {
    const { section } = props;
    const [showSection, setShowSection] = useState<boolean>(false);

    return (
        <>
            <div className="w-full mx-auto  ">
                <div
                    className="flex flex-row border-b border-slate-300  overflow-hidden transition-[0.3s]  justify-between p-4 "
                    onClick={() => setShowSection(!showSection)}
                >
                    <h2 className="text-[0.7rem] md:text-[0.9rem] font-plus-jakarta-sans  font-semibold text-slate-700 tracking-wider">
                        {section?.title}
                    </h2>

                    {showSection ? (
                        <IoIosArrowUp className="text-slate-1000" />
                    ) : (
                        <IoIosArrowDown className="text-slate-700" />
                    )}
                </div>

                {section?.data &&
                    section?.data?.map((lecture, idx) => (
                        <div
                            className={` flex z-10  overflow-hidden  w-full  relative scale-y-0   transition-all origin-top duration-700 ease-in-out  ${
                                showSection ? " scale-y-100  " : " scale-y-0  "
                            }`}
                        >
                            {showSection && (
                                <div className="p-4 text-xs font-plus-jakarta-sans leading-[22px]  text-slate-600 ">
                                    {lecture}
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </>
    );
};
