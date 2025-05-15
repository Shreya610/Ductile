import React from "react";
import Head from "next/head";
import SubPage from "./SubPage";
import Script from "next/script";

export const metadata = {
    title: "Duville Riverdale Heights In Kharadi Pune | Price & Floor Plan",
    description:
        "Find your premium residence at Duville Riverdale Heights in Kharadi Pune. Offering luxurious living spaces and top-tier amenities. Book your site visit today!",
    icons: {
        icon: "/Navbar/Logo.png",
    },
    verification: {
        google: "specific-google-verification-code-for-reverdel-page",
    },
    keywords: [
        "duville riverdale heights",
        "riverdale heights apartments",
        "riverdale heights pune",
        "duville riverdale heights pune",
        "riverdale height price",
        "riverdale height for sale",
        "riverdale height floor plan",
        "riverdale height brochure",
    ],
    alternates: {
        canonical: "https://duville.com/riverdale-heights/",
    },
};

const RiverdaleHeights = () => {
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
                            name: "Duville Riverdale Heights In Kharadi Pune | Duville Estate",
                            image: "https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/RiverdaleHeights/Banner.jpg?updatedAt=1707284567321",
                            description:
                                "Find your premium residence at Duville Riverdale Heights in Kharadi Pune. Offering luxurious living spaces and top-tier amenities. Visit us to learn more.",
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
                                "@id": "https://duville.com/riverdale-heights/",
                            },
                            headline:
                                "Duville Riverdale Heights In Kharadi Pune | Duville Estate",
                            description:
                                "Find your premium residence at Duville Riverdale Heights in Kharadi Pune. Offering luxurious living spaces and top-tier amenities. Visit us to learn more.",
                            image: {
                                "@type": "ImageObject",
                                url: "https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/RiverdaleHeights/Banner.jpg?updatedAt=1707284567321",
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

export default RiverdaleHeights;
