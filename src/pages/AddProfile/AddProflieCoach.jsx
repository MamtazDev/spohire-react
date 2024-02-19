/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import loginBanner from "../../assets/addplayer.png";
import { useAddPlayerMutation } from "../../features/auth/authApi";
import "./AddProfile.css";
import FirstStepCoach from "./FirstStep/FirstStepCoach";
import SecondStepCoach from "./SecondStep/SecondStepCoach";
import ThirdStep from "./ThirdStep/ThirdStep";
import Layout from "../../Layout/Layout";
import PaymentProcess from "../pricing/PaymentProcess";
import NewLayout from "../../Layout/NewLayout";

const AddProfileCoach = () => {
  const [step, setStep] = useState(0);
  const [socials, setSocials] = useState([]);
  const [experience, setExperience] = useState([]);
  const [gallaryImage, setGallaryImage] = useState([]);
  const [addPlayerInfo, setAddPlayerInfo] = useState({});

  return (
    <>
      <div className="container-fluid p-0">
        {step === 0 || step === 1 ? (
          <div className="row align-items-center">
            <div className="col-lg-5 p-0  d-none d-lg-block">
              <div className="addplayer_left_banner text-center ">
                <img className="img-fluid" src={loginBanner} alt="" />
              </div>
            </div>
            <div className="col-lg-7 p-0">
              {step === 0 && (
                <FirstStepCoach
                  setStep={setStep}
                  addPlayerInfo={addPlayerInfo}
                  setAddPlayerInfo={setAddPlayerInfo}
                  setSocials={setSocials}
                  socials={socials}
                />
              )}
              {step === 1 && (
                <SecondStepCoach
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
              <NewLayout>
                <ThirdStep setStep={setStep} addPlayerInfo={addPlayerInfo} />
              </NewLayout>
            )}

            {step === 3 && (
              <NewLayout>
                <PaymentProcess
                  gallaryImage={gallaryImage}
                  experience={experience}
                  socials={socials}
                />
              </NewLayout>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AddProfileCoach;
