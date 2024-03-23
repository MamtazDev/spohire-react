import React, { useState } from 'react'
import bronze from "../../assets/bronze.svg";
import silver from "../../assets/silver.svg";
import gold from "../../assets/gold.svg";
import check from "../../assets/indigo-check.svg";
import checkActive from "../../assets/white-check.svg";

const priceOptions = [
    {
      pic: bronze,
      title: "BRONZE",
      price: 10,
      color: "#CD7F32",
    },
    {
      pic: silver,
      title: "SILVER",
      price: 20,
      color: "#C5CDE7",
    },
    {
      pic: gold,
      title: "GOLD",
      price: 30,
      color: "#FFD029",
    },
  ];
  const options = [
    "All analytics features",
    "Up to 250,000 tracked visits",
    "Normal support",
    "Up to 3 team members",
  ];


const PricingCard = () => {

    const [activeCard, setActiveCard] = useState(1);
    const handleCardClick = (index) => {
        setActiveCard(index);
    };


    return (
        <div>
            <div className="row g-4">
            {priceOptions.map((data, index) => (
              <div
                key={index}
                className={`col-lg-4 `}
                onClick={() => handleCardClick(index)}
              >
                <div className={`price_card ${activeCard === index ? "active" : ""
                  }`}>
                  <div className="d-flex align-items-center gap-4 mb-5">
                    <div className="model">
                      <img src={data.pic} alt="" />
                    </div>
                    <p style={{ color: `${data.color}` }} className="title">
                      {data.title}
                    </p>
                  </div>
                  <p className={` mb-3 ${activeCard === index ? "active_price" : "price"
                    }`}
                  >
                    ${data.price} <span>/month</span>
                  </p>
                  <p className={` ${activeCard === index ? "active_include" : "include"
                    }`}>What’s included</p>
                  <div className="d-flex flex-column gap-4">
                    {options.map((option) => (
                      <div
                        className="d-flex align-items-center gap-2"
                      // key={index}
                      >
                        <img src={activeCard === index ? checkActive : check} alt="" />
                        <p className={` ${activeCard === index ? "active_color" : "options"
                          }`}>{option}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>


        </div>
    )
}

export default PricingCard