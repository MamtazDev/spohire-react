import MobilePlayers from "../players/MobilePlayers";
import playerImgOne from "../../../assets/playerImg.svg";
import messageIcon from "../../../assets/messageIcon.svg";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetFilteredUsersQuery } from "../../../features/auth/authApi";
const PlayerOverview = ({ user }) => {
  const { data, isLoading } = useGetFilteredUsersQuery(
    user?.role === "Manager"
      ? ""
      : user?.role === "Player"
      ? "role=Coach"
      : "role=Player"
  );
  // console.log(data, "duser");

  const allowedPlans =
    user?.subscriptionName === "Gold"
      ? ["Gold", "Silver", "Bronze"]
      : user?.subscriptionName === "Silver"
      ? ["Silver", "Bronze"]
      : user?.subscriptionName === "Bronze"
      ? ["Bronze"]
      : [];
  return (
    <>
      <div className="overview player_overview">
        <div className="d-flex justify-content-between mt-lg-0 mt-4 mb-lg-0 mb-3">
          {(user?.role === "Manager" || user?.role === "Coach") && (
            <h4> Players</h4>
          )}
          {user?.role === "Player" && <h4> Coachs</h4>}
          {data && data?.length > 0 && (
            <Link
              to={`${
                user?.role === "Manager" || user?.role === "Coach"
                  ? "/dashboard/players"
                  : "/dashboard/coaches"
              }`}
            >
              View More
            </Link>
          )}
        </div>
        <Table
          responsive
          className="players_desk content overview_table1"
          style={{
            background: "#FFFDFD",
          }}
        >
          <tbody>
            {data &&
              data?.length > 0 &&
              data
                ?.filter(
                  (i) =>
                    i?.subscriptionName &&
                    allowedPlans.includes(i?.subscriptionName)
                )
                .slice(0, 6)
                .map((item, idx) => (
                  <tr className="table_hover" key={idx}>
                    <td>
                      <div className="player_info d-flex align-items-center gap-2">
                        <div className="player_info_wrapper d-flex gap-2 align-items-center">
                          <div className="player_img">
                            <img
                              src={
                                data?.image
                                  ? `${
                                      process.env.NODE_ENV !== "production"
                                        ? import.meta.env.VITE_LOCAL_API_URL
                                        : import.meta.env.VITE_LIVE_API_URL
                                    }/api/v1/uploads/${data?.image}`
                                  : playerImgOne
                              }
                              alt="player-img"
                              style={{
                                width: "35px",
                                height: "35px",
                                objectFit: "cover",
                                borderRadius: "8px",
                              }}
                            />
                          </div>
                          <div className="player_name">
                            <p className="text_color_36 fw-medium fs_14">
                              {/* {item?.first_name} <br /> {item?.last_name} */}
                              {item?.fullName}
                            </p>
                            {/* <Link
                              to={`/dashboard/messages/${item?.referral}`}
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                fontSize: "12px",
                                textDecoration: "underline",
                              }}
                              className="text-primary"
                            >
                              Contact with Owner
                            </Link> */}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text_color_55 fw-normal fs_14">
                        {item?.nationality}
                      </p>
                    </td>

                    <td>
                      <p className="text_color_55 fw-normal fs_14">
                        {item?.date_of_birth}
                      </p>
                    </td>

                    <td>
                      <p className="text_color_55 fw-normal fs_14">
                        {item?.position ? item?.position : "N/A"}
                      </p>
                    </td>

                    <td>
                      <p className="text_color_55 fw-normal fs_14">
                        {item?.club_name ? item?.club_name : "N/A"}
                      </p>
                    </td>

                    <td>
                      <p className="text_color_55 fw-normal fs_14">
                        {item?.subscriptionName
                          ? item?.subscriptionName
                          : "N/A"}
                      </p>
                    </td>

                    <td>
                      <div className="d-flex align-items-center">
                        <p className="text_color_55 fw-normal fs_14">
                          <Link to={`/dashboard/messages/${item?.referral}`}>
                            {" "}
                            <img
                              src={messageIcon}
                              alt="message-icon"
                              className="ms-2"
                            />
                          </Link>
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
          </tbody>
        </Table>
        <MobilePlayers className="m-lg-0 ms-4 me-4"></MobilePlayers>
      </div>
    </>
  );
};

export default PlayerOverview;
