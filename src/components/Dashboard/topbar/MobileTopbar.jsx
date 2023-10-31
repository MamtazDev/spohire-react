/* eslint-disable no-unused-vars */
import overview from "../../../assets/overview.png";
import trade from "../../../assets/trade.png";
import setting from "../../../assets/44-setting.png";
import more from "../../../assets/DotsThreeCircle.png";

const MobileTopbar = () => {
  return (
    <div className="mobileTopbar">
      <div className="d-flex gap-5 align-items-center  justify-content-center mobile_topbar">
        <div className="d-flex flex-column justify-content-center align-items-center p-md-4 pt-4 pb-4">
          <img src={overview} alt="" />
          <p> Overview</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center p-md-4 pt-4 pb-4">
          <img src={trade} alt="" />
          <p> Transfer Market</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center p-md-4 pt-4 pb-4">
          <img src={setting} alt="" />
          <p> Settings</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center p-md-4 pt-4 pb-4">
          <img src={more} alt="" />
          <p> More</p>
        </div>
      </div>
    </div>
  );
};

export default MobileTopbar;
