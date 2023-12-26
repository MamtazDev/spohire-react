const JobOfferHeader = ({ filterItems, setFilterItems, setSearchParams }) => {
  const handleSearch = () => {
    setSearchParams(filterItems);
  };
  return (
    <>
      <div className="page_header f_SF Pro Display">
        <h2>
          <span>3,000+</span> Browse Jobs
        </h2>
        <p>Find Jobs, Employment & Career Opportunities</p>
        <div className="search_jobs">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Keywords e.g ( job Title, description)"
              onChange={(e) =>
                setFilterItems({ ...filterItems, jobTitle: e.target.value })
              }
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Select Location"
              onChange={(e) =>
                setFilterItems({ ...filterItems, jobLocation: e.target.value })
              }
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Job Type"
              onChange={(e) =>
                setFilterItems({ ...filterItems, jobType: e.target.value })
              }
            />
            <button
              type="button"
              className="jobsearchbtn"
              onClick={handleSearch}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default JobOfferHeader;
