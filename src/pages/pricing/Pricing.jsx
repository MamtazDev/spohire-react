import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import WhatPeopleSay from '../../components/whatPeopleSay/WhatPeopleSay'
import BestOffer from './BestOffer'
import GetStarted from './GetStarted'
import PageHeader from './PageHeader'
import './Pricing.css'
const Pricing = () => {
  return (
    <div>
      <div className="bgBanner">
        <Header />
      </div>
      <PageHeader />
      <BestOffer />
      <div className="slider_bg">
        <div>
          <WhatPeopleSay color="#fff" />
        </div>
      </div>
      <GetStarted />
      <Footer />
    </div>
  )
}

export default Pricing