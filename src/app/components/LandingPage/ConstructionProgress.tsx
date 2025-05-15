import Image from "next/image";
import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { imageKitLoader } from "../../utils/ImageKitLoader";

const ConstructionProgress = () => {
    const images = [
        {
            title: "Riverdale Grand",
            url: "Home/construction/1.png",
        },
        {
            title: "Riverdale Grand",
            url: "Home/construction/2.png",
        },
        {
            title: "Riverdale Grand",
            url: "Home/construction/3.png",
        },
        {
            title: "Riverdale Grand",
            url: "Home/construction/4.png",
        },
        {
            title: "Riverdale Grand",
            url: "Home/construction/5.png",
        },
    ];
    return (
        <div className="w-[95%] mx-auto md:mt-32 mt-10 md:max-w-7xl space-y-5 ">
            <div className="flex gap-5 items-center">
                <div className="h-7 md:h-9 w-1 md:w-2 bg-red"></div>
                <p className="uppercase text-mob-heading md:text-section-heading font-medium  ">
                    CONSTRUCTION PROGRESS at Riverdale Grand
                </p>
            </div>

            {/* Video Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="relative w-full aspect-video">
                    <iframe
                        src="https://www.youtube.com/embed/igBMVg9dL18?si=_HwQQEVyq6IwIeNc&controls=0"
                        title="Construction Progress Video 1"
                        className="absolute top-0 left-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="relative w-full aspect-video">
                    <iframe
                        src="https://www.youtube.com/embed/HJma4UTNVhM?si=sFWq8VrPF2XvlymF&controls=0"
                        title="Construction Progress Video 2"
                        className="absolute top-0 left-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* <Swiper
                modules={[Navigation, Autoplay]}
                effect={"coverflow"}
                navigation={true}
                grabCursor={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                slidesPerView={4}
                breakpoints={{
                    300: { slidesPerView: 1 },
                    790: { slidesPerView: 3, pagination: false },
                    1024: { slidesPerView: 4, pagination: false },
                }}
                loop={true}
                initialSlide={1}
                className="  mt-0 w-full -ml-10    space-x-6 "
                spaceBetween={20}
            >
                {images?.map((item, idx) => (
                    <>
                        <SwiperSlide key={idx} className="space-y-4">
                            <ImageCard key={idx} {...item} url={item?.url} Name={item?.title} />
                        </SwiperSlide>
                    </>
                ))}
            </Swiper> */}
        </div>
    );
};

export default ConstructionProgress;

const ImageCard = (props) => {
    const { url } = props;

    return (
        <div className="relative group w-fit scale-animation">
            <div className="relative group  w-fit scale-animation">
                <Image
                    loader={imageKitLoader}
                    height={500}
                    width={350}
                    alt="leaders "
                    src={url}
                    className="object-cover h-[350px]   min-h-full "
                />

                {/* Gradient Overlay (Visible on hover) */}
                {/* <h1 className="text-center">Title</h1> */}
            </div>
        </div>
    );
};
