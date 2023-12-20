import "./jobOffers.css";
import footBallCoachImg from "../../../assets/footballCoach.png";
import locationIcon from "../../../assets/location-icon.svg";
import flagIcon from "../../../assets/flag-icon.svg";
import dollarIcon from "../../../assets/dollar-icon.svg";
import b1 from "../../../assets/bookmark.png";
import bookmarkfill from "../../../assets/bookmark-fill.png";
import MobileButtons from "../players/MobileButtons";
import AddJobOffer from "../AddJobOffer/AddJobOffer";
import { useState } from "react";
import { useGetAllJobsQuery } from "../../../features/job/jobApi";

const JobOffers = () => {
  const { data: allJobs } = useGetAllJobsQuery();

  console.log(allJobs, "ddd");

  return (
    <div className="job_offers_wrapper">
      <div className="job_offers_topBtn d-flex align-items-center justify-content-between">
        <div className="job_offers_topBtn_left d-flex gap-4">
          <button className="fs-6 fw-medium text_color_80">Player</button>

          <button className="fs-6 fw-medium text_color_80">Coach</button>
        </div>

        <div className="job_offers_topBtn_right">
          <button className="bg-transparent border-0 text_color_fb">
            Clear All
          </button>
        </div>
      </div>

      <div className="job_offer_items_wrapper">
        {allJobs?.data &&
          allJobs?.data?.length > 0 &&
          allJobs?.data.map((item, index) => (
            <SingleJob key={index} item={item} />
          ))}
      </div>
      <MobileButtons />

      <AddJobOffer />
    </div>
  );
};

export default JobOffers;

function SingleJob({ item }) {
  const [bookmark, setBookmark] = useState(false);

  const handleBookmark = () => {
    setBookmark(!bookmark);
  };
  return (
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
                  {item?.job_title}
                </h5>

                <p className="fs-14 fw-normal text_color_80 mb-1">
                  {item?.company}
                </p>
              </div>

              <div className="job_offerItem_address flex-wrap d-flex align-items-center gap-2 gap-md-4">
                <div className="job_offer_location  d-flex align-items-center gap-1">
                  <img src={locationIcon} alt="icon" />
                  <span className="fs-14 fw-normal text_color_80">
                    {item?.job_location}
                  </span>
                </div>
                {/* <div className="job_offer_flag d-flex align-items-center gap-1">
                  <img src={flagIcon} alt="icon" />
                  <span className="fs-14 fw-normal text_color_80">
                    Enlish, Pdish
                  </span>
                </div> */}

                <div className="job_offer_flag d-flex align-items-center gap-1">
                  <img src={dollarIcon} alt="icon" />
                  <span className="fs-14 fw-normal text_color_80">
                    USD {item?.salary}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <button
              className="bg-none"
              onClick={handleBookmark}
              style={{ width: "20px" }}
            >
              {bookmark ? (
                <img src={bookmarkfill} alt="" />
              ) : (
                <img src={b1} alt="" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
