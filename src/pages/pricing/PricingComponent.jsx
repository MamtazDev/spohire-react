import React from "react";
import bronze from "../../assets/bronze.png";
import silver from "../../assets/silver.png";
import gold from "../../assets/gold.png";
import dot from "../../assets/bluedot.png";

const PricingComponent = ({ handleSave, user, subscriptionType, id }) => {
  const amountBronze =
    subscriptionType === "Yearly"
      ? "150"
      : subscriptionType === "Quaterly"
      ? "80"
      : "50";
  const amountSilver =
    subscriptionType === "Yearly"
      ? "180"
      : subscriptionType === "Quaterly"
      ? "120"
      : "80";
  const amountGold =
    subscriptionType === "Yearly"
      ? "450"
      : subscriptionType === "Quaterly"
      ? "300"
      : "150";

  const subscriptionName =
    subscriptionType === "Yearly"
      ? "year"
      : subscriptionType === "Quaterly"
      ? "quater"
      : "month";
  return (
    <div className="row">
      <div className="col-lg-4">
        <div>
          <div className="pricing_card">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ marginBottom: "10px" }}
            >
              <h3 className="f_sfPro">Bronze</h3>
              <img src={bronze} alt="bronze" />
            </div>
            <span className="">An ideal starting point....</span>
            <h2 className="mt_30 mb_10">${amountBronze}</h2>
            <p className="mb_30">Per {subscriptionName}</p>

            <button
              className="f_sfPro text-light "
              onClick={() =>
                handleSave({
                  name: "Bronze",
                  price: Number(amountBronze),
                  subscriptionType: subscriptionType,
                })
              }
            >
              Save and Continue
            </button>
          </div>
          <div className="white_part">
            <div className="white_wrapper">
              <div className="blue_dot">
                <img src={dot} alt="dot" />
                <span>Ideal starting point for individuals and teams</span>
              </div>
              <div className="blue_dot">
                <img src={dot} alt="dot" />
                <span>Bronze package offers essential features</span>
              </div>
              <div className="blue_dot">
                <img src={dot} alt="dot" />
                <span>Perfect for those new to the platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div>
          <div className="pricing_card">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ marginBottom: "10px" }}
            >
              <h3 className="f_sfPro">Silver</h3>
              <img src={silver} alt="bronze" />
            </div>
            <span className="">An ideal starting point....</span>
            <h2 className="mt_30 mb_10">${amountSilver}</h2>
            <p className="mb_30">Per {subscriptionName}</p>

            <button
              className="f_sfPro text-light"
              onClick={() =>
                handleSave({
                  name: "Silver",
                  price: Number(amountSilver),
                  subscriptionType: subscriptionType,
                })
              }
            >
              Save and Continue
            </button>
          </div>

          <div className="white_part">
            <div className="white_wrapper">
              <div className="blue_dot">
                <img src={dot} alt="dot" />
                <span>Ideal starting point for individuals and teams</span>
              </div>
              <div className="blue_dot">
                <img src={dot} alt="dot" />
                <span>Bronze package offers essential features</span>
              </div>
              <div className="blue_dot">
                <img src={dot} alt="dot" />
                <span>Perfect for those new to the platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div>
          <div className="pricing_card">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ marginBottom: "10px" }}
            >
              <h3 className="f_sfPro">Gold</h3>
              <img src={gold} alt="bronze" />
            </div>
            <span className="">An ideal starting point....</span>
            <h2 className="mt_30 mb_10">${amountGold}</h2>
            <p className="mb_30">Per {subscriptionName}</p>

            <button
              className="f_sfPro text-light"
              onClick={() =>
                handleSave({
                  name: "Gold",
                  price: Number(amountGold),
                  subscriptionType: subscriptionType,
                })
              }
            >
              Save and Continue
            </button>
          </div>

          <div className="white_part">
            <div className="white_wrapper">
              <div className="blue_dot">
                <img src={dot} alt="dot" />
                <span>Ideal starting point for individuals and teams</span>
              </div>
              <div className="blue_dot">
                <img src={dot} alt="dot" />
                <span>Bronze package offers essential features</span>
              </div>
              <div className="blue_dot">
                <img src={dot} alt="dot" />
                <span>Perfect for those new to the platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
