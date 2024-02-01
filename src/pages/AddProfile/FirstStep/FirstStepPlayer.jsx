/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import twitter from "../../../assets/twiter1.png";
import facebook from "../../../assets/fb1.png";
import youtube from "../../../assets/yt1.png";
import instagram from "../../../assets/insta1.png";
import plus from "../../../assets/blackplus1.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  useUpdateProfileCreationStatusMutation,
  useUpdateUserMutation,
} from "../../../features/auth/authApi";
import { userLoggedIn } from "../../../features/auth/authSlice";
import axios from "axios";
// import ProfileIcon from "../../"

const FirstStepPlayer = ({ setStep }) => {
  const { user } = useSelector((state) => state.auth);

  const [additionalNationality, setAdditionalNationality] = useState("");
  const [isBelongToClub, setIsBelongToClub] = useState(false);
  const [socials, setSocials] = useState([]);

  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const [updateProfileCreationStatus] =
    useUpdateProfileCreationStatusMutation();

  const dispatch = useDispatch();

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
        await updateProfileCreationStatus(user?._id);

        const updatedData = {
          ...response?.data?.data,
          isCreatedProfile: true,
        };

        const infoUser = JSON.parse(localStorage.getItem("spohireAuth"));
        localStorage.setItem(
          "spohireAuth",
          JSON.stringify({ ...infoUser, user: updatedData })
        );

        dispatch(
          userLoggedIn({
            ...infoUser,
            user: updatedData,
          })
        );
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
        <h3>Add to Transfer Market</h3>
        <p>Fill all input to create a account</p>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="">Add Profile Photo</label>
            <input type="file" className="mt-2 form-control login_input" />
          </div>

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
                name="country"
                onChange={(e) => setAdditionalNationality(e.target.value)}
              >
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
              <input
                type="text"
                className="w-100 p-2"
                value={user?.phone_number?.country_code}
                style={{ fontSize: "10px", color: "#9c9c9c", height: "46px" }}
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
          {isBelongToClub && (
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
          )}

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
              {isLoading ? (
                <>
                  <div
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>{" "}
                  Loading...
                </>
              ) : (
                "Next"
              )}
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

export default FirstStepPlayer;
