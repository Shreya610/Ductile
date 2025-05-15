import React from "react";
import Head from "next/head";
import SubPage from "./SubPage";
import Script from "next/script";

export const metadata = {
    title: "Duville Riverdale Residences Kharadi Pune | Price & Floor Plan",
    description:
        "Discover premium living at Riverdale Residences, Kharadi Pune. Luxurious 2 and 3 BHK apartments with world-class amenities. Book your site visit today.",
    icons: {
        icon: "/Navbar/Logo.png",
    },
    verification: {
        google: "specific-google-verification-code-for-reverdel-page",
    },
    keywords: [
        "riverdale residences",
        "duville riverdale residences",
        "riverdale residences pune",
        "riverdale kharadi 3 bhk",
        "riverdale residences price",
        "riverdale residences for sale",
        "riverdale residences floor plan",
        "riverdale residences brochure",
    ],
    alternates: {
        canonical: "https://duville.com/riverdale-residences/",
    },
};

const RiverdaleResidences = () => {
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
                            name: "Riverdale Residences in Kharadi Pune | Duville Estate",
                            image: "https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Riverdale%20Residences/Banner.jpg?updatedAt=1707284660052",
                            description:
                                "Experience premium living at Riverdale Residences, Kharadi Pune. Luxurious apartments with world-class amenities by Duville Estate. Enquire today!",
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
                                "@id": "https://duville.com/riverdale-residences/",
                            },
                            headline:
                                "Riverdale Residences in Kharadi Pune | Duville Estate",
                            description:
                                "Experience premium living at Riverdale Residences, Kharadi Pune. Luxurious apartments with world-class amenities by Duville Estate. Enquire today!",
                            image: {
                                "@type": "ImageObject",
                                url: "https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Riverdale%20Residences/Banner.jpg?updatedAt=1707284660052",
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

export default RiverdaleResidences;
