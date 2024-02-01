import WhatPeopleSay from "../../components/whatPeopleSay/WhatPeopleSay";
import BestOfferAddProfile from "./BestOfferAddProfile";
import GetStarted from "./GetStarted";
import PageHeader from "./PageHeader";
import "./Pricing.css";
import { useNavigate, useLocation } from "react-router-dom";

import { useEffect } from "react";
const PricingAddProfile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader />
      <BestOfferAddProfile />
      <div className="slider_bg">
        <div>
          <WhatPeopleSay color="#fff" />
        </div>
      </div>
      <GetStarted />
    </div>
  );
};

export default PricingAddProfile;
