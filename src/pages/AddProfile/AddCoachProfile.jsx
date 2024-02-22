import React, { useState } from "react";
import "./AddProfile.css";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Layout from "../../Layout/Layout.jsx";
import loginBanner from "../../assets/addplayer.png";
import { useAddPlayerMutation } from "../../features/auth/authApi";
import PaymentProcess from "../pricing/PaymentProcess.jsx";
import FirstStepPlayer from "./FirstStep/FirstStepPlayer";
import SecondStepPlayer from "./SecondStep/SecondStepPlayer";
import ThirdStep from "./ThirdStep/ThirdStep.jsx";
import NewLayout from "../../Layout/NewLayout.jsx";
import FirstStepAddPlayerProfile from "./FirstStep/FirstStepAddPlayerProfile.jsx";
import PaymentProcessPlayerAdd from "../pricing/PaymentProcessPlayerAdd.jsx";
import ThirdStepOwnProfile from "./ThirdStep/ThirdStepOwnProfile.jsx";
import FirstStepCoachOwn from "./FirstStep/FIrstStepCoachOwn.jsx";

const AddCoachProfile = () => {
  const [step, setStep] = useState(0);
  const [socials, setSocials] = useState([]);
  const [experience, setExperience] = useState([]);
  const [gallaryImage, setGallaryImage] = useState([]);
  const [addPlayerInfo, setAddPlayerInfo] = useState({});

  return (
    <>
      <section className="overflow-x-hidden">
        <div className="container-fluid p-0">
          {step === 0 || step === 1 ? (
            <div className="row align-items-center">
              <div className="col-lg-5 p-0">
                <div className="addplayer_left_banner text-center">
                  <img className="img-fluid" src={loginBanner} alt="" />
                </div>
              </div>
              <div className="col-lg-7 p-0">
                {step === 0 && (
                  <FirstStepCoachOwn
                    setStep={setStep}
                    addPlayerInfo={addPlayerInfo}
                    setAddPlayerInfo={setAddPlayerInfo}
                    setSocials={setSocials}
                    socials={socials}
                  />
                )}

                {step === 1 && (
                  <SecondStepPlayer
                    setStep={setStep}
                    addPlayerInfo={addPlayerInfo}
                    setAddPlayerInfo={setAddPlayerInfo}
                    experience={experience}
                    setExperience={setExperience}
                    gallaryImage={gallaryImage}
                    setGallaryImage={setGallaryImage}
                  />
                )}
              </div>
            </div>
          ) : (
            <div className="col-lg-12">
              {step === 2 && (
                // <NewLayout>
                <ThirdStepOwnProfile
                  setStep={setStep}
                  addPlayerInfo={addPlayerInfo}
                />
                // </NewLayout>
              )}

              {step === 3 && (
                <NewLayout>
                  <PaymentProcessPlayerAdd
                    gallaryImage={gallaryImage}
                    experience={experience}
                    socials={socials}
                  />
                </NewLayout>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AddCoachProfile;
