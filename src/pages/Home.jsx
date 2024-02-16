/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import MarqueeSlider from "../components/marqueeSlider/MarqueeSlider";
import Feature from "../components/Feature/Feature";
import HowItWorks from "../components/howItWorks/HowItWorks";
import WhatPeopleSay from "../components/whatPeopleSay/WhatPeopleSay";
import Trusted from "../components/trusted/Trusted";
import WhyWe from "../components/whyWe/WhyWe";
import FaqAccordion from "../components/faqAccordion/FaqAccordion";
import MobileFooter from "../components/footer/MobileFooter";
import MobileMarqueeSlider from "../components/marqueeSlider/MobileMarqueeSlider";
const Home = () => {
  return (
    <>
      <main>
        <Banner />
        <MarqueeSlider />
        <MobileMarqueeSlider />
        <Feature />
        <HowItWorks />
        <WhatPeopleSay color="#2D2D2D" />
        <Trusted />
        <WhyWe />
        <FaqAccordion />
      </main>
      <MobileFooter />
    </>
  );
};

export default Home;
