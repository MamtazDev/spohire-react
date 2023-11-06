import React from 'react';

const SignUp = () => {
    return (
        <div className="howWorkRight h-100">
                  <div className="ps-2">
                    <p>Sign Up</p>
                    <span className="d-block">
                      Create an account ad add your
                      <br /> profile for those loking.
                    </span>
                  </div>

                  <form>
                    <div className="d-flex flex-column justify-content-start gap-3">
                      <div className="txtInput flex-wrap    d-flex  flex-md-row justify-content-between align-items-center">
                        <div>
                          <label htmlFor="fName">First Name</label>
                          <input type="text" name="firstName" id="fName" />
                        </div>
                        <div>
                          <label htmlFor="lName">Last Name</label>
                          <input type="text" name="lastName" id="lName" />
                        </div>
                      </div>
                      <div className="txtInput d-flex  flex-wrap  flex-md-row justify-content-between align-items-center">
                        <div>
                          <label htmlFor="email">Email Address</label>
                          <input type="email" name="email" id="email" />
                        </div>
                        <div>
                          <label htmlFor="cellNo">Mobile Number</label>
                          <input type="text" name="phone" id="cellNo" />
                        </div>
                      </div>
                      <div>
                        <p>Kind Of Sports</p>
                        <div className="d-flex   flex-wrap  flex-md-row justify-content-start gap-4">
                          <div className="playOption">
                            <div>
                              <input
                                type="radio"
                                name="football"
                                id="football"
                              />
                              <label htmlFor="football">Football</label>
                            </div>
                          </div>

                          <div className="playOption">
                            <div>
                              <input
                                type="radio"
                                name="Baskeball"
                                id="baskeball"
                              />
                              <label htmlFor="baskeball">Baskeball</label>
                            </div>
                          </div>

                          <div className="playOption">
                            <div>
                              <input
                                type="radio"
                                name="handball"
                                id="handball"
                              />
                              <label htmlFor="handball">Handball</label>
                            </div>
                          </div>

                          <div className="playOption">
                            <div>
                              <input
                                type="radio"
                                name="vollyeball"
                                id="vollyeball"
                              />
                              <label htmlFor="vollyeball">Vollyeball</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p>You</p>
                        <div className="d-flex  flex-wrap  flex-md-row justify-content-start gap-4">
                          <div className="playOption">
                            <div>
                              <input type="radio" name="player" id="player" />
                              <label htmlFor="player">Player</label>
                            </div>
                          </div>

                          <div className="playOption">
                            <div>
                              <input type="radio" name="manager" id="manager" />
                              <label htmlFor="manager">Manager</label>
                            </div>
                          </div>

                          <div className="playOption">
                            <div>
                              <input type="radio" name="coach" id="coach" />
                              <label htmlFor="coach">Coach</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
    );
};

export default SignUp;