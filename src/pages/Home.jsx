import React from 'react'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import MarqueeSlider from '../components/marqueeSlider/MarqueeSlider'
import Feature from '../components/Feature/Feature'
import HowItWorks from '../components/howItWorks/HowItWorks'
import WhatPeopleSay from '../components/whatPeopleSay/WhatPeopleSay'
import Trusted from '../components/trusted/Trusted'
import Footer from '../components/footer/Footer'
import Accordion from '../components/Accordion/Accordion'
import WhyWe from '../components/whyWe/WhyWe'


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
        <Accordion />
      </main>
      <Footer />
    </>
  )
}

export default Home