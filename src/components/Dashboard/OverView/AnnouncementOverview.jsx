/* eslint-disable no-unused-vars */
import a1 from '../../../assets/a11.png';
import flag from '../../../assets/flag.png';
import dollar from '../../../assets/coin-dollar.png';
import location from '../../../assets/location.png';

const AnnouncementOverview = () => {
    return (
        <>
            <div className="job_offer_overrview_wrapper" style={{backgroundColor:"#FDFEFF"}}>
                <div className="d-flex justify-content-between">
                    <h4>Announcements</h4>
                    <a href="/dashboard/announcements">View More</a>
                </div>
                {/* list */}
                {[0, 1, 2].map(item => (
                    <>
                        <div className="announcelist_wrapper1" style={{marginTop:"10px"}}>
                            <div className='d-flex justify-content-between align-items-start'>
                                <div className="d-flex align-items-center" style={{ gap: "20px" }}>
                                    <div className='announcement_pic'>
                                        <img src={a1} alt="" />
                                    </div>
                                    <div className='recruiment1 f_sfPro'>
                                        <p>Player recruitment</p>
                                        <div className="d-flex gap-3 flex-wrap">
                                            <div className='d-flex align-items-center' style={{ gap: "6px" }}>
                                                <img src={location} alt="" />
                                                <span>Vegas Street Circuit</span>
                                            </div>
                                            <div className='d-flex align-items-center' style={{ gap: "6px" }}>
                                                <img src={flag} alt="" />
                                                <span>Published</span>
                                            </div>
                                            <div className='d-flex align-items-center' style={{ gap: "6px" }}>
                                                <img src={dollar} alt="" />
                                                <span>USD 5000</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
};

export default AnnouncementOverview;