import "./Topbar.css";
import { Link, useLocation } from "react-router-dom";
import filterIcon from "../../../assets/filter-icon.svg";
import addIcon from "../../../assets/add-icon.svg";
import logo from "../../../assets/dashbord-logo.png";
import { useState } from "react";
import FilterModal from "./FilterModal";
import { useRef } from "react";
import { useEffect } from "react";

const Topbar = () => {

  let location = useLocation();

  const [filter, setFilter] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        // Clicked outside the filter modal, close it
        setFilter(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleOutsideClick);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []); // The empty dependency array ensures this effect runs only once, similar to componentDidMount

  const handleFilterModal = () => {
    console.log("kljadhkljh")
    setFilter(!filter);
  };



  return (
    <div className="dashbord_topbar">
      <div className="topbar_desk">
        <div className=" dashbord_topbar_wrapper d-flex justify-content-between align-items-center">
          <div className="dashbord_topbar_title">
            <h2 className="text_color_36 fs-4 fw-medium text-capitalize">
              {location.pathname === "/dashboard/jobOffers" && "job offer"}
              {location.pathname === "/dashboard/basicinfo" && "job offer"}
              {location.pathname === "/dashboard/players" && "Players List"}
              {location.pathname === "/dashboard/announcements" && "Announcements"}
              {location.pathname === "/dashboard/password" && "Password"}
              {location.pathname === "/dashboard/notification" && "Notifications"}
              {location.pathname === "/dashboard/billing" && "Billing history"}
              {location.pathname === "/dashboard/observed" && "Observed"}
              {location.pathname === "/dashboard/coaches" && "Coaches List"}
            </h2>
          </div>
          <div>
            <div className="dashbord_topbar_button d-flex gap-4">
              <button
                onClick={handleFilterModal}
                className="filter_btn d-flex gap-2 text-decoration-none"
              >
                <img src={filterIcon} alt="icon" />
                <span className="text_color_cb">Filter</span>
              </button>

              <Link
                to={`${location.pathname === "/dashboard/jobOffers"
                  ? "/dashboard/jobOffers"
                  : "/dashboard/viewDetails"
                  }`}
                className="add_btn d-flex gap-2 text-decoration-none bg_color_fb"
              >
                {location.pathname === "/dashboard/jobOffers" ? (
                  <img src={addIcon} alt="icon" />
                ) : (
                  ""
                )}
                <span className="text-white">
                  {location.pathname === "/dashboard/jobOffers"
                    ? "Add Job Offer"
                    : "View Details"}
                </span>
              </Link>
            </div>
            {/* filter modal */}
            {filter && (
              <div>
                <FilterModal />
              </div>
            )}
            {/* filter modal */}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="topbar_mobile">
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-outline-primary fs_10">Back</button>
          <div style={{ marginRight: "50px" }}>
            <img src={logo} alt="" />
          </div>
          <p></p>
        </div>
        <h2 className="text_color_36 job_title_mobile fs-4 fw-medium text-capitalize">
          {location.pathname === "/dashboard/jobOffers" && "job offer"}
          {location.pathname === "/dashboard/players" && "Players"}
        </h2>
      </div>
    </div>
  );
};

export default Topbar;
