"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Disclosure, Popover, PopoverPanel, Transition } from "@headlessui/react";
import Link from "next/link";
import { imageKitLoader } from "../../../utils/ImageKitLoader";

import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import OverlayFragment from "../../../common/OverlayFragment";
import ContactUsPopup from "./ContactUsPopup";

const Navbar = () => {
    const [activeTab, setActiveTab] = useState<string>("");
    const [open, setIsOpen] = useState<boolean>(false);
    const [openMail, setOpenMail] = useState<boolean>(false);

    return (
        <div className={`bg-black transition-all duration-1000 ${activeTab !== "" ? "" : "bg-opacity-45"}`}>
            <div className="z-20  flex justify-between p-4 max-w-lg items-center sm:max-w-7xl mx-auto">
                <Link href={"/"} className="z-30">
                    <Image
                        loader={imageKitLoader}
                        src="/Navbar/Logo.png"
                        width={100}
                        height={100}
                        alt="Logo"
                        className="w-20 h-10 md:w-28 md:h-14"
                    />
                </Link>
                <div className="hidden sm:flex flex-row justify-between text-sm sm:text-lg">
                    {/* Projects  */}

                    <Popover
                        className={`isolate max-w-full max-h-full z-50 `}
                        onMouseEnter={() => setActiveTab("projects")}
                        onMouseLeave={() => setActiveTab("")}
                    >
                        <div
                            className={`text-white cursor-pointer mx-4 z-50 border-b-2 border-transparent hover:border-crimson-200 outline-none`}
                        >
                            Projects
                        </div>

                        <Transition
                            as={Fragment}
                            show={activeTab === "projects"}
                            enter="transition ease-in duration-500"
                            enterFrom="opacity-0 -translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-500"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-1"
                        >
                            <PopoverPanel className="absolute inset-x-0 top-0  bg-black mt-20  shadow-lg   px-auto">
                                <div className="text-white p-10 flex flex-col justify-start text-[20px] max-w-xl mx-auto space-y-4">
                                    <div className="border-b-2 pb-2">Our Projects</div>
                                    <div className="flex flex-row space-x-10">
                                        <div>
                                            <div className="text-sm border-b-2 border-crimson-200 w-36 pb-2">
                                                Ongoing Residential
                                            </div>
                                            <div className="flex flex-col space-y-4 mt-4">
                                                <Link href={"/riverdale-grand"} className="text-sm">
                                                    Riverdale Grand
                                                </Link>
                                                <Link href={"/riverdale-grove"} className="text-sm">
                                                    Riverdale Grove
                                                </Link>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-sm border-b-2 border-crimson-200 w-40 pb-2">
                                                Completed Residential
                                            </div>
                                            <div className="flex flex-col space-y-4 mt-4">
                                                <Link href={"/riverdale-heights"} className="text-sm">
                                                    Riverdale Heights
                                                </Link>
                                                <Link href={"/riverdale-residences"} className="text-sm">
                                                    Riverdale Residences
                                                </Link>
                                                <Link href={"/riverdale-suites"} className="text-sm">
                                                    Riverdale Suites
                                                </Link>
                                                <div className="flex flex-col space-y-4 mt-4">
                                                    <Link href={"/melava-avenue"} className="text-sm">
                                                        Melava Avenue & Highstreet
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </PopoverPanel>
                        </Transition>
                    </Popover>

                    {/* diville engineering  */}
                    <div
                        className={`text-white z-50 cursor-pointer mx-4 border-b-2 border-transparent hover:border-crimson-200 outline-none`}
                        // onMouseEnter={() => setActiveTab("duvilleEngineering")}
                        // onMouseEnter={() => setActiveTab("duvilleEngineering")}
                        // onMouseLeave={() => setActiveTab("")}
                        // onClick={() => setActiveTab("duvilleEngineering")}
                    >
                        <Link href={"/duville-engineering"}> Duville Engineering</Link>
                    </div>

                    {/* Construction  */}
                    <Popover
                        className={`isolate max-w-full max-h-full ${activeTab === "construction" ? "z-10" : "z-20"}`}
                        onMouseEnter={() => setActiveTab("construction")}
                        onMouseLeave={() => setActiveTab("")}
                    >
                        <div
                            className={`text-white cursor-pointer mx-4 border-b-2 border-transparent hover:border-crimson-200 outline-none`}
                            // onMouseEnter={() => setActiveTab("construction")}
                            // onMouseEnter={() => setActiveTab("construction")}
                            // onMouseLeave={() => setActiveTab("")}
                        >
                            Construction
                        </div>

                        <Transition
                            show={activeTab === "construction" ? true : false}
                            as={Fragment}
                            enter="transition ease-in duration-500"
                            enterFrom="opacity-0 -translate-y-0"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-500"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-0"
                        >
                            <PopoverPanel className="absolute inset-x-0 top-0  bg-black mt-20  shadow-lg   px-auto">
                                <div className="text-white p-10 flex flex-col justify-start text-[20px] max-w-xl mx-auto space-y-4">
                                    {/* <div className="border-b-2 pb-2">Construction</div> */}
                                    <div className="flex flex-row justify-between">
                                        <p></p>
                                        <p></p>
                                        <Link href={"/design-thinking"} className="text-sm">
                                            Design Thinking
                                        </Link>
                                        <Link href={"/duville-hse"} className="text-sm">
                                            HSE
                                        </Link>
                                    </div>
                                </div>
                            </PopoverPanel>
                        </Transition>
                    </Popover>

                    {/* Community */}
                    <Popover
                        className={`isolate max-w-full max-h-full ${activeTab === "community" ? "z-10" : "z-20"}`}
                        onMouseEnter={() => setActiveTab("community")}
                        onMouseLeave={() => setActiveTab("")}
                    >
                        <div
                            className={`text-white cursor-pointer  mx-4 border-b-2 border-transparent hover:border-crimson-200 outline-none`}
                        >
                            Duville Cares
                        </div>

                        <Transition
                            show={activeTab === "community"}
                            as={Fragment}
                            enter="transition ease-in duration-500"
                            enterFrom="opacity-0 -translate-y-0"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-500"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-0"
                        >
                            <PopoverPanel className="absolute inset-x-0 top-0  bg-black mt-20  shadow-lg   px-auto">
                                <div className="text-white p-10 flex flex-col justify-start text-[20px] max-w-xl mx-auto space-y-4">
                                    <div className="border-b-2 pb-2">Community</div>
                                    <div className="flex flex-row justify-between">
                                        <Link
                                            href={"/community/environment-sensitivity"}
                                            className="text-xs sm:text-sm"
                                        >
                                            Environment Sensitivity
                                        </Link>
                                        <Link href={"/community/sustainability"} className="text-xs sm:text-sm">
                                            Sustainability{" "}
                                        </Link>
                                        <Link href={"/community/safety"} className="text-xs sm:text-sm">
                                            Safety
                                        </Link>
                                        {/* <Link
                    href={"/community/labour-training"}
                    className="text-xs sm:text-sm"
                  >
                    Labour Training
                  </Link> */}
                                    </div>
                                </div>
                            </PopoverPanel>
                        </Transition>
                    </Popover>

                    {/* About Us  */}
                    <Popover
                        className={`isolate max-w-full max-h-full ${activeTab === "aboutUs" ? "z-10" : "z-20"}`}
                        onMouseEnter={() => setActiveTab("aboutUs")}
                        onMouseLeave={() => setActiveTab("")}
                    >
                        <div
                            // onMouseEnter={() => setActiveTab("aboutUs")}
                            // onMouseLeave={() => setActiveTab("")}
                            className={`text-white cursor-pointer mx-4 border-b-2 border-transparent hover:border-crimson-200 outline-none z-50`}
                        >
                            About Us
                        </div>

                        <Transition
                            show={activeTab === "aboutUs"}
                            as={Fragment}
                            enter="transition ease-in duration-500"
                            enterFrom="opacity-0 -translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-500"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-1"
                        >
                            <PopoverPanel className="absolute inset-x-0 top-0  bg-black mt-20 shadow-lg px-auto">
                                <div className="text-white p-10 flex flex-col justify-start text-[20px] max-w-xl mx-auto space-y-4">
                                    <div className="flex flex-col space-y-4">
                                        <div className="border-b-2 pb-2">About Us</div>
                                        <div className="flex flex-row space-x-10">
                                            <Link href={"/about-us"} className="text-sm">
                                                About Duville
                                            </Link>
                                            <Link href={"/leadership"} className="text-sm">
                                                Board of Directors
                                            </Link>
                                        </div>
                                        <div className="border-b-2 pb-2 pt-4">Chronology</div>
                                        <div className="flex flex-row space-x-10">
                                            <Link href={"/dbcsons"} className="text-sm">
                                                Family Legacy
                                            </Link>
                                            <Link href={"/duville-estate"} className="text-sm">
                                                Duville Estates
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </PopoverPanel>
                        </Transition>
                    </Popover>
                </div>

                <button className="flex sm:hidden z-30" onClick={() => setIsOpen(!open)}>
                    {open ? (
                        <XMarkIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                    ) : (
                        <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" />
                    )}
                </button>

                {open && (
                    <div className="absolute w-[100vw] top-0 z-20 sm:hidden -inset-0">
                        <div className="bg-black p-2 pt-32 pb-10">
                            {/* Projects  */}
                            <Disclosure as="div" className="mt-2">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-white  focus:outline-none gap-2">
                                            <span>Projects</span>
                                            <ChevronDownIcon
                                                className={`${
                                                    open ? "rotate-180 transform" : ""
                                                } h-5 w-5 text-crimson-200`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white">
                                            <div className="border-b-2 pb-2 mb-4">Our Projects</div>
                                            <div className="flex flex-row space-x-8">
                                                <div>
                                                    <div className="text-xs sm:text-sm border-b-2 border-crimson-200 w-16 pb-2">
                                                        Ongoing Residential
                                                    </div>
                                                    <div className="flex flex-col space-y-4 mt-4">
                                                        <Link href={"/riverdale-grand"} className="text-xs">
                                                            Riverdale Grand
                                                        </Link>
                                                        <Link href={"/riverdale-grove"} className="text-xs">
                                                            Riverdale Grove
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="text-xs border-b-2 border-crimson-200 w-18 pb-2">
                                                        Completed Residential
                                                    </div>
                                                    <div className="flex flex-col space-y-4 mt-4">
                                                        <Link href={"/riverdale-heights"} className="text-xs">
                                                            Riverdale Heights
                                                        </Link>
                                                        <Link href={"/riverdale-residences"} className="text-xs">
                                                            Riverdale Residences
                                                        </Link>
                                                        <Link href={"/riverdale-suites"} className="text-xs">
                                                            Riverdale Suites
                                                        </Link>
                                                        <div className="flex flex-col space-y-4 mt-4">
                                                            <Link href={"/melava-avenue"} className="text-xs">
                                                                Melava Avenue & Highstreet
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>

                            {/* Duville Engineering */}
                            <div className="mt-2">
                                <Link
                                    href={"/duville-engineering"}
                                    className="flex w-full rounded-lg px-4 py-2 text-left text-sm font-medium text-white focus:outline-none"
                                >
                                    Duville Engineering
                                </Link>
                            </div>

                            {/* Construction  */}
                            <Disclosure as="div" className="mt-2">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-white  focus:outline-none gap-2">
                                            <span>Construction</span>
                                            <ChevronDownIcon
                                                className={`${
                                                    open ? "rotate-180 transform" : ""
                                                } h-5 w-5 text-crimson-200`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white">
                                            <div className="flex flex-row space-x-10">
                                                <Link href={"/design-thinking"} className="text-xs sm:text-sm">
                                                    Design Thinking
                                                </Link>
                                                <Link href={"/duville-hse"} className="text-xs sm:text-sm">
                                                    HSE
                                                </Link>
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>

                            {/* Duville Cares */}
                            <Disclosure as="div" className="mt-2">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-white  focus:outline-none gap-2">
                                            <span>Duville Cares</span>
                                            <ChevronDownIcon
                                                className={`${
                                                    open ? "rotate-180 transform" : ""
                                                } h-5 w-5 text-crimson-200`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white">
                                            <div className="flex flex-row space-x-10">
                                                <Link
                                                    href={"/community/environment-sensitivity"}
                                                    className="text-xs sm:text-sm"
                                                >
                                                    Environment Sensitivity
                                                </Link>
                                                <Link href={"/community/sustainability"} className="text-xs sm:text-sm">
                                                    Sustainability{" "}
                                                </Link>
                                                <Link href={"/community/safety"} className="text-xs sm:text-sm">
                                                    Safety
                                                </Link>
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>

                            {/* About us  */}
                            <Disclosure as="div" className="mt-2">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-white  focus:outline-none">
                                            <span>About Us</span>
                                            <ChevronDownIcon
                                                className={`${
                                                    open ? "rotate-180 transform" : ""
                                                } h-5 w-5 text-crimson-200`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white">
                                            <div className="border-b-2 pb-2 mb-4">About Us</div>
                                            <div className="flex flex-row space-x-10">
                                                <Link href={"/about-us"} className="text-xs sm:text-sm">
                                                    About Duville
                                                </Link>
                                                <Link href={"/leadership"} className="text-xs sm:text-sm">
                                                    Board of Directors
                                                </Link>
                                            </div>
                                            <div className="border-b-2 pb-2 pt-4 mb-4">Chronology</div>
                                            <div className="flex flex-row space-x-10">
                                                <Link href={"/dbcsons"} className="text-xs sm:text-sm">
                                                    Family Legacy
                                                </Link>
                                                <Link href={"/duville-estate"} className="text-xs sm:text-sm">
                                                    Duville Estates
                                                </Link>
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    </div>
                )}

                <div
                    className="hidden sm:flex gap-[61px] z-20"
                    onClick={() => setOpenMail(true)}
                    // href="mailto:marketing@duville.com "
                >
                    <Image loader={imageKitLoader} src={"Navbar/Menu.svg"} height={25} width={25} alt="message" />
                </div>
            </div>

            <OverlayFragment
                children={<ContactUsPopup setOpen={setOpenMail} />}
                setIsOpen={setOpenMail}
                isOpen={openMail}
            />
        </div>
    );
};

export default Navbar;
