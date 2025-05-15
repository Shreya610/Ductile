import { Lato, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "react-hot-toast";

// const lato = Lato({ subsets: ["latin"], weight: "400" });
export const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
    title: "Top Real Estate Developer in Pune | Duville Estate",
    description:
        "Duville Estate is a leading real estate builder & developer in Pune, offering quality construction for both commercial and residential projects.",
    verification: { google: "kIVKvGVigdTr_exB1nJ3pmWdfr4E8_mv00sw6hUQpWQ" },
    keywords: [
        "top builders in pune",
        "top developers in pune",
        "real estate developers in pune",
        "real estate company in pune",
        "real estate builders in pune",
        "best real estate developers in pune",
        "duville estates",
        "duville estates private limited",
        "duville estates kharadi",
    ],
    alternates: {
        canonical: "https://duville.com/",
    },
};

export default function RootLayout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Duville Estates Private Limited",
        url: "https://duville.com/",
        logo: "https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Navbar/Logo.png?tr=w-128",
        alternateName: "Duville Estates",
        sameAs: [
            "https://www.facebook.com/riverdalekharadi",
            "https://www.linkedin.com/in/duville-estates-83a11a107/",
        ],
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: "09922992628",
                contactType: "customer service",
                email: "marketing@duville.com",
                areaServed: "IN",
            },
        ],
    };

    const realEstateAgentSchema = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        name: "Duville Estates Real Estate Agent",
        image: "https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Agent/AgentLogo.png",
        url: "https://duville.com/real-estate-agent",
        telephone: "+91 9922992628",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Duville Estates, Kharadi",
            addressLocality: "Pune",
            postalCode: "411014",
            addressCountry: "IN",
        },
    };

    return (
        <html lang="en">
            <head>
                <meta property="og:title" content={metadata.title} />
                <meta property="og:site_name" content="duville" />
                <meta property="og:url" content="https://duville.com/" />
                <meta
                    property="og:description"
                    content={metadata.description}
                />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={metadata.ogImage} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(realEstateAgentSchema),
                    }}
                />

                {/* Meta Pixel Code */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            !function(f,b,e,v,n,t,s) {
                                if(f.fbq) return; 
                                n=f.fbq=function(){n.callMethod?
                                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                                if(!f._fbq) f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                                n.queue=[];t=b.createElement(e);t.async=!0;
                                t.src=v;s=b.getElementsByTagName(e)[0];
                                s.parentNode.insertBefore(t,s)}(window, document,'script',
                            'https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', '1064463708710119');
                            fbq('track', 'PageView');
                        `,
                    }}
                />
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        src="https://www.facebook.com/tr?id=1064463708710119&ev=PageView&noscript=1"
                    />
                </noscript>
                {/* End Meta Pixel Code */}
            </head>
            <body className={plus_jakarta_sans.className}>
                <Toaster position="" />
                {children}
            </body>
            <GoogleTagManager gtmId="GTM-W5QDDQMX" />
            <GoogleAnalytics gaId="G-YF3PMHY3M0" />
        </html>
    );
}
