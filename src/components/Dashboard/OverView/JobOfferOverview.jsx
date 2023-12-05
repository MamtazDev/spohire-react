import footBallCoachImg from "../../../assets/footballCoach.png";

const JobOfferOverview = () => {
    return (
        <>
            <div className="job_offer_overrview_wrapper">
                <div className="d-flex justify-content-between">
                    <h4>Job Offers</h4>
                    <a href="/dashboard/jobOffers">View More</a>
                </div>
                {
                    [1, 2, 3].map(data => (
                        <>
                            <div key={data} className="d-flex align-items-center gap-2 joboffer_ov_wrapper">
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
                                </div>
                            </div>
                        </>
                    ))
                }

            </div>


        </>
    );
};

export default JobOfferOverview;