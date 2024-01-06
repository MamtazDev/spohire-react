/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

const JobOfferHeader = ({ filterItems, setFilterItems, setSearchParams, searchParams }) => {
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
  const [countryNames, setCountryNames] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedJobType, setSelectedJobType] = useState(null);

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

    setFilterItems({
      ...filterItems,
      jobType: [e.target.value],
    });
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
              onChange={handleChange}
            >
              {countryNames.map((name, index) => (
                <option value={name?.name} className="" key={index}>
                  {searchParams?.jobLocation?.includes(name?.name) && <>&#x2713;</>} {name.name}
                </option>

              ))}
            </select>
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
            {/* </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default JobOfferHeader;
