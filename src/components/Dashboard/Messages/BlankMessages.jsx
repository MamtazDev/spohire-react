import React, { useEffect, useState } from "react";
import Messaging from "./Messaging";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserAllConversationsQuery } from "../../../features/chat/chatApi";
import { useNavigate } from "react-router-dom";
import { setSelectedMessageUser } from "../../../features/chat/chatSlice";

const BlankMessages = () => {
  const { user } = useSelector((state) => state.auth);
  const { data } = useGetUserAllConversationsQuery(user?._id);

  const [isDataChecked, setIsDataChecked] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.length > 0) {
      dispatch(setSelectedMessageUser(data[0]));
      navigate(`/dashboard/messages/${data[0]?._id}`);
    }
    setIsDataChecked(true);
  }, [data]);

  return isDataChecked ? (
    <div className="container-fluid">
      <div className="message_wrapper"></div>
    </div>
  ) : (
    <div></div>
  );
};

export default BlankMessages;
