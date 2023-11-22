// import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import BestOffer from './BestOffer'
import PageHeader from './PageHeader'
import './Pricing.css'
const Pricing = () => {
  return (
    <div>
      <div className="bgBanner" style={{ paddingBottom: "36px" }}>
        <Header />

      </div>
      <PageHeader />
      <BestOffer />
      {/* <Footer /> */}
    </div>
  )
}

export default Pricing