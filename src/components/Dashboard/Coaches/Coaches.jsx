import { Table } from "react-bootstrap";
import playerImgOne from "../../../assets/playerImg.svg";
import startIcon from "../../../assets/starIcon.svg";
import messageIcon from "../../../assets/messageIcon.svg";
import MobilePlayers from "../players/MobilePlayers";
import MobileButtons from "../players/MobileButtons";
// import MobileButtons from "./MobileButtons";
// import MobilePlayers from "./MobilePlayers";
const Coaches = () => {
    return (
        <>
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
                        {/* blank tr for taking space */}
                        {[0, 1, 2, 3, 4,5, 6, 7, 8, 9, 10].map(() => (
                            <>
                                <tr className="table_hover">
                                    <td>
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

                                            <p className="text_color_55 fw-normal fs_14">
                                                <img src={messageIcon} alt="message-icon" className="ms-2" />
                                            </p>
                                        </div>
                                    </td>

                                </tr>
                            </>
                        ))}
                    </tbody>
                </Table>
                <MobilePlayers></MobilePlayers>
                <MobileButtons />
            </div>
        </>
    );
};

export default Coaches;