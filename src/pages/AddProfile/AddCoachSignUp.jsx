import React from "react";

const AddCoachSignUp = ({ handleSubmit, isLoading }) => {
  return (
    <div className="login_wrapper player_wrapper">
      <div>
        <h3>Add to Transfer Market</h3>
        <p>Fill all input to create a account</p>
        <form onSubmit={handleSubmit}>
          <div className="row right-inner-addon input-container">
            <div className="">
              <label htmlFor="">
                <span className="text-danger">*</span>Email
              </label>
              <input
                type="email"
                className="mt-2 form-control login_input"
                placeholder="Enter Email"
                name="email"
                required
              />
            </div>
            <div className="">
              <label htmlFor="">
                <span className="text-danger">*</span>Password
              </label>
              <input
                name="password"
                type="password"
                className="mt-2 form-control login_input"
                placeholder="Enter Password"
                required
              />
            </div>
          </div>
          {/* media */}

          <div className="next_skip_btns">
            <button
              className="next_btn text-light"
              type="submit"
              //   disabled={isLoading}
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
                "Add"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoachSignUp;
