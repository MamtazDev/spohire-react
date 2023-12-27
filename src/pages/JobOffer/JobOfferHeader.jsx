/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";

const JobOfferHeader = ({ filterItems, setFilterItems, setSearchParams }) => {
  console.log(filterItems, "filteritems")
  const handleSearch = () => {
    setSearchParams(filterItems);
  };

  const options = [
    { value: "Coach administration", label: "Coach administration" },
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
        // Assuming response.data is an array of objects with a 'name' property
        // console.log(response);
        setCountryNames(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setFilterItems({
      ...filterItems,
      'jobLocation': selectedOption.value
    })
  };
  const handleChangeJobType = (selectedOption) => {
    setSelectedJobType(selectedOption);
    setFilterItems({
      ...filterItems,
      'jobType': selectedOption.value
    })
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

            <Select
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
            />
            <Select
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

            />

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
