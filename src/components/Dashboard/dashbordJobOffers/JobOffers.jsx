import "./jobOffers.css";
import footBallCoachImg from "../../../assets/footballCoach.png";
import locationIcon from "../../../assets/location-icon.svg";
import flagIcon from "../../../assets/flag-icon.svg";
import dollarIcon from "../../../assets/dollar-icon.svg";
import starIcon from "../../../assets/starIcon.svg";
import MobileButtons from "../players/MobileButtons";

const JobOffers = () => {
  return (
    <div className="job_offers_wrapper">
      <div className="job_offers_topBtn d-flex align-items-center justify-content-between">
        <div className="job_offers_topBtn_left d-flex gap-4">
          <button className="fs-6 fw-medium text_color_80">Hybrid</button>

          <button className="fs-6 fw-medium text_color_80">In Italy</button>
        </div>

        <div className="job_offers_topBtn_right">
          <button className="bg-transparent border-0 text_color_fb">
            Clear All
          </button>
        </div>
      </div>

      <div className="job_offer_items_wrapper">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
          <>
            <div className="job_offers_item p-3">
              <div className="job_offers_item_content d-flex flex-wrap justify-content-between align-items-center">
                <div className="left d-flex gap-4">
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
                      <div className="job_offer_location  d-flex flex-wrap align-items-center gap-2">
                        <img src={locationIcon} alt="icon" />
                        <span className="fs-14 fw-normal text_color_80">
                          Kieke, Poland
                        </span>
                      </div>

                      <div className="job_offer_flag d-flex align-items-center gap-2">
                        <img src={flagIcon} alt="icon" />
                        <span className="fs-14 fw-normal text_color_80">
                          Enlish, Pdish
                        </span>
                      </div>

                      <div className="job_offer_flag d-flex align-items-center gap-2">
                        <img src={dollarIcon} alt="icon" />
                        <span className="fs-14 fw-normal text_color_80">
                          USD 5000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="right">
                  <img
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
      <MobileButtons />
    </div>
  );
};

export default JobOffers;
