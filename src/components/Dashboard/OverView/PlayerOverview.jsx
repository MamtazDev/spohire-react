import MobilePlayers from "../players/MobilePlayers";
import playerImgOne from "../../../assets/playerImg.svg";
import messageIcon from "../../../assets/messageIcon.svg";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
const PlayerOverview = () => {
    return (
        <>
            <div className="overview player_overview">
                <div className="d-flex justify-content-between mt-lg-0 mt-4 mb-lg-0 mb-3">
                    <h4>Players</h4>
                    <Link to="/dashboard/players">View More</Link>
                </div>
                <Table responsive className="players_desk content overview_table1" style={{
                    background: "#FFFDFD"
                }}>
                    <tbody>
                        {[0, 1, 2, 3].map(() => (
                            <>
                                <tr className="table_hover">
                                    <td>
                                        <div className="player_info d-flex align-items-center gap-2">
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
                                                <Link to="/dashboard/messages"> <img src={messageIcon} alt="message-icon" className="ms-2" /></Link>
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </Table>
                <MobilePlayers className="m-lg-0 ms-4 me-4"></MobilePlayers>
            </div>

        </>
    );
};

export default PlayerOverview;