import './Announcements.css';
import a1 from '../../../assets/a11.png';
import flag from '../../../assets/flag.png';
import dollar from '../../../assets/coin-dollar.png';
import location from '../../../assets/location.png';
import b1 from '../../../assets/bookmark.png';
import bookmarkfill from '../../../assets/bookmark-fill.png';
import edit2 from '../../../assets/edit2.png';
import delet from '../../../assets/delete.png';
import { Link } from 'react-router-dom';
import DeleteModal from '../../../pages/Announcement/DeleteModal';
import { useState } from 'react';

const DashboardAnnouncements = () => {
    return (
        <>
            <div className="announcement" style={{ margin: "30px", paddingTop: "30px" }}>
                <div>
                    {
                        [0, 1, 2, 3, 4, 5].map(() => (
                            <>
                                {/* <div className="announcelist_wrapper">
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

                                        <div className='d-lg-block d-none'>
                                            <div className='d-flex gap-3 '>
                                                <Link to="#">   <img src={bookmark} alt="" /> </Link>
                                                <Link to="/dashboard/editAnnouncements"> <img src={edit2} alt="edit" /> </Link>

                                                <button className='bg-none' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                                                    <img src={delet} alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='announcement_details f_sfPro'>We cant wait to share this milestone with our incredible sports community. Your passion and support have fueled our journey, and were thrilled to <br className='d-lg-block d-none' /> take it to the next level together.</p>
                                    <div className='d-flex gap-3 d-lg-none d-block justify-content-end'>
                                        <img src={bookmark} alt="" />
                                        <img src={edit2} alt="" />
                                        <button className='bg-none' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                                            <img src={delet} alt="" />
                                        </button>
                                    </div>
                                </div> */}
                                <SingleAnnouncement />
                            </>
                        ))
                    }

                </div>
            </div>
            <DeleteModal />
        </>
    );
};

export default DashboardAnnouncements;


const SingleAnnouncement = () => {
    const [bookmark, setBookmark] = useState(false)

    const handleBookmark = () => {
        setBookmark(!bookmark)
    }
    return (

        <>
            <div className="announcelist_wrapper">
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

                    <div className='d-lg-block d-none'>
                        <div className='d-flex gap-3 '>
                            <button className='bg-none' style={{ width: "20px" }}
                                onClick={handleBookmark}>
                                {
                                    bookmark ?
                                        <img src={bookmarkfill} alt="" />
                                        :
                                        <img src={b1} alt="" />
                                }
                            </button>
                            <Link to="/dashboard/editAnnouncements"> <img src={edit2} alt="edit" /> </Link>
                            <button className='bg-none' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                                <img src={delet} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <p className='announcement_details f_sfPro'>We cant wait to share this milestone with our incredible sports community. Your passion and support have fueled our journey, and were thrilled to <br className='d-lg-block d-none' /> take it to the next level together.</p>
                <div className='d-flex gap-3 d-lg-none d-block justify-content-end'>
                    <button className='bg-none' style={{ width: "20px" }}
                        onClick={handleBookmark}>
                        {
                            bookmark ?
                                <img src={bookmarkfill} alt="" />
                                :
                                <img src={b1} alt="" />
                        }
                    </button>
                    <img src={edit2} alt="" />
                    <button className='bg-none' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                        <img src={delet} alt="" />
                    </button>
                </div>
            </div>
        </>
    )
}