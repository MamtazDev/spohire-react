import React, { useState } from 'react';
import arrowRight from '../../assets/ArrowRight.png';
import { AiOutlineTwitter } from 'react-icons/ai';
import { RiGoogleLine } from 'react-icons/ri';
import { AiOutlineApple } from 'react-icons/ai';
import './Login.css';
import LoginSlider from './LoginSlider';
import { useLocation } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation(); // Get the current location object

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!password) {
      alert('Please enter a password.');
      return;
    }

    // If email and password are valid, navigate to the home page
    window.location.pathname = '/'; // Use window.location.pathname to navigate
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
                <form>
                  <div className="right-inner-addon input-container">
                    <i className="fa-regular fa-envelope"></i>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      className="form-control login_input"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="right-inner-addon input-container">
                    <i className="fa-solid fa-lock"></i>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control login_input"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="login-btn" type="submit" onClick={handleSubmit}>
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
