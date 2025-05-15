import React from "react";
import Discourse from "../components/ProjectsPage/Discourse";
import Map from "./Map";
import QrScanner from "./QrScanner";
import { StaticImageData } from "next/image";
 
interface IContactUs { 
    src: string;
    scanner: string;
    scannerText: string;
    pdf?: string;
    showProjectLinkInScanner?: boolean;
    projectLink?: string;
}

const ContactUs = (props: IContactUs) => {
    const { src, scanner, scannerText, pdf } = props;
    return (
        <div className="grid grid-cols-1 bg-[#FAFAFA] pb-10 h-full md:grid-cols-5 w-full gap-y-5 md:gap-16 place-content-center mx-auto mt-20">
            <Discourse />
            <Map src={src} />
            <QrScanner
                scanner={scanner}
                scannerText={scannerText}
                pdf={pdf}
                showProjectLinkInScanner={props.showProjectLinkInScanner}
                projectLink={props?.projectLink}
            />
        </div>
    );
};

export default ContactUs;
