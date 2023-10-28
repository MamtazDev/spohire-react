import plus from "../../../assets/Plus.png";

const MobileButtons = () => {
  return (
    <>
      <div className="d-flex flex-wrap gap-5 justify-content-center mt-5">
        <button className="btn filter_mb_btn">
          Filter options <img src={plus} alt="" />
        </button>
        <button className="btn btn-primary details_mob">View Details</button>
      </div>
    </>
  );
};

export default MobileButtons;
