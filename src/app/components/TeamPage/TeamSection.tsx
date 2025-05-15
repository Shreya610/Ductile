import Image from "next/image";
import React from "react";
import { imageKitLoader } from "../../utils/ImageKitLoader";

const TeamSection = () => {
    return (
        <div className="w-[95%] sm:max-w-7xl mx-auto mt-20 max-w-xl">
            <div className="uppercase text-mob-heading md:text-[30px] border-l-8 border-crimson-200 pl-5 font-semibold">
                Board of Directors
            </div>

            <div className="mt-20 flex flex-col sm:gap-12 gap-24">
                <div className="flex flex-col sm:flex-row max-w-4xl gap-6">
                    <div className="overflow-hidden min-w-80 pl-12">
                        <Image
                            loader={imageKitLoader}
                            src={"/person1.png"}
                            width={200}
                            height={100}
                            alt="team member"
                            className=" h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
                        />
                    </div>
                    <div className="flex flex-col gap-2 px-12 md:px-0">
                        <p className="text-[18px] font-extrabold ">BEHRAM B. DUBASH</p>
                        <p className="text-[#9E9E9E] font-extrabold uppercase">Chairman</p>
                        <p className="text-[#6C6A6A]  leading-link-text  ">
                            Behram Dubash has a wealth of experience that extends across various fields of business. He
                            is a veteran of the shipping industry and has been actively involved in the family
                            construction & building development arm. Mr. Dubash was educated at the Cathedral & John
                            Connon School and is a commerce graduate from the University of Bombay.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row max-w-4xl gap-6">
                    <div className="overflow-hidden min-w-80 pl-12">
                        <Image
                            loader={imageKitLoader}
                            src={"/person2.png"}
                            width={200}
                            height={100}
                            alt="team member"
                            className=" h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
                        />
                    </div>
                    <div className="flex flex-col gap-2 px-12  md:px-0">
                        <p className="text-[18px] font-extrabold">TUSHAD B. DUBASH</p>
                        <p className="text-[#9E9E9E] font-extrabold uppercase">NON EXECUTIVE DIRECTOR</p>
                        <p className="text-[#6C6A6A] leading-link-text ">
                            Tushad Dubash is actively involved with the DBC Group and also spearheading Duville Estates.
                            Mr. Dubash was educated at the Cathedral & John Connon School and at Eton. He holds a
                            bachelor’s degree in politics and economics from the University of Bath and a master’s
                            degree in law from the University of Bristol.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row max-w-4xl gap-6 sm:gap-0">
                    <div className="overflow-hidden min-w-80 h-full  pl-12">
                        <Image
                            loader={imageKitLoader}
                            src={"/person3.png"}
                            width={200}
                            height={100}
                            alt="team member"
                            className=" h-full object-cover hover:scale-105 transition-all duration-300"
                        />
                    </div>
                    <div className="flex flex-col gap-2 px-12 md:px-7 ">
                        <p className="text-[18px] font-extrabold">PHILLIE D. KARKARIA</p>
                        <p className="text-[#9E9E9E]  font-extrabold uppercase">INDEPENDENT NON EXECUTIVE DIRECTOR</p>
                        <p className="text-[#6C6A6A]    leading-link-text ">
                            Phillie Karkaria was Executive Director of Tata Realty & Infrastructure Limited and Vice
                            President of Tata Sons Limited. He is a Fellow of the Chartered Institute of Management
                            Accountants, London and an Associate Member of the Institute of Financial Accountants,
                            London.
                        </p>
                    </div>
                </div>

                {/* <div className="flex flex-col sm:flex-row max-w-4xl gap-6">
          <div className="overflow-hidden min-w-80 w-full h-full px-12 ">
            <Image
              loader={imageKitLoader}
              src={"/person4.png"}
              width={200}
              height={100}
              alt="team member"
              className=" h-full object-cover hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="flex flex-col gap-2 px-12 md:-ml-12">
            <p className="text-[18px] font-extrabold">DHANSUKH H. PAREKH,</p>
            <p className="text-[#9E9E9E] font-extrabold uppercase">
              NON EXECUTIVE DIRECTOR
            </p>
            <p className="text-[#6C6A6A] leading-link-text ">
              Dhansukh Parekh has been associated with the Mafatlal Group for
              over three decades. He is currently the Executive Director of
              Standard Industries Limited. He is a Fellow Member of The
              Institute of Chartered Accountants of India.
            </p>
          </div>
        </div> */}

                <div className="flex flex-col sm:flex-row max-w-4xl gap-6 sm:gap-0">
                    <div className="overflow-hidden min-w-80 h-full  px-12 ">
                        <Image
                            loader={imageKitLoader}
                            src={"/person5.png"}
                            width={200}
                            height={100}
                            alt="team member"
                            className=" h-full object-cover hover:scale-105 transition-all duration-300"
                        />
                    </div>
                    <div className="flex flex-col gap-2 px-12  md:px-8  ">
                        <p className="text-[18px] font-extrabold">YAZDI P. DANDIWALA</p>
                        <p className="text-[#9E9E9E]  font-extrabold uppercase">INDEPENDENT NON EXECUTIVE DIRECTOR</p>
                        <p className="text-[#6C6A6A] leading-link-text ">
                            Yazdi Dandiwala is a Senior Partner of Mulla & Mulla and Craigie Blunt & Caroe. Mr.
                            Dandiwala holds a bachelor’s degree in science and a bachelor’s degree in law from Mumbai
                            University. He qualified as a Solicitor of Bombay High Court in 1974 and in England and
                            Wales in 1981.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
