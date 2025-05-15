import React from "react";
import Head from "next/head";
import { SubPage } from "./SubPage";
import Script from "next/script";

export const metadata = {
    title: "Duville Riverdale Grand Kharadi, Pune | Price & Floor Plan",
    description:
        "Luxury living at Riverdale Grand, Kharadi Pune by Duville Estate. Spacious 3 BHK apartments with world-class amenities. View pricing & book your site visit.",
    icons: {
        icon: "/Navbar/Logo.png",
    },
    verification: {
        google: "specific-google-verification-code-for-reverdel-page",
    },
    keywords: [
        "Luxury Apartments",
        "Reverdel",
        "Pune",
        "Duville Estate",
        "Real Estate",
    ],
    alternates: {
        canonical: "https://duville.com/riverdale-grand/",
    },
};

const RiverdaleGrand = () => {
    return (
        <>
            <head>
                {/* Meta Tags */}
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords.join(", ")} />
                <link rel="canonical" href={metadata.alternates.canonical} />

                {/* Structured data for Product */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org/",
                            "@type": "Product",
                            name: "Duville Riverdale Grand in Kharadi Pune | Duville Estate",
                            image: "https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/RiverdaleGrand/Banner.jpg?updatedAt=1707284637207",
                            description:
                                "Find your dream home at Riverdale Grand in Kharadi, Pune. Premium apartments with top-class amenities by Duville Estate. Contact us today!",
                            brand: "Duville Estate",
                            aggregateRating: {
                                "@type": "AggregateRating",
                                ratingValue: "4.5",
                                bestRating: "5",
                                worstRating: "1",
                                ratingCount: "105",
                            },
                        }),
                    }}
                />

                {/* Structured data for Article */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org/",
                            "@type": "Article",
                            mainEntityOfPage: {
                                "@type": "WebPage",
                                "@id": "https://duville.com/riverdale-grand/",
                            },
                            headline:
                                "Duville Riverdale Grand in Kharadi Pune | Duville Estate",
                            description:
                                "Find your dream home at Riverdale Grand in Kharadi, Pune. Premium apartments with top-class amenities by Duville Estate. Contact us today!",
                            image: {
                                "@type": "ImageObject",
                                url: "https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/RiverdaleGrand/Banner.jpg?updatedAt=1707284637207",
                            },
                            author: {
                                "@type": "Organization",
                                name: "Duville Estate",
                            },
                            publisher: {
                                "@type": "Organization",
                                name: "Duville Estate",
                                logo: {
                                    "@type": "ImageObject",
                                    url: "https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Navbar/Logo.png?tr=w-128",
                                },
                            },
                            datePublished: "",
                        }),
                    }}
                />
            </head>
            <SubPage />
        </>
    );
};

export default RiverdaleGrand;
