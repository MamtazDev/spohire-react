/* eslint-disable no-unused-vars */
import a1 from "../../../assets/a11.png";
import flag from "../../../assets/flag.png";
import dollar from "../../../assets/coin-dollar.png";
import location from "../../../assets/location.png";
import { Link } from "react-router-dom";
import { useGetAllAnnouncementQuery } from "../../../features/announcement/announcementApi";

const AnnouncementOverview = () => {
  const { data: allAnnouncements, isLoading } = useGetAllAnnouncementQuery();

  console.log(allAnnouncements?.data, "ann");
  return (
    <>
      <div
        className="job_offer_overrview_wrapper"
        style={{ backgroundColor: "#FDFEFF" }}
      >
        <div className="d-flex justify-content-between">
          <h4>Announcements</h4>
          {allAnnouncements?.data && allAnnouncements?.data?.length > 0 && (
            <Link to="/dashboard/announcements">View More</Link>
          )}
        </div>
        {/* list */}
        {allAnnouncements?.data && allAnnouncements?.data.length > 0 ? (
          allAnnouncements?.data.slice(0, 3).map((item, idx) => (
            <div
              className="announcelist_wrapper1"
              style={{ marginTop: "10px" }}
              key={idx}
            >
              <div className="d-flex justify-content-between align-items-start">
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "20px" }}
                >
                  <div className="announcement_pic">
                    <img
                      src={
                        item?.image
                          ? `${
                              process.env.NODE_ENV !== "production"
                                ? import.meta.env.VITE_LOCAL_API_URL
                                : import.meta.env.VITE_LIVE_API_URL
                            }/api/v1/uploads/${item?.image}`
                          : a1
                      }
                      alt=""
                      style={{
                        height: "46px",
                        width: "46px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                  <div className="recruiment1 f_sfPro">
                    <p>{item?.title}</p>
                    <div className="d-flex gap-3 flex-wrap">
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: "6px" }}
                      >
                        <img src={location} alt="" />
                        <span>{item?.location}</span>
                      </div>
                      {/* <div
                        className="d-flex align-items-center"
                        style={{ gap: "6px" }}
                      >
                        <img src={flag} alt="" />
                        <span>{item?.status}</span>
                      </div> */}
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: "6px" }}
                      >
                        <img src={dollar} alt="" />
                        <span>USD {item?.budget}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="d-flex justify-content-center py-5">
            No announcement found
          </div>
        )}
      </div>
    </>
  );
};

export default AnnouncementOverview;
