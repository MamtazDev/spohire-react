/* eslint-disable react/prop-types */
import tennis from "../../assets/tennis.png";
import flag from "../../assets/flag.png";
import dollar from "../../assets/coin-dollar.png";
import location from "../../assets/location.png";
import ApplyJobs from "./ApplyJobs";
import { useGetAllJobsQuery } from "../../features/job/jobApi";
import { useState } from "react";
import JobCategory from "../Announcement/JobCategory";
import { Link } from "react-router-dom";
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

const MatchesJob = ({ searchParams, setSearchParams }) => {
  const { data: allJobs } = useGetAllJobsQuery();
  const [selectedJob, setSelectedJob] = useState(null);

  console.log(searchParams, "paramsssss");

  const filteredJobs = allJobs?.data?.filter((value) => {
    if (
      searchParams?.jobTitle ||
      searchParams?.jobLocation?.length > 0 ||
      searchParams?.jobType?.length > 0 ||
      searchParams?.jobTypeCate?.length > 0
    ) {
      return (
        (searchParams.jobTitle &&
          value?.job_title
            .toLowerCase()
            .includes(searchParams.jobTitle.toLowerCase())) ||
        (searchParams.jobLocation?.length > 0 &&
          searchParams.jobLocation?.includes(value?.country)) ||
        (searchParams.jobType?.length > 0 &&
          searchParams.jobType.includes(value?.role)) ||
        (searchParams?.jobTypeCate?.length > 0 &&
          searchParams?.jobTypeCate.includes(value?.jobType))
      );
    } else {
      return true;
    }
    // return true;
  });

  // const handleFilter = (value) => {};

  console.log(allJobs, "jooobbbb");

  return (
    <>
      <div className="container">
        <h3 className="job_matches_title">
          We found <span>{filteredJobs?.length}</span> Matches for you
        </h3>
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              {allJobs?.data &&
                allJobs?.data?.length > 0 &&
                filteredJobs.map((item, idx) => (
                  <div className="col-lg-6" key={idx}>
                    <div className="matchedJobs_wrapper">
                      <div className="d-flex gap-4 align-items-center">
                        <div className="tennis_logo">
                          <img src={tennis} alt="" />
                        </div>
                        <div className="tennis_desc">
                          <p>{item?.job_title}</p>
                          <small>{item?.company}</small>
                        </div>
                      </div>
                      <div className="jobs_details">
                        <div
                          className="d-flex align-items-center"
                          style={{ gap: "10px" }}
                        >
                          <img src={location} alt="" />
                          <span>{item?.job_location}</span>
                        </div>
                        <div
                          className="d-flex align-items-center"
                          style={{ gap: "10px" }}
                        >
                          <img src={flag} alt="" />
                          <span>{item?.jobType} </span>
                        </div>
                        <div
                          className="d-flex align-items-center"
                          style={{ gap: "10px" }}
                        >
                          <img src={dollar} alt="" />
                          <span>{item?.salary}</span>
                        </div>
                      </div>
                      <button
                        className="apply_btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => setSelectedJob(item?._id)}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            {/* pagination */}
            <nav aria-label="">
              <ul className="pagination d-flex justify-content-center gap-3">
                <li className="page-item disabled">
                  <span className="page-link">
                    <i className="fa fa-angle-left"></i>
                  </span>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item ">
                  <span className="page-link">
                    2<span className="sr-only">(current)</span>
                  </span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    <i className="fa fa-angle-right"></i>
                  </Link>
                </li>
              </ul>
            </nav>
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
      <ApplyJobs selectedJob={selectedJob} />
    </>
  );
};

export default MatchesJob;
