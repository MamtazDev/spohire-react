import DashbordLogo from "../../../assets/dashbord-logo.png";
import DashbordUser from "../../../assets/dashbord-user.png";
import "./DashbordSidebar.css";
import { Link, useNavigate } from "react-router-dom";
import overviewIcon from "../../../assets/overview-icon.svg";
import transfarIcon from "../../../assets/transfar-icon.svg";
import jobOfferIcon from "../../../assets/joboffer-icon.svg";
import announcementOffer from "../../../assets/announcementOffer-icon.svg";
import observedIcon from "../../../assets/observed-icon.svg";
import messageIcon from "../../../assets/messages-icon.svg";
import settingsIcon from "../../../assets/settings-icon.svg";
import helpIcon from "../../../assets/help-icon.svg";
import logoutIcon from "../../../assets/logout-icon.svg";
import { Accordion } from "react-bootstrap";
import basketBallIcon from "../../../assets/basketBall-icon.svg";
import coachesIcon from "../../../assets/coaches-icon.svg";
import billing from "../../../assets/BILLING.png";
import coach from "../../../assets/coach.png";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../../features/auth/authSlice";

// eslint-disable-next-line react/prop-types
const DashbordSidebar = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoggout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("spohireAuth");
    navigate("/login");
  };
  return (
    <div className="dashbord_sidebar">
      <div className="dashbord_logo">
        <Link to="/">
          {" "}
          <img src={DashbordLogo} alt="logo" />
        </Link>
      </div>

      <div className="dashbord_sidebar_content d-flex flex-column justify-content-between">
        <div className="top">
          <div className="dashbord_user pb-4">
            <div className="dashbord_user_info d-flex gap-2">
              <div className="dashboard_user_img">
                <Link to="/dashboard/viewProfile">
                  <img
                    src={user?.image ? user?.image : DashbordUser}
                    alt="user-img"
                    style={{
                      height: "34px",
                      width: "34px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </div>

              <div className="user_info">
                <h6 className="text_color_36 fs-6 fw-semibold mb-1">
                  <Link to="/dashboard/viewProfile" className="text_color_36">
                    {" "}
                    {user?.first_name} {user?.last_name}
                  </Link>
                </h6>
                <p className="text_color_cb fs_14">
                  <Link to="/dashboard/viewProfile" className="text_color_cb">
                    {user?.sports} / {user?.role}
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="overview">
            <Link
              to="/dashboard"
              className="text-decoration-none d-flex align-items-center gap-4"
            >
              <img src={overviewIcon} alt="icon" />
              <span to={"#"} className="text_color_36 text-capitalize fs-6">
                {" "}
                overview
              </span>
            </Link>
          </div>

          <div className="menu_link">
            <ul className="menu_wrapper_one list-unstyled m-0">
              <Accordion className="nav_item">
                <Accordion.Item eventKey="0" className="border-0">
                  <Accordion.Header className="p-0">
                    <li className="">
                      <Link
                        to={"#"}
                        className="text-decoration-none d-flex align-items-center gap-4"
                      >
                        <img src={transfarIcon} alt="icon" />
                        <span
                          to={"#"}
                          className="text_color_36 text-capitalize fs-6"
                        >
                          Transfer Market
                        </span>
                      </Link>
                    </li>
                  </Accordion.Header>
                  <Accordion.Body className="pb-0">
                    <ul
                      className="list-unstyled"
                      style={{ paddingLeft: "30px" }}
                    >
                      {
                        ((user?.role === "Manager" ||
                          user?.role === "Coach") && (
                            <li className="nav_item">
                              <Link
                                to={"/dashboard/players"}
                                className="text-decoration-none d-flex align-items-center gap-3"
                              >
                                <img src={basketBallIcon} alt="icon" />
                                <span
                                  to={"#"}
                                  className="text_color_36 text-capitalize fs-6"
                                >
                                  Players
                                </span>
                              </Link>
                            </li>
                          ))
                      }

                      {
                        ((user?.role === "Manager" ||
                          user?.role === "Player") && (
                            <li className="">
                              <Link
                                to="/dashboard/coaches"
                                className="text-decoration-none d-flex align-items-center gap-3"
                              >
                                <img src={coachesIcon} alt="icon" />
                                <span
                                  to={"#"}
                                  className="text_color_36 text-capitalize fs-6"
                                >
                                  Coaches
                                </span>
                              </Link>
                            </li>
                          ))
                      }
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <li className="nav_item">
                <Link
                  to={"/dashboard/jobOffers"}
                  className="text-decoration-none d-flex align-items-center gap-4"
                >
                  <img src={jobOfferIcon} alt="icon" />
                  <span className="text_color_36 text-capitalize fs-6">
                    Job Offers
                  </span>
                </Link>
              </li>

              <li className="nav_item">
                <Link
                  to="/dashboard/announcements"
                  className="text-decoration-none d-flex align-items-center gap-4"
                >
                  <img src={announcementOffer} alt="icon" />
                  <span to={"#"} className="text_color_36 text-capitalize fs-6">
                    Announcements
                  </span>
                </Link>
              </li>
            </ul>

            <ul className="menu_wrapper_two list-unstyled m-0">
              <li className="nav_item">
                <Link
                  to="/dashboard/observed"
                  className="text-decoration-none d-flex align-items-center gap-4"
                >
                  <img src={observedIcon} alt="icon" />
                  <span to={"#"} className="text_color_36 text-capitalize fs-6">
                    Observed
                  </span>
                </Link>
              </li>

              <li className="nav_item">
                <Link
                  to="/dashboard/messages"
                  className="text-decoration-none d-flex align-items-center gap-4"
                >
                  <img src={messageIcon} alt="icon" />
                  <span to={"#"} className="text_color_36 text-capitalize fs-6">
                    Messages
                  </span>
                </Link>
              </li>
              <Accordion className="nav_item">
                <Accordion.Item eventKey="0" className="border-0">
                  <Accordion.Header className="p-0">
                    <li className="">
                      <Link
                        to={"#"}
                        className="text-decoration-none d-flex align-items-center gap-4"
                      >
                        <img src={settingsIcon} alt="icon" />
                        <span
                          to={"#"}
                          className="text_color_36 text-capitalize fs-6"
                        >
                          Settings
                        </span>
                      </Link>
                    </li>
                  </Accordion.Header>
                  <Accordion.Body className="pb-0">
                    <ul
                      className="list-unstyled"
                      style={{ paddingLeft: "30px" }}
                    >
                      <li className="nav_item">
                        <Link
                          to="/dashboard/password"
                          className="text-decoration-none d-flex align-items-center gap-3"
                        >
                          <img src={coach} alt="icon" />
                          <span
                            to={"#"}
                            className="text_color_36 text-capitalize fs-6"
                          >
                            Password
                          </span>
                        </Link>
                      </li>
                      {/* <li className="nav_item">
                        <Link
                          to="/dashboard/notification"
                          className="text-decoration-none d-flex align-items-center gap-3"
                        >
                          <img src={notification} alt="icon" />
                          <span
                            to={"#"}
                            className="text_color_36 text-capitalize fs-6"
                          >
                            Notification
                          </span>
                        </Link>
                      </li> */}
                      <li className="nav_item">
                        <Link
                          to="/dashboard/billing"
                          className="text-decoration-none d-flex align-items-center gap-3"
                        >
                          <img src={billing} alt="icon" />
                          <span
                            to={"#"}
                            className="text_color_36 text-capitalize fs-6"
                          >
                            Billing
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              {/* <li className="nav_item">
                <Link
                  to={"#"}
                  className="text-decoration-none d-flex align-items-center gap-4"
                >
                  <img src={helpIcon} alt="icon" />
                  <span to={"#"} className="text_color_36 text-capitalize fs-6">
                    Help
                  </span>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="bottom">
          <div className="logout">
            <button
              type="button"
              className="text-decoration-none d-flex align-items-center gap-4 bg-none"
              onClick={handleLoggout}
            >
              <img src={logoutIcon} alt="icon" />
              <span to={"#"} className="text_color_36 text-capitalize fs-6">
                logout
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashbordSidebar;
