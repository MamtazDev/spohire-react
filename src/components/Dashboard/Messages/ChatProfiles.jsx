import { useNavigate } from "react-router-dom";
import profile from "../../../assets/chatprofile.png";
import { useGetUserAllConversationsQuery } from "../../../features/chat/chatApi";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMessageUser } from "../../../features/chat/chatSlice";

const ChatProfiles = ({ user, searchText }) => {
  const { data } = useGetUserAllConversationsQuery(user?._id);
  const { selectedMsgUser } = useSelector((state) => state.chat);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleFilter = (data) => {
    if (searchText) {
      const searchName = `${data?.first_name + " " + data?.last_name}`;
      return (
        searchName
          .toLocaleLowerCase()
          // eslint-disable-next-line react/prop-types
          .includes(searchText.toLocaleLowerCase())
      );
    } else {
      return true;
    }
  };

  const handleClick = (userData) => {
    dispatch(setSelectedMessageUser(userData));
    navigate(`/dashboard/messages/${userData?._id}`);
  };
  return (
    <>
      <div className="profiles_list">
        <h6>Messages</h6>

        {data &&
          data?.length > 0 &&
          data.filter(handleFilter).map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(item)}
              style={{ cursor: "pointer" }}
              className={`${
                selectedMsgUser?._id === item?._id && "bg-light rounded"
              } px-2 py-2 my-2`}
            >
              <div className="d-flex align-items-start chat_wrapper justify-content-between w-100 ">
                <div className="d-flex align-items-center gap-3 w-100 h-100">
                  <div>
                    <img
                      src={
                        item?.image
                          ? `${
                              process.env.NODE_ENV !== "production"
                                ? import.meta.env.VITE_LOCAL_API_URL
                                : import.meta.env.VITE_LIVE_API_URL
                            }/api/v1/uploads/${item?.image}`
                          : profile
                      }
                      alt="profile"
                      style={{
                        height: "49px",
                        width: "49px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <h5>
                    {item?.first_name} {item?.last_name}
                  </h5>
                  {/* <span>Yeah, I’m done with it...</span> */}
                </div>

                <div>{/* <p>12:34</p> */}</div>
              </div>
              <hr className="chat_line mt-2" />
            </div>
          ))}
        {/* <div className="d-flex align-items-start chat_wrapper justify-content-between w-100 ">
          <div className="d-flex align-items-start gap-3">
            <div>
              <img src={profile} alt="profile" />
            </div>
            <div>
              <h5>Abram Korsgaard</h5>
              <span>Yeah, I’m done with it...</span>
            </div>
          </div>

          <div>
            <p>12:34</p>
          </div>
        </div>
        <hr className="chat_line" />
        <div className="d-flex align-items-start chat_wrapper justify-content-between w-100 ">
          <div className="d-flex align-items-start gap-3">
            <div>
              <img src={profile} alt="profile" />
            </div>
            <div>
              <h5>Abram Korsgaard</h5>
              <span>Yeah, I’m done with it...</span>
            </div>
          </div>

          <div>
            <p>12:34</p>
          </div>
        </div>
        <hr className="chat_line" />
        <div className="d-flex align-items-start chat_wrapper justify-content-between w-100 ">
          <div className="d-flex align-items-start gap-3">
            <div>
              <img src={profile} alt="profile" />
            </div>
            <div>
              <h5>Abram Korsgaard</h5>
              <span>Yeah, I’m done with it...</span>
            </div>
          </div>

          <div>
            <p>12:34</p>
          </div>
        </div>
        <hr className="chat_line" />
        <div className="d-flex align-items-start chat_wrapper justify-content-between w-100 ">
          <div className="d-flex align-items-start gap-3">
            <div>
              <img src={profile} alt="profile" />
            </div>
            <div>
              <h5>Abram Korsgaard</h5>
              <span>Yeah, I’m done with it...</span>
            </div>
          </div>

          <div>
            <p>12:34</p>
          </div>
        </div> */}
        {/* <hr className='chat_line' /> */}
      </div>
    </>
  );
};

export default ChatProfiles;
