/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import plus2 from "../../assets/plus2.png";
import { useState } from "react";

const sports = [
  "Football",
  "Basketball",
  "Handball",
  "Volleyball",
];
const jobLocations = [
  "Paris",
  "London",
  "Finland",
  "Canada     ",

];
const jobcategory= [
  "Tournament",
  "Championship",
];

const JobCategory = ({ sortedItems, setSortedItems }) => {
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

  const [showAll, setShowAll] = useState(false);
  const [showAlljobLocations, setShowAlljobLocations] = useState(false);

  const handleShowMore = () => {
    setShowAll((prev) => !prev);
  };

  const displayedSports = showAll ? sports : sports.slice(0, 4);
  const handleShowjobLocationsMore = () => {
    setShowAlljobLocations((prev) => !prev);
  };

  const displayedJobLocations = showAlljobLocations
    ? jobLocations
    : jobLocations.slice(0, 4);

  const handleSoritng = (value) => {
    if (sortedItems.includes(value)) {
      const newItems = sortedItems.filter((i) => i !== value);
      setSortedItems(newItems);
    } else {
      setSortedItems((prev) => [...prev, value]);
    }
  };

  return (
    <div>
      <div className="category_wrapper">
        <div className="blue_cat">
          <p>Job by Sports</p>
        </div>

        <div className="white_category_part">
          {sports.map((sport, index) => (
            <div key={index} className="cat_list">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id={`flexCheck${sport}`}
                  checked={sortedItems?.includes(sport)}
                    onChange={() => handleCheckboxClick(sport)}
                  onClick={() => handleSoritng(sport)}
                />
              </div>
              <span className="pointer" onClick={() => handleSoritng(sport)}>
                {sport}
              </span>
            </div>
          ))}
          {/* {sports.length > 4 && (
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
          )} */}
        </div>
      </div>
      <div className="category_wrapper">
        <div className="blue_cat">
          <p>Job by Country</p>
        </div>
        <div className="white_category_part">
          {jobLocations.map((sport, index) => (
            <div key={index} className="cat_list">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id={`flexCheck${sport}`}
                  checked={functionStates[sport.toLowerCase()]}
                  onChange={() => handleFunctionClick(sport)}
                />
              </div>
              <span
                className="pointer"
                onClick={() => handleFunctionClick(sport)}
              >
                {sport}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="category_wrapper">
        <div className="blue_cat">
          <p>Job by Categories</p>
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
                  checked={functionStates[sport.toLowerCase()]}
                  onChange={() => handleFunctionClick(sport)}
                />
              </div>
              <span
                className="pointer"
                onClick={() => handleFunctionClick(sport)}
              >
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