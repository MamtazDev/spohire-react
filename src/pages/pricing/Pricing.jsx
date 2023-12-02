
import WhatPeopleSay from '../../components/whatPeopleSay/WhatPeopleSay'
import BestOffer from './BestOffer'
import GetStarted from './GetStarted'
import PageHeader from './PageHeader'
import './Pricing.css'
const Pricing = () => {
  return (
    <div>
      <PageHeader />
      <BestOffer />
      <div className="slider_bg">
        <div>
          <WhatPeopleSay color="#fff" />
        </div>
      </div>
      <GetStarted />
    </div>
  )
}

export default Pricing