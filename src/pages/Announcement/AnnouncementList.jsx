/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import a1 from "../../assets/a11.png";
import flag from "../../assets/flag.png";
import dollar from "../../assets/coin-dollar.png";
import location from "../../assets/location.png";
import JobCategory from "./JobCategory";
import DeleteModal from "./DeleteModal";
import { useState } from "react";
import { useGetAllAnnouncementQuery } from "../../features/announcement/announcementApi";

const sports = [
  "Football",
  "Basketball",
  "Handball",
  "Volleyball",
];
const country = [
  "Paris",
  "London",
  "Finland",
  "Canada     ",

];
const jobcategory = [
  "Tournament",
  "Championship",
];
const AnnouncementList = () => {
  const { data: allAnnouncements, isLoading } = useGetAllAnnouncementQuery();
  const [sortedItems, setSortedItems] = useState([]);

  console.log(sortedItems, "sortedItems");

  const handleFilter = (value) => {
    if (sortedItems.length > 0) {
      return sortedItems.includes(value?.status);
    } else {
      return true;
    }
  };

  const filteredAnnouncements = allAnnouncements?.data?.filter(handleFilter);

  return (
    <>
      <div
        className="container"
        style={{ marginTop: "104px", marginBottom: "150px" }}>
        <div className="row">
          <div className="col-lg-9">
            {/* {allAnnouncements?.data &&
              allAnnouncements?.data?.length > 0 &&
              allAnnouncements?.data
                ?.filter(handleFilter)
                .map((item, index) => {
                  <SingleAnnouncement key={index} item={item} />
                })}
            {(!allAnnouncements?.data || allAnnouncements?.data?.length === 0) && (
              <p>No data found</p>
            )} */}
            {filteredAnnouncements?.length > 0 ? (
              filteredAnnouncements.map((item, index) => (
                <SingleAnnouncement key={index} item={item} />
              ))
            ) : (
              allAnnouncements?.data?.length > 0 && (
                <p>No data found</p>
              )
            )}
          </div>
          <div className="col-lg-3">
            <JobCategory
              setSortedItems={setSortedItems}
              sortedItems={sortedItems}
              sports={sports}
              country={country}
              jobcategory={jobcategory}
            />
          </div>
        </div>
      </div>
      <DeleteModal />
    </>
  );
};

export default AnnouncementList;

const SingleAnnouncement = ({ item }) => {
  const [bookmark, setBookmark] = useState(false);
  const handleBookmark = () => {
    setBookmark(!bookmark);
  };
  return (
    <>
      <div className="announcelist_wrapper">
        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex align-items-center" style={{ gap: "20px" }}>
            <div className="announcement_pic">
              <img src={a1} alt="" />
            </div>
            <div className="recruiment f_sfPro">
              <p>{item?.title}</p>
              <div className="d-flex gap-3 flex-wrap">
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "6px" }}
                >
                  <img src={location} alt="" />
                  <span>{item?.location}</span>
                </div>
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "6px" }}
                >
                  <img src={flag} alt="" />
                  <span>{item?.status}</span>
                </div>
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
          {/* icon div */}
          <div className="d-lg-block d-none">
            {/* <div>
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
            </div> */}
          </div>
        </div>
        <p
          className="announcement_details f_sfPro"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 3, // Number of lines to show
            textOverflow: "ellipsis",
          }}
        >
          {item?.description}
        </p>
        <div className="d-flex gap-3 d-lg-none d-block justify-content-end">
          <button className="bg-none" style={{ color: "#929292" }}>
            {" "}
            <i className="fa-regular fa-bookmark"></i>
          </button>
        </div>
      </div>
    </>
  );
};
