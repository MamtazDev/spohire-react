import React, { useState } from "react";
import JobOffers from "./JobOffers";
import MyAnnouncement from "./MyAnnouncements";
import { useDispatch, useSelector } from "react-redux";
import footBallCoachImg from "../../../assets/footballCoach.png";
import {
  useCancleSubscriptionMutation,
  useGetUserReferallsQuery,
} from "../../../features/auth/authApi";
import Swal from "sweetalert2";
import { userLoggedIn } from "../../../features/auth/authSlice";
import ReferallProfiles from "./ReferallProfiles";

const AddedItems = () => {
  const [jobOffersType, setJobOffersType] = useState("player");
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log();

  const [cancleSubscription, { isLoading }] = useCancleSubscriptionMutation();

  const { data } = useGetUserReferallsQuery();

  console.log(data, "fdaftga");

  const handleUndoAddProfile = async () => {
    console.log("dd");
    try {
      const response = await cancleSubscription();
      if (response?.data?.success) {
        const previousUserInfo = JSON.parse(
          localStorage.getItem("spohireAuth")
        );

        const newUserInfo = {
          accessToken: previousUserInfo?.accessToken,
          user: response.data.data,
        };

        dispatch(userLoggedIn(newUserInfo));

        localStorage.setItem("spohireAuth", JSON.stringify(newUserInfo));
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

  return (
    <div className="job_offers_wrapper">
      <div className="job_offers_topBtn d-flex align-items-center justify-content-between">
        <div className="job_offers_topBtn_left d-flex gap-4">
          <button
            className={`fs-6 fw-medium text_color_80 ${
              jobOffersType === "player" && "border-primary"
            }`}
            onClick={() => setJobOffersType("player")}
          >
            {/* {user?.role === "Coach" ? "Players" : "Player"} */}
            Players
          </button>

          {user?.role === "Manager" && (
            <button
              className={`fs-6 fw-medium text_color_80 ${
                jobOffersType === "coach" && "border-primary"
              }`}
              onClick={() => setJobOffersType("coach")}
            >
              {/* {user?.role === "Coach" ? "Players" : "Player"} */}
              Coaches
            </button>
          )}

          <button
            className={`fs-6 fw-medium text_color_80 ${
              jobOffersType === "job" && "border-primary"
            }`}
            onClick={() => setJobOffersType("job")}
          >
            Job Offers
          </button>
          <button
            className={`fs-6 fw-medium text_color_80 ${
              jobOffersType === "announcement" && "border-primary"
            }`}
            onClick={() => setJobOffersType("announcement")}
          >
            Announcements
          </button>
        </div>

        {/* <div className="job_offers_topBtn_right">
    <button className="bg-transparent border-0 text_color_fb">
      Clear All
    </button>
  </div> */}
      </div>

      {jobOffersType === "job" && <JobOffers />}
      {jobOffersType === "announcement" && <MyAnnouncement />}
      {jobOffersType === "coach" && (
        <ReferallProfiles
          data={data?.filter((i) => i.role === "Coach")}
          footBallCoachImg={footBallCoachImg}
          jobOffersType={jobOffersType}
        />
      )}
      {jobOffersType === "player" && user?.isSubsCribed && (
        <>
          <div
            className="announcement"
            style={{ margin: "30px", paddingTop: "30px" }}
          >
            <div className="job_offers_item p-3">
              <div className="job_offers_item_content d-flex justify-content-between align-items-center">
                <div className="left d-flex align-items-center gap-3">
                  <div className="job_offer_item_img">
                    <img
                      src={
                        user?.image
                          ? `${
                              process.env.NODE_ENV !== "production"
                                ? import.meta.env.VITE_LOCAL_API_URL
                                : import.meta.env.VITE_LIVE_API_URL
                            }/api/v1/uploads/${user?.image}`
                          : footBallCoachImg
                      }
                      alt="img"
                      style={{
                        height: "81px",
                        width: "81px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </div>

                  <div className="job_offer_item_content">
                    <div className="job_offer_nameDesignation">
                      <h5
                        className="fw-medium fs-6 text_color_36 mb-1"
                        // onClick={() => handleCLick(item)}
                        style={{ cursor: "pointer" }}
                      >
                        {user?.first_name} {user?.last_name}
                      </h5>

                      <p className="fs-14 fw-normal text_color_80 mb-1">
                        {user?.role}
                      </p>
                    </div>

                    <div className="job_offerItem_address flex-wrap d-flex align-items-center gap-2 gap-md-4">
                      <div className="job_offer_location  d-flex align-items-center gap-1">
                        {/* <img src={locationIcon} alt="icon" /> */}
                        <span className="fs-14 fw-normal text_color_80">
                          {user?.nationality}
                        </span>
                      </div>
                      {/* <div className="job_offer_flag d-flex align-items-center gap-1">
              <img src={flagIcon} alt="icon" />
              <span className="fs-14 fw-normal text_color_80">
                Enlish, Pdish
              </span>
            </div> */}

                      <div className="job_offer_flag d-flex align-items-center gap-1">
                        {/* <img src={dollarIcon} alt="icon" /> */}
                        <span className="fs-14 fw-normal text_color_80">
                          {user?.sports}
                        </span>
                      </div>
                      <div className="job_offer_flag d-flex align-items-center gap-1">
                        {/* <Link
                  to={"/dashboard/appliedJobs"}
                  className="fs-14 fw-normal text-primary"
                >
                  View Applicant
                </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right d-flex gap-2">
                  <button
                    className="btn btn-primary btn-sm rounded"
                    // onClick={() => handleDelete(item)}
                    onClick={() => handleUndoAddProfile()}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        Loading...
                      </>
                    ) : (
                      <>Undo Add Profile</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {jobOffersType === "player" && (
        <ReferallProfiles
          data={data?.filter((i) => i.role === "Player")}
          footBallCoachImg={footBallCoachImg}
          jobOffersType={jobOffersType}
        />
      )}
    </div>
  );
};

export default AddedItems;
