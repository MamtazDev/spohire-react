/* eslint-disable no-unused-vars */
import overview from "../../../assets/overview.png";
import trade from "../../../assets/trade.png";
import setting from "../../../assets/44-setting.png";
import more from "../../../assets/DotsThreeCircle.png";
import { Link } from "react-router-dom";

const MobileTopbar = () => {
  return (
    <div className="mobileTopbar">
      <div className="d-flex gap-5 align-items-center  justify-content-center mobile_topbar">
        <div className="d-flex flex-column justify-content-center align-items-center p-md-4 pt-4 pb-4">
          <img src={overview} alt="" />
          <p>
            {" "}
            <Link to="/dashboard"> Overview</Link>
          </p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center p-md-4 pt-4 pb-4">
          <img src={trade} alt="" />
          <p>
            <Link to="/dashboard/players"> Transfer Market</Link>
          </p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center p-md-4 pt-4 pb-4">
          <img src={setting} alt="" />
          <p>
            {" "}
            <Link to="/dashboard/basicinfo">Settings</Link>{" "}
          </p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center p-md-4 pt-4 pb-4">
          <img src={more} alt="" />
          <p>
            {" "}
            <Link className="/dashboard/announcements">More</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileTopbar;
