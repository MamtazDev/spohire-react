import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './JobOffer.css'
import JobOfferHeader from './JobOfferHeader'
import MatchesJob from './MatchesJob'
const JobOffer = () => {
  return (
    <div>
      <div className="bgBanner" style={{ paddingBottom: "36px" }}>
        <Header />
      </div>
      <JobOfferHeader />
      <MatchesJob />
      <Footer />
    </div>
  )
}

export default JobOffer