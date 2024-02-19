import React, { useState } from "react";
import PaymentForm from "../../../pages/pricing/PaymentForm.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PK } from "../../../config/config.js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentFormTwo from "../../../pages/pricing/PaymentFormTwo.jsx";

const AddJobOfferModalTwo = ({
  handleSubmit,
  addingJob,
  selectedSubscription,
  setSelectedSubscription,
  closeModal,
}) => {
  const stripePromise = loadStripe(STRIPE_PK);

  const subscriptions = [
    { duration: "1 months", price: 10, month: 1 },
    { duration: "2 months", price: 20, month: 2 },
    { duration: "3 months", price: 30, month: 3 },
  ];

  const handleSubscriptionClick = (index) => {
    setSelectedSubscription(index);
    setTotal(subscriptions[index].price);
  };
  return (
    <>
      <div className="text-start fs-3 fw-bold">
        How long will the add be active?
      </div>

      <div>
        <div
          className={
            "subscription_wrapper d-flex flex-wrap justify-content-between mb-4"
          }
        >
          {subscriptions.map((sub, index) => (
            <div
              key={index}
              className={
                "subs_item pointer mb-4 mb-lg-0" +
                (selectedSubscription?.price === sub?.price ? " bg-black" : "")
              }
              onClick={() => setSelectedSubscription(sub)}
            >
              <h4
                className={
                  "fs-1 fw-bold " +
                  (selectedSubscription?.price === sub?.price
                    ? "text-white"
                    : "text-black")
                }
              >
                {sub.duration}
              </h4>
              <p
                className={
                  "fs-4 fw-normal mb-0" +
                  (selectedSubscription?.price === sub?.price
                    ? " text-white"
                    : "")
                }
              >
                ${sub.price}
              </p>
            </div>
          ))}
        </div>
        <div className={"selected_subs"}>
          <p className={"fs-3 text-black fw-bold text-start text-lg-end mb-0"}>
            Total : ${selectedSubscription?.price}
          </p>
        </div>
      </div>

      <Elements stripe={stripePromise}>
        <PaymentFormTwo
          handleSubmit={handleSubmit}
          addingJob={addingJob}
          selectedSubscription={selectedSubscription}
          closeModal={closeModal}
        />
      </Elements>
    </>
  );
};

export default AddJobOfferModalTwo;
