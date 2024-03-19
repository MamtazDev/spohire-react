import google from "../../../assets/google.svg";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { useState } from "react";

const RelatedJob = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = (index) => {
    if (bookmarks.includes(index)) {
      setBookmarks(bookmarks.filter((item) => item !== index));
    } else {
      setBookmarks([...bookmarks, index]);
    }
  };

  return (
    <div className="related_job ">
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
              <button
                onClick={() => handleBookmark(index)}
                className="bookmark bg-transparent"
              >
                {bookmarks.includes(index) ? <FaBookmark /> : <FaRegBookmark />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedJob;
