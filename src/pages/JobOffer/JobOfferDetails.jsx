import Description from "./Details/Description";
import DetailsHeader from "./Details/DetailsHeader";
import JobOverview from "./Details/JobOverview";
import Salary from "./Details/Salary";

const JobOfferDetails = () => {
  return (
    <div>
      <DetailsHeader />
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-7">
            <Description />
          </div>
          <div className="col-lg-5">
            <Salary />
            <JobOverview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOfferDetails;
