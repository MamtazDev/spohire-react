import React, { useState } from "react";
import PaymentForm from "../../../pages/pricing/PaymentForm.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PK } from "../../../config/config.js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentFormTwo from "../../../pages/pricing/PaymentFormTwo.jsx";
import PaymentFormTwoAnnounement from "../../../pages/pricing/PaymentFormTwoAnnouncement.jsx";

const PaymentProcess = ({ handleSubmit, addingAnnounement, closeModal }) => {
  const stripePromise = loadStripe(STRIPE_PK);
  const [selectedSubscription, setSelectedSubscription] = useState(1);
  const [total, setTotal] = useState(20);
  const subscriptions = [
    { duration: "1 months", price: 0 },
    { duration: "2 months", price: 20 },
    { duration: "3 months", price: 30 },
  ];

  const handleSubscriptionClick = (index) => {
    setSelectedSubscription(index);
    setTotal(subscriptions[index].price);
  };
  return (
    <>
      <div className={"container"} style={{ maxWidth: "750px", width: "100%" }}>
        <div className={"selected_subs"}>
          <p className={"fs-3 text-black fw-bold text-start mb-0"}>
            Total : ${total}
          </p>
        </div>
      </div>

      <Elements stripe={stripePromise}>
        <PaymentFormTwoAnnounement
          handleSubmit={handleSubmit}
          addingJob={addingAnnounement}
          closeModal={closeModal}
        />
      </Elements>
    </>
  );
};

export default PaymentProcess;
