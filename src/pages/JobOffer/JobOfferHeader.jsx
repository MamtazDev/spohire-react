/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const JobOfferHeader = ({
  filterItems,
  setFilterItems,
  setSearchParams,
  searchParams,
}) => {
  const handleSearch = () => {
    setSearchParams(filterItems);
  };

  const options = [
    { value: "Coach", label: "Coach" },
    { value: "Administration", label: "Administration" },
    { value: "Marketing", label: "Marketing" },
    { value: "Betting", label: "Betting" },
    { value: "Customer service", label: "Customer service" },
    { value: "Manager", label: "Manager" },
    { value: "Agent", label: "Agent" },
    { value: "Journalist", label: "Journalist" },
    { value: "Scout", label: "Scout" },
    { value: "Referee", label: "Referee" },
  ];

  const allOptions = [
    "Coach",
    "Administration",
    "Marketing",
    "Betting",
    "Customer service",
    "Manager",
    "Agent",
    "Journalist",
    "Scout",
    "Referee",
  ];
  const [countryNames, setCountryNames] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedJobType, setSelectedJobType] = useState(null);

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleCheckboxChange = (event, name) => {
    event.preventDefault(); // Prevent the default behavior to keep the dropdown open

    if (searchParams?.jobLocation?.includes(name)) {
      const newSelectedCountries = searchParams?.jobLocation?.filter(
        (i) => i !== name
      );
      setSearchParams({ ...searchParams, jobLocation: newSelectedCountries });
    } else {
      const previousjobLocation = searchParams?.jobLocation || [];
      setSearchParams({
        ...searchParams,
        jobLocation: [...previousjobLocation, name],
      });
    }
  };

  const handleDocumentClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const handleClear = () => {
    setSearchParams({});
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json"
      )
      .then(function (response) {
        setCountryNames(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    // setSelectedCountry(selectedOption);
    setFilterItems({
      ...filterItems,
      jobLocation: [e.target.value],
    });
  };
  const handleChangeJobType = (e) => {
    if (e.target.value === "All") {
      setFilterItems({
        ...filterItems,
        jobType: [...allOptions],
      });
    } else {
      setFilterItems({
        ...filterItems,
        jobType: [e.target.value],
      });
    }
  };
  return (
    <>
      <div className="jobsearch_page page_header f_SF Pro Display">
        <h2>
          <span>3,000+</span> Browse Jobs
        </h2>
        <p>Find Jobs, Employment & Career Opportunities</p>
        <div className="search_jobs">
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ width: "308px" }}>
              <input
                type="text"
                name=""
                id=""
                className="w-100"
                placeholder="Keywords e.g ( job Title, description)"
                onChange={(e) =>
                  setFilterItems({ ...filterItems, jobTitle: e.target.value })
                }
              />
            </div>

            {/* <Select
              style={{ minHeight: "50px" }}
              options={countryNames.map((country) => ({
                value: country.name,
                label: country.name,
              }))}
              value={selectedCountry}
              onChange={handleChange}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  minHeight: "50px",
                  backgroundColor: "#FAFAFA",
                }),

                container: (baseStyles) => ({
                  ...baseStyles,
                  width: "268px",
                }),

                valueContainer: (baseStyles) => ({
                  ...baseStyles,
                  padding: "0 5px",
                }),
                placeholder: (baseStyles) => ({
                  ...baseStyles,
                  color: "#9CA3A9",
                  fontSize: "10px",
                }),
                menuList: (baseStyles) => ({
                  ...baseStyles,
                  fontSize: "16px",
                }),
                singleValue: (baseStyles) => ({
                  ...baseStyles,
                  fontSize: "14px",
                }),
                indicatorsContainer: (baseStyles) => ({
                  ...baseStyles,
                  padding: "0px !important",
                }),
                indicatorSeparator: (baseStyles) => ({
                  ...baseStyles,
                  display: "none",
                  margin: "0",
                  width: "0",
                }),
              }}
            /> */}

            <div className="dropdown " ref={dropdownRef}>
              <button
                className="btn dropdown-toggle country-dropdown "
                type="button"
                id="dropdownMenuButton"
                aria-haspopup="true"
                aria-expanded={showDropdown}
                onClick={() => setShowDropdown(!showDropdown)}
                style={{ whiteSpace: "nowrap" }}
              >
                Select Countries
              </button>
              {showDropdown && (
                <div
                  className="dropdown-menu show"
                  aria-labelledby="dropdownMenuButton"
                  style={{
                    maxHeight: "500px",
                    overflowY: "auto",
                    width: "300px",
                  }}
                  onMouseDown={(event) => event.stopPropagation()} // Prevent event propagation
                >
                  {countryNames.map((name, index) => (
                    <div key={index} className="form-check">
                      <div
                        className="d-flex align-items-center"
                        style={{ cursor: "pointer" }}
                        onClick={(event) =>
                          handleCheckboxChange(event, name.name)
                        }
                      >
                        <div style={{ width: "20px", marginRight: "5px" }}>
                          {searchParams?.jobLocation?.includes(name.name) && (
                            <>&#10003;</>
                          )}
                        </div>
                        <label
                          className="form-check-label"
                          htmlFor={`flexCheck${name.name}`}
                          style={{ cursor: "pointer" }}
                        >
                          {name.name}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <select
              className="form-select"
              aria-label="Default select example"
              style={{
                height: "50px",
                backgroundColor: "",
                border: "1px solid #F0F0F0",
                width: "268px",
              }}
              name="country"
              onChange={handleChangeJobType}
            >
              <option value="All" className="">
                All
              </option>
              {options.map((name, index) => (
                <option value={name?.value} className="" key={index}>
                  {name.value}
                </option>
              ))}
            </select>
            {/* <Select
              onChange={handleChangeJobType}
              style={{ minHeight: "50px" }}
              options={options}
              value={options.label}
              placeholder="Select job type"
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  minHeight: "50px",
                  backgroundColor: "#FAFAFA",
                }),

                container: (baseStyles) => ({
                  ...baseStyles,
                  width: "268px",
                }),

                valueContainer: (baseStyles) => ({
                  ...baseStyles,
                  padding: "0 5px",
                }),
                placeholder: (baseStyles) => ({
                  ...baseStyles,
                  color: "#9CA3A9",
                  fontSize: "10px",
                }),
                menuList: (baseStyles) => ({
                  ...baseStyles,
                  fontSize: "16px",
                }),
                singleValue: (baseStyles) => ({
                  ...baseStyles,
                  fontSize: "14px",
                }),
                indicatorsContainer: (baseStyles) => ({
                  ...baseStyles,
                  padding: "0px !important",
                }),
                indicatorSeparator: (baseStyles) => ({
                  ...baseStyles,
                  display: "none",
                  margin: "0",
                  width: "0",
                }),
              }}
            /> */}

            <button
              type="button"
              className="jobsearchbtn"
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              type="button"
              className="jobsearchbtn "
              onClick={handleClear}
              style={{ backgroundColor: "#8b4eb4" }}
            >
              Clear All
            </button>
            {/* </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default JobOfferHeader;
