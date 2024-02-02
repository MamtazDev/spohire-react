import React, { useState } from "react";
import HandleYear from "../../AddPlayer/HandleYear";

import t4 from "../../../assets/t4.png";
import greyplus from "../../../assets/greyplus.png";
import { Link, useNavigate } from "react-router-dom";
import {
  useUpdateProfileCreationStatusMutation,
  useUpdateUserMutation,
} from "../../../features/auth/authApi";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import ExperienceTab from "./ExperienceTab";
import { userLoggedIn } from "../../../features/auth/authSlice";

const SecondStepPlayer = ({
  setStep,
  addPlayerInfo,
  setAddPlayerInfo,
  experience,
  setExperience,
  gallaryImage,
  setGallaryImage,
}) => {
  const [initialYear, setInitialYear] = useState("");
  const [finalYear, setFinalYear] = useState("");
  const [clubDetails, setClubDetails] = useState("");

  const handleExperience = () => {
    const newData = {
      start_year: initialYear,
      end_year: finalYear,
      club_name: clubDetails,
    };

    setExperience((current) => [...current, newData]);
    setInitialYear("");
    setFinalYear("");
    setClubDetails("");
  };

  const [selectedImage, setSelectedImage] = useState([]);

  const fileInputRef = React.useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setGallaryImage([...gallaryImage, selectedFile]);
    setSelectedImage([...selectedImage, URL.createObjectURL(selectedFile)]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddPlayerInfo({ ...addPlayerInfo, [name]: value });
  };
  return (
    <div className="login_wrapper player_wrapper">
      <div>
        <h3>Add to Transfer Market</h3>
        <p>Fill all input to create a account</p>
        <form onSubmit={(e) => e.preventDefault()}>
          {experience?.length > 0 &&
            experience?.map((item, idx) => (
              <div className="d-flex align-items-center gap-3 mb-2" key={idx}>
                <div className="d-flex align-items-center gap-2">
                  {/* <HandleYear setInitialYear={setInitialYear} /> */}
                  <div className="d-flex align-items-center gap-1">
                    <div className="year_input">
                      <input
                        type="text"
                        className="w-100"
                        disabled
                        value={item?.start_year}
                        style={{ padding: "5px", fontSize: "10px" }}
                      />
                    </div>
                  </div>
                  <div className="hifen">-</div>
                  {/* <HandleYear /> */}
                  <div className="d-flex align-items-center gap-1">
                    <div className="year_input">
                      <input
                        type="text"
                        className="w-100"
                        disabled
                        value={item?.end_year}
                        style={{ padding: "5px", fontSize: "10px" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="">
                  <input
                    type="text"
                    className="mt-2 form-control login_input w-100"
                    placeholder="Club name"
                    //   value={firstName}
                    onChange={(e) => setClubDetails(e.target.value)}
                    disabled
                    value={item?.club_name}
                    style={{ padding: "5px", fontSize: "10px" }}
                  />
                </div>
              </div>
            ))}
          <ExperienceTab
            setInitialYear={setInitialYear}
            setFinalYear={setFinalYear}
            setClubDetails={setClubDetails}
            clubDetails={clubDetails}
          />
          <button
            className="add_btn1"
            type="button"
            onClick={handleExperience}
            disabled={!initialYear || !finalYear || !clubDetails}
          >
            <span>Add</span> <img src={greyplus} alt="plus btn" />
          </button>

          <div className="row right-inner-addon input-container">
            <div className="">
              <label htmlFor="">Strengths Advantages</label>
              <input
                type="text"
                className="mt-2 form-control login_input"
                placeholder="Type here..."
                name="strengths_advantage"
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <label htmlFor="">About me</label>
              <input
                name="about_me"
                type="text"
                className="mt-2 form-control login_input"
                placeholder="Type here..."
                required
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="">Expectations From a New Club</label>
              <input
                type="text"
                className="mt-2 form-control login_input"
                placeholder="Type here..."
                name="expectations_from_new_club"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* media */}
          <div>
            <label htmlFor="">Media</label>
            <div className="media_wrapper">
              {selectedImage.map((image, index) => (
                <img key={index} src={image} alt={`Selected ${index + 1}`} />
              ))}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleFileChange}
              />
              <img
                src={t4}
                alt="Upload"
                style={{ cursor: "pointer" }}
                onClick={handleImageClick}
              />
            </div>
          </div>
          <div className="next_skip_btns">
            <button
              className="next_btn text-light"
              type="button"
              onClick={() => setStep((prev) => prev + 1)}
            >
              Next
            </button>
            {/* <button className="prev_btn" type="button">
              <Link to="/pricingAddProfile" className="text-dark">
                Skip
              </Link>
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SecondStepPlayer;
