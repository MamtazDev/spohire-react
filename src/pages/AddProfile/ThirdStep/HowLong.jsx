import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PK } from "../../../config/config.js";

const HowLong = ({ setMonth, month, packageInfo, handleCLick }) => {
  const [subScriptionMonth, setSubScriptionMonth] = useState({
    duration: "1 months",
    price: 0,
    month: 1,
  });
  const subscriptions = [
    { duration: "1 months", price: 0, month: 1 },
    { duration: "2 months", price: 10, month: 2 },
    { duration: "3 months", price: 30, month: 3 },
  ];

  return (
    <>
      <div className="text-start fs-3 fw-bold">
        How long will the add be active?
      </div>

      <div className={"mb-5"}>
        <div
          className={
            "subscription_wrapper d-flex flex-wrap justify-content-between mb-4"
          }
        >
          {subscriptions.map((sub, index) => (
            <div
              key={index}
              className={
                "subs_item pointer mb-4 mb-lg-0 d-flex flex-column align-items-center" +
                (subScriptionMonth?.price === sub?.price ? " bg-black" : "")
              }
              onClick={() => setSubScriptionMonth(sub)}
            >
              <h4
                className={
                  "fs-1 fw-bold " +
                  (subScriptionMonth?.price === sub?.price
                    ? "text-white"
                    : "text-black")
                }
              >
                {sub.duration}
              </h4>
              <p
                className={
                  "fs-4 fw-normal mb-0" +
                  (subScriptionMonth?.price === sub?.price ? " text-white" : "")
                }
              >
                +${sub.price}
              </p>
            </div>
          ))}
        </div>
        <div className={"selected_subs"}>
          <p className={"fs-3 text-black fw-bold text-start text-lg-end mb-0"}>
            Total : {packageInfo?.price + subScriptionMonth?.price}$
          </p>
        </div>
      </div>
      {/*<Elements stripe={stripePromise}>*/}
      {/*    <PaymentFormTwo/>*/}
      {/*</Elements>*/}
      <div className="d-flex justify-content-end">
        <button
          className="next_btn text-light"
          type="button"
          //   onClick={() => setStep((prev) => prev + 1)}
          onClick={() =>
            handleCLick({
              ...packageInfo,
              price: packageInfo?.price + subScriptionMonth?.price,
              month: subScriptionMonth?.month,
            })
          }
        >
          Next
        </button>
      </div>
    </>
  );
};

export default HowLong;
