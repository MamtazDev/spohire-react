import loginBanner from "../../assets/login-banner.png";
import arrowRight from "../../assets/ArrowRight.png";
// import twitter from "../../assets/twitter.png";
// import apple from "../../assets/AppleLogo.png";
// import google from "../../assets/GoogleLogo.png";
import {AiOutlineTwitter} from 'react-icons/ai';
import {RiGoogleLine} from 'react-icons/ri';
import {AiOutlineApple} from 'react-icons/ai';
import "./Login.css";
const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 login-left_bg">
            <img src={loginBanner} alt="" />
            {/* <h1>hello logion</h1> */}
          </div>
          <div className="col-lg-7 login_wrapper">
            <div>
              <h3>Log in</h3>
              <p>Fill all input to Login on your account</p>
              {/* input field */}
              <form>
                <div className="right-inner-addon input-container">
                  <i className="fa fa-search"></i>
                  <label htmlFor="">Email Address</label>
                  <input
                    type="text"
                    className="form-control login_input"
                    placeholder="Enter email"
                  />
                </div>
                <div className="right-inner-addon input-container">
                  <i className="fa fa-search"></i>
                  <label htmlFor="">Password</label>
                  <input
                    type="text"
                    className="form-control login_input"
                    placeholder="Enter password"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit">
                    Log in <img src={arrowRight} alt="" />
                  </button>
                </div>
                <p>or</p>
              </form>
            </div>

            <div className="login_with_social">
              {/* <i className="fa fa-search"></i> */}
              <AiOutlineTwitter />
              <span>Continue with Twitter</span>
            </div>
            <div className="login_with_social">
              {/* <i className="fa fa-search"></i> */}
              <RiGoogleLine/>
              <span>Continue with Twitter</span>
            </div>
            <div className="login_with_social">
              {/* <i className="fa fa-search"></i> */}
              <AiOutlineApple/>
              <span>Continue with Twitter</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
