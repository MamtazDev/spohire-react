import { useLocation } from "react-router-dom";
import plus from "../../../assets/Plus.png";

const MobileButtons = () => {
  let location = useLocation();
  return (
    <div className="mobile_btns">
      <div className=" d-flex flex-wrap gap-5 justify-content-center mt-5">
        <button className="btn filter_mb_btn">
          Filter options <img src={plus} alt="" />
        </button>
        <button className="btn btn-primary details_mob">
          {location.pathname === "/dashboard/jobOffers" && `Add job offer`}
          {location.pathname === "/dashboard/players" && "View Details"}
        </button>
      </div>
    </div>
  );
};
export default MobileButtons;
