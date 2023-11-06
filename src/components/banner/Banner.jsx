import React from "react";
import "./Banner.css";
import readyToget from "../../assets/readytoget.png";
import readyTogetsm from "../../assets/readytogetsm.png";
import bannerImg from "../../assets/bannerImg.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner mb_40">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="bannerContent">
              <span>Sports + Announcements only for you</span>
              <img
                className="mb-2 img-fluid d-none d-md-block"
                src={readyToget}
                alt="Ready to get"
              />
              <div className="d-flex justify-content-center">
                <img
                  className="mb-2 img-fluid d-block d-md-none"
                  src={readyTogetsm}
                  alt="Ready to get"
                />
              </div>
              <h1>
                Get matched with <br className="d-block d-md-none" /> new sports
                club
              </h1>
              <p>Add your profile and join a new sports team</p>
              <Link to="#" className="text-decoration">
                Get Started Now
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="text-center banner-right-image">
              <img className="img-fluid" src={bannerImg} alt="Banner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
