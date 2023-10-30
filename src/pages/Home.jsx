/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import MarqueeSlider from "../components/marqueeSlider/MarqueeSlider";
import Feature from "../components/Feature/Feature";
import HowItWorks from "../components/howItWorks/HowItWorks";
import WhatPeopleSay from "../components/whatPeopleSay/WhatPeopleSay";
import Trusted from "../components/trusted/Trusted";
import Footer from "../components/footer/Footer";
import WhyWe from "../components/whyWe/WhyWe";
import FaqAccordion from "../components/faqAccordion/FaqAccordion";
import MobileFooter from "../components/footer/MobileFooter";

const Home = () => {
  return (
    <>
      <main>
        <div className="bgBanner">
          <Header />
          <Banner />
        </div>
        <MarqueeSlider />
        <Feature />
        <HowItWorks />
        <WhatPeopleSay />
        <Trusted />
        <WhyWe />
        <FaqAccordion />
      </main>
      <Footer />
      <MobileFooter />
    </>
  );
};

export default Home;
