import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { imageKitLoader } from "../../utils/ImageKitLoader";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import toast from "react-hot-toast"; 
 
//pk 
const Footer = () => {
    const [newsLetter, setNewsLetter] = useState<string>("");
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Define your emailjs parameters
        const emailParams = {
            name: "News Letter",
            email: newsLetter,
            phone: "",
            message: "",
        };

        const serviceId = "service_xn3ipw7";
        const templateId = "template_furba5e";
        const userId = "rUyvB3rw4-VPF4GAg";

        // Use your EmailJS service ID, template ID, and user ID here
        emailjs.send(serviceId, templateId, emailParams, userId).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                toast.success(
                    "Message sent successfully. We'll get back to you shortly."
                );
            },
            (err) => {
                console.error("FAILED...", err);
                toast.error("Failed to send message. Please try again later.");
            }
        );

        setNewsLetter("");
    };
    return (
        <div className="w-full  bg-[#343434] text-white  mt-10  sm:px-[146px] md:pt-[60px] pt-20 pb-10 md:pb-20">
            <div className="flex sm:hidden flex-col mx-auto items-center  gap-2 pb-8">
                <a href="/">
                    <Image
                        loader={imageKitLoader}
                        src={"/Navbar/Logo.png"}
                        width={100}
                        height={100}
                        alt="logo"
                    />
                </a>
            </div>
            <div className="w-full flex sm:flex-row flex-col justify-between px-8 space-y-10 sm:space-y-0">
                <div className="flex flex-row justify-center sm:justify-start w-full sm:gap-[50px] gap-10">
                    <div className="flex flex-col md:flex-row gap-10">
                        {/* About us  */}
                        <div className="flex flex-col gap-8">
                            <div className="sm:text-[18px] text-sm font-bold">
                                About Us
                            </div>
                            <div className="flex flex-col gap-5 sm:text-[14px] text-xs font-normal opacity-80">
                                <Link href={"/leadership"}>
                                    Board of Directors
                                </Link>
                                <Link href={"/dbcsons"}>Family Legacy</Link>
                                <Link href={"/duville-estate"}>
                                    Duville Estate
                                </Link>
                                <Link href={"/about-us"}>About Us</Link>
                            </div>

                            <div className="hidden sm:flex flex-col items-center  gap-2 -ml-3">
                                <a href="/">
                                    <Image
                                        loader={imageKitLoader}
                                        src={"/Navbar/Logo.png"}
                                        width={100}
                                        height={100}
                                        alt="logo"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Construction  */}
                        <div className="flex flex-col gap-8">
                            <div className="sm:text-[18px] text-sm font-bold">
                                Construction
                            </div>
                            <div className="flex flex-col gap-5 sm:text-[14px] text-xs font-normal opacity-80">
                                <Link href={"/duville-engineering"}>
                                    Duville Engineering
                                </Link>
                                <Link href={"/design-thinking"}>
                                    Design Thinking
                                </Link>
                                <Link href={"/duville-hse"}>HSE</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 justify-between">
                        {/* Community  */}
                        <div className="flex flex-col gap-8">
                            <div className="sm:text-[18px] text-sm font-bold">
                                Community
                            </div>
                            <div className="flex flex-col gap-5 sm:text-[14px] text-xs font-normal opacity-80">
                                <Link
                                    href={"/community/environment-sensitivity"}
                                >
                                    Environment Sensitivity
                                </Link>
                                <Link href={"/community/sustainability"}>
                                    Sustainability
                                </Link>
                                <Link href={"/community/safety"}>Safety</Link>
                            </div>
                        </div>

                        {/* Projects  */}
                        <div className="flex flex-col gap-8 ">
                            <div className="sm:text-[18px] text-sm font-bold">
                                Projects
                            </div>
                            <div className="flex flex-col gap-5 sm:text-[14px] text-xs font-normal opacity-80">
                                <Link
                                    href={
                                        "/duville-projects/ongoing-residential"
                                    }
                                >
                                    Ongoing Residential
                                </Link>
                                <Link
                                    href={
                                        "/duville-projects/ongoing-commercial"
                                    }
                                >
                                    Ongoing Commercial
                                </Link>
                                <Link
                                    href={
                                        "/duville-projects/completed-residential"
                                    }
                                >
                                    Completed Residential
                                </Link>
                            </div>
                        </div>

                        {/* Privacy */}
                        <div className="flex flex-col gap-8 ">
                            <div className="sm:text-[18px] text-sm font-bold">
                                Privacy
                            </div>
                            <div className="flex flex-col gap-5 sm:text-[14px] text-xs font-normal opacity-80">
                                <Link href={"/privacy-policy"}>
                                    Privacy Policy
                                </Link>
                                <Link href={"/terms-and-conditions"}>
                                    Terms And Conditions
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 sm:w-[400px] w-[350px] justify-start mx-auto pb-10 sm:pb-0 ml-8 sm:ml-0">
                    <div className="sm:text-[18px] text-sm font-bold">
                        Contact
                    </div>

                    <div className="text-sm space-y-6 mt-5  ">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <div className="flex gap-2 items-center">
                                <IoCallOutline />
                                <a href="tel:+919922992628">+91 9922992628</a>
                            </div>

                            <div className="flex gap-2 items-center">
                                <MdOutlineEmail />
                                <a href="mailto:info@duville.com">
                                    info@duville.com
                                </a>{" "}
                            </div>
                        </div>

                        <p>
                            {" "}
                            81, Sopan Baug, Dobarwadi, Ghorpadi, Pune,{" "}
                            <br className="sm:block hidden"></br> Maharashtra
                            411001
                        </p>
                    </div>

                    {/* <div className="sm:text-[18px] text-sm font-bold mt-4">
                        News Letter
                    </div> */}

                    {/* <div className="flex flex-row justify-between border-b-2 max-w-[250px] border-[#AFADAD] mb-11 sm:mb-0">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={newsLetter}
                            onChange={(e) => setNewsLetter(e.target.value)}
                            className="pb-2 bg-transparent border-none outline-none placeholder-[#CCCCCC] "
                        />
                        <button
                            type="button"
                            className="bg-transparent border-none text-white text-xs font-normal cursor-pointer"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Send
                        </button>
                    </div> */}

                    <div className="flex flex-row gap-4 items-center mt-5">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/duville.estates?igsh=bHl5dGEwM3h5bnQ5"
                        >
                            <Image
                                loader={imageKitLoader}
                                width={100}
                                height={100}
                                src={"/Instagram.svg"}
                                alt="Linkedin logo"
                                className="w-6 h-6"
                            />
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.facebook.com/riverdalekharadi"
                        >
                            <Image
                                loader={imageKitLoader}
                                width={100}
                                height={100}
                                src={"/FB.svg"}
                                alt="Linkedin logo"
                                className="w-6 h-6"
                            />{" "}
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/duville-estates-83a11a107/"
                        >
                            <Image
                                loader={imageKitLoader}
                                width={100}
                                height={100}
                                src={"/LinkedInIcon.svg"}
                                alt="Linkedin logo"
                                className="w-6 h-6"
                            />
                        </a>

                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://twitter.com/riverdalepune"
                        >
                            <Image
                                loader={imageKitLoader}
                                width={100}
                                height={100}
                                src={"/X.svg"}
                                alt="Linkedin logo"
                                className="w-6 h-6"
                            />{" "}
                        </a>

                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.youtube.com/@riverdalepune7901"
                        >
                            <Image
                                loader={imageKitLoader}
                                width={100}
                                height={100}
                                src={"/youtube.png"}
                                alt="Youtube logo"
                                className="size-7"
                            />{" "}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
