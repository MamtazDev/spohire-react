/* eslint-disable no-unused-vars */
import loginBanner from "../../assets/addplayer.png";

import "./AddProfile.css";
import { Link } from "react-router-dom";
import FirstStep from "./FirstStep/FirstStep";
import { useState } from "react";
import SecondStep from "./SecondStep/SecondStep";

const AddProfile = () => {
  const [step, setStep] = useState(0);
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-5 p-0  d-none d-lg-block">
            <div className="addplayer_left_banner text-center ">
              <img className="img-fluid" src={loginBanner} alt="" />
            </div>
          </div>
          <div className="col-lg-7 p-0">
            {step === 0 && <FirstStep setStep={setStep} />}
            {step === 1 && <SecondStep setStep={setStep} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProfile;
