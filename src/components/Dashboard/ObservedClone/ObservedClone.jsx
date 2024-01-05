/* eslint-disable no-unused-vars */
import a1 from "../../../assets/a1.png";
import flag from "../../../assets/flag.png";
import dollar from "../../../assets/coin-dollar.png";
import location from "../../../assets/location.png";
import bookmarkfill from "../../../assets/bookmark-fill.png";
import footBallCoachImg from "../../../assets/footballCoach.png";
import locationIcon from "../../../assets/location-icon.svg";
import dollarIcon from "../../../assets/dollar-icon.svg";
import playerprofile from "../../../assets/player_profile.png";
import "./ObservedClone.css";
import {
  useGetMyObservationsQuery,
  useToggleObservationMutation,
} from "../../../features/observation/observationApi";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const ObservedClone = () => {
  const { data, isLoading, isSuccess } = useGetMyObservationsQuery();
  //   console.log(data?.data, "dddobbb");
  const { user } = useSelector((state) => state.auth);

  const [toggleObservation] = useToggleObservationMutation();

  const handleBookmark = async (id, type) => {
    const data = {
      user_id: user?._id,
      target_id: id,
      target_type: type,
    };

    // console.log(data, "jjjDD");

    try {
      const response = await toggleObservation(data);
      if (response?.data?.success) {
        Swal.fire({
          icon: "success",
          title: "Successsful!",
        });
      }
      if (response?.error?.data?.message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${response?.error?.data?.message}`,
        });
      }

      console.log(response, "ress");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.message}`,
      });
    }
  };
  if (isLoading) {
    return <div></div>;
  }

  if (data?.data?.length === 0) {
    return <div className="text-center pt-5" style={{ fontSize: "32px", color: "#595F69" }}>No Bookmarks</div>;
  }

  return (
    <>
      <div className="announcement" style={{ margin: "30px" }}>
        {data?.data.filter((i) => i?.target_type === "Announcement").length >
          0 && (
            <div>
              <p className="title">Announcement</p>
              <div>
                {data?.data &&
                  data?.data?.length > 0 &&
                  data?.data
                    .filter((i) => i?.target_type === "Announcement")
                    .map((item, idx) => (
                      <div className="announcelist_wrapper pe-3" key={idx}>
                        <div className="d-flex justify-content-between align-items-start">
                          <div
                            className="d-flex align-items-center"
                            style={{ gap: "20px" }}
                          >
                            <div className="announcement_pic">
                              <img src={a1} alt="" />
                            </div>
                            <div className="recruiment f_sfPro">
                              <p>{item?.target_id?.title}</p>
                              <div className="d-flex gap-3 flex-wrap">
                                <div
                                  className="d-flex align-items-center"
                                  style={{ gap: "6px" }}
                                >
                                  <img src={location} alt="" />
                                  <span>{item?.target_id?.location}</span>
                                </div>
                                <div
                                  className="d-flex align-items-center"
                                  style={{ gap: "6px" }}
                                >
                                  <img src={flag} alt="" />
                                  <span>{item?.target_id?.status}</span>
                                </div>
                                <div
                                  className="d-flex align-items-center"
                                  style={{ gap: "6px" }}
                                >
                                  <img src={dollar} alt="" />
                                  <span>USD {item?.target_id?.budget}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-lg-block d-none">
                            <div
                              className="d-flex gap-3 "
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                handleBookmark(
                                  item?.target_id?._id,
                                  "Announcement"
                                )
                              }
                            >
                              <img src={bookmarkfill} alt="" />
                            </div>
                          </div>
                        </div>
                        <p
                          className="announcement_details f_sfPro"
                          style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            WebkitLineClamp: 1,
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item?.target_id?.description}
                        </p>
                        <div
                          className="d-flex gap-3 d-lg-none d-block justify-content-end"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            handleBookmark(item?.target_id?._id, "Announcement")
                          }
                        >
                          <img src={bookmarkfill} alt="" />
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          )}
      </div>

      {/* job */}
      <div className="job" style={{ margin: "30px" }}>
        {data?.data.filter((i) => i?.target_type === "Job").length > 0 && (
          <div>
            <p className="title">Job offer</p>

            <div className="job_offers_wrapper p-0">
              <div className="job_offer_items_wrapper">
                {data?.data &&
                  data?.data?.length > 0 &&
                  data?.data
                    .filter((i) => i?.target_type === "Job")
                    .map((item, idx) => (
                      <div className="job_offers_item p-3" key={idx}>
                        <div className="job_offers_item_content d-flex justify-content-between align-items-center">
                          <div className="left d-flex align-items-center gap-3">
                            <div className="job_offer_item_img">
                              <img src={footBallCoachImg} alt="img" />
                            </div>

                            <div className="job_offer_item_content">
                              <div className="job_offer_nameDesignation">
                                <h5 className="fw-medium fs-6 text_color_36 mb-1">
                                  {item?.target_id?.job_title}
                                </h5>

                                <p className="fs-14 fw-normal text_color_80 mb-1">
                                  {item?.target_id?.company}
                                </p>
                              </div>

                              <div className="job_offerItem_address flex-wrap d-flex align-items-center gap-2 gap-md-4">
                                <div className="job_offer_location  d-flex align-items-center gap-1">
                                  <img src={locationIcon} alt="icon" />
                                  <span className="fs-14 fw-normal text_color_80">
                                    {item?.target_id?.job_location}
                                  </span>
                                </div>

                                {/* <div className="job_offer_flag d-flex align-items-center gap-1">
                                <img src={flagIcon} alt="icon" />
                                <span className="fs-14 fw-normal text_color_80">
                                  Enlish, Pdish
                                </span>
                              </div> */}

                                <div className="job_offer_flag d-flex align-items-center gap-1">
                                  <img src={dollarIcon} alt="icon" />
                                  <span className="fs-14 fw-normal text_color_80">
                                    USD {item?.target_id?.salary}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="right d-flex gap-2 flex-wrap"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handleBookmark(item?.target_id?._id, "Job")
                            }
                          >
                            <img
                              className="img-fluid"
                              src={bookmarkfill}
                              style={{ cursor: "pointer" }}
                              alt="icon"
                            />
                            {/* <img
                                                    className='img-fluid'
                                                    src={starIcon}
                                                    style={{ cursor: "pointer" }}
                                                    alt="icon"
                                                /> */}
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* player profile */}
      <div className="job" style={{ margin: "30px" }}>
        {data?.data.filter((i) => i?.target_type === "User").length > 0 && (
          <div>
            <p className="title">Player Profile</p>
            <div className="job_offers_wrapper p-0">
              <div className="job_offer_items_wrapper">
                {data?.data &&
                  data?.data?.length > 0 &&
                  data?.data
                    .filter((i) => i?.target_type === "User")
                    .map((item, idx) => (
                      <div className="job_offers_item p-3" key={idx}>
                        <div className="job_offers_item_content d-flex justify-content-between align-items-center">
                          <div className="left d-flex align-items-center gap-3">
                            <div className="job_offer_item_img">
                              <img src={playerprofile} alt="img" />
                            </div>

                            <div className="job_offer_item_content">
                              <div className="job_offer_nameDesignation">
                                <h5 className="fw-medium fs-6 text_color_36 mb-1">
                                  {item?.target_id?.first_name}{" "}
                                  {item?.target_id?.last_name}
                                </h5>

                                <p className="fs-14 fw-normal text_color_80 mb-1">
                                  {item?.target_id?.sports}
                                </p>
                              </div>

                              <div className="job_offerItem_address flex-wrap d-flex align-items-center gap-2 gap-md-4">
                                <div className="job_offer_location  d-flex align-items-center gap-1">
                                  <img src={locationIcon} alt="icon" />
                                  <span className="fs-14 fw-normal text_color_80">
                                    {item?.target_id?.nationality}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="right"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handleBookmark(item?.target_id?._id, "User")
                            }
                          >
                            <img
                              src={bookmarkfill}
                              style={{ cursor: "pointer" }}
                              alt="icon"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ObservedClone;
