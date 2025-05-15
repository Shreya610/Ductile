import React from "react";
import Head from "next/head";
import SubPage from "./SubPage";
import Script from "next/script";

export const metadata = {
    title: "Luxury Apartments at Melava Avenue | Duville Estate",
    description:
        "Melava Avenue by Duville Estate brings elegant living spaces to Pune. Luxury apartments with unmatched amenities await. Call now for project details.",
    icons: {
        icon: "/Navbar/Logo.png",
    },
    verification: {
        google: "specific-google-verification-code-for-reverdel-page",
    },
    keywords: [
        "melava avenue",
        "melava avenue duville",
        "melava avenue duville price",
        "Melava Avenue & Highstreet",
    ],
    alternates: {
        canonical: "https://duville.com/melava-avenue/",
    },
};

const MelavaAvenue = () => {
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
                            name: "Luxury Apartments at Melava Avenue | Duville Estate",
                            image: "https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Melava/Banner.jpg?updatedAt=1707284817545",
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
                                "@id": "https://duville.com/melava-avenue/",
                            },
                            headline:
                                "Luxury Apartments at Melava Avenue | Duville Estate",
                            description:
                                "Find your dream home at Melava Avenue by Duville Estate. Elegant designs and modern amenities await you in our premium living spaces. Enquire now!",
                            image: {
                                "@type": "ImageObject",
                                url: "https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Melava/Banner.jpg?updatedAt=1707284817545",
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

export default MelavaAvenue;
