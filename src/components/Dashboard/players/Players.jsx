import { Table } from "react-bootstrap";
import "./Players.css";
import playerImgOne from "../../../assets/playerImg.svg";
import startIcon from "../../../assets/starIcon.svg";
import messageIcon from "../../../assets/messageIcon.svg";
import calender from "../../../assets/Calendar.png";
import mapin from "../../../assets/MapPin.png";
import MobileButtons from "./MobileButtons";

const Players = () => {
  return (
    <div className="players">
      <Table responsive className="players_desk">
        <thead>
          <tr>
            <th className="fs_14 text_color_36 fw-normal">
              <div className="d-flex align-items-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
                <p>Name</p>
              </div>
            </th>

            <th className="fs_14 text_color_36 fw-normal">Nation</th>

            <th className="fs_14 text_color_36 fw-normal">Date of Birth</th>

            <th className="fs_14 text_color_36 fw-normal">Position</th>

            <th className="fs_14 text_color_36 fw-normal">Club</th>

            <th className="fs_14 text_color_36 fw-normal">Status</th>

            <th className="fs_14 text_color_36 fw-normal">Action</th>
            {/* ))} */}
          </tr>
        </thead>

        <tbody>
          {/* blank tr for taking space */}
          {[0, 1, 2, 3, 4.5, 6, 7, 8, 9, 10].map(() => (
            <>
              <tr>
                <td className="border-bottom-0"></td>
              </tr>

              <tr className="table_hover">
                <td className="border-bottom-0">
                  <div className="player_info d-flex align-items-center gap-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>

                    <div className="player_info_wrapper d-flex gap-2">
                      <div className="player_img">
                        <img src={playerImgOne} alt="player-img" />
                      </div>
                      <div className="player_name">
                        <p className="text_color_36 fw-medium fs_14">
                          Jacob <br /> Bennett
                        </p>
                      </div>
                    </div>
                  </div>
                </td>

                <td className="border-bottom-0">
                  <p className="text_color_55 fw-normal fs_14">Italy</p>
                </td>

                <td className="border-bottom-0">
                  <p className="text_color_55 fw-normal fs_14">2002</p>
                </td>

                <td className="border-bottom-0">
                  <p className="text_color_55 fw-normal fs_14">PG</p>
                </td>

                <td className="border-bottom-0">
                  <p className="text_color_55 fw-normal fs_14">Milano</p>
                </td>

                <td className="border-bottom-0">
                  <p className="text_color_55 fw-normal fs_14">Gold</p>
                </td>

                <td className="border-bottom-0 d-flex align-items-center">
                  <p className="text_color_55 fw-normal fs_14">
                    <img src={startIcon} alt="star-icon" />
                  </p>

                  <p className="text_color_55 fw-normal fs_14">
                    <img src={messageIcon} alt="message-icon" />
                  </p>
                </td>
              </tr>
            </>
          ))}
          {/* blank tr for taking space */}
        </tbody>
      </Table>

      <div className="players_mobile ">
        <div className=" d-flex flex-wrap gap-5 justify-content-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
            <>
              <div className="players_wrapper ">
                <div className="d-flex justify-content-between gap-3">
                  <div className="d-flex gap-4">
                    <img src={playerImgOne} alt="" />
                    <div>
                      <div className="player_name">
                        <p className="text_color_36 fw-medium fs_14">
                          Jacob Bennett
                        </p>
                        <p>PG</p>
                      </div>
                    </div>
                  </div>
                  {/* icons */}
                  <div className="d-flex">
                    <p className="text_color_55 fw-normal fs_14">
                      <img src={startIcon} alt="star-icon" className="me-2" />
                    </p>

                    <p className="text_color_55 fw-normal fs_14">
                      <img src={messageIcon} alt="message-icon" />
                    </p>
                  </div>
                </div>

                <div className="location_div">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <img src={mapin} alt="message-icon" className="me-2" />
                      Italy
                    </div>
                    <p>
                      Club : <span className="ms-2">Milano</span>
                    </p>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <img src={calender} alt="message-icon" className="me-2" />
                      Date of birth :
                    </div>
                    <p className="ms-2">14 feb, 2002</p>
                  </div>
                  <p className="text-center">
                    Status: <span className="ms-2">Gold</span>
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <MobileButtons />
    </div>
  );
};

export default Players;
