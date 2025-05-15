import React from "react";
import Head from "next/head";
import SubPage from "./SubPage";
import Script from "next/script";

export const metadata = {
    title: "Duville Riverdale Grove In Kharadi Pune | Price & Floor Plan",
    description:
        "Riverdale Grove in Kharadi Pune presents modern homes with stylish interiors and premium amenities by Duville Estate. Schedule a visit to see for yourself.",
    icons: {
        icon: "/Navbar/Logo.png",
    },
    verification: {
        google: "specific-google-verification-code-for-reverdel-page",
    },
    keywords: [
        "riverdale grove",
        "duville riverdale grove",
        "duville riverdale grove kharadi pune",
        "riverdale grove reviews",
        "riverdale grove for sale",
        "riverdale grove floor plan",
        "riverdale grove brochure",
    ],
    alternates: {
        canonical: "https://duville.com/riverdale-grove/",
    },
};

const RiverdaleGrove = () => {
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
                            name: "Duville Riverdale Grove In Kharadi Pune | Duville Estate",
                            image: "https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Riverdale%20Grove/Banner.jpg?updatedAt=1707284711538",
                            description:
                                "Live in style at Duville Riverdale Grove, Kharadi Pune. Offering contemporary living spaces with premium facilities. Discover your perfect home today!",
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
                                "@id": "https://duville.com/riverdale-grove/",
                            },
                            headline:
                                "Duville Riverdale Grove In Kharadi Pune | Duville Estate",
                            description:
                                "Live in style at Duville Riverdale Grove, Kharadi Pune. Offering contemporary living spaces with premium facilities. Discover your perfect home today!",
                            image: {
                                "@type": "ImageObject",
                                url: "https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Riverdale%20Grove/Banner.jpg?updatedAt=1707284711538",
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

export default RiverdaleGrove;
