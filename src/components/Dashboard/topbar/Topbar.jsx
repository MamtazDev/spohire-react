import "./Topbar.css";
import { Link, useLocation } from "react-router-dom";
import filterIcon from "../../../assets/filter-icon.svg";
import addIcon from "../../../assets/add-icon.svg";
import logo from "../../../assets/dashbord-logo.png";

const Topbar = () => {
  let location = useLocation();

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
          <div className="dashbord_topbar_button d-flex gap-4">
            <Link
              to={"#"}
              className="filter_btn d-flex gap-2 text-decoration-none"
            >
              <img src={filterIcon} alt="icon" />
              <span className="text_color_cb">Filter</span>
            </Link>
            <Link
              to={`${
                location.pathname === "/dashboard/jobOffers"
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
