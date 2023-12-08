/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import "./ViewDetails.css";
import profileImage from "../../../assets/profile_jobOffer.png";
import messageImage from "../../../assets/message.png";
import twitterIcon from "../../../assets/tw_jobOffer.png";
import instagramIcon from "../../../assets/ig_jobOffer.png";
import facebookIcon from "../../../assets/fb_JobOffer.png";
import youtubeIcon from "../../../assets/youtube.png";
import silver from "../../../assets/silver1.png";
import ViewDetailsMobile from "./ViewDetailsMobile";
import Gallary from "./Gallary";
import { Link } from "react-router-dom";

const ViewProfile = () => {
    return (
        <div className="View_details container p-0 overflow-hidden">
            {/* <!-- Personal Info Start --> */}
            <div className="job_offer desktop_vd  ps-lg-0 pe-lg-0">
                <div className="row">
                    <div className="col-12 col-lg-3 ">
                        <div className="">
                            <img className="img-fluid" src={profileImage} alt="Profile" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-9">
                        <button className="gold_btn"><img src={silver} alt="" /> Silver</button>
                        <p className="text_color_36 f_sfPro fs_40 mb-2">Jhon Kowalski</p>
                        <span className="d-block f_sfPro text_color_cb fs_28 mb-3">
                            Basketball
                        </span>
                        <button className="edit_player_profile"><Link to="/dashboard/editPlayerDetals">Edit Profile</Link></button>
                        <div className="personalInfo" style={{ marginRight: "48px" }}>
                            <p className="f_sfPro text_color_36 fs_18">
                                Personal Information
                            </p>
                            {/* <button className="message">
                                <img className="img-fluid" src={messageImage} alt="Message" />
                            </button> */}
                            <div className="row mb_40">
                                <div className="col-12 col-md-4">
                                    <div className="d-flex flex-column align-items-start gap-3">
                                        <div>
                                            <span className="f_sfPro text_color_cb fs_15">Name</span>
                                            <p className="f_sfPro text_color_36 fs_17">
                                                Jhon Kawalski
                                            </p>
                                        </div>

                                        <div>
                                            <span className="f_sfPro text_color_cb fs_15">
                                                Nationality-Passport
                                            </span>
                                            <p className="f_sfPro text_color_36 fs_17">USA</p>
                                        </div>

                                        <div>
                                            <span className="f_sfPro text_color_cb fs_15">
                                                Height
                                            </span>
                                            <p className="f_sfPro text_color_36 fs_17">2.03m</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-4">
                                    <div className="d-flex flex-column align-items-start gap-3">
                                        <div>
                                            <span className="f_sfPro text_color_cb fs_15">
                                                Date of Birth
                                            </span>
                                            <p className="f_sfPro text_color_36 fs_17">03/03/2002</p>
                                        </div>

                                        <div>
                                            <span className="f_sfPro text_color_cb fs_15">
                                                Position
                                            </span>
                                            <p className="f_sfPro text_color_36 fs_17">PG</p>
                                        </div>

                                        <div>
                                            <span className="f_sfPro text_color_cb fs_15">
                                                Weight
                                            </span>
                                            <p className="f_sfPro text_color_36 fs_17">99kg</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-4">
                                    <div className="d-flex flex-column align-items-start gap-3">
                                        <div>
                                            <span className="f_sfPro text_color_cb fs_15">Age</span>
                                            <p className="f_sfPro text_color_36 fs_17">21</p>
                                        </div>

                                        <div>
                                            <span className="f_sfPro text_color_cb fs_15">
                                                Dominant Hand
                                            </span>
                                            <p className="f_sfPro text_color_36 fs_17">Left</p>
                                        </div>

                                        <div>
                                            <span className="f_sfPro text_color_cb fs_15">
                                                Weight
                                            </span>
                                            <p className="f_sfPro text_color_36 fs_17">99kg</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="f_sfPro text_color_cb fs_15 mb-2">Experience</p>
                                <div className="d-flex flex-column flex-lg-row align-items-start gap-5">
                                    <div>
                                        <p className="f_sfPro text_color_36 fs_18">
                                            2003-2010 Cleveland Cavaliers
                                        </p>
                                        <p className="f_sfPro text_color_36 fs_18">
                                            2010–2014 Miami Heat{" "}
                                        </p>
                                        <p className="f_sfPro text_color_36 fs_18">
                                            2014–2018 Cleveland Cavaliers
                                        </p>
                                        <p className="f_sfPro text_color_36 fs_18">
                                            2018–present Los Angeles Lakers
                                        </p>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <Link to="#">
                                            <img src={twitterIcon} alt="Twitter" />
                                        </Link>
                                        <Link to="#">
                                            <img src={instagramIcon} alt="Instagram" />
                                        </Link>
                                        <Link to="#">
                                            <img src={facebookIcon} alt="FaceBook" />
                                        </Link>
                                        <Link to="#">
                                            <img src={youtubeIcon} alt="Youtube" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ViewDetailsMobile />
            {/* <!-- Personal Info End --> */}
            {/* <!-- Strengths, About Me part Start --> */}
            <div className="strAbout mb_60 ">
                <div className="row justify-content-start about_part">
                    <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0 col_padding">
                        <p className="f_sfPro text_color_36 fs_18 mb-2">
                            Strengths Advantages
                        </p>
                        <p className="f_sfPro text_color_cb fs_16">
                            Here are some of my notable strengths: Height and Wingspan: I am
                            blessed with a tall stature and a remarkable wingspan, which give
                            me a significant advantage in both offense and defense. My height
                            allows me to effectively contest shots,
                            <Link
                                to="#"
                                className="f_sfPro fs_16"
                                style={{ color: "#0177FB" }}
                            >
                                See More
                            </Link>
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0 col_padding">
                        <p className="f_sfPro text_color_36 fs_18 mb-2">About Me</p>
                        <p className="f_sfPro text_color_cb fs_16">
                            I started playing basketball because of my original favorite
                            player, Shaquille O’Neal. He was a huge, unstoppable guy. One who
                            was able to do the things that the smaller players did. So one
                            day, when I was 11-years old, I decided to go outside to the
                            family basketball hoop and take a shot. The basket was originally
                            for my sister.
                            <Link
                                to="#"
                                className="f_sfPro fs_16"
                                style={{ color: "#0177FB" }}
                            >
                                See More
                            </Link>
                        </p>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0 col_padding">
                        <p className="f_sfPro text_color_36 fs_18 mb-2">
                            Expectations From a New Club
                        </p>
                        <p className="f_sfPro text_color_cb fs_16">
                            Hope to find a supportive and cohesive team environment where
                            their skills can thrive and be appreciated. I eagerly look forward
                            to the opportunity to contribute to the club's success, aiming to
                            make a positive impact both on and off the court. Additionally, I
                            expect to receive the necessary resources.
                            <Link
                                to="#"
                                className="f_sfPro fs_16"
                                style={{ color: "#0177FB" }}
                            >
                                See More
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            {/* <!-- Strengths, About Me part End --> */}
            {/* <!-- Slider Start --> */}
            <p className="f_sfPro text_color_36 fs_18 mb-4 ps-lg-4" style={{ paddingLeft: "24px" }}>Gallery</p>
            <Gallary />
            {/* <!-- Slider End --> */}
        </div>
    );
};

export default ViewProfile;
