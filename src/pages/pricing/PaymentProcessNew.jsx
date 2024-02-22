import { STRIPE_PK } from "../../config/config";

import PaymentForm from "./PaymentForm";
import "./Pricing.css";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const PaymentProcessNew = ({ gallaryImage, experience, socials }) => {
  const stripePromise = loadStripe(STRIPE_PK);
  return (
    <>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </>
  );
};

export default PaymentProcessNew;
