import { Table } from "react-bootstrap";
import "./Players.css";
import playerImgOne from "../../../assets/playerImg.svg";
import startIcon from "../../../assets/starIcon.svg";
import messageIcon from "../../../assets/messageIcon.svg";
import MobileButtons from "./MobileButtons";
import MobilePlayers from "./MobilePlayers";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Players = () => {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handlePath = () => {
    if (isChecked) {
      navigate('/dashboard/viewDetails')
    }
  };

  return (
    <div className="players">
      <Table responsive className="players_desk content">
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

          </tr>
        </thead>
        <tbody>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
            <>
              <tr onClick={handlePath} className="table_hover pointer">
                <td>
                  <div  className="player_info d-flex align-items-center gap-2">
                    <div  className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        onChange={handleCheckboxChange}
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
                <td>
                  <p className="text_color_55 fw-normal fs_14">Italy</p>
                </td>

                <td>
                  <p className="text_color_55 fw-normal fs_14">2002</p>
                </td>

                <td>
                  <p className="text_color_55 fw-normal fs_14">PG</p>
                </td>

                <td>
                  <p className="text_color_55 fw-normal fs_14">Milano</p>
                </td>

                <td>
                  <p className="text_color_55 fw-normal fs_14">Gold</p>
                </td>
 
                <td>
                  <div className="d-flex align-items-center">
                    <p className="text_color_55 fw-normal fs_14">
                      <img src={startIcon} alt="star-icon" className="" />
                    </p>

                    <Link to="/dashboard/messages" className="text_color_55 fw-normal fs_14">
                      <img src={messageIcon} alt="message-icon" className="ms-2" />
                    </Link>
                  </div>
                </td>

              </tr>
            </>
          ))}
          {/* blank tr for taking space */}
        </tbody>
      </Table>
      <MobilePlayers />
      <MobileButtons />
    </div>
  );
};

export default Players;
