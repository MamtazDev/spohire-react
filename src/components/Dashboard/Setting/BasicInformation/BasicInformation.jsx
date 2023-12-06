import profileImage from "../../../../Linkssets/basicinfo.png";
import messageImage from "../../../../Linkssets/message.png";
import twitterIcon from "../../../../Linkssets/tw_jobOffer.png";
import instagramIcon from "../../../../Linkssets/ig_jobOffer.png";
import facebookIcon from "../../../../Linkssets/fb_JobOffer.png";
import youtubeIcon from "../../../../Linkssets/youtube.png";
import gold from "../../../../Linkssets/gold.png";
import Gallary from "../../viewDetails/Gallary";
import ViewDetailsMobile from "../../viewDetails/ViewDetailsMobile";
import './BasicInfo.css';
import { Link } from "react-router-dom";

const BasicInformation = () => {

    return (
        <>
            <div className="View_details container p-0 overflow-hidden">
                <div className="job_offer desktop_vd  ps-lg-0 pe-lg-0">
                    <div className="row">
                        <div className="col-12 col-lg-3 ">
                            <div className="" style={{ marginLeft: "77px" }}>
                                <img className="img-fluid" src={profileImage} alt="Profile" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-9">
                            <button className="gold_btn"><img src={gold} alt="" /> Gold</button>
                            <p className="text_color_36 f_sfPro fs_40 mb-2">Emily Sinclair</p>
                            <span className="d-block f_sfPro text_color_cb fs_28 mb-4">
                                Manager
                            </span>
                            <div className="personalInfo">
                                <p className="f_sfPro text_color_36 fs_18">
                                    Personal Information
                                </p>
                                <button className="message">
                                    <img className="img-fluid" src={messageImage} alt="Message" />
                                </button>
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
                                                    Dominant Hand{" "}
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
                                    {" "}
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
                                to the opportunity to contribute to the clubs success, aiming to
                                make a positive impact both on and off the court. Additionally, I
                                expect to receive the necessary resources.
                                <Link
                                    to="#"
                                    className="f_sfPro fs_16"
                                    style={{ color: "#0177FB" }}
                                >
                                    {" "}
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
        </>
    );
};

export default BasicInformation;