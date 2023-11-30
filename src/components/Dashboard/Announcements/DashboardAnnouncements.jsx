import './Announcements.css';
import a1 from '../../../assets/a11.png';
import flag from '../../../assets/flag.png';
import dollar from '../../../assets/coin-dollar.png';
import location from '../../../assets/location.png';
import bookmark from '../../../assets/bookmark.png';
import edit2 from '../../../assets/edit2.png';
import delet from '../../../assets/delete.png';
import { Link } from 'react-router-dom';

const DashboardAnnouncements = () => {
    return (
        <>
            <div className="announcement" style={{ margin: "30px", paddingTop: "30px" }}>
                <div>
                    {
                        [0, 1, 2, 3, 4, 5].map(() => (
                            <>
                                <div className="announcelist_wrapper">
                                    {/* parent flex with edit delete  */}
                                    <div className='d-flex justify-content-between align-items-start'>
                                        <div className="d-flex align-items-center" style={{ gap: "20px" }}>
                                            <div className='announcement_pic'>
                                                <img src={a1} alt="" />
                                            </div>
                                            <div className='recruiment f_sfPro'>
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

                                        {/* icon div */}
                                        <div className='d-lg-block d-none'>
                                            <div className='d-flex gap-3 '>
                                                <Link to="#">   <img src={bookmark} alt="" /> </Link>
                                                <Link to="#">   <img src={edit2} alt="" /> </Link>
                                                <Link to="#">  <img src={delet} alt="" /> </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='announcement_details f_sfPro'>We cant wait to share this milestone with our incredible sports community. Your passion and support have fueled our journey, and were thrilled to <br className='d-lg-block d-none' /> take it to the next level together.</p>
                                    <div className='d-flex gap-3 d-lg-none d-block justify-content-end'>
                                        <img src={bookmark} alt="" />
                                        <img src={edit2} alt="" />
                                        <img src={delet} alt="" />
                                    </div>
                                </div>
                            </>
                        ))
                    }

                </div>
            </div>
        </>
    );
};

export default DashboardAnnouncements;