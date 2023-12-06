/* eslint-disable no-unused-vars */
import a1 from '../../assets/a11.png';
import flag from '../../assets/flag.png';
import dollar from '../../assets/coin-dollar.png';
import location from '../../assets/location.png';
import b1 from '../../assets/bookmark.png';

import bookmarkfill from '../../assets/bookmark-fill.png';
import JobCategory from './JobCategory';
import DeleteModal from './DeleteModal';
import { useState } from 'react';

const AnnouncementList = () => {


    return (
        <>
            <div className="container" style={{ marginTop: "104px", marginBottom: "150px" }}>
                <div className="row">
                    <div className="col-lg-9">
                        {
                            [0, 1, 2, 3, 4, 5].map((data, index) => (

                                <SingleAnnouncement key={index} />
                            ))
                        }


                    </div>
                    <div className="col-lg-3">
                        <JobCategory />
                    </div>
                </div>
            </div>

            <DeleteModal />


        </>
    );
};

export default AnnouncementList;



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
                    {/* icon div */}
                    <div className='d-lg-block d-none'>
                        <div >
                            <button className='bg-none'
                                onClick={handleBookmark}>
                                {
                                    bookmark ?
                                        <img src={bookmarkfill} alt="" />
                                        :
                                        <img src={b1} alt="" />
                                }
                            </button>

                        </div>
                    </div>
                </div>
                <p className='announcement_details f_sfPro'>We cant wait to share this milestone with our incredible sports community. Your passion and support have fueled our journey, and were thrilled to <br className='d-lg-block d-none' /> take it to the next level together.</p>
                <div className='d-flex gap-3 d-lg-none d-block justify-content-end'>
                    <button className='bg-none' style={{ color: '#929292' }}> <i className="fa-regular fa-bookmark"></i></button>
                </div>
            </div>
        </>
    )
}
