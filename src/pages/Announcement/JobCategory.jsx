/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import plus2 from "../../assets/plus2.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

// const sports = [
//   "Football",
//   "Basketball",
//   "Handball",
//   "Volleyball",
// ];
// const jobLocations = [
//   "Paris",
//   "London",
//   "Finland",
//   "Canada     ",

// ];
// const jobcategory = [
//   "Tournament",
//   "Championship",
// ];

const JobCategory = ({
  sortedItems,
  setSortedItems,
  sports,
  country,
  jobcategory,
}) => {
  const [checkboxStates, setCheckboxStates] = useState({
    football: false,
    basketball: false,
    handball: false,
    volleyball: false,
  });
  const [functionStates, setFunctionStates] = useState({
    football: false,
    basketball: false,
    handball: false,
    volleyball: false,
  });

  const handleCheckboxClick = (sport) => {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [sport.toLowerCase()]: !prevStates[sport.toLowerCase()],
    }));
  };
  const handleFunctionClick = (sport) => {
    setFunctionStates((prevStates) => ({
      ...prevStates,
      [sport.toLowerCase()]: !prevStates[sport.toLowerCase()],
    }));
  };

  // display sports
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll((prev) => !prev);
  };
  const displayedSports = showAll ? sports : sports.slice(0, 4);

  // job location  show more setting start //
  const [countryNames, setCountryNames] = useState([]);
  const [showAlljobLocations, setShowAlljobLocations] = useState(false);
  const handleShowjobLocationsMore = () => {
    setShowAlljobLocations((prev) => !prev);
  };
  const displayedJobLocations = showAlljobLocations
    ? countryNames
    : countryNames.slice(0, 4);

  // filltering

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSelectedCategory = (value) => {
    if (selectedCategories?.includes(value)) {
      const newSelectedCategories = selectedCategories.filter(
        (i) => i !== value
      );
      setSelectedCategories(newSelectedCategories);
    } else {
      setSelectedCategories((current) => [...current, value]);
    }
  };

  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleSelectedCountries = (value) => {
    if (selectedCountries?.includes(value)) {
      const newSelectedCountries = selectedCountries.filter((i) => i !== value);
      setSelectedCountries(newSelectedCountries);
    } else {
      setSelectedCountries((current) => [...current, value]);
    }
  };

  const [selectecJobTypes, setSelectedJobTypes] = useState([]);

  const handleJobType = (value) => {
    if (selectecJobTypes?.includes(value)) {
      const newSelectedJobTypes = selectecJobTypes.filter((i) => i !== value);
      setSelectedJobTypes(newSelectedJobTypes);
    } else {
      setSelectedJobTypes((current) => [...current, value]);
    }
  };

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
  // job location  show more setting end //

  // sorting functions

  const handleSoritng = (value) => {
    if (sortedItems.includes(value)) {
      const newItems = sortedItems.filter((i) => i !== value);
      setSortedItems(newItems);
    } else {
      setSortedItems((prev) => [...prev, value]);
    }
  };

  console.log(checkboxStates, "checkboxStates");

  return (
    <div>
      <div className="category_wrapper">
        <div className="blue_cat">
          <p>Category</p>
        </div>

        <div
          className="white_category_part"
          style={{ height: "287px", overflowY: "scroll" }}
        >
          {displayedSports.map((sport, index) => (
            <div key={index} className="cat_list">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id={`flexCheck${sport}`}
                  // checked={sortedItems?.includes(sport)}
                  checked={selectedCategories.includes(sport)}
                  onClick={() => handleSelectedCategory(sport)}
                />
              </div>
              <span
                className="pointer"
                onClick={() => handleSelectedCategory(sport)}
              >
                {sport}
              </span>
            </div>
          ))}
          {sports.length > 4 && (
            <div className="cat_list1">
              <div className="blue_plus" onClick={handleShowMore}>
                <img src={plus2} alt="plus" />
              </div>
              <p>
                <span className="pointer" onClick={handleShowMore}>
                  {showAll ? "Show less" : "Show more"}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="category_wrapper">
        <div className="blue_cat">
          <p>Location</p>
        </div>
        <div
          className="white_category_part"
          style={{ height: "287px", overflowY: "scroll" }}
        >
          {displayedJobLocations?.map((country, index) => (
            <div key={index} className="cat_list">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id={`flexCheck${country.name}`}
                  checked={selectedCountries.includes(country.name)}
                  onClick={() => handleSelectedCountries(country?.name)}
                />
              </div>
              <span
                className="pointer"
                onClick={() => handleSelectedCountries(country?.name)}
              >
                {country.name}
              </span>
            </div>
          ))}
          {country.length > 4 && (
            <div className="cat_list1">
              <div className="blue_plus" onClick={handleShowjobLocationsMore}>
                <img src={plus2} alt="plus" />
              </div>
              <p>
                <span className="pointer" onClick={handleShowjobLocationsMore}>
                  {showAlljobLocations ? "Show less" : "Show more"}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="category_wrapper">
        <div className="blue_cat">
          <p>Job type</p>
        </div>
        <div className="white_category_part">
          {jobcategory.map((sport, index) => (
            <div key={index} className="cat_list">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id={`flexCheck${sport}`}
                  // checked={functionStates[sport.toLowerCase()]}
                  // onChange={() => handleFunctionClick(sport)}
                  checked={selectecJobTypes.includes(sport)}
                  onClick={() => handleJobType(sport)}
                />
              </div>
              <span className="pointer" onClick={() => handleJobType(sport)}>
                {sport}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCategory;

// {jobLocations.length > 4 && (
//   <div className="cat_list1">
//     <div className="blue_plus" onClick={handleShowjobLocationsMore}>
//       <img src={plus2} alt="plus" />
//     </div>
//     <p>
//       <span className="pointer" onClick={handleShowjobLocationsMore}>
//         {showAlljobLocations ? "Show less" : "Show more"}
//       </span>
//     </p>
//   </div>
// )}
