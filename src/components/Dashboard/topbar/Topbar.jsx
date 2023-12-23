import "./Topbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import filterIcon from "../../../assets/filter-icon.svg";
import addIcon from "../../../assets/add-icon.svg";
import logo from "../../../assets/dashbord-logo.png";
import { useEffect, useRef, useState } from "react";
import FilterModal from "./FilterModal";
import AddJobOffer from "../AddJobOffer/AddJobOffer";
import AddAnnouncement from "../Announcements/AddAnnouncement";
import { useSelector } from "react-redux";

const Topbar = () => {
  const { user } = useSelector((state) => state.auth);
  const myDivRef = useRef(null);
  let location = useLocation();
  const [filter, setFilter] = useState(false);

  const navigate = useNavigate();

  const handleFilterModal = () => {
    setFilter(!filter);
  };
  const handleButtonClick = (event) => {
    event.stopPropagation();
    handleFilterModal();
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (myDivRef.current && !myDivRef.current.contains(event.target)) {
        setFilter(false);
        console.log("nothing");
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [filter]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddJobOfferClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [isAnnouncementModalOpen, setAnnouncementIsModalOpen] = useState(false);
  const handleAddAnnouncementClick = () => {
    // setAnnouncementIsModalOpen(true);
    navigate("/dashboard/createAnnouncements");
  };
  const closeAnnouncementModal = () => {
    setAnnouncementIsModalOpen(false);
  };
  return (
    <>
      <div
        className={`${
          isModalOpen | isAnnouncementModalOpen
            ? "position_static"
            : "position-fixed"
        } dashbord_topbar`}
      >
        <div className="topbar_desk">
          <div className=" dashbord_topbar_wrapper d-flex justify-content-between align-items-center">
            <div className="dashbord_topbar_title">
              {(location.pathname == "/dashboard/viewProfile") |
              (location.pathname === "/dashboard/viewDetails") |
              (location.pathname === "/dashboard/coacheDetails") |
              (location.pathname == "/dashboard/coachesProfile") |
              (location.pathname == "/dashboard/messages") |
              (location.pathname === "/dashboard/editAnnouncements") |
              (location.pathname == "/dashboard/editPlayerDetals") ? (
                <button className="back_btn fs_10">Back</button>
              ) : (
                <h2 className="text_color_36 fs-4 fw-medium text-capitalize">
                  {location.pathname === "/dashboard" && "Overview"}
                  {location.pathname === "/dashboard/jobOffers" && "job offer"}
                  {location.pathname === "/dashboard/basicinfo" && "job offer"}
                  {location.pathname === "/dashboard/players" && "Players List"}
                  {location.pathname === "/dashboard/createAnnouncements" &&
                    "Create Announcements"}
                  {location.pathname === "/dashboard/announcements" &&
                    "Announcements"}
                  {location.pathname === "/dashboard/password" && "Password"}
                  {location.pathname === "/dashboard/notification" &&
                    "Notifications"}
                  {location.pathname === "/dashboard/billing" &&
                    "Billing history"}
                  {location.pathname === "/dashboard/observed" && "Observed"}
                  {location.pathname === "/dashboard/coaches" && "Coaches List"}
                </h2>
              )}
            </div>
            <div>
              {location.pathname === "/dashboard" ? (
                ""
              ) : (
                <div className="dashbord_topbar_button d-flex gap-4">
                  <button
                    onClick={(event) => handleButtonClick(event)}
                    className={`${
                      (location.pathname === "/dashboard/coachesProfile") |
                      (location.pathname == "/dashboard/messages") |
                      (location.pathname == "/dashboard/password") |
                      (location.pathname == "/dashboard/notification") |
                      (location.pathname == "/dashboard/editAnnouncements") |
                      (location.pathname == "/dashboard/editPlayerDetals") |
                      (location.pathname === "/dashboard/coaches") |
                      (location.pathname === "/dashboard/players") |
                      (location.pathname === "/dashboard/observed") |
                      (location.pathname === "/dashboard/editCoacheProfile") |
                      (location.pathname == "/dashboard/viewProfile") |
                      (location.pathname === "/dashboard/viewDetails") |
                      (location.pathname === "/dashboard/coacheDetails") |
                      (location.pathname === "/dashboard/createAnnouncements") |
                      (location.pathname === "/dashboard/billing")
                        ? "d-none"
                        : "filter_btn d-flex gap-2 text-decoration-none"
                    } `}
                  >
                    <img src={filterIcon} alt="icon" />
                    <span className="text_color_cb">Filter</span>
                  </button>
                  <Link
                    to={`${
                      location.pathname === "/dashboard/jobOffers"
                        ? "/dashboard/jobOffers"
                        : (location.pathname === "/dashboard/coachesProfile") |
                          (location.pathname == "/dashboard/viewProfile") |
                          (location.pathname ==
                            "/dashboard/editCoacheProfile") |
                          (location.pathname == "/dashboard/editPlayerDetals")
                        ? "/paymentProcess"
                        : location.pathname === "/dashboard/coaches"
                        ? "/dashboard/coachesProfile"
                        : "#"
                    }`}
                    className={`${
                      (location.pathname == "/dashboard/observed") |
                      (location.pathname == "/dashboard/messages") |
                      (location.pathname == "/dashboard/password") |
                      (location.pathname == "/dashboard/notification") |
                      (location.pathname == "/dashboard/billing") |
                      (location.pathname == "/dashboard/editAnnouncements") |
                      (location.pathname === "/dashboard/coaches") |
                      (location.pathname === "/dashboard/players") |
                      (location.pathname === "/dashboard/viewDetails") |
                      (location.pathname === "/dashboard/coacheDetails") |
                      (location.pathname === "/dashboard/createAnnouncements")
                        ? "d-none"
                        : "add_btn d-flex gap-2 text-decoration-none bg_color_fb"
                    } `}
                    //  onclick
                    onClick={() =>
                      location.pathname === "/dashboard/jobOffers"
                        ? handleAddJobOfferClick()
                        : location.pathname === "/dashboard/announcements"
                        ? handleAddAnnouncementClick()
                        : undefined
                    }
                  >
                    {(location.pathname === "/dashboard/jobOffers") |
                    (location.pathname === "/dashboard/announcements") |
                    (location.pathname == "/dashboard/basicinfo") ? (
                      <img src={addIcon} alt="icon" />
                    ) : (
                      ""
                    )}
                    <span
                      className={`${
                        (location.pathname == "/dashboard/observed") |
                        (location.pathname == "/dashboard/messages") |
                        (location.pathname === "/dashboard/editAnnouncements") |
                        (location.pathname === "/dashboard/players")
                          ? " d-none"
                          : "text-white"
                      } `}
                    >
                      {(location.pathname === "/dashboard/jobOffers") |
                      (location.pathname === "/dashboard/basicinfo")
                        ? "Add Job Offer"
                        : location.pathname === "/dashboard"
                        ? "View Details"
                        : (location.pathname === "/dashboard/coachesProfile") |
                          (location.pathname === "/dashboard/editCoacheProfile")
                        ? "Click here to upgrade your current package"
                        : location.pathname === "/dashboard/announcements"
                        ? "Create Announcement"
                        : location.pathname === "/dashboard/viewProfile"
                        ? "Click here to upgrade your current package"
                        : location.pathname === "/dashboard/editPlayerDetals"
                        ? "Click here to upgrade your current package"
                        : ""}
                    </span>
                  </Link>
                </div>
              )}
              {/* filter modal */}
              {filter && <FilterModal myDivRef={myDivRef} />}
              {/* filter modal */}
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="topbar_mobile">
          <div className="d-flex justify-content-between align-items-center">
            <button className="back_btn fs_10">Back</button>
            <div style={{ marginRight: "50px" }}>
              <img src={logo} alt="" />
            </div>
            <p></p>
          </div>
          <h2 className="text_color_36 job_title_mobile fs-4 fw-medium text-capitalize">
            {location.pathname === "/dashboard/jobOffers" && "job offer"}
            {location.pathname === "/dashboard/players" && "Players"}
            {location.pathname === "/dashboard/coaches" && "Coaches"}
            {location.pathname === "/dashboard/createAnnouncements" &&
              "Create Announcements"}
            {location.pathname === "/dashboard/announcements" &&
              "Announcements"}
          </h2>
        </div>
      </div>

      {/* modals */}
      <AddJobOffer
        show={isModalOpen}
        onHide={closeModal}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        style={{ width: "648px" }}
      />

      <AddAnnouncement
        show={isAnnouncementModalOpen}
        onHide={closeAnnouncementModal}
        isModalOpen={isAnnouncementModalOpen}
        style={{ width: "648px" }}
      />
    </>
  );
};

export default Topbar;
