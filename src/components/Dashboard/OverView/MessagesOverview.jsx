import { Link } from "react-router-dom";
import profile from "../../../assets/chatprofile.png";
import { useGetUserAllConversationsQuery } from "../../../features/chat/chatApi";
import { useSelector } from "react-redux";

const chatData = [
  {
    name: "Abram Korsgaard",
    message: "Yeah, I’m done with it...",
    time: "12:34",
    profile: profile,
  },
  {
    name: "John Doe",
    message: "Hello there!",
    time: "13:45",
    profile: profile,
  },
  {
    name: "Abram Korsgaard",
    message: "Yeah, I’m done with it...",
    time: "12:34",
    profile: profile,
  },
  {
    name: "John Doe",
    message: "Hello there!",
    time: "13:45",
    profile: profile,
  },
  {
    name: "John Doe",
    message: "Hello there!",
    time: "13:45",
    profile: profile,
  },
];
const MessagesOverview = () => {
  const { user } = useSelector((state) => state.auth);
  const { data } = useGetUserAllConversationsQuery(user?._id);

  // console.log(data, "dfdff");
  return (
    <div>
      <div className="job_offer_overrview_wrapper">
        <div className="d-flex justify-content-between">
          <h4>Messages</h4>
          {data?.length > 0 && <Link to="/dashboard/messages">View More</Link>}
        </div>

        {data &&
          data?.length > 0 ?
          data.slice(0, 5).map((item, index) => (
            <>
              <div
                className="d-flex align-items-start justify-content-between chat_wrapper mt-3"
                key={index}
              >
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <img src={profile} alt="profile" />
                  </div>
                  <div>
                    <h5>
                      {item.first_name} {item?.last_name}
                    </h5>
                    {/* <span>{data.message}</span> */}
                  </div>
                </div>
                <div>{/* <p>{data.time}</p> */}</div>
              </div>
              {index !== chatData.length - 1 && (
                <hr className="message_overview_hr" />
              )}
            </>
          )) : <div className="d-flex justify-content-center py-5">No messages found</div>}
      </div>
    </div>
  );
};

export default MessagesOverview;
