/* eslint-disable react/prop-types */
import mbappe from "../../assets/mbappe.png";
import flag1 from "../../assets/flag1.png";
import flag2 from "../../assets/flag2.png";
import flag3 from "../../assets/flag3.png";
import flag4 from "../../assets/flag4.png";
import flag5 from "../../assets/flag5.png";
import { useNavigate } from "react-router-dom";
import { useGetFilteredUsersQuery } from "../../features/auth/authApi";

const Compact = ({ flagurl }) => {
  const navigate = useNavigate();

  const { data, isLoading } = useGetFilteredUsersQuery(
    "role=Coach&&role=Player"
  );

  const convertAge = (dateString) => {
    const dob = new Date(dateString);
    const currentDate = new Date();
    const timeDiff = currentDate - dob;
    const age = Math.floor(timeDiff / (365.25 * 24 * 60 * 60 * 1000));
    return age;
  };
  const handlePath = () => {
    navigate("/gallary");
  };

  return (
    <>
      <div className="container-fluid mb_150">
        <div className="compact_wrapper">
          <div className="table-responsive">
            <div className="detailed p-0">
              <table className="table">
                <tbody>
                  {data &&
                    data?.length > 0 &&
                    data.map((item, idx) => (
                      <tr
                        onClick={handlePath}
                        style={{ cursor: "pointer" }}
                        className="row_1"
                        key={idx}
                      >
                        <td>
                          <div className="div_data">
                            <div className="d-flex gap_14 align-items-center">
                              <img
                                className="profile_image11"
                                src={mbappe}
                                alt=""
                              />
                              <div className="col1_wrapper d_col_wrapper">
                                <h4>
                                  {item?.first_name} {item?.last_name}
                                </h4>
                                <p>Left Winger</p>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td></td>
                        <td>
                          {" "}
                          <p className="age_text d-flex justify-content-start">
                            {convertAge(item?.date_of_birth)}
                          </p>
                        </td>
                        <td></td>
                        <td>
                          {" "}
                          <div
                            className="d-flex flex-column gap_4 align-items-start"
                            style={{ gap: "4px" }}
                          >
                            <img src={flag1} alt="flag1" />
                            <img src={flag2} alt="flag1" />
                          </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                          {" "}
                          <div className="d-flex gap_11 align-items-center justify-content-start">
                            {!item?.club_name && (
                              <img src={flag3} alt="flag1" />
                            )}
                            <span className="postmouth_text mb-0">
                              {item?.club_name
                                ? item?.club_name
                                : "Without Club"}
                            </span>
                          </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                          {" "}
                          <div className="d-flex align-items-center gap_19">
                            <img src={flag4} alt="flag1" />

                            <div>
                              <p className="postmouth_text">Portsmouth</p>
                              <img
                                style={{ height: "29px", width: "46px" }}
                                src={flagurl ? flagurl : flag5}
                                alt="flag1"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compact;
