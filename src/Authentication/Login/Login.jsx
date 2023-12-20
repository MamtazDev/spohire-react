import arrowRight from "../../assets/ArrowRight.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiGoogleLine } from "react-icons/ri";
import { AiOutlineApple } from "react-icons/ai";
import "./Login.css";
import LoginSlider from "./LoginSlider";
import { useLoginUserMutation } from "../../features/auth/authApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginUser, { isLoading, error, isError }] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    const data = {
      email,
      password,
    };

    try {
      const response = await loginUser(data);
      console.log(response, "ddd");
      if (response?.data?.user?.isSubsCribed) {
        navigate("/dashboard");
      }
      if (!response?.data?.user?.isSubsCribed) {
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
                <form onSubmit={handleSubmit}>
                  <div className="right-inner-addon input-container">
                    <i className="fa-regular fa-envelope"></i>
                    <label htmlFor="">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control login_input"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div className="right-inner-addon input-container">
                    <i className="fa-solid fa-lock"></i>
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      className="form-control login_input"
                      placeholder="Enter password"
                      name="password"
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      className="login-btn"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        "Logging..."
                      ) : (
                        <>
                          Log in{" "}
                          <img className="ms-1" src={arrowRight} alt="" />
                        </>
                      )}
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
                <span>Continue with Google</span>
              </div>
              <div className="login_with_social">
                <AiOutlineApple />
                <span>Continue with Apple</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
