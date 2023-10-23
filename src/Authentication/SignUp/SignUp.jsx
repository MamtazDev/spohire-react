import loginBanner from "../../assets/login-banner.png";
import arrowRight from "../../assets/ArrowRight.png";

import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import DateSelector from "./DateSelector";

// const options = [
//   { value: "1", label: "1" },
//   { value: "2", label: "2" },
//   { value: "3", label: "3" },
//   { value: "4", label: "4" },
//   { value: "5", label: "5" },
//   { value: "6", label: "6" },
//   { value: "7", label: "7" },
//   { value: "8", label: "8" },
//   { value: "9", label: "9" },
//   { value: "10", label: "10" },
// ];
const SignUp = () => {
  const [select, setSelect] = useState("SE");
  const onSelect = (code) => setSelect(code);

  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-5 ">
            <div className="login-left_bg">
              <img style={{ width: "100%" }} src={loginBanner} alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="login_wrapper">
              <div>
                <h3>Create new account</h3>
                <p>Fill all input to create a account</p>
                <form>
                  <div className="row right-inner-addon input-container">
                    <div className="col-lg-6">
                      <label htmlFor="">Full name</label>

                      <input
                        type="text"
                        className="mt-2 form-control login_input"
                        placeholder="First name"
                      />
                    </div>
                    <div className="col-lg-6">
                      <label
                        htmlFor=""
                        className=""
                        style={{ visibility: "hidden" }}
                      >
                        {" "}
                        sdfffffffffffffffffffff
                      </label>
                      <input
                        type="text"
                        className="form-control login_input"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="right-inner-addon input-container">
                    <i className="fa fa-search"></i>
                    <label htmlFor="">Email Address</label>
                    <input
                      type="text"
                      className="form-control login_input"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="row flex-wrap date_wrapper">
                    <div className="col-lg-4">
                      <ReactFlagsSelect
                        selected={select}
                        onSelect={onSelect}
                        countries={["BD", "fi", "GB", "IE", "IT", "NL", "SE"]}
                      />
                    </div>
                    <div className="col-lg-8">
                      <DateSelector />
                    </div>
                  </div>
                  {/* country select */}
                  {/* Function */}
                  <label className="label_text">Function</label> <br />
                  <div>
                    <button className="btn function_btn">Player</button>
                    <button className="btn function_btn">Coach</button>
                    <button className="btn function_btn">Manager</button>
                    <button className="btn function_btn">Other</button>
                  </div>
                  <label className="label_text mt-3">Sports</label> <br />
                  <div>
                    <button className="btn function_btn">Football</button>
                    <button className="btn function_btn">Busketball</button>
                    <button className="btn function_btn">Volleyball</button>
                    <button className="btn function_btn">Handball</button>
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                    <button type="submit" className="login-btn">
                      Create account
                      <img src={arrowRight} alt="" />
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

/* 
<div class="select-date">
  <select id="select-day"></select>
  <select id="select-month">
  	  <option value="0">January
    	<option value="1">February
  	  <option value="2">March
  	  <option value="3">April
  	  <option value="4">May
  	  <option value="5">June
  	  <option value="6">July
  	  <option value="7">August
  	  <option value="8">September
  	  <option value="9">October
  	  <option value="10">November
  	  <option value="11">December
  </select>
  <select id="select-year"></select>
</div>

*/
