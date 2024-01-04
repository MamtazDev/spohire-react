/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import arrowRight from "../../assets/ArrowRight.png";
import { useEffect, useRef, useState } from "react";
import DateSelector from "./DateSelector";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { convertDate } from "../../utils/TimeConverter";
import { useRegisterUserMutation } from "../../features/auth/authApi";
import Swal from "sweetalert2";
import axios from "axios";
import signupImg from '../../assets/signup--.svg'

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [functionType, setFunctionType] = useState("");
  const [sports, setSports] = useState("");
  const [countryCode, setCoutryCode] = useState(null);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const [dateOfBirth, setDateOfBirth] = useState("");

  const button_disability =
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !nationality ||
    !dateOfBirth ||
    !phoneNumber ||
    !functionType ||
    !countryCode ||
    !sports ||
    isLoading;

  const navigate = useNavigate();

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      role: functionType,
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      nationality,
      date_of_birth: convertDate(dateOfBirth),
      phone_number: {
        country_code: countryCode,
        number: Number(phoneNumber),
      },
      sports,
    };

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must contain at least one uppercase, one lowercase, one special character, one digit and it should be at least 8 characters long.",
      });
      return;
    }
    try {
      const response = await registerUser(formData);

      if (response?.data?.status === 200) {
        navigate("/dashboard/viewProfile");
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
    // localStorage.setItem("register", JSON.stringify(formData));
    // navigate('/addPlayer')
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
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 p-0  d-none d-lg-block">
            <div className="signup-left_bg">
              <img className=""  src={signupImg} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="login_wrapper">
              <div>
                <h3>Create new account</h3>
                <p>Fill all input to create a account</p>
                <form onSubmit={handleFormSubmit}>
                  <div className="row right-inner-addon input-container">
                    
                    <div className="col-6">
                    <label htmlFor="">Full name</label>
                      <input
                        type="text"
                        className="mt-2 form-control login_input"
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-6">
                    <label htmlFor="">Last Name</label>
                      <input
                        type="text"
                        className="form-control login_input"
                        placeholder="Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="right-inner-addon input-container">
                    <i className="fa-regular fa-envelope" style={{ color: "#9CA3A9" }}></i>

                    <label htmlFor="">Email Address</label>

                    <input
                      type="email"
                      className="form-control login_input"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="right-inner-addon input-container">
                    <label htmlFor="">Password</label>

                    <input
                      type="password"
                      className="form-control login_input"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="row flex-wrap date_wrapper mb-3 align-items-center">
                    <div className="col-lg-4">
                      <label htmlFor="">Nationality</label>

                      <select className="form-select" aria-label="Default select example" style={{
                        height: "46px", backgroundColor: "rgba(0, 0, 0, 0.02)", border: " 0.707px solid rgba(0, 0, 0, 0.02)"

                      }}>
                        {countryNames.map((name, index) => (
                          <>
                            <option value="3" key={index}>{name.name}</option>
                          </>
                        ))}
                      </select>
                    </div>

                    <div className="col-8">
                      <label htmlFor="" className="" style={{ marginBottom: "10px" }}>Date of birth</label>
                      <DateSelector
                        value={dateOfBirth}
                        onChange={(selectedDate) =>
                          setDateOfBirth(selectedDate)
                        }
                      />
                    </div>
                  </div>
                  {/* country select */}
                  {/* email input */}
                  <div className="row email_input">
                    <label htmlFor="">Phone number</label>
                    <div className="col-4 mb-3">
                      <select className="form-select" aria-label="Default select example" style={{
                        height: "46px", backgroundColor: "rgba(0, 0, 0, 0.02)", border: " 0.707px solid rgba(0, 0, 0, 0.02)"
                      }}>
                        {countryNames.map((name, index) => (
                          <>
                            <option value="3" key={index}>{name.dial_code}</option>
                          </>
                        ))}
                      </select>
                    </div>
                    <div className="col-8">
                      <div className="phone_number">
                        <input type="tel" id="phone" name="phone" value={phoneNumber} style={{ color: "#212529" }}

                          //  onChange={(e) => setPhoneNumber(e.target.value)} 
                          onChange={(e) => {
                            const inputVal = e.target.value;
                            const validatedInput = inputVal.replace(/[^0-9+\-]/g, '');
                            setPhoneNumber(validatedInput);
                          }}
                          placeholder="012 345 6789" />
                      </div>

                    </div>
                  </div>
                  {/* email input end */}
                  {/* Function */}
                  <label className="label_text">Function</label> <br />
                  <>
                    {["Player", "Coach", "Manager"].map((data) => (
                      <>
                        <button
                          className={`${
                            functionType === data
                              ? "function_btn_active"
                              : "function_btn"
                          } `}
                          type="button"
                          onClick={() => setFunctionType(data)}
                        >
                          {data}
                        </button>
                      </>
                    ))}
                  </>
                  <br />
                  <label className="label_text mt-3">Sports</label> <br />
                  {["Football", "Basketball", "Volleyball", "Handball"].map(
                    (data) => (
                      <>
                        <button
                          // className={${function===data?"function_btn_active": "function_btn"}}
                          className={`${
                            sports === data
                              ? "function_btn_active"
                              : "function_btn"
                          } `}
                          type="button"
                          onClick={() => setSports(data)}
                        >
                          {data}
                        </button>
                      </>
                    )
                  )}
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="login-btn"
                      disabled={button_disability}
                    >
                      {isLoading ? "Creating..." : "Create account"}
                      <img src={arrowRight} alt="img" className="ms-1" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
