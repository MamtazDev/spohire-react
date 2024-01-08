import { Link } from "react-router-dom";
import footBallCoachImg from "../../../assets/footballCoach.png";
import { useGetAllJobsQuery } from "../../../features/job/jobApi";

const JobOfferOverview = () => {
  const { data: allJobs } = useGetAllJobsQuery();

  return (
    <>
      <div className="job_offer_overrview_wrapper">
        <div className="d-flex justify-content-between">
          <h4>Job Offers</h4>
          {allJobs?.data && allJobs.data?.length > 0 && (
            <Link to="/dashboard/jobOffers">View More</Link>
          )}
        </div>
        {allJobs?.data && allJobs?.data?.length > 0 ? (
          allJobs?.data.slice(0, 3).map((item, idx) => (
            <>
              <div
                key={idx}
                className="d-flex align-items-center gap-2 joboffer_ov_wrapper"
              >
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
                </div>
              </div>
            </>
          ))
        ) : (
          <div className="d-flex justify-content-center py-5">
            No job offers found
          </div>
        )}
      </div>
    </>
  );
};

export default JobOfferOverview;
