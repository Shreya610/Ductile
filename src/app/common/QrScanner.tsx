import Image, { StaticImageData } from "next/image";
import React, { Fragment, useState } from "react";
import logo from "../../../public/Scanner/grand.webp";
import { Dialog, Transition } from "@headlessui/react";
import { imageKitLoader } from "../utils/ImageKitLoader";

interface IPROPS {
    scanner: string;
    scannerText: string;
    pdf?: string;
    showProjectLinkInScanner?: boolean;
    projectLink?: string;
}
const QrScanner = (props: IPROPS) => {
    const { scanner, scannerText, pdf } = props;
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className="col-span-1 bg-[#FAFAFA] p-3 mx-auto  h-full flex flex-col justify-center items-center">
            <h1 className="text-lg font-semibold uppercase">Maharera</h1>
            {/* scanner */}
            <div>
                <Image
                    loader={imageKitLoader}
                    src={scanner}
                    width={400}
                    height={400}
                    alt="scanner "
                    className="cursor-pointer"
                    onClick={() => setOpen(true)}
                />

                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={setOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-7xl sm:p-6">
                                        <Image
                                            loader={imageKitLoader}
                                            src={scanner}
                                            alt="Apartment Image"
                                            width={400}
                                            height={400}
                                            className=" mx-auto"
                                        />
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            </div>
            <h1 className="font-semibold ">{scannerText}</h1>

            <div className="border-b-2 border-slate-400 w-[70%] mx-auto mt-5"></div>
            <p className="text-sm text-center mt-5 font-plus-jakarta-sans">MahaRERA No.P52100034877</p>
            {pdf ? (
                <p className="text-sm mt-5 font-plus-jakarta-sans text-red">
                    <a href={`${pdf}`} className="button" download>
                        <i className="fa fa-download"></i>Download
                    </a>
                </p>
            ) : (
                ""
            )}
            <p className="text-sm mt-1 font-plus-jakarta-sans "> MahaRERA certificate</p>
            {props.showProjectLinkInScanner && (
                <p className="text-sm flex flex-col text-center mt-5 font-plus-jakarta-sans">
                    Project Link
                    <a
                        href={props?.projectLink}
                        className=" underline text-red max-w-44  text-xs break-words whitespace-normal"
                    >
                        {props?.projectLink}
                    </a>
                </p>
            )}
        </div>
    );
};

export default QrScanner;
