import WhatPeopleSay from "../../components/whatPeopleSay/WhatPeopleSay";
import BestOffer from "./BestOffer";
import GetStarted from "./GetStarted";
import PageHeader from "./PageHeader";
import "./Pricing.css";
import { useNavigate, useLocation } from "react-router-dom";

import { useEffect } from "react";
const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* <button onClick={clickHandler}>Click</button> */}
      <PageHeader />
      <BestOffer />
      {/* <div className="slider_bg">
        <div>
          <WhatPeopleSay color="#fff" />
        </div>
      </div>
      <GetStarted /> */}
    </div>
  );
};

export default Pricing;
