import React, { Fragment } from "react";
import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from "@headlessui/react";

interface IPropOverlayFragment {
    isOpen: boolean;
    isAlert?: boolean;
    setIsOpen: (value: boolean) => void;
    children: React.ReactNode;
    bgColor?: string;
}

import { X } from "lucide-react";

export default function OverlayFragment(props: IPropOverlayFragment) {
    const { isOpen, isAlert, setIsOpen, children, bgColor } = props;

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" onClose={() => setIsOpen(false)}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className={`fixed inset-0  bg-gray-500  dark:bg-dark-light dark:bg-opacity-90 bg-opacity-75 transition-opacity z-50`}
                    />
                </TransitionChild>

                <div
                    className={`fixed ${
                        isAlert ? "top-0" : "inset-0"
                    } z-50 w-screen overflow-y-auto`}
                >
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <DialogPanel
                                className={`relative  transform overflow-hidden rounded-2xl ${
                                    bgColor ?? "bg-white"
                                } dark:bg-dark-bg text-left shadow-xl transition-all sm:my-8  w-fit sm:min-w-xl p-5 lg:p-10`}
                            >
                                {children}
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
