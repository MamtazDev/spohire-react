import { STRIPE_PK } from "../../config/config";
import PaymentForm from "./PaymentForm";
import PaymentFormAddPlayer from "./PaymentFormAddPlayer";
import "./Pricing.css";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const PaymentProcessAddPlayer = () => {
  const stripePromise = loadStripe(STRIPE_PK);
  return (
    <>
      <Elements stripe={stripePromise}>
        <PaymentFormAddPlayer />
      </Elements>
    </>
  );
};

export default PaymentProcessAddPlayer;
