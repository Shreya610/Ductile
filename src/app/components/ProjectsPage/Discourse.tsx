import React from "react";

const Discourse = () => {
  return (
    <div className="col-span-2 flex  flex-col md:p-10 justify-center md:max-w-3xl  space-y-4 bg-[#FAFAFA] md:mt-10 p-10">
      <p className="flex justify-center md:justify-start text-black font-lato text-mob-heading md:text-[24px] leading-[21px] pb-10 ">
        Initiate a Conversation
      </p>
      <div className="flex flex-col space-y-10">
        <div className="flex flex-row gap-1 justify-between">
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="First name*"
            className="border-b outline-none pb-2 w-[130px] md:w-[292px] bg-transparent placeholder:font-lato placeholder:text-[12px]  md:placeholder:text-[14px] placeholder:font-semibold placeholder:leading-[21px]"
          />
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last name*"
            className="border-b outline-none pb-2 w-[130px] md:w-[292px]  bg-transparent placeholder:font-lato placeholder:text-[12px]  md:placeholder:text-[14px] placeholder:font-semibold placeholder:leading-[21px]"
          />
        </div>
        <div className="flex flex-row gap-1 justify-between">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email ID*"
            className="border-b outline-none pb-2 w-[130px] md:w-[292px] bg-transparent placeholder:font-lato placeholder:text-[12px]  md:placeholder:text-[14px] placeholder:font-semibold placeholder:leading-[21px]"
          />
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City*"
            className="border-b outline-none pb-2 w-[130px] md:w-[292px] bg-transparent placeholder:font-lato placeholder:text-[12px]  md:placeholder:text-[14px] placeholder:font-semibold placeholder:leading-[21px]"
          />
        </div>
        <div className="flex flex-row gap-1 justify-between">
          <input
            type="text"
            id="budget"
            name="budget"
            placeholder="Budget*"
            className="border-b outline-none pb-2 w-[130px] md:w-[292px] bg-transparent placeholder:font-lato placeholder:text-[12px]  md:placeholder:text-[14px] placeholder:font-semibold placeholder:leading-[21px]"
          />
          <input
            type="text"
            id="source"
            name="source"
            placeholder="Source*"
            className="border-b outline-none pb-2 w-[130px] md:w-[292px] bg-transparent placeholder:font-lato placeholder:text-[12px]  md:placeholder:text-[14px] placeholder:font-semibold placeholder:leading-[21px]"
          />
        </div>
      </div>
      <p className="font-lato text-[14px] font-normal leading-[22px] pt-5">
        I grant authorization to Duville and its representatives to contact me
        via Call, SMS, Email, or WhatsApp regarding its products and offers.
        This consent takes precedence over any registration for DNC/NDNC.
      </p>

      <div className="flex items-center justify-center">
        <button
          type="button"
          className="uppercase font-lato md:text-lg font-normal leading-[21px] bg-black rounded-[20px]  py-2 px-7 md:px-10 mt-6 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Discourse;
