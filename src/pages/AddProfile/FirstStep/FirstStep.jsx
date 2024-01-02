import React, { useState } from "react";
import arrowRight from "../../../assets/ArrowRight.png";
import twitter from "../../../assets/twiter1.png";
import facebook from "../../../assets/fb1.png";
import youtube from "../../../assets/yt1.png";
import instagram from "../../../assets/insta1.png";
import plus from "../../../assets/blackplus1.png";
import Select from "react-select";
import bdIcon from "../../../assets/bd.svg";
import DateSelector from "../../../Authentication/SignUp/DateSelector";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useUpdateUserMutation } from "../../../features/auth/authApi";

const options1 = [
  {
    value: "Bangladesh",
    label: "Bangladesh",
    flagImg: bdIcon,
  },
  {
    value: "India",
    label: "India",
    flagImg: bdIcon,
  },
  {
    value: "Switzerland",
    label: "Switzerland",
    flagImg: bdIcon,
  },
  {
    value: "United Kingdom",
    label: "United Kingdom",
    flagImg: bdIcon,
  },
  {
    value: "Ireland",
    label: "Ireland",
    flagImg: bdIcon,
  },
  {
    value: "Italy",
    label: "Italy",
    flagImg: bdIcon,
  },
  {
    value: "Netherland",
    label: "Netherland",
    flagImg: bdIcon,
  },
];

const options2 = [
  {
    value: "Bangladesh",
    label: "+880",
    flagImg: bdIcon,
  },
  {
    value: "India",
    label: "+880",
    flagImg: bdIcon,
  },
];

const FirstStep = ({ setStep }) => {
  const { user } = useSelector((state) => state.auth);

  const [additionalNationality, setAdditionalNationality] = useState("");
  const [isBelongToClub, setIsBelongToClub] = useState(false);
  const [socials, setSocials] = useState([]);

  const [updateUser, { isLoading }] = useUpdateUserMutation();

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const clubName = e?.target?.club_name?.value;
    const clubPosition = e?.target?.club_position?.value;
    const formData = {
      additional_passport: additionalNationality,
      social_media: socials,
      belong_to_the_club: isBelongToClub ? "Yes" : "No",
      club_name: clubName,
      club_position: clubPosition,
    };

    try {
      const response = await updateUser({ userId: user?._id, data: formData });
      console.log(response, "ddd");
      if (response?.data?.status) {
        setStep((prev) => prev + 1);
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

    console.log(formData, "ddd");

    // setStep((prev) => prev + 1);
  };
  return (
    <div className="login_wrapper player_wrapper">
      <div>
        <h3>Add Profile</h3>
        <p>Fill all input to create a account</p>
        <form onSubmit={handleFormSubmit}>
          <div className="row right-inner-addon input-container align-items-center">
            <div className="col-6">
              <label htmlFor="">Full name</label>
              <input
                type="text"
                className="mt-2 form-control login_input"
                placeholder="Full name"
                value={user?.first_name + " " + user?.last_name}
                onChange={(e) => setFirstName(e.target.value)}
                readOnly
              />
            </div>
            <div className="col-6">
              <label htmlFor="">Nationality</label>

              <input
                type="text"
                className="mt-2 form-control login_input"
                placeholder="Full name"
                value={user?.nationality}
                readOnly
              />
            </div>
          </div>

          <div className="row flex-wrap date_wrapper mb-3 align-items-center">
            <div className="col-6">
              <label htmlFor="">Additional passport</label>
              <Select
                options={options1}
                value={options1.find(
                  (option) => option.value === additionalNationality
                )}
                onChange={(selectedOption) =>
                  setAdditionalNationality(selectedOption.value)
                }
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    minHeight: "0px",
                    backgroundColor: "#FAFAFA",
                  }),

                  container: (baseStyles) => ({
                    ...baseStyles,
                    width: "100%",
                  }),

                  valueContainer: (baseStyles) => ({
                    ...baseStyles,
                    padding: "0 5px",
                  }),
                  placeholder: (baseStyles) => ({
                    ...baseStyles,
                    color: "#9CA3A9",
                    fontSize: "10px",
                  }),
                  menuList: (baseStyles) => ({
                    ...baseStyles,
                    fontSize: "10px",
                  }),
                  singleValue: (baseStyles) => ({
                    ...baseStyles,
                    fontSize: "10px",
                  }),
                  indicatorsContainer: (baseStyles) => ({
                    ...baseStyles,
                    padding: "0px !important",
                  }),
                  indicatorSeparator: (baseStyles) => ({
                    ...baseStyles,
                    display: "none",
                    margin: "0",
                    width: "0",
                  }),

                  // indicatorsContainer: (baseStyles) =>
                }}
              />
            </div>

            <div className="col-6">
              <label htmlFor="">Date of birth</label>
              {/* <DateSelector
                value={user?.date_of_birth}
                onChange={(selectedDate) => setDateOfBirth(selectedDate)}
              /> */}
              <div className="d-flex align-items-center gap-1 w-100">
                <div className="w-100">
                  <input
                    className="w-100 p-2"
                    type="text"
                    value={user?.date_of_birth?.split(" ")[0]}
                    style={{ fontSize: "10px", color: "#9c9c9c" }}
                    readOnly
                  />
                </div>
                <div className="w-100">
                  <input
                    className="w-100 p-2"
                    type="text"
                    value={user?.date_of_birth?.split(" ")[1]}
                    style={{ fontSize: "10px", color: "#9c9c9c" }}
                    readOnly
                  />
                </div>

                <div className="w-100">
                  <input
                    className="w-100 p-2"
                    type="text"
                    value={user?.date_of_birth?.split(" ")[2]}
                    style={{ fontSize: "10px", color: "#9c9c9c" }}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
          {/* country select */}
          {/* email input */}
          <label htmlFor="">Phone number</label>
          <div className="row email_input ">
            <div className="col-4 mb-3">
              {/* <Select
                placeholder="+880"
                options={options2}
                value={options2.find((option) => option.label === phoneNumber)}
                onChange={(selectedOption) =>
                  setPhoneNumber(selectedOption.label)
                }
                formatOptionLabel={(countryFlag) => (
                  <div className="d-flex align-items-center justify-content-between">
                    <span>{countryFlag.label}</span>
                    <img src={countryFlag.flagImg} alt="country-image" />
                  </div>
                )}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    minHeight: "0px",
                    backgroundColor: "#FAFAFA",
                  }),

                  container: (baseStyles) => ({
                    ...baseStyles,
                    width: "100%",
                  }),

                  valueContainer: (baseStyles) => ({
                    ...baseStyles,
                    padding: "0 5px",
                  }),
                  placeholder: (baseStyles) => ({
                    ...baseStyles,
                    color: "#9CA3A9",
                    fontSize: "10px",
                  }),
                  menuList: (baseStyles) => ({
                    ...baseStyles,
                    fontSize: "10px",
                  }),
                  singleValue: (baseStyles) => ({
                    ...baseStyles,
                    fontSize: "10px",
                  }),
                  indicatorsContainer: (baseStyles) => ({
                    ...baseStyles,
                    padding: "0px !important",
                  }),
                  indicatorSeparator: (baseStyles) => ({
                    ...baseStyles,
                    display: "none",
                    margin: "0",
                    width: "0",
                  }),

                  // indicatorsContainer: (baseStyles) =>
                }}
              /> */}
              <input
                type="text"
                className="w-100 p-2"
                value={user?.phone_number?.country_code}
                style={{ fontSize: "10px", color: "#9c9c9c" }}
                readOnly
              />
            </div>
            <div className="col-8">
              <div className="phone_number">
                <div></div>
                <input
                  type="number"
                  className="ph_number"
                  placeholder="0123 456 7890 "
                  value={user?.phone_number?.number}
                  readOnly
                />
              </div>
            </div>
          </div>

          {/*  */}
          <div className="club_info">
            <h6>Do you currently belong to a club?</h6>
            <div className="d-flex gap-3 mt-2">
              <div
                className="form-check d-flex align-items-center gap-1"
                style={{ cursor: "pointer" }}
                onClick={() => setIsBelongToClub(true)}
              >
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
                  htmlFor="flexRadioDefault1"
                >
                  Yes
                </span>
              </div>
              <div
                className="form-check d-flex align-items-center gap-1"
                style={{ cursor: "pointer" }}
                onClick={() => setIsBelongToClub(false)}
              >
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
                  htmlFor="flexRadioDefault1"
                >
                  No
                </span>
              </div>
            </div>
          </div>
          {/* {isBelongToClub && ( */}
            <>
              <div className="mb-2">
                <label htmlFor="">Club Name</label>
                <input
                  type="text"
                  className="mt-2 form-control login_input"
                  placeholder="Enter club name"
                  required
                  name="club_name"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="">Position</label>
                <input
                  type="text"
                  className="mt-2 form-control login_input"
                  placeholder="Enter club position"
                  required
                  name="club_position"
                />
              </div>
            </>
          {/* )} */}

          <div className="social_media_links">
            <h6>Social media profiles</h6>
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
                  {/* {!item?.includes(
                    "twitter.com" ||
                      "instagram.com" ||
                      "facebook.com" ||
                      "youtube.com"
                  ) && (
                    <span className="rounded-circle bg-secondary px-2 text-white">
                      L
                    </span>
                  )} */}
                </Link>
              ))}

              <button
                className="rounded-circle"
                type="button"
                onClick={handleAddSocialLink}
              >
                <img src={plus} alt="plus" />
              </button>
            </div>
          </div>
          <div className="next_skip_btns">
            {/* <Link to="/addplayer2">
              {" "} */}
            <button
              type="submit"
              className="next_btn text-light"
              disabled={
                !additionalNationality || socials?.length === 0 || isLoading
              }
            >
              {isLoading ? "Updating.." : "Next"}
            </button>
            {/* </Link> */}

            <button
              className="prev_btn text-dark"
              onClick={() => setStep((prev) => prev + 1)}
            >
              Skip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FirstStep;
