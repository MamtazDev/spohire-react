/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import plus2 from "../../assets/plus2.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFilterParams } from "../../features/announcement/announcementSlice";
const AnnouncementFilterCategory = ({
  sortedItems,
  setSortedItems,
  sports,
  country,
  jobcategory,
  setSearchParams,
  searchParams,
}) => {
  // const [checkboxStates, setCheckboxStates] = useState({
  //     football: false,
  //     basketball: false,
  //     handball: false,
  //     volleyball: false,
  // });
  // const [functionStates, setFunctionStates] = useState({
  //     football: false,
  //     basketball: false,
  //     handball: false,
  //     volleyball: false,
  // });

  const [showAll, setShowAll] = useState(false);

  const dispatch = useDispatch();
  const { filterParams } = useSelector((state) => state.announcement);

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

  // const handleSelectedCategory = (value) => {
  //   if (searchParams?.jobType?.includes(value)) {
  //     const newSelectedCategories = searchParams?.jobType?.filter(
  //       (i) => i !== value
  //     );
  //     setSearchParams({ ...searchParams, jobType: newSelectedCategories });
  //   } else {
  //     const previousJobTypes = searchParams?.jobType || [];
  //     setSearchParams({
  //       ...searchParams,
  //       jobType: [...previousJobTypes, value],
  //     });
  //   }
  // };

  // const handleSelectedCountries = (value) => {
  //   if (searchParams?.jobLocation?.includes(value)) {
  //     const newSelectedCountries = searchParams?.jobLocation?.filter(
  //       (i) => i !== value
  //     );
  //     setSearchParams({ ...searchParams, jobLocation: newSelectedCountries });
  //   } else {
  //     const previousjobLocation = searchParams?.jobLocation || [];
  //     setSearchParams({
  //       ...searchParams,
  //       jobLocation: [...previousjobLocation, value],
  //     });
  //   }
  // };

  // console.log(searchParams, "seafff");

  // const handleJobType = (value) => {
  //   if (searchParams?.jobTypeCate?.includes(value)) {
  //     const newSelectedJobTypesCate = searchParams?.jobTypeCate?.filter(
  //       (i) => i !== value
  //     );
  //     setSearchParams({
  //       ...searchParams,
  //       jobTypeCate: newSelectedJobTypesCate,
  //     });
  //   } else {
  //     const previousjobTypesCate = searchParams?.jobTypeCate || [];
  //     setSearchParams({
  //       ...searchParams,
  //       jobTypeCate: [...previousjobTypesCate, value],
  //     });
  //     // setSelectedJobTypes((current) => [...current, value]);
  //   }
  // };

  // console.log(searchParams, "searchParamsfkkk");

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

  // const handleSoritng = (value) => {
  //   if (sortedItems.includes(value)) {
  //     const newItems = sortedItems.filter((i) => i !== value);
  //     setSortedItems(newItems);
  //   } else {
  //     setSortedItems((prev) => [...prev, value]);
  //   }
  // };

  // console.log(checkboxStates, "checkboxStates");

  return (
    <>
      <div>
        <div className="category_wrapper">
          <div className="blue_cat">
            <p>Sports</p>
          </div>
          <div
            className="white_category_part"
            style={{ height: "232px", overflowY: "scroll" }}
          >
            {displayedSports.map((sport, index) => (
              <div key={index} className="cat_list">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={`flexCheck${sport}`}
                    checked={filterParams?.sports?.includes(sport)}
                    onClick={() =>
                      dispatch(setFilterParams({ type: "sports", data: sport }))
                    }
                  />
                </div>
                <span
                  className="pointer"
                  onClick={() =>
                    dispatch(setFilterParams({ type: "sports", data: sport }))
                  }
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
            <p>Country</p>
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
                    checked={filterParams?.country?.includes(country.name)}
                    onClick={() =>
                      dispatch(
                        setFilterParams({ type: "country", data: country.name })
                      )
                    }
                  />
                </div>
                <span
                  className="pointer"
                  onClick={() =>
                    dispatch(
                      setFilterParams({ type: "country", data: country.name })
                    )
                  }
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
                  <span
                    className="pointer"
                    onClick={handleShowjobLocationsMore}
                  >
                    {showAlljobLocations ? "Show less" : "Show more"}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="category_wrapper">
          <div className="blue_cat">
            <p>Categories</p>
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
                    checked={filterParams?.categories?.includes(sport)}
                    onClick={() =>
                      dispatch(
                        setFilterParams({
                          type: "categories",
                          data: sport,
                        })
                      )
                    }
                  />
                </div>
                <span
                  className="pointer"
                  onClick={() =>
                    dispatch(
                      setFilterParams({
                        type: "categories",
                        data: sport,
                      })
                    )
                  }
                >
                  {sport}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementFilterCategory;
