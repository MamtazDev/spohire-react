/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import twitter from "../../../assets/twiter1.png";
import facebook from "../../../assets/fb1.png";
import youtube from "../../../assets/yt1.png";
import instagram from "../../../assets/insta1.png";
import plus from "../../../assets/blackplus1.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import ProfileIcon from "../../../assets/ProfileIcon.png";

import axios from "axios";

const FirstStepCoach = ({
  setStep,
  addPlayerInfo,
  setAddPlayerInfo,
  socials,
  setSocials,
}) => {
  const heights = [
    { value: "150", label: "150 cm" },
    { value: "160", label: "160 cm" },
    { value: "170", label: "170 cm" },
    { value: "180", label: "180 cm" },
    { value: "190", label: "190 cm" },
  ];

  const weights = [
    { value: "50", label: "50 kg" },
    { value: "60", label: "60 kg" },
    { value: "70", label: "70 kg" },
    { value: "80", label: "80 kg" },
    { value: "90", label: "90 kg" },
  ];

  const [isBelongToClub, setIsBelongToClub] = useState(false);

  const [imageFile, setImageFile] = useState(null);

  const imageInputRef = useRef();

  const handleAddSocialLink = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL",
    });

    if (url) {
      //   Swal.fire(`Entered URL: ${url}`);
      setSocials((current) => [...current, url]);
    }
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setAddPlayerInfo({ ...addPlayerInfo, image: file });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddPlayerInfo({ ...addPlayerInfo, [name]: value });
  };

  const handleNext = () => {
    // const buttonDisabled =
      // !addPlayerInfo?.first_name ||
      // !addPlayerInfo?.last_name ||
      // !addPlayerInfo?.nationality ||
      // !addPlayerInfo?.additional_passport ||
      // !addPlayerInfo?.image;

    // if (buttonDisabled) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Please fill up all field",
    //   });
    //   return;
    // } else {
      setStep((prev) => prev + 1);
    // }

    console.log(buttonDisabled, "buett");
  };

  const [countryNames, setCountryNames] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json"
      )
      .then(function (response) {
        setCountryNames(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="login_wrapper player_wrapper">
      <div>
        <h3>Add Coach to Transfer Market</h3>
        <p>Fill all input to create a account</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="">
            <label htmlFor="">Add Profile Photo</label>
            <div>
              <img
                style={{ width: "67px", height: "67px", objectFit: "cover" }}
                src={imageFile ? URL.createObjectURL(imageFile) : ProfileIcon}
                alt=""
                className="mt-2 d-block "
              />
            </div>
            <input
              type="file"
              className="d-none"
              ref={imageInputRef}
              onChange={handleImageFileChange}
              accept="image/*"
            />
            <button
              type="button"
              className="bg-none my-2"
              style={{
                color: "#0177FB",
                fontWeight: 500,
                textDecoration: "underline",
              }}
              onClick={() => imageInputRef?.current.click()}>
              Upload File
            </button>
          </div>

          <div className="row flex-wrap date_wrapper mb-3 align-items-center">
            <div className="col-12">
              <label htmlFor="">
                <span className="text-danger">*</span>Additional passport
              </label>

              <select
                className="form-select"
                aria-label="Default select example"
                style={{
                  height: "46px",
                  backgroundColor: "rgba(0, 0, 0, 0.02)",
                  border: "1px solid #F0F0F0",
                }}
                name="nationality"
                onChange={handleInputChange}>
                <option selected disabled>
                  Select country
                </option>
                {countryNames.map((name, index) => (
                  <option value={name?.name} key={index}>
                    {name.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="club_info">
              <h6>Do you currently belong to a club?</h6>
              <div className="d-flex gap-3 mt-2">
                <div
                  className="form-check d-flex align-items-center gap-1"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setIsBelongToClub(true);
                    setAddPlayerInfo({
                      ...addPlayerInfo,
                      belong_to_the_club: "Yes",
                    });
                  }}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    style={{ cursor: "pointer" }}
                    checked={isBelongToClub}
                  />
                  <span
                    className="form-check-label mb-0"
                    htmlFor="flexRadioDefault1">
                    Yes
                  </span>
                </div>
                <div
                  className="form-check d-flex align-items-center gap-1"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setIsBelongToClub(false);
                    setAddPlayerInfo({
                      ...addPlayerInfo,
                      belong_to_the_club: "No",
                    });
                  }}>
                  <input
                    className="form-check-input"
                    style={{ cursor: "pointer" }}
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked={!isBelongToClub}
                  />
                  <span
                    className="form-check-label mb-0"
                    htmlFor="flexRadioDefault1">
                    No
                  </span>
                </div>
              </div>
            </div>

            {isBelongToClub && (
              <div className="mb-2">
                <label htmlFor="">Club Name</label>
                <input
                  type="text"
                  className="mt-2 form-control login_input"
                  placeholder="Enter club name"
                  required
                  name="club_name"
                  onChange={handleInputChange}
                />
              </div>
            )}

            {/* <div className="col-6">
              <label htmlFor="">
                <span className="text-danger">*</span>Country of Residence
              </label>

              <select
                className="form-select"
                aria-label="Default select example"
                style={{
                  height: "46px",
                  backgroundColor: "",
                  border: "1px solid #F0F0F0",
                }}
                name="nationality"
                onChange={handleInputChange}>
                <option selected disabled>
                  Select country
                </option>
                {countryNames.map((name, index) => (
                  <option value={name?.name} key={index}>
                    {name.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-6">
              <label htmlFor="">
                <span className="text-danger">*</span>Additional passport
              </label>

              <select
                className="form-select"
                aria-label="Default select example"
                style={{
                  height: "46px",
                  backgroundColor: "",
                  border: "1px solid #F0F0F0",
                }}
                name="additional_passport"
                onChange={handleInputChange}>
                <option selected disabled>
                  Select country
                </option>
                {countryNames.map((name, index) => (
                  <option value={name?.name} key={index}>
                    {name.name}
                  </option>
                ))}
              </select>
            </div> */}
          </div>

          {/*  */}

          <div className="social_media_links">
            <h6>
              {" "}
              <span className="text-danger">*</span>Social media profiles
            </h6>
            <div className="social_icons_wrapper">
              {socials?.map((item, idx) => (
                <Link to={item} key={idx}>
                  {item?.includes("twitter.com") && (
                    <img src={twitter} alt="twitter" />
                  )}
                  {item?.includes("instagram.com") && (
                    <img src={instagram} alt="instagram" />
                  )}
                  {item?.includes("facebook.com") && (
                    <img src={facebook} alt="facebook" />
                  )}
                  {item?.includes("youtube.com") && (
                    <img src={youtube} alt="youtube" />
                  )}
                </Link>
              ))}

              <button
                className="rounded-circle"
                type="button"
                onClick={handleAddSocialLink}>
                <img src={plus} alt="plus" />
              </button>
            </div>
          </div>
          <div className="next_skip_btns" style={{ paddingBottom: "24px" }}>
            <button
              type="button"
              className="next_btn text-light"
              onClick={handleNext}>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FirstStepCoach;
