import mbappe from "../../assets/mbappe.png";
import flag1 from "../../assets/flag1.png";
import flag2 from "../../assets/flag2.png";
import flag3 from "../../assets/flag3.png";
import flag4 from "../../assets/flag4.png";
import flag5 from "../../assets/flag5.png";
const GallaryTable = ({ userData }) => {
  const convertAge = (dateString) => {
    const dob = new Date(dateString);
    const currentDate = new Date();
    const timeDiff = currentDate - dob;
    const age = Math.floor(timeDiff / (365.25 * 24 * 60 * 60 * 1000));
    return age;
  };
  return (
    <div>
      <div className="table-responsive">
        <div className="detailed">
          <table className="table">
            <thead style={{ marginBottom: "100px" }}>
              <tr>
                <th scope="col">Player</th>
                <th scope="col">Age</th>
                <th scope="col">Nat.</th>
                <th scope="col">Left</th>
                <th scope="col">Joined</th>
                <th scope="col">Transfer date </th>
                <th scope="col">Sports</th>
                <th scope="col">Fee</th>{" "}
              </tr>
            </thead>
            <tbody>
              <tr className="row_1">
                <td>
                  <div className="div_data">
                    <div className="d-flex gap_14 align-items-center">
                      <img className="profile_image11" src={mbappe} alt="" />
                      <div className="col1_wrapper d_col_wrapper">
                        <h4>
                          {userData?.first_name} {userData?.last_name}
                        </h4>
                        <p>{userData?.role}</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {" "}
                  <p className="age_text d-flex justify-content-center">
                    {convertAge(userData?.date_of_birth)}
                  </p>
                </td>
                <td>
                  {" "}
                  <div
                    className="d-flex flex-column gap_4 align-items-center"
                    style={{ gap: "4px" }}
                  >
                    <img src={flag1} alt="flag1" />
                    <img src={flag2} alt="flag1" />
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="d-flex gap_11 align-items-center justify-content-start">
                    {!userData?.club_name && <img src={flag3} alt="flag1" />}
                    <span className="postmouth_text mb-0">
                      {userData?.club_name
                        ? userData?.club_name
                        : "Without Club"}
                    </span>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="d-flex align-items-center gap_19">
                    <img src={flag4} alt="flag1" />
                    <div>
                      <p className="postmouth_text">Portsmouth</p>
                      <img src={flag5} alt="flag1" />
                    </div>
                  </div>
                </td>
                <td>
                  {" "}
                  <p className="age_text">-</p>
                </td>
                <td>
                  <p className="age_text">{userData?.sports}</p>
                </td>
                <td>
                  {" "}
                  <p className="age_text"> - </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GallaryTable;
