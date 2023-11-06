import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import MobileFooter from '../components/footer/MobileFooter'

const Announcements = () => {
  return (
    <div>
      <Header />
      <div className="bgBanner section_padding">
        <div className="container">
          <h1 className='text-white' style={{ paddingTop: '100px', height: '40vh' }}>
            Announcements comming soon
          </h1>
        </div>
      </div>

      <Footer />
      <MobileFooter />
    </div>
  )
}

export default Announcements