

import a1 from '../../../assets/a1.png';
import flag from '../../../assets/flag.png';
import dollar from '../../../assets/coin-dollar.png';
import location from '../../../assets/location.png';
import bookmark from '../../../assets/bookmark.png';
import edit2 from '../../../assets/edit2.png';
import delet from '../../../assets/delete.png';
import footBallCoachImg from "../../../assets/footballCoach.png";
import locationIcon from "../../../assets/location-icon.svg";
import flagIcon from "../../../assets/flag-icon.svg";
import dollarIcon from "../../../assets/dollar-icon.svg";
import starIcon from "../../../assets/starIcon.svg";
import playerprofile from "../../../assets/player_profile.png";

import './ObservedClone.css'
const ObservedClone = () => {
    return (
        <>
            <div className="announcement" style={{ margin: "30px" }}>
                <div>
                    <p className='title'>Announcement</p>
                    <div className="announcelist_wrapper" >
                        {/* parent flex with edit delete  */}
                        <div className='d-flex justify-content-between align-items-start'>
                            <div className="d-flex" style={{ gap: "20px" }}>
                                <div className='announcement_pic'>
                                    <img src={a1} alt="" />
                                </div>
                                <div className='recruiment f_sfPro'>
                                    <p>Player recruitment</p>
                                    <div className="d-flex gap-3">
                                        <div className='d-flex align-items-center' style={{ gap: "6px" }}>
                                            <img src={location} alt="" />
                                            <span>Vegas Street Circuit</span>
                                        </div>
                                        <div className='d-flex align-items-center' style={{ gap: "6px" }}>
                                            <img src={flag} alt="" />
                                            <span>Vegas Street Circuit</span>
                                        </div>
                                        <div className='d-flex align-items-center' style={{ gap: "6px" }}>
                                            <img src={dollar} alt="" />
                                            <span>Vegas Street Circuit</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* icon div */}
                            <div className='d-flex gap-3'>
                                <img src={bookmark} alt="" />
                                <img src={edit2} alt="" />
                                <img src={delet} alt="" />
                            </div>
                        </div>
                        <p className='announcement_details f_sfPro'>We cant wait to share this milestone with our incredible sports community. Your passion and support have fueled our journey, and were thrilled to <br /> take it to the next level together.</p>
                    </div>
                    <div className="announcelist_wrapper" >
                        {/* parent flex with edit delete  */}
                        <div className='d-flex justify-content-between align-items-start'>
                            <div className="d-flex" style={{ gap: "20px" }}>
                                <div className='announcement_pic'>
                                    <img src={a1} alt="" />
                                </div>
                                <div className='recruiment f_sfPro'>
                                    <p>Player recruitment</p>
                                    <div className="d-flex gap-3">
                                        <div className='d-flex align-items-center' style={{ gap: "6px" }}>
                                            <img src={location} alt="" />
                                            <span>Vegas Street Circuit</span>
                                        </div>
                                        <div className='d-flex align-items-center' style={{ gap: "6px" }}>
                                            <img src={flag} alt="" />
                                            <span>Vegas Street Circuit</span>
                                        </div>
                                        <div className='d-flex align-items-center' style={{ gap: "6px" }}>
                                            <img src={dollar} alt="" />
                                            <span>Vegas Street Circuit</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* icon div */}
                            <div className='d-flex gap-3'>
                                <img src={bookmark} alt="" />
                                <img src={edit2} alt="" />
                                <img src={delet} alt="" />
                            </div>
                        </div>
                        <p className='announcement_details f_sfPro'>We cant wait to share this milestone with our incredible sports community. Your passion and support have fueled our journey, and were thrilled to <br /> take it to the next level together.</p>
                    </div>
                </div>
            </div>

            {/* job */}
            <div className="job" style={{ margin: "30px" }}>
                <div>
                    <p className='title'>Job offer</p>

                    <div className="job_offers_wrapper p-0">
                        <div className="job_offer_items_wrapper">
                            {[1, 2].map(() => (
                                <>
                                    <div className="job_offers_item p-3">
                                        <div className="job_offers_item_content d-flex justify-content-between align-items-center">
                                            <div className="left d-flex align-items-center gap-3">
                                                <div className="job_offer_item_img">
                                                    <img src={footBallCoachImg} alt="img" />
                                                </div>

                                                <div className="job_offer_item_content">
                                                    <div className="job_offer_nameDesignation">
                                                        <h5 className="fw-medium fs-6 text_color_36 mb-1">
                                                            Football Coach
                                                        </h5>

                                                        <p className="fs-14 fw-normal text_color_80 mb-1">
                                                            Korner Kick
                                                        </p>
                                                    </div>

                                                    <div className="job_offerItem_address flex-wrap d-flex align-items-center gap-2 gap-md-4">
                                                        <div className="job_offer_location  d-flex align-items-center gap-1">
                                                            <img src={locationIcon} alt="icon" />
                                                            <span className="fs-14 fw-normal text_color_80">
                                                                Kieke, Poland
                                                            </span>
                                                        </div>

                                                        <div className="job_offer_flag d-flex align-items-center gap-1">
                                                            <img src={flagIcon} alt="icon" />
                                                            <span className="fs-14 fw-normal text_color_80">
                                                                Enlish, Pdish
                                                            </span>
                                                        </div>

                                                        <div className="job_offer_flag d-flex align-items-center gap-1">
                                                            <img src={dollarIcon} alt="icon" />
                                                            <span className="fs-14 fw-normal text_color_80">
                                                                USD 5000
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="right d-flex gap-2">

                                                <img
                                                    className='img-fluid'
                                                    src={bookmark}
                                                    style={{ cursor: "pointer" }}
                                                    alt="icon"
                                                />
                                                <img
                                                    className='img-fluid'
                                                    src={starIcon}
                                                    style={{ cursor: "pointer" }}
                                                    alt="icon"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* player profile */}
            <div className="job" style={{ margin: "30px" }}>
                <div>
                    <p className='title'>Player Profile</p>
                    <div className="job_offers_wrapper p-0">
                        <div className="job_offer_items_wrapper">
                            {[1, 2].map(() => (
                                <>
                                    <div className="job_offers_item p-3">
                                        <div className="job_offers_item_content d-flex justify-content-between align-items-center">
                                            <div className="left d-flex align-items-center gap-3">
                                                <div className="job_offer_item_img">
                                                    <img src={playerprofile} alt="img" />
                                                </div>

                                                <div className="job_offer_item_content">
                                                    <div className="job_offer_nameDesignation">
                                                        <h5 className="fw-medium fs-6 text_color_36 mb-1">
                                                            Jhon Kowalski
                                                        </h5>

                                                        <p className="fs-14 fw-normal text_color_80 mb-1">
                                                            Football
                                                        </p>
                                                    </div>

                                                    <div className="job_offerItem_address flex-wrap d-flex align-items-center gap-2 gap-md-4">
                                                        <div className="job_offer_location  d-flex align-items-center gap-1">
                                                            <img src={locationIcon} alt="icon" />
                                                            <span className="fs-14 fw-normal text_color_80">
                                                                USA
                                                            </span>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>

                                            <div className="right">
                                                <img
                                                    src={bookmark}
                                                    style={{ cursor: "pointer" }}
                                                    alt="icon"
                                                />

                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ObservedClone;