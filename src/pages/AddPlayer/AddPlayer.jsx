/* eslint-disable no-unused-vars */
import loginBanner from "../../assets/addplayer.png";
import arrowRight from "../../assets/ArrowRight.png";
import twitter from "../../assets/twiter1.png";
import facebook from "../../assets/fb1.png";
import youtube from "../../assets/yt1.png";
import instagram from "../../assets/insta1.png";
import plus from "../../assets/blackplus1.png";
import { useState } from "react";
import Select from "react-select";
import bdIcon from "../../assets/bd.svg";
import DateSelector from "../../Authentication/SignUp/DateSelector";
import './AddPlayer.css'
import { Link } from "react-router-dom";

const options = [
    {
        value: "1",
        label: "1",
        flagImg: `
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_274_437)">
<path d="M0.9375 0.666046H19.3302V14.4605H0.9375V0.666046Z" fill="#006A4E"/>
<path d="M10.1341 11.985C12.4783 11.985 14.3786 10.0847 14.3786 7.74059C14.3786 5.39643 12.4783 3.49612 10.1341 3.49612C7.78996 3.49612 5.88965 5.39643 5.88965 7.74059C5.88965 10.0847 7.78996 11.985 10.1341 11.985Z" fill="#F42A41"/>
</g>
<defs>
<clipPath id="clip0_274_437">
<rect x="0.9375" y="0.666046" width="18.3927" height="13.7945" rx="2.82964" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    },
    {
        value: "2",
        label: "2",
        flagImg: `
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_274_437)">
<path d="M0.9375 0.666046H19.3302V14.4605H0.9375V0.666046Z" fill="#006A4E"/>
<path d="M10.1341 11.985C12.4783 11.985 14.3786 10.0847 14.3786 7.74059C14.3786 5.39643 12.4783 3.49612 10.1341 3.49612C7.78996 3.49612 5.88965 5.39643 5.88965 7.74059C5.88965 10.0847 7.78996 11.985 10.1341 11.985Z" fill="#F42A41"/>
</g>
<defs>
<clipPath id="clip0_274_437">
<rect x="0.9375" y="0.666046" width="18.3927" height="13.7945" rx="2.82964" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    },
    {
        value: "3",
        label: "3",
        flagImg: `
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_274_437)">
<path d="M0.9375 0.666046H19.3302V14.4605H0.9375V0.666046Z" fill="#006A4E"/>
<path d="M10.1341 11.985C12.4783 11.985 14.3786 10.0847 14.3786 7.74059C14.3786 5.39643 12.4783 3.49612 10.1341 3.49612C7.78996 3.49612 5.88965 5.39643 5.88965 7.74059C5.88965 10.0847 7.78996 11.985 10.1341 11.985Z" fill="#F42A41"/>
</g>
<defs>
<clipPath id="clip0_274_437">
<rect x="0.9375" y="0.666046" width="18.3927" height="13.7945" rx="2.82964" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    },
    {
        value: "4",
        label: "4",
        flagImg: `
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_274_437)">
<path d="M0.9375 0.666046H19.3302V14.4605H0.9375V0.666046Z" fill="#006A4E"/>
<path d="M10.1341 11.985C12.4783 11.985 14.3786 10.0847 14.3786 7.74059C14.3786 5.39643 12.4783 3.49612 10.1341 3.49612C7.78996 3.49612 5.88965 5.39643 5.88965 7.74059C5.88965 10.0847 7.78996 11.985 10.1341 11.985Z" fill="#F42A41"/>
</g>
<defs>
<clipPath id="clip0_274_437">
<rect x="0.9375" y="0.666046" width="18.3927" height="13.7945" rx="2.82964" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    },
    {
        value: "5",
        label: "5",
        flagImg: `
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_274_437)">
<path d="M0.9375 0.666046H19.3302V14.4605H0.9375V0.666046Z" fill="#006A4E"/>
<path d="M10.1341 11.985C12.4783 11.985 14.3786 10.0847 14.3786 7.74059C14.3786 5.39643 12.4783 3.49612 10.1341 3.49612C7.78996 3.49612 5.88965 5.39643 5.88965 7.74059C5.88965 10.0847 7.78996 11.985 10.1341 11.985Z" fill="#F42A41"/>
</g>
<defs>
<clipPath id="clip0_274_437">
<rect x="0.9375" y="0.666046" width="18.3927" height="13.7945" rx="2.82964" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    },
    {
        value: "6",
        label: "6",
        flagImg: `
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_274_437)">
<path d="M0.9375 0.666046H19.3302V14.4605H0.9375V0.666046Z" fill="#006A4E"/>
<path d="M10.1341 11.985C12.4783 11.985 14.3786 10.0847 14.3786 7.74059C14.3786 5.39643 12.4783 3.49612 10.1341 3.49612C7.78996 3.49612 5.88965 5.39643 5.88965 7.74059C5.88965 10.0847 7.78996 11.985 10.1341 11.985Z" fill="#F42A41"/>
</g>
<defs>
<clipPath id="clip0_274_437">
<rect x="0.9375" y="0.666046" width="18.3927" height="13.7945" rx="2.82964" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    },
    {
        value: "7",
        label: "7",
        flagImg: `
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_274_437)">
<path d="M0.9375 0.666046H19.3302V14.4605H0.9375V0.666046Z" fill="#006A4E"/>
<path d="M10.1341 11.985C12.4783 11.985 14.3786 10.0847 14.3786 7.74059C14.3786 5.39643 12.4783 3.49612 10.1341 3.49612C7.78996 3.49612 5.88965 5.39643 5.88965 7.74059C5.88965 10.0847 7.78996 11.985 10.1341 11.985Z" fill="#F42A41"/>
</g>
<defs>
<clipPath id="clip0_274_437">
<rect x="0.9375" y="0.666046" width="18.3927" height="13.7945" rx="2.82964" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    },
    {
        value: "8",
        label: "8",
        flagImg: `
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_274_437)">
<path d="M0.9375 0.666046H19.3302V14.4605H0.9375V0.666046Z" fill="#006A4E"/>
<path d="M10.1341 11.985C12.4783 11.985 14.3786 10.0847 14.3786 7.74059C14.3786 5.39643 12.4783 3.49612 10.1341 3.49612C7.78996 3.49612 5.88965 5.39643 5.88965 7.74059C5.88965 10.0847 7.78996 11.985 10.1341 11.985Z" fill="#F42A41"/>
</g>
<defs>
<clipPath id="clip0_274_437">
<rect x="0.9375" y="0.666046" width="18.3927" height="13.7945" rx="2.82964" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    },
    {
        value: "9",
        label: "9",
        flagImg: `
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_274_437)">
<path d="M0.9375 0.666046H19.3302V14.4605H0.9375V0.666046Z" fill="#006A4E"/>
<path d="M10.1341 11.985C12.4783 11.985 14.3786 10.0847 14.3786 7.74059C14.3786 5.39643 12.4783 3.49612 10.1341 3.49612C7.78996 3.49612 5.88965 5.39643 5.88965 7.74059C5.88965 10.0847 7.78996 11.985 10.1341 11.985Z" fill="#F42A41"/>
</g>
<defs>
<clipPath id="clip0_274_437">
<rect x="0.9375" y="0.666046" width="18.3927" height="13.7945" rx="2.82964" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    },
    {
        value: "10",
        label: "10",
        flagImg: `
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_274_437)">
<path d="M0.9375 0.666046H19.3302V14.4605H0.9375V0.666046Z" fill="#006A4E"/>
<path d="M10.1341 11.985C12.4783 11.985 14.3786 10.0847 14.3786 7.74059C14.3786 5.39643 12.4783 3.49612 10.1341 3.49612C7.78996 3.49612 5.88965 5.39643 5.88965 7.74059C5.88965 10.0847 7.78996 11.985 10.1341 11.985Z" fill="#F42A41"/>
</g>
<defs>
<clipPath id="clip0_274_437">
<rect x="0.9375" y="0.666046" width="18.3927" height="13.7945" rx="2.82964" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    },
];

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

const AddPlayer = () => {
    const [select, setSelect] = useState("SE");
    const onSelect = (code) => setSelect(code);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [nationality, setNationality] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [functionType, setFunctionType] = useState("");
    const [sports, setSports] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            nationality,
            dateOfBirth,
            phoneNumber,
            functionType,
            sports,
        };
        console.log(formData)

        localStorage.setItem("register", JSON.stringify(formData));

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
                        <div className="login_wrapper player_wrapper">
                            <div>
                                <h3>Add Player</h3>
                                <p>Fill all input to create a account</p>
                                <form onSubmit={handleFormSubmit}>
                                    <div className="row right-inner-addon input-container">
                                        <div className="col-6">
                                            <label htmlFor="">Full name</label>
                                            <input
                                                type="text"
                                                className="mt-2 form-control login_input"
                                                placeholder="Full name"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="">Nationality</label>
                                            <Select
                                                options={options1}
                                                value={options1.find(
                                                    (option) => option.value === nationality
                                                )}
                                                onChange={(selectedOption) =>
                                                    setNationality(selectedOption.value)
                                                }
                                                formatOptionLabel={(countryFlag) => (
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <span>{countryFlag.label}</span>
                                                        <img
                                                            src={countryFlag.flagImg}
                                                            alt="country-image"
                                                        />
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
                                            />
                                        </div>
                                    </div>

                                    <div className="row flex-wrap date_wrapper mb-3">
                                        <div className="col-6">
                                            <label htmlFor="">Nationality</label>
                                            <Select
                                                options={options1}
                                                value={options1.find(
                                                    (option) => option.value === nationality
                                                )}
                                                onChange={(selectedOption) =>
                                                    setNationality(selectedOption.value)
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
                                            <DateSelector value={dateOfBirth}
                                                onChange={(selectedDate) =>
                                                    setDateOfBirth(selectedDate)
                                                } />
                                        </div>
                                    </div>
                                    {/* country select */}
                                    {/* email input */}
                                    <div className="row email_input">
                                        <label htmlFor="">Phone number</label>
                                        <div className="col-4 mb-3">
                                            <Select
                                                placeholder="+880"
                                                options={options2}
                                                value={options2.find(
                                                    (option) => option.label === phoneNumber
                                                )}
                                                onChange={(selectedOption) =>
                                                    setPhoneNumber(selectedOption.label)
                                                }
                                                formatOptionLabel={(countryFlag) => (
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <span>{countryFlag.label}</span>
                                                        <img
                                                            src={countryFlag.flagImg}
                                                            alt="country-image"
                                                        />
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
                                            />
                                        </div>
                                        <div className="col-8">
                                            <div className="phone_number">
                                                <div></div>
                                                <input
                                                    type="number"
                                                    className="ph_number"
                                                    placeholder="0123 456 7890 "
                                                    value={phoneNumber}
                                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* email input end */}
                                    {/* Function */}

                                    <div className="d-flex justify-content-center mt-4">
                                        <button type="submit" className="login-btn">
                                            Create account
                                            <img src={arrowRight} alt="img" className="ms-1" />
                                        </button>
                                    </div>

                                    {/*  */}
                                    <div className="club_info">
                                        <h6>Do you currently belong to a club?</h6>
                                        <div className="d-flex gap-3 mt-2">
                                            <div className="form-check d-flex align-items-center gap-1">
                                                <input className="form-check-input" checked type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <span className="form-check-label mb-0" htmlFor="flexRadioDefault1">
                                                    Yes
                                                </span>
                                            </div>
                                            <div className="form-check d-flex align-items-center gap-1">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <span className="form-check-label mb-0" htmlFor="flexRadioDefault1">
                                                    No
                                                </span>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="social_media_links">
                                        <h6>Social media profiles</h6>
                                        <div className="social_icons_wrapper">
                                            <Link to="/"> <img src={twitter} alt="twitter" /></Link>
                                            <Link to="/"> <img src={instagram} alt="instagram" /></Link>
                                            <Link to="/"> <img src={facebook} alt="facebook" /></Link>
                                            <Link to="/"> <img src={youtube} alt="youtube" /></Link>
                                            <Link to="/"> <img src={plus} alt="plus" /></Link>

                                        </div>
                                    </div>
                                    <div className="next_skip_btns">
                                        <button className="next_btn">Next</button>
                                        <button className="prev_btn">Next</button>
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

export default AddPlayer;
