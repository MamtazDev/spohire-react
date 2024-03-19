import google from "../../../assets/google.svg";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";

const RelatedJob = () => {
  return (
    <div className="related_job description_outline">
      <p className="title">Related Jobs</p>
      <div className="d-flex flex-column gap-4">
        {[1, 2, 3].map((index) => (
          <div className="jobs" key={index}>
            <p className="name">Junior Graphic Designer</p>
            <div className="d-flex align-items-center gap-2 mb-4">
              <button className="status_btn">Internship</button>
              <p className="secondary_text">Salary: $20,000 - $25,000</p>
            </div>
            <div className="d-flex  w-100 align-items-center justify-content-between gap-4">
              <div className="d-flex align-items-center   gap-4">
                <img src={google} alt="" />
                <div>
                  <p>Google Inc.</p>
                  <div className="d-flex align-items-center gap-1">
                    <IoLocationOutline className="icon" />
                    <p className="secondary_text">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
              <button className="bg-transparent">
                <FaRegBookmark />
                {/* <FaBookmark /> */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedJob;
