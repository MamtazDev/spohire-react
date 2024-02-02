/* eslint-disable react/prop-types */
import { Table } from "react-bootstrap";
import playerImgOne from "../../../assets/playerImg.svg";
import messageIcon from "../../../assets/messageIcon.svg";
import MobilePlayers from "../players/MobilePlayers";
import MobileButtons from "../players/MobileButtons";
import { Link, useNavigate } from "react-router-dom";
import b1 from "../../../assets/bookmark.png";
import bookmarkfill from "../../../assets/bookmark-fill.png";
import { useState } from "react";
import { useGetFilteredUsersQuery } from "../../../features/auth/authApi";
import { useSelector } from "react-redux";
import {
  useGetMyObservationsQuery,
  useToggleObservationMutation,
} from "../../../features/observation/observationApi";
import Swal from "sweetalert2";
import { getCountryFlag } from "../../../utils/getFlag";
const Coaches = () => {
  const { data: coachs, isLoading } = useGetFilteredUsersQuery("role=Coach");

  const { user, coachFilterParams } = useSelector((state) => state.auth);
  const allowedPlans =
    user?.subscriptionName === "Gold"
      ? ["Gold", "Silver", "Bronze"]
      : user?.subscriptionName === "Silver"
      ? ["Silver", "Bronze"]
      : user?.subscriptionName === "Bronze"
      ? ["Bronze"]
      : [];

  const handleFilter = (value) => {
    if (
      coachFilterParams?.sports ||
      coachFilterParams?.country ||
      coachFilterParams?.categories
    ) {
      return (
        (coachFilterParams?.sports &&
          coachFilterParams?.sports === value?.sports) ||
        (coachFilterParams?.country &&
          coachFilterParams?.country === value?.nationality) ||
        (coachFilterParams?.categories &&
          coachFilterParams?.categories === value?.category)
      );
    } else {
      return true;
    }
  };

  const filteredData =
    coachs
      ?.filter(
        (coach) =>
          coach?.subscriptionName &&
          allowedPlans.includes(coach?.subscriptionName) &&
          user?.sports === coach?.sports &&
          coach?.isCreatedProfile
      )
      .filter(handleFilter) || [];
  return (
    <>
      <div className="players">
        <Table responsive className="players_desk content">
          <thead>
            <tr>
              <th className="fs_14 text_color_36 fw-normal">
                <div className="d-flex align-items-center">
                  <p>Name</p>
                </div>
              </th>
              <th className="fs_14 text_color_36 fw-normal">Nation</th>
              <th className="fs_14 text_color_36 fw-normal">Date of Birth</th>
              <th className="fs_14 text_color_36 fw-normal">Age</th>
              <th className="fs_14 text_color_36 fw-normal">Club</th>
              <th className="fs_14 text_color_36 fw-normal">Status</th>
              <th className="fs_14 text_color_36 fw-normal">Action</th>
            </tr>
          </thead>
          <tbody>
            {coachs && filteredData?.length > 0 ? (
              filteredData.map((coach, idx) => (
                <>
                  <SingleCoach key={idx} coach={coach} />
                </>
              ))
            ) : (
              <tr className="mx-auto">No Coaches Found</tr>
            )}
          </tbody>
        </Table>
        <MobilePlayers></MobilePlayers>
        <MobileButtons />
      </div>
    </>
  );
};

export default Coaches;

const SingleCoach = ({ coach }) => {
  const [bookmark, setBookmark] = useState(false);

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const { data, isSuccess } = useGetMyObservationsQuery();

  const isBookmarked = data?.data?.find(
    (i) => i?.target_id?._id === coach?._id
  );

  const [toggleObservation, { isLoading }] = useToggleObservationMutation();

  const handleBookmark = async (e, id) => {
    e.stopPropagation();
    const data = {
      user_id: user?._id,
      target_id: id,
      target_type: "User",
    };

    // console.log(data, "jjjDD");

    try {
      const response = await toggleObservation(data);
      if (response?.data?.success) {
        Swal.fire({
          icon: "success",
          title: "Successsful!",
          // text: "Job bookmarked successfully!",
        });
      }
      if (response?.error?.data?.message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${response?.error?.data?.message}`,
        });
      }

      // console.log(response, "ress");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.message}`,
      });
    }
  };
  const handlePath = (coach) => {
    const allowedPlans =
      user?.subscriptionName === "Gold"
        ? ["Gold", "Silver", "Bronze"]
        : user?.subscriptionName === "Silver"
        ? ["Silver", "Bronze"]
        : user?.subscriptionName === "Bronze"
        ? ["Bronze"]
        : [];

    console.log(allowedPlans, "ddddallow");

    if (allowedPlans.includes(coach?.subscriptionName)) {
      navigate(`/dashboard/coacheDetails/${coach?._id}`);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You are not allowed to view his profile!",
      });
    }
  };

  const hancleMessageLink = (e, id) => {
    e.stopPropagation();
    navigate(`/dashboard/messages/${id}`);
  };
  return (
    <>
      <tr className="table_hover pointer" onClick={() => handlePath(coach)}>
        <td>
          <div className="player_info d-flex align-items-center gap-2">
            <div className="player_info_wrapper d-flex gap-2">
              <div className="player_img">
                <img
                  src={
                    coach?.image
                      ? `${
                          process.env.NODE_ENV !== "production"
                            ? import.meta.env.VITE_LOCAL_API_URL
                            : import.meta.env.VITE_LIVE_API_URL
                        }/api/v1/uploads/${coach?.image}`
                      : playerImgOne
                  }
                  alt="player-img"
                  style={{
                    height: "35px",
                    width: "35px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <div className="player_name">
                <p className="text_color_36 fw-medium fs_14">
                  {coach?.first_name} <br /> {coach?.last_name}
                </p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <p className="text_color_55 fw-normal fs_14 d-flex align-items-center gap-2">
            <p
              dangerouslySetInnerHTML={{
                __html: getCountryFlag(coach?.nationality),
              }}
            />
            {coach?.nationality}
          </p>
        </td>
        <td>
          <p className="text_color_55 fw-normal fs_14">
            {coach?.date_of_birth}
          </p>
        </td>
        <td>
          <p className="text_color_55 fw-normal fs_14">
            {coach?.club_position ? coach?.club_position : "N/A"}
          </p>
        </td>

        <td>
          <p className="text_color_55 fw-normal fs_14">
            {coach?.club_name ? coach?.club_name : "N/A"}
          </p>
        </td>

        <td>
          <p className="text_color_55 fw-normal fs_14">
            {coach?.subscriptionName ? coach?.subscriptionName : "N/A"}
          </p>
        </td>

        <td>
          <div className="d-flex align-items-center">
            <button
              className="bg-none me-3"
              onClick={(e) => handleBookmark(e, coach?._id)}
              style={{ width: "20px" }}
              disabled={isLoading}
            >
              {isBookmarked ? (
                <img src={bookmarkfill} alt="" />
              ) : (
                <img src={b1} alt="" />
              )}
            </button>
            <span
              // to={`/dashboard/messages/${coach?._id}`}
              onClick={(e) => hancleMessageLink(e, coach?._id)}
              className="text_color_55 fw-normal fs_14"
            >
              <img src={messageIcon} alt="message-icon" className="ms-2" />
            </span>
          </div>
        </td>
      </tr>
    </>
  );
};
