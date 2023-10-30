import profileImage from "../../../assets/mobile_profile.png";
// import messageImage from "../../../assets/chatIconmb.png";
// import messageImage from "../../../assets/message.png";
// import star from "../../../assets/stariconmb.png";
import twitterIcon from "../../../assets/tw_jobOffer.png";
import instagramIcon from "../../../assets/ig_jobOffer.png";
import facebookIcon from "../../../assets/fb_JobOffer.png";
import youtubeIcon from "../../../assets/youtube.png";
import edit from "../../../assets/edit.png";

const ViewDetailsMobile = () => {
  return (
    <>
      <div className="job_offer mobile_design_vd">
        <div className="d-flex justify-content-between mb-5">
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
          {/* <div className="d-flex gap-0 ">
            <img className="" src={messageImage} alt="Message" />
            <img className="" src={star} alt="Message" />
          </div> */}
        </div>

        {/* PERSONAL INFO */}
        <div className="personalInfo mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <p className="f_sfPro text_color_36 fs_18 info_title_mobile  d-flex align-items-center">
              Personal Information
            </p>
            <img src={edit} alt="" />
          </div>

          <button className="message"></button>
          <div className="row mb_40">
            <div className=" col-4">
              <div className="d-flex flex-column align-items-start gap-3">
                <div>
                  <span className="f_sfPro text_color_cb fs_15">Name</span>
                  <p className="f_sfPro text_color_36 fs_17">Jhon Kawalski</p>
                </div>

                <div>
                  <span className="f_sfPro text_color_cb fs_15">
                    Nationality-Passport
                  </span>
                  <p className="f_sfPro text_color_36 fs_17">USA</p>
                </div>

                <div>
                  <span className="f_sfPro text_color_cb fs_15">Height</span>
                  <p className="f_sfPro text_color_36 fs_17">2.03m</p>
                </div>
              </div>
            </div>

            <div className=" col-4">
              <div className="d-flex flex-column align-items-start gap-3">
                <div>
                  <span className="f_sfPro text_color_cb fs_15">
                    Date of Birth
                  </span>
                  <p className="f_sfPro text_color_36 fs_17">03/03/2002</p>
                </div>

                <div>
                  <span className="f_sfPro text_color_cb fs_15">Position</span>
                  <p className="f_sfPro text_color_36 fs_17">PG</p>
                </div>

                <div>
                  <span className="f_sfPro text_color_cb fs_15">Weight</span>
                  <p className="f_sfPro text_color_36 fs_17">99kg</p>
                </div>
              </div>
            </div>

            <div className="col-4">
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
                  <span className="f_sfPro text_color_cb fs_15">Weight</span>
                  <p className="f_sfPro text_color_36 fs_17">99kg</p>
                </div>
              </div>
            </div>
          </div>
          <div>
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
                  <img src={twitterIcon} alt="Twitter" />
                </a>
                <a href="#">
                  <img src={instagramIcon} alt="Instagram" />
                </a>
                <a href="#">
                  <img src={facebookIcon} alt="FaceBook" />
                </a>
                <a href="#">
                  <img src={youtubeIcon} alt="Youtube" />
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
