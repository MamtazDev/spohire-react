import React, { useState } from "react";
import BestOfferTwo from "./BestOfferTwo.jsx";
import HowLong from "./HowLong.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setAddPlayerProfileInfo } from "../../../features/auth/authSlice.js";
import { setAddPlayerPaymentInfo } from "../../../features/payment/paymentSlice.js";
import { useLocation } from "react-router-dom";

const ThirdStepOwnProfile = ({ setStep, addPlayerInfo }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { pathname } = useLocation();

  const [packageInfo, setPackageInfo] = useState(null);
  const [month, setMonth] = useState(null);

  const handleCLick = (packagevalue) => {
    dispatch(
      setAddPlayerProfileInfo({
        ...addPlayerInfo,
        fullName: `${user?.first_name} ${user?.last_name}`,
        nationality: user?.nationality,
        role: pathname === "/addPlayerProfile" ? "Player" : "Coach",
        sports: user?.sports,
        referral: user?._id,
      })
    );
    dispatch(setAddPlayerPaymentInfo(packagevalue));
    setStep((prev) => prev + 1);
  };

  return (
    <div
      className="add_payment"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      <div className="container">
        <div className="main_payment_wrapper">
          <div className="pb-5">
            <h3 className={"text_color_36 fs-1 fw-bold text-center"}>
              Add Payment
            </h3>
          </div>
          <p className={"bestOffer_title mb-5"}>
            Choose the best offer for you
          </p>
          <BestOfferTwo
            packageInfo={packageInfo}
            setPackageInfo={setPackageInfo}
            month={month}
            setMonth={setMonth}
          />
          {packageInfo && (
            <HowLong
              packageInfo={packageInfo}
              setPackageInfo={setPackageInfo}
              month={month}
              setMonth={setMonth}
              handleCLick={handleCLick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ThirdStepOwnProfile;
