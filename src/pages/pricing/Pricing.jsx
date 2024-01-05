import WhatPeopleSay from "../../components/whatPeopleSay/WhatPeopleSay";
import BestOffer from "./BestOffer";
import GetStarted from "./GetStarted";
import PageHeader from "./PageHeader";
import "./Pricing.css";
import { useNavigate, useLocation } from "react-router-dom";

import { useEffect } from "react";
const Pricing = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(-2);
  };

  // const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleBrowserBackButton = (event) => {
      // Check if the user is in the specific route where you want to control the back button
      if (location.pathname === "/your-specific-route") {
        // Your custom logic here
        // For example, go back two steps when the back button is pressed
        navigate(-2);
        // Prevent the default behavior of the browser's back button
        event.preventDefault();
      }
    };

    // Add the event listener to handle the browser's back button click
    window.addEventListener("popstate", handleBrowserBackButton);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("popstate", handleBrowserBackButton);
    };
  }, [navigate, location]);

  return (
    <div>
      {/* <button onClick={clickHandler}>Click</button> */}
      <PageHeader />
      <BestOffer />
      <div className="slider_bg">
        <div>
          <WhatPeopleSay color="#fff" />
        </div>
      </div>
      <GetStarted />
    </div>
  );
};

export default Pricing;
