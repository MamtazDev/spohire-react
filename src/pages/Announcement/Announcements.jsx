// import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import AnnouncementHeader from './AnnouncementHeader'
import './Announcement.css';
import AnnouncementList from './AnnouncementList';
const Announcements = () => {
  return (
    <div>
      <div className="bgBanner" style={{ paddingBottom: "36px" }}>
        <Header />
      </div>
      <AnnouncementHeader />
      <AnnouncementList />


      {/* <Footer /> */}
    </div>
  )
}

export default Announcements