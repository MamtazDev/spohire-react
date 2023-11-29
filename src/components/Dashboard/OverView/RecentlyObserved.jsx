
import footBallCoachImg from "../../../assets/footballCoach.png";
import a1 from '../../../assets/a11.png';
import flag from '../../../assets/flag.png';
import dollar from '../../../assets/coin-dollar.png';
import location from '../../../assets/location.png';
const RecentlyObserved = () => {
    return (
        <>
            <div className="job_offer_overrview_wrapper">
                <div className="d-flex justify-content-between" style={{ marginBottom: "65px" }}>
                    <h4>Recently Observed</h4>
                    <a href="/dashboard/jobOffers">View More</a>
                </div>

                <div className="d-flex align-items-center gap-2 joboffer_ov_wrapper" style={{ marginTop: "20px" }}>
                    <div className="job_offer_item_img">
                        <img src={footBallCoachImg} alt="img" />
                    </div>

                    <div className="job_offer_item_content d-flex">
                        <div className="job_offer_nameDesignation">
                            <h5 className="fw-medium fs-6 text_color_36 mb-1">
                                Football Coach
                            </h5>
                            <p className="fs-14 fw-normal text_color_80 mb-1">
                                Korner Kick
                            </p>
                        </div>
                        <div className="align-self-lg-center align-self-end">
                            <a href="">Job Offers</a>
                        </div>
                    </div>
                </div>
                {/* announcement */}
                <div className="announcelist_wrapper1" style={{ marginTop: "20px" }}>
                    <div className='announcement_details_wrapper'>
                        <div className="d-flex align-items-center gap-2">
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
                        <div style={{ paddingRight: "15px" }} className="align-self-lg-center align-self-end">
                            <a href="" >Announcement</a>
                        </div>
                    </div>
                </div>


                <div className="d-flex align-items-center gap-2 joboffer_ov_wrapper" style={{ marginTop: "20px" }}>
                    <div className="job_offer_item_img">
                        <img src={footBallCoachImg} alt="img" />
                    </div>

                    <div className="job_offer_item_content d-flex">
                        <div className="job_offer_nameDesignation">
                            <h5 className="fw-medium fs-6 text_color_36 mb-1">
                                Football Coach
                            </h5>
                            <p className="fs-14 fw-normal text_color_80 mb-1">
                                Korner Kick
                            </p>
                        </div>
                        <div className="align-self-lg-center align-self-end">
                            <a href="">Job Offers</a>
                        </div>
                    </div>
                </div>

                {/* announcement */}
                <div className="announcelist_wrapper1" style={{ marginTop: "20px" }}>
                    <div className='announcement_details_wrapper'>
                        <div className="d-flex align-items-center gap-2">
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
                        <div className="align-self-lg-center align-self-end" style={{ paddingRight: "15px" }}>
                            <a href="" >Announcement</a>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default RecentlyObserved;