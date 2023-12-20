import React, { useState } from "react";
import HandleYear from "../../AddPlayer/HandleYear";

import t4 from "../../../assets/t4.png";
import greyplus from "../../../assets/greyplus.png";
import { Link, useNavigate } from "react-router-dom";
import { useUpdateUserMutation } from "../../../features/auth/authApi";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const SecondStep = ({ setStep }) => {
  const [firstName, setFirstName] = useState("");
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState([]);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const strengths_advantage = form.strengths_advantage.value;
    const about_me = form.about_me.value;
    const expectations_from_new_club = form.expectations_from_new_club.value;

    const formData = {
      strengths_advantage,
      about_me,
      expectations_from_new_club,
    };

    try {
      const response = await updateUser({ userId: user?._id, data: formData });
      console.log(response, "ddd");
      if (response?.data?.status) {
        navigate("/pricing");
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
  const fileInputRef = React.useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedImage([...selectedImage, URL.createObjectURL(selectedFile)]);
  };
  return (
    <div className="login_wrapper player_wrapper">
      <div>
        <h3>Add Profile</h3>
        <p>Fill all input to create a account</p>
        <form onSubmit={handleFormSubmit}>
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center gap-2">
              <HandleYear />
              <div className="hifen">-</div>
              <HandleYear />
            </div>

            <div className="">
              <input
                type="text"
                className="mt-2 form-control login_input"
                placeholder="Club name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <button className="add_btn1">
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
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Next"}
            </button>
            <button className="prev_btn">
              <Link to="/pricing" className="text-dark">
                Skip
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SecondStep;
