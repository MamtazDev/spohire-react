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

const AddProfileCoach = () => {
  const [step, setStep] = useState(0);
  const [socials, setSocials] = useState([]);
  const [experience, setExperience] = useState([]);
  const [gallaryImage, setGallaryImage] = useState([]);
  const [addPlayerInfo, setAddPlayerInfo] = useState({});
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [addPlayer, { isLoading }] = useAddPlayerMutation();
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must contain at least one uppercase, one lowercase, one special character, one digit and it should be at least 8 characters long.",
      });
      return;
    }

    const data = {
      email,
      password,
      social_media: socials,
      experience,
      role: "Coach",
      sports: user?.sports,
      referral: user?._id,
      ...addPlayerInfo,
    };

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    gallaryImage.forEach((img, index) => {
      formData.append(`gallery`, img);
    });

    try {
      const response = await addPlayer(formData);
      console.log(response, "ddd");
      if (response?.data?.success) {
        navigate(`/pricingAddProfile/${response?.data?.data?._id}`);
      }
      if (response?.error?.data?.message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${response?.error?.data?.message}`,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.message}`,
      });
    }
  };
  return (
    <>
      <div className="container-fluid">
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
              <Layout>
                <ThirdStep setStep={setStep} />
              </Layout>
            )}

            {step === 3 && (
              <Layout>
                <PaymentProcess />
              </Layout>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AddProfileCoach;
