import React from "react";
import Head from "next/head";
import SubPage from "./SubPage";
import Script from "next/script";

export const metadata = {
    title: "Duville Riverdale Suites in Kharadi Pune | Price & Floor Plan",
    description:
        "Experience contemporary living at Riverdale Suites, Kharadi Pune by Duville Estate. Stylish apartments with premium amenities. Contact us to learn more.",
    icons: {
        icon: "/Navbar/Logo.png",
    },
    verification: {
        google: "specific-google-verification-code-for-reverdel-page",
    },
    keywords: [
        "riverdale suites",
        "riverdale suites kharadi",
        "duville riverdale suites",
        "duville riverdale suites in kharadi",
        "duville riverdale suites price",
        "riverdale suites price",
        "riverdale suites for sale",
        "riverdale suites floor plan",
        "riverdale suites brochure",
    ],
    alternates: {
        canonical: "https://duville.com/riverdale-suites/",
    },
};

const DuvilleRiverdaleSuites = () => {
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
                            name: "Duville Riverdale Suites in Kharadi Pune | Duville Estate",
                            image: "https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Riverdale%20Suites/Banner.jpg?updatedAt=1707284651260",
                            description:
                                "Experience modern and luxurious living at Duville Riverdale Suites, Kharadi Pune. Offering exceptional amenities and stylish suites. Enquire now with Duville Estate!",
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
                                "@id": "https://duville.com/riverdale-suites/",
                            },
                            headline:
                                "Duville Riverdale Suites in Kharadi Pune | Duville Estate",
                            description:
                                "Experience modern and luxurious living at Duville Riverdale Suites, Kharadi Pune. Offering exceptional amenities and stylish suites. Enquire now with Duville Estate!",
                            image: {
                                "@type": "ImageObject",
                                url: "https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Riverdale%20Suites/Banner.jpg?updatedAt=1707284651260",
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

export default DuvilleRiverdaleSuites;
