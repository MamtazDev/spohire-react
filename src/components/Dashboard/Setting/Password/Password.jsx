import "./Password.css";

import lock from "../../../../assets/lock.png";
import closeeye from "../../../../assets/closeeye.png";

import password from "../../../../assets/password.svg";
import { useResetPasswordMutation } from "../../../../features/settings/settingsApi";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLoggedOut } from "../../../../features/auth/authSlice";
const Password = () => {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const { user } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const oldPassword = form.oldPassword.value;
    const newPassword = form.newPassword.value;
    const confirmPassword = form.confirmPassword.value;

    if (newPassword !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Password doesn't matched!`,
      });
      setLoading(false);
      return;
    }

    if (!passwordRegex.test(newPassword)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must contain at least one uppercase, one lowercase, one special character, one digit and it should be at least 8 characters long.",
      });
      setLoading(false);
      return;
    }

    try {
      const data = {
        old_password: oldPassword,
        new_password: newPassword,
      };
      const response = await resetPassword(data);
      if (response?.data?.success) {
        dispatch(userLoggedOut);
        localStorage.removeItem("spohireAuth");
        navigate("/login");
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
    } finally {
      setLoading(false);
    }
  };
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleCurrentPassShow = () => {
    setShowCurrentPass(!showCurrentPass);
  };

  const handleNewPassShow = () => {
    setShowNewPass(!showNewPass);
  };

  const handleConfirmPassShow = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  return (
    <form style={{ paddingTop: "76px" }} onSubmit={handleSubmit}>

      <div className="pass_wrapper">
        <img className="password_img" src={password} alt="password" />
        <div className="pass_text">
          <h4>Update Password</h4>
          <p>To change your password, please fill in the fields below. <br />
            Your password most contain at least 8 characters, it must also  include  <br />at least one upper case letter, one lover case letter and one number.</p>
        </div>
        <div className="form-group has-search">
          <label htmlFor="">Current password</label>
          <span className="form-control-feedback1">
            <img src={lock} alt="" />
          </span>
          <span onClick={handleCurrentPassShow} className=" form-control-password_eye">
            <img src={closeeye} alt="" />
          </span>

          <input
            type={`${showCurrentPass ? "text" : "password"}`}
            className="form-control"
            placeholder="Password"
            name="oldPassword"
            required
          />
        </div>
        <div className="form-group has-search">
          <label htmlFor="">New password</label>
          <span className=" form-control-feedback">
            <img src={lock} alt="" />
          </span>
          <span onClick={handleNewPassShow} className=" form-control-password_eye">
            <img src={closeeye} alt="" />
          </span>

          <input
            type={`${showNewPass ? "text" : "password"}`}
            className="form-control"
            placeholder="New password"
            name="newPassword"
            required
          />
        </div>
        <div className="form-group mb-0 has-search">
          <label htmlFor="">Confirm password</label>
          <span className=" form-control-feedback">
            <img src={lock} alt="" />
          </span>
          <span onClick={handleConfirmPassShow} className=" form-control-password_eye">
            <img src={closeeye} alt="" />
          </span>

          <input
            type={`${showConfirmPass ? "text" : "password"}`}
            className="form-control"
            placeholder="Confirm new password"
            name="confirmPassword"
            required
          />
        </div>
        <div className="d-flex align-items-center justify-content-end" style={{ gap: "30px", marginTop: "40px" }}>
          <p
            type="submit"
            className="cancel_btn"
          >
            Cancel
          </p>
          <button
            type="submit"
            className="save_btn"
            disabled={loading || isLoading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>

      </div>
    </form>
  );
};

export default Password;
