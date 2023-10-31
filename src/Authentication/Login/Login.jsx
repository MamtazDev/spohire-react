import arrowRight from "../../assets/ArrowRight.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiGoogleLine } from "react-icons/ri";
import { AiOutlineApple } from "react-icons/ai";
import "./Login.css";
import LoginSlider from "./LoginSlider";

const Login = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-5 p-0">
            <div className="login-left_bg_img d-none d-lg-block">
              <div className="login_slider">
                <LoginSlider />
              </div>
            </div>
          </div>
          <div className="col-lg-7 p-0">
            <div className="login_wrapper">
              <div>
                <h3>Log in</h3>
                <p>Fill all input to Login on your account</p>

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
                    <button className="login-btn" type="submit">
                      Log in <img className="ms-1" src={arrowRight} alt="" />
                    </button>
                  </div>
                  <div className="d-flex align-items-center gap-1 my-4">
                    <div className="line"></div>
                    <p className="mb-0">or</p>
                    <div className="line"></div>
                  </div>
                </form>
              </div>

              <div className="login_with_social">
                <AiOutlineTwitter />
                <span>Continue with Twitter</span>
              </div>
              <div className="login_with_social">
                <RiGoogleLine />
                <span>Continue with Twitter</span>
              </div>
              <div className="login_with_social">
                <AiOutlineApple />
                <span>Continue with Twitter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
