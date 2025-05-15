import React from "react";
import HeroSection from "../components/LandingPage/HeroSection";
import HistorySection from "../components/LandingPage/HistorySection";
import CardSection from "../components/LandingPage/CardSection";
import Footer from "../common/Footer/Footer";
import Head from "next/head";
import News from "../components/LandingPage/News";
import ConstructionProgress from "../components/LandingPage/ConstructionProgress";
const LandingPage = () => {
    return (
        <>
            <div className="max-w-[100vw] overflow-x-hidden">
                <HeroSection />
                <HistorySection />
                <CardSection />
                {/* <News /> */}
                <ConstructionProgress />
                <Footer />
            </div>
        </>
    );
};

export default LandingPage;
