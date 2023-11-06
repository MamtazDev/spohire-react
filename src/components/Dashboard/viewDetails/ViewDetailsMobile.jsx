import profileImage from "../../../assets/mobile_profile.png";
import messageImage from "../../../assets/chatIconmb.png";
// import messageImage from "../../../assets/message.png";
import star from "../../../assets/stariconmb.png";
import twitterIcon from "../../../assets/tw_jobOffer.png";
import instagramIcon from "../../../assets/ig_jobOffer.png";
import facebookIcon from "../../../assets/fb_JobOffer.png";
import youtubeIcon from "../../../assets/youtube.png";
import edit from "../../../assets/edit.png";

const ViewDetailsMobile = () => {
  return (
    <>
      <div className="job_offer mobile_design_vd">
        <div className="d-flex justify-content-between mb-5  p_35">
          <div className="d-flex gap-3 ">
            <div className="">
              <img className="img-fluid" src={profileImage} alt="Profile" />
            </div>

            <div>
              <p className="text_color_36 f_sfPro fs_20 mb-2">Jhon Kowalski</p>
              <span className="d-block f_sfPro text_color_cb fs_16">
                Basketball
              </span>
            </div>
          </div>

          {/* img */}
          <div className="smallMsg d-flex gap-2">
            <button>
              <img className="img-fluid" src={star} alt="Star" />
            </button>
            <button>
              <img className="img-fluid" src={messageImage} alt="Message" />
            </button>
          </div>
        </div>

        {/* PERSONAL INFO */}
        <div className="personalInfo m_35">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <p className="f_sfPro text_color_36 fs_18 info_title_mobile  d-flex align-items-center">
              Personal Information
            </p>
            <button className="edit_Btn">
              <img src={edit} alt="" />
            </button>
          </div>

          <button className="message"></button>
          <div className="row mb-2">
            <div className="col-4">
              <div>
                <span className="f_sfPro text_color_cb fs_15">Name</span>
                <p className="f_sfPro text_color_36 fs_17">Jhon Kawalski</p>
              </div>
            </div>
            <div className="col-4">
              <div>
                <span className="f_sfPro text_color_cb fs_15">
                  Date of Birth
                </span>
                <p className="f_sfPro text_color_36 fs_17">03/03/2002</p>
              </div>
            </div>

            <div className="col-4">
              <div>
                <span className="f_sfPro text_color_cb fs_15">Age</span>
                <p className="f_sfPro text_color_36 fs_17">21</p>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-4">
              <span className="f_sfPro text_color_cb fs_15 textWrap">
                Nationality-Passport
              </span>
              <p className="f_sfPro text_color_36 fs_17">USA</p>
            </div>
            <div className="col-4">
              <span className="f_sfPro text_color_cb fs_15">Position</span>
              <p className="f_sfPro text_color_36 fs_17">PG</p>
            </div>

            <div className="col-4">
              <span className="f_sfPro text_color_cb fs_15">
                Dominant Hand{" "}
              </span>
              <p className="f_sfPro text_color_36 fs_17">Left</p>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <div>
                <div>
                  <span className="f_sfPro text_color_cb fs_15">Height</span>
                  <p className="f_sfPro text_color_36 fs_17">2.03m</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div>
                <span className="f_sfPro text_color_cb fs_15">Weight</span>
                <p className="f_sfPro text_color_36 fs_17">99kg</p>
              </div>
            </div>

            <div className="col-4">
              <div>
                <span className="f_sfPro text_color_cb fs_15">Weight</span>
                <p className="f_sfPro text_color_36 fs_17">99kg</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '20px' }}>
            <p className="f_sfPro text_color_cb fs_15 mb-2">Experience</p>
            <div className="d-flex  flex-lg-row align-items-start gap-5">
              <div>
                <p className="f_sfPro text_color_36 fs_18 info_title_mobile">
                  2003-2010 Cleveland Cavaliers
                </p>
                <p className="f_sfPro text_color_36 fs_18 info_title_mobile">
                  2010–2014 Miami Heat{" "}
                </p>
                <p className="f_sfPro text_color_36 fs_18 info_title_mobile">
                  2014–2018 Cleveland Cavaliers
                </p>
                <p className="f_sfPro text_color_36 fs_18 info_title_mobile">
                  2018–present Los Angeles Lakers
                </p>
              </div>
              <div className="d-flex gap-2">
                <a href="#">
                  <img src={twitterIcon} className="social_icon" alt="Twitter" />
                </a>
                <a href="#">
                  <img src={instagramIcon} className="social_icon" alt="Instagram" />
                </a>
                <a href="#">
                  <img src={facebookIcon} className="social_icon" alt="FaceBook" />
                </a>
                <a href="#">
                  <img src={youtubeIcon} className="social_icon" alt="Youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetailsMobile;
