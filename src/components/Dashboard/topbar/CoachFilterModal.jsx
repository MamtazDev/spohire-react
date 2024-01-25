/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCoachFilterParams } from "../../../features/auth/authSlice";

const CoachFilterModal = ({ playerRef }) => {
  const { user } = useSelector((state) => state.auth);

  const [countryNames, setCountryNames] = useState([]);
  const dispatch = useDispatch();

  const handleSportsChange = (e) => {
    if (e.target.value === "All") {
      dispatch(setCoachFilterParams({ type: "sports", data: null }));
    } else {
      dispatch(setCoachFilterParams({ type: "sports", data: e.target.value }));
    }
  };
  const handleLocationChange = (e) => {
    if (e.target.value === "All") {
      dispatch(setCoachFilterParams({ type: "country", data: null }));
    } else {
      dispatch(setCoachFilterParams({ type: "country", data: e.target.value }));
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

  return (
    <div ref={playerRef} className="filter_parent">
      <div
        className={`${
          location.pathname === "/dashboard/observed" || user.role === "Player"
            ? "filter_wrapper1"
            : "filter_wrapper"
        }`}
      >
        {/* <div className="buttons1">
          <h2>Filter</h2>
          <div className="d-flex" style={{ gap: "10px" }}>
            <button className="filter_btn1">By price</button>
            <button className="filter_btn1">Date</button>
          </div>
        </div> */}
        <div className="buttons1">
          <h2>Sports</h2>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleSportsChange}
          >
            <option value="All">All</option>
            {["Football", "Basketball", "Handball", "Volleyball"].map(
              (item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              )
            )}
          </select>
        </div>

        <div className="buttons1">
          <h2>Location</h2>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleLocationChange}
          >
            <option value="All">All</option>
            {countryNames.map((name, index) => (
              <option value={name.name} key={index}>
                {name.name}
              </option>
            ))}
          </select>
        </div>
        {/* <div className="buttons1">
          <h2>Categories</h2>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleCategoryChange}
          >
            <option value="All">All</option>
            {[
              "Tournament",
              "Championship",
              "Friendly matches",
              "Camps",
              "Tournaments",
              "Player recruitment",
              "Others",
            ].map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default CoachFilterModal;
