import React, { useState } from "react";
import "./AddProfile.css";

import loginBanner from "../../assets/addplayer.png";
import FirstStepPlayer from "./FirstStep/FirstStepPlayer";
import SecondStepPlayer from "./SecondStep/SecondStepPlayer";
import AddPlayerSignUp from "./AddPlayerSignUp";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAddPlayerMutation } from "../../features/auth/authApi";
import { useSelector } from "react-redux";

const AddProfilePlayer = () => {
  const [step, setStep] = useState(0);
  const [socials, setSocials] = useState([]);
  const [experience, setExperience] = useState([]);
  const [gallaryImage, setGallaryImage] = useState([]);
  const [addPlayerInfo, setAddPlayerInfo] = useState({});

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;

  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const [addPlayer, { isLoading }] = useAddPlayerMutation();

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
      role: "Player",
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
        <div className="row align-items-center">
          <div className="col-lg-5 p-0  d-none d-lg-block">
            <div className="addplayer_left_banner text-center ">
              <img className="img-fluid" src={loginBanner} alt="" />
            </div>
          </div>
          <div className="col-lg-7 p-0">
            {step === 0 && (
              <FirstStepPlayer
                setStep={setStep}
                addPlayerInfo={addPlayerInfo}
                setAddPlayerInfo={setAddPlayerInfo}
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
            {step === 2 && (
              <AddPlayerSignUp
                handleSubmit={handleSubmit}
                isLoading={isLoading}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProfilePlayer;
