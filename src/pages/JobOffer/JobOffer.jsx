import { useState } from "react";
import "./JobOffer.css";
import JobOfferHeader from "./JobOfferHeader";
import MatchesJob from "./MatchesJob";
const JobOffer = () => {
  const [filterItems, setFilterItems] = useState({});
  const [searchParams, setSearchParams] = useState({});

  return (
    <div>
      <JobOfferHeader
        setFilterItems={setFilterItems}
        filterItems={filterItems}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
      <MatchesJob
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </div>
  );
};

export default JobOffer;
