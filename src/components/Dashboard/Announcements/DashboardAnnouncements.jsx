import "./Announcements.css";
import a1 from "../../../assets/a11.png";
import flag from "../../../assets/flag.png";
import dollar from "../../../assets/coin-dollar.png";
import location from "../../../assets/location.png";
import b1 from "../../../assets/bookmark.png";
import bookmarkfill from "../../../assets/bookmark-fill.png";
import edit2 from "../../../assets/edit2.png";
import delet from "../../../assets/delete.png";
import { Link } from "react-router-dom";
import DeleteModal from "../../../pages/Announcement/DeleteModal";
import { useState } from "react";
import { useGetAllAnnouncementQuery } from "../../../features/announcement/announcementApi";
import { useToggleObservationMutation } from "../../../features/observation/observationApi";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const DashboardAnnouncements = () => {
  const { data: allAnnouncements, isLoading } = useGetAllAnnouncementQuery();

  console.log(allAnnouncements, "allll");
  return (
    <>
      <div
        className="announcement"
        style={{ margin: "30px", paddingTop: "30px" }}
      >
        <div>
          {allAnnouncements?.data &&
            allAnnouncements?.data?.length > 0 &&
            allAnnouncements?.data.map((announcement, idx) => (
              <>
                {/* <div className="announcelist_wrapper">
                                    <div className='d-flex justify-content-between align-items-start'>
                                        <div className="d-flex align-items-center" style={{ gap: "20px" }}>
                                            <div className='announcement_pic'>
                                                <img src={a1} alt="" />
                                            </div>
                                            <div className='recruiment f_sfPro'>
                                                <p>Player recruitment</p>
                                                <div className="d-flex gap-3 flex-wrap">
                                                    <div className='d-flex align-items-center' style={{ gap: "6px" }}>
                                                        <img src={location} alt="" />
                                                        <span>Vegas Street Circuit</span>
                                                    </div>
                                                    <div className='d-flex align-items-center' style={{ gap: "6px" }}>
                                                        <img src={flag} alt="" />
                                                        <span>Published</span>
                                                    </div>
                                                    <div className='d-flex align-items-center' style={{ gap: "6px" }}>
                                                        <img src={dollar} alt="" />
                                                        <span>USD 5000</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className='d-lg-block d-none'>
                                            <div className='d-flex gap-3 '>
                                                <Link to="#">   <img src={bookmark} alt="" /> </Link>
                                                <Link to="/dashboard/editAnnouncements"> <img src={edit2} alt="edit" /> </Link>

                                                <button className='bg-none' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                                                    <img src={delet} alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='announcement_details f_sfPro'>We cant wait to share this milestone with our incredible sports community. Your passion and support have fueled our journey, and were thrilled to <br className='d-lg-block d-none' /> take it to the next level together.</p>
                                    <div className='d-flex gap-3 d-lg-none d-block justify-content-end'>
                                        <img src={bookmark} alt="" />
                                        <img src={edit2} alt="" />
                                        <button className='bg-none' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                                            <img src={delet} alt="" />
                                        </button>
                                    </div>
                                </div> */}
                <SingleAnnouncement key={idx} announcement={announcement} />
              </>
            ))}
        </div>
      </div>
      <DeleteModal />
    </>
  );
};

export default DashboardAnnouncements;

const SingleAnnouncement = ({ announcement }) => {
  const [bookmark, setBookmark] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const [toggleObservation, { isLoading }] = useToggleObservationMutation();

  const handleBookmark = async (id) => {
    const data = {
      user_id: user?._id,
      target_id: id,
      target_type: "Announcement",
    };

    // console.log(data, "jjjDD");

    try {
      const response = await toggleObservation(data);
      if (response?.data?.success) {
        Swal.fire({
          icon: "success",
          title: "Successsful!",
          text: "Announcement bookmarked successfully!",
        });
      }
      if (response?.error?.data?.message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${response?.error?.data?.message}`,
        });
      }

      console.log(response, "ress");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.message}`,
      });
    }
  };
  return (
    <>
      <div className="announcelist_wrapper">
        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex align-items-center" style={{ gap: "20px" }}>
            <div className="announcement_pic">
              <img
                src={a1}
                // src={
                //   announcement?.image
                //     ? `http://localhost:8000/${announcement?.image}`
                //     : a1
                // }
                alt=""
              />
            </div>
            <div className="recruiment f_sfPro">
              <p>{announcement?.title}</p>
              <div className="d-flex gap-3 flex-wrap">
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "6px" }}
                >
                  <img src={location} alt="" />
                  <span>{announcement?.location}</span>
                </div>
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "6px" }}
                >
                  <img src={flag} alt="" />
                  <span>{announcement?.status}</span>
                </div>
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "6px" }}
                >
                  <img src={dollar} alt="" />
                  <span>USD {announcement?.budget}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="d-lg-block d-none">
            <div className="d-flex gap-3 ">
              <button
                className="bg-none"
                style={{ width: "20px" }}
                onClick={() => handleBookmark(announcement?._id)}
              >
                {bookmark ? (
                  <img src={bookmarkfill} alt="" />
                ) : (
                  <img src={b1} alt="" />
                )}
              </button>
              {/* <Link to="/dashboard/editAnnouncements">
                {" "}
                <img src={edit2} alt="edit" />{" "}
              </Link>
              <button
                className="bg-none"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                <img src={delet} alt="" />
              </button> */}
            </div>
          </div>
        </div>
        <p className="announcement_details f_sfPro">
          {/* We cant wait to share this milestone with our incredible sports
          community. Your passion and support have fueled our journey, and were
          thrilled to <br className="d-lg-block d-none" /> take it to the next
          level together. */}
          {announcement?.description}
        </p>
        <div className="d-flex gap-3 d-lg-none d-block justify-content-end">
          <button
            className="bg-none"
            style={{ width: "20px" }}
            onClick={handleBookmark}
          >
            {bookmark ? (
              <img src={bookmarkfill} alt="" />
            ) : (
              <img src={b1} alt="" />
            )}
          </button>
          <img src={edit2} alt="" />
          <button
            className="bg-none"
            data-bs-target="#exampleModalToggle2"
            data-bs-toggle="modal"
          >
            <img src={delet} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
