import { useState } from "react";
import "./HowItWorks.css";
import localOne from "../../assets/local1.png";
import localTwo from "../../assets/local2.png";
import Robert from "../../assets/robert.png";
import Filter from "../../assets/filter.png";
import SignUp from "./SignUp";

const HowItWorks = () => {
  const [worksTab, setWorksTab] = useState("player");
  const handleTabClick = (tab) => {
    setWorksTab(tab);
  };

  return (
    <section className="workBg">
      <section id="signUp">
        <div className="container Work_container">
          <h3>How it works</h3>
          <div className="tabOutter d-flex flex flex-lg-row justify-content-center gap-2 align-items-center mx-auto">
            <button
              className={worksTab === "player" ? "btnActive" : ""}
              onClick={() => handleTabClick("player")}
            >
              Player
            </button>
            <button
              className={worksTab === "coach" ? "btnActive" : ""}
              onClick={() => handleTabClick("coach")}
            >
              Coach
            </button>
            <button
              className={worksTab === "manager" ? "btnActive" : ""}
              onClick={() => handleTabClick("manager")}
            >
              Manager/Agent
            </button>
          </div>

          {worksTab === "player" && (
            <div className="row gy-4">
              <div className="col-12 col-xl-6">
                <div className="d-flex flex-column gap-4 h-100">
                  <div className="innerWhiteBox d-flex  flex-md-nowrap  flex-lg-row justify-content-center align-items-center gap-2 w-100">
                    <div className="local d-flex flex-column align-items-center align-items-lg-start">
                      <p className="mb-2">Local News, Teams & Players</p>
                      <button className="d-block">Allow Location</button>
                    </div>
                    <img className="img-fluid img1" src={localOne} alt="img" />
                    <img className="img-fluid img2" src={localTwo} alt="img" />
                  </div>

                  <div className="innerWhiteBox d-flex  flex-wrap  flex-lg-row justify-content-center align-items-center gap-2 w-100 innerBox2">
                    <div className="playerBox">
                      <p className="mb-2">Robert Lewandowski</p>
                      <div className="d-flex justify-content-start gap-2">
                        <div className="d-flex flex-column justify-content-start gap-2 align-items-center">
                          <span>Place of birth:</span>
                          <span>Current Team:</span>
                        </div>
                        <div className="d-flex flex-column justify-content-end gap-2 align-items-center">
                          <span>Poland</span>
                          <span>Barcelona</span>
                        </div>
                      </div>
                    </div>
                    <img className="img-fluid img3" src={Robert} alt="img" />
                    <div className="detailBox d-flex justify-content-between align-items-start gap-3">
                      <div className="d-flex flex-column justify-content-start gap-2">
                        <span>Age:</span>
                        <span style={{ background: "#F4DBFF" }}>Height :</span>
                        <span style={{ background: "#FFE3D4" }}>Weight:</span>
                      </div>
                      <div>
                        <p>Striker</p>
                      </div>
                    </div>
                  </div>

                  <div className="leftBlueBox d-flex  flex-lg-row  justify-content-between align-items-start gap-4">
                    <div className="d-flex flex-column gap-4">
                      <div className="d-flex justify-content-start gap-2 align-items-center mobile_numtag">
                        <div className="numTag ">
                          <p>03</p>
                        </div>
                        <div className="connect">
                          <p>Connect With Us</p>
                          <span className="d-block">
                            Wait for contact with your new team.
                          </span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start gap-2 align-items-center mobile_numtag">
                        <div className="numTag ">
                          <p>04</p>
                        </div>
                        <div className="connect">
                          <p>Connect With Us</p>
                          <span className="d-block">
                            Wait for contact with your new team.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className="d-flex justify-content-center gap-2 align-items-center">
                        Filter
                        <img src={Filter} alt="Filter" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-xl-6">
                <SignUp />
              </div>
            </div>
          )}

          {worksTab === "coach" && (
            <>
              <h1 className="text-white">Coach Tab</h1>
            </>
          )}

          {worksTab === "manager" && (
            <>
              <h1 className="text-white">Manager</h1>
            </>
          )}
        </div>
      </section>
    </section>
  );
};

export default HowItWorks;
