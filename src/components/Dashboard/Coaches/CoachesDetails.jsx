/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import profileImage from "../../../assets/coaches-pp.png";
import messageImage from "../../../assets/message.png";
import twitterIcon from "../../../assets/tw_jobOffer.png";
import instagramIcon from "../../../assets/ig_jobOffer.png";
import facebookIcon from "../../../assets/fb_JobOffer.png";
import youtubeIcon from "../../../assets/youtube.png";
import silver from "../../../assets/silver1.png";
import bronze from "../../../assets/bronze.png";
import gold from "../../../assets/gold.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import Gallary from "./../viewDetails/Gallary";
import { useGetUserByIdQuery } from "../../../features/auth/authApi";

const CoachesDetails = () => {
  const { id } = useParams();
  const { data: user } = useGetUserByIdQuery(id);
  // console.log(user, "dd");

  const convertAge = (dateString) => {
    const dob = new Date(dateString);
    const currentDate = new Date();
    const timeDiff = currentDate - dob;
    const age = Math.floor(timeDiff / (365.25 * 24 * 60 * 60 * 1000));
    return age;
  };
  const navigate = useNavigate();
  const handleMessageLink = (id) => {
    navigate(`/dashboard/messages/${id}`);
  };
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
            {user?.subscriptionName ? (
              <button className="gold_btn">
                <img
                  src={
                    user?.subscriptionName === "Gold"
                      ? gold
                      : user?.subscriptionName === "Silver"
                      ? silver
                      : bronze
                  }
                  alt=""
                />{" "}
                {user?.subscriptionName}
              </button>
            ) : (
              <button className="gold_btn">No Plan</button>
            )}
            <p className="text_color_36 f_sfPro fs_40 mb-2">
              {user?.first_name} {user?.last_name}
            </p>
            <span className="d-block f_sfPro text_color_cb fs_28 mb-3">
              {user?.sports}
            </span>
            <div className="personalInfo" style={{ marginRight: "48px" }}>
              <p className="f_sfPro text_color_36 fs_18">
                Personal Information
              </p>
              <button
                className="message"
                onClick={() => handleMessageLink(user?._id)}
              >
                <img className="img-fluid" src={messageImage} alt="Message" />
              </button>
              <div className="row mb_40">
                <div className="col-12 col-md-4">
                  <div className="d-flex flex-column align-items-start gap-3">
                    <div>
                      <span className="f_sfPro text_color_cb fs_15">Name</span>
                      <p className="f_sfPro text_color_36 fs_17">
                        {user?.first_name} {user?.last_name}
                      </p>
                    </div>

                    <div>
                      <span className="f_sfPro text_color_cb fs_15">
                        Nationality-Passport
                      </span>
                      <p className="f_sfPro text_color_36 fs_17">
                        {user?.nationality}
                      </p>
                    </div>

                    {/* <div>
                      <span className="f_sfPro text_color_cb fs_15">
                        Height
                      </span>
                      <p className="f_sfPro text_color_36 fs_17">
                        {user?.height ? user?.height : "N/A"}
                      </p>
                    </div> */}
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="d-flex flex-column align-items-start gap-3">
                    <div>
                      <span className="f_sfPro text_color_cb fs_15">
                        Date of Birth
                      </span>
                      <p className="f_sfPro text_color_36 fs_17">
                        {user?.date_of_birth}
                      </p>
                    </div>

                    <div>
                      <span className="f_sfPro text_color_cb fs_15">
                        Current Club
                      </span>
                      <p className="f_sfPro text_color_36 fs_17">
                        {user?.club_name ? user?.club_name : "N/A"}
                      </p>
                    </div>
                    {/* 
                    <div>
                      <span className="f_sfPro text_color_cb fs_15">
                        Weight
                      </span>
                      <p className="f_sfPro text_color_36 fs_17">
                        {user?.weight ? user?.weight : "N/A"}
                      </p>
                    </div> */}
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="d-flex flex-column align-items-start gap-3">
                    <div>
                      <span className="f_sfPro text_color_cb fs_15">Age</span>
                      <p className="f_sfPro text_color_36 fs_17">
                        {convertAge(user?.date_of_birth)}
                      </p>
                    </div>

                    {/* <div>
                      <span className="f_sfPro text_color_cb fs_15">
                        Dominant Hand
                      </span>
                      <p className="f_sfPro text_color_36 fs_17">Left</p>
                    </div> */}

                    {/* <div>
                      <span className="f_sfPro text_color_cb fs_15">
                        Weight
                      </span>
                      <p className="f_sfPro text_color_36 fs_17">99kg</p>
                    </div> */}
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
                    {user?.social_media.length > 0 &&
                      user?.social_media.map((item, idx) => (
                        <Link to={item} key={idx}>
                          <img
                            src={
                              item?.includes("twitter.com")
                                ? twitterIcon
                                : item?.includes("instagram.com")
                                ? instagramIcon
                                : item?.includes("facebook.com")
                                ? facebookIcon
                                : youtubeIcon
                            }
                            alt=""
                          />
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Personal Info End --> */}
      {/* <!-- Strengths, About Me part Start --> */}
      <div className="strAbout mb_60 ">
        <div className="row justify-content-start about_part">
          <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0 col_padding">
            <p className="f_sfPro text_color_36 fs_18 mb-2">
              Strengths Advantages
            </p>
            <p className="f_sfPro text_color_cb fs_16">
              {user?.strengths_advantage ? user?.strengths_advantage : "N/A"}
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0 col_padding">
            <p className="f_sfPro text_color_36 fs_18 mb-2">About Me</p>
            <p className="f_sfPro text_color_cb fs_16">
              {user?.about_me ? user?.about_me : "N/A"}
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0 col_padding">
            <p className="f_sfPro text_color_36 fs_18 mb-2">
              Expectations From a New Club
            </p>
            <p className="f_sfPro text_color_cb fs_16">
              {user?.expectations_from_new_club
                ? user?.expectations_from_new_club
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Strengths, About Me part End --> */}
      {/* <!-- Slider Start --> */}
      <p
        className="f_sfPro text_color_36 fs_18 mb-4 ps-lg-4"
        style={{ paddingLeft: "24px" }}
      >
        Gallery
      </p>
      <Gallary />
      {/* <!-- Slider End --> */}
    </div>
  );
};

export default CoachesDetails;
