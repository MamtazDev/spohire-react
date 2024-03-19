import React from "react";
import bronze from "../../assets/bronze.svg";
import check from "../../assets/indigo-check.svg";
import checkActive from "../../assets/white-check.svg";

const PriceRange = ({ component }) => {
  const options = [
    "All analytics features",
    "Up to 250,000 tracked visits",
    "Normal support",
    "Up to 3 team members",
  ];
  return (
    <div>
      <div className="container">
        <div className="price_range">
          {component}

          <div className="row g-4">
            <div className="col-lg-4">
              <div className="pricing_card">
                <div>
                  <div className="model">
                    <img src={bronze} alt="" />
                  </div>
                  <p className="title">BRONZE</p>
                </div>

                <p className="price">
                  $10 <span>/month</span>
                </p>
                <p className="">What’s included</p>

                <div>
                  {options.map((data, index) => (
                    <div key={index}>
                      <img src={check} alt="" />
                      <p>{data}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
