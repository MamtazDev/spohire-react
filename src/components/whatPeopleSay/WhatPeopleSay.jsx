import React from "react";
import "./WhatPeopleSay.css";
import Start from "../../assets/star.png";
import ProfoleImg from "../../assets/profoleimg.png";
import GoogleImg from "../../assets/google.png";
import { Carousel } from "react-bootstrap";

const WhatPeopleSay = () => {
  return (
    <section>
      <div className="container say_container all_mb">
        <div className="sayHeader">
          <p className="mb-3">What people say</p>
          <span className="d-block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit soldin.
          </span>
        </div>

        <Carousel data-bs-theme="dark">
          
          {/* </Carousel.Caption>
          </Carousel.Item>  */}
          <Carousel.Item>
            <Carousel.Caption>
              <div className="row gy-3">
                <div className="col-12 col-md-6">
                  <div className="sayInnerBox">
                    <div className="d-flex justify-content-start align-items-center gap-3 mb-3">
                      <img
                        className="profoleImg"
                        src={ProfoleImg}
                        alt="Profile"
                      />
                      <div>
                        <p>Joe Elia</p>
                        <span>User Interface Design</span>
                      </div>
                    </div>
                    <h5 className="mb-5">
                      “In urna, non nisl tincidunt gravida elementum turpis.
                      Risus, ac ultrices tincie quam arcu odio volutpat.”
                    </h5>
                    <div className="d-flex  flex-md-row justify-content-start align-items-center gap-3 google_mobile">
                      <img src={GoogleImg} alt="Logo" />
                      <div className="g_review d-flex  flex-lg-row justify-content-start align-items-start align-items-lg-center gap-1">
                        <span>A 5.00</span>
                        <div className="d-flex align-items-center gap-1 star_design">
                          <img src={Start} alt="star" />
                          <img src={Start} alt="star" />
                          <img src={Start} alt="star" />
                          <img src={Start} alt="star" />
                          <img src={Start} alt="star" />
                        </div>
                        <span>previews from Elia Joe</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div
                    className="sayInnerBox sayRightbox"
                    style={{ border: " 40px solid #0177FB" }}
                  >
                    {/* <button>
                        <img src={SliderButton} alt="Slider" />
                      </button> */}
                    <div className="d-flex justify-content-start align-items-center gap-3 mb-3">
                      <img
                        className="profoleImg"
                        src={ProfoleImg}
                        alt="Profile"
                      />
                      <div>
                        <p>Joe Elia</p>
                        <span>User Interface Design</span>
                      </div>
                    </div>
                    <h5 className="mb-5">
                      “In urna, non nisl tincidunt gravida elementum turpis.
                      Risus, ac ultrices tincie quam arcu odio volutpat.”
                    </h5>
                    <div className="d-flex flex-md-row justify-content-start align-items-center gap-3 google_mobile">
                      <img src={GoogleImg} alt="Logo" />
                      <div className="g_review d-flex  flex-lg-row justify-content-start align-items-start align-items-lg-center gap-1">
                        <span>A 5.00</span>
                        <div className="d-flex align-items-center gap-1 star_design">
                          <img src={Start} alt="star" />
                          <img src={Start} alt="star" />
                          <img src={Start} alt="star" />
                          <img src={Start} alt="star" />
                          <img src={Start} alt="star" />
                        </div>
                        <span>previews from Elia Joe</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <div className="row gy-3">
                <div className="col-12 col-md-6">
                  <div className="sayInnerBox">
                    <div className="d-flex justify-content-start align-items-center gap-3 mb-3">
                      <img
                        className="profoleImg"
                        src={ProfoleImg}
                        alt="Profile"
                      />
                      <div>
                        <p>Joe Elia</p>
                        <span>User Interface Design</span>
                      </div>
                    </div>
                    <h5 className="mb-5">
                      “In urna, non nisl tincidunt gravida elementum turpis.
                      Risus, ac ultrices tincie quam arcu odio volutpat.”
                    </h5>
                    <div className="d-flex  flex-md-row justify-content-start align-items-center gap-3 google_mobile">
                      <img src={GoogleImg} alt="Logo" />
                      <div className="g_review d-flex flex-lg-row justify-content-start align-items-start align-items-lg-center gap-1">
                        <span>A 5.00</span>
                        <div className="d-flex align-items-center gap-1 star_design">
                          <img src={Start} alt="star" />
                          <img src={Start} alt="star" />
                          <img src={Start} alt="star" />
                          <img src={Start} alt="star" />
                          <img src={Start} alt="star" />
                        </div>
                        <span>previews from Elia Joe</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div
                    className="sayInnerBox sayRightbox"
                    style={{ border: " 40px solid #0177FB" }}
                  >
                    {/* <button>
                        <img src={SliderButton} alt="Slider" />
                      </button> */}
                    <div className="d-flex justify-content-start align-items-center gap-3 mb-3">
                      <img
                        className="profoleImg"
                        src={ProfoleImg}
                        alt="Profile"
                      />
                      <div>
                        <p>Joe Elia</p>
                        <span>User Interface Design</span>
                      </div>
                    </div>
                    <h5 className="mb-5">
                      “In urna, non nisl tincidunt gravida elementum turpis.
                      Risus, ac ultrices tincie quam arcu odio volutpat.”
                    </h5>
                    <div className="d-flex flex-md-row justify-content-start align-items-center gap-3 google_mobile">
                      <img src={GoogleImg} alt="Logo" />
                      <div className="g_review d-flex  flex-lg-row justify-content-start align-items-start align-items-lg-center gap-1">
                        <span>A 5.00</span>
                        <div className="d-flex align-items-center gap-1 star_design">
                          <img src={Start} alt="star" />
                          <img src={Start} alt="star" />
                          <img src={Start} alt="star" />
                          <img src={Start} alt="star" />
                          <img src={Start} alt="star" />
                        </div>
                        <span>previews from Elia Joe</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default WhatPeopleSay;
