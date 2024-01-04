/* eslint-disable react/prop-types */
import tennis from "../../assets/tennis.png";
import flag from "../../assets/flag.png";
import dollar from "../../assets/coin-dollar.png";
import location from "../../assets/location.png";
import JobCategory from './../Announcement/JobCategory';
import { useGetJobByIdQuery } from "../../features/job/jobApi";
import { useParams } from "react-router-dom";

const sports = [
    "Coach",
    "Administration",
    "Marketing",
    "betting",
    "Customer service",
    "manager",
    "agent",
    "journalist",
    "scout",
    "referee",
];
const country = [
    "Paris",
    "London",
    "Finland",
    "Canada ",
    "Paris",
    "London",
    "Finland",
    "Canada ",
    "Paris",
    "London",
    "Finland",
    "Canada ",
    "Paris",
    "London",
    "Finland",
    "Canada ",
    "Paris",
    "London",
    "Finland",
    "Canada ",
    "Paris",
    "London",
    "Finland",
    "Canada ",
];
const jobcategory = [
    "Full-time",
    "Part-time",
    "Contract",
    "Temporary",
    "Other",
];

const JobDetails = ({ jobId, setSearchParams, searchParams }) => {
    const params = useParams()
    const detailsId = params.id
    const { data: jobDetails } = useGetJobByIdQuery(detailsId);

    console.log("detailspage", jobDetails?.data)
    const data = jobDetails?.data

    return (
        <div className="container">
            <h3 className="job_matches_title">
                We found <span>300</span> Matches for you
            </h3>
            <div className="row">
                <div className="col-lg-9">
                    <div className="matchedJobs_wrapper">
                        <div className="d-flex gap-4 align-items-center">
                            <div className="tennis_logo">
                                <img src={tennis} alt="" />
                            </div>
                            <div className="tennis_desc">
                                <p>{data?.job_title}</p>
                                <small>sfsdf</small>
                            </div>
                        </div>
                        <div className="jobs_details">
                            <div
                                className="d-flex align-items-center"
                                style={{ gap: "10px" }}
                            >
                                <img src={location} alt="" />
                                <span>{data?.job_location}</span>
                            </div>
                            <div
                                className="d-flex align-items-center"
                                style={{ gap: "10px" }}
                            >
                                <img src={flag} alt="" />
                                <span>{data?.workplaceType} </span>
                            </div>
                            <div
                                className="d-flex align-items-center"
                                style={{ gap: "10px" }}
                            >
                                <img src={dollar} alt="" />
                                <span>{data?.salary}</span>
                            </div>
                        </div>
                        {/* description */}
                        <div className="job_details_desc">
                            <h4> Description</h4>
                            <p>{data?.description}.</p>
                            {/* <p>Eros auctor vulputate ornare mauris faucibus fames morbi cursus sed. Aliquet suscipit elementum tincidunt adipiscing diam ac tellus interdum. Sagittis velit vel mattis id commodo dui gravida sit. In elementum odio blandit pretium elit aliquam pellentesque at. Arcu commodo in rhoncus a aliquam augue. Amet imperdiet ultricies eros auctor placerat. Sem sit dictum ultricies habitasse elementum nibh. Consequat odio et a venenatis quam. Quam etiam sit in ac aliquam ac varius pellentesque. Ipsum auctor non est aliquam et tincidunt neque tellus purus. Ullamcorper dictumst cras vel in venenatis morbi. Parturient amet consectetur nisl tristique ultrices turpis. Aenean at ac montes commodo fames nunc dui. Ut placerat cursus vel nulla purus. Quis sagittis ipsum pulvinar quisque a cursus ut ultricies volutpat.</p> */}

                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <JobCategory
                        sports={sports}
                        country={country}
                        jobcategory={jobcategory}
                        setSearchParams={setSearchParams}
                        searchParams={searchParams}
                    />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;