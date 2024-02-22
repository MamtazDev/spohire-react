import { STRIPE_PK } from "../../config/config";
import AddPlayerPaymentFormOwn from "./AddPlayerPaymentFormOwn";
import AddPlayerPaymentNewForm from "./AddPlayerPaymentNewForm";
import PaymentForm from "./PaymentForm";
import "./Pricing.css";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const PaymentProcessPlayerAdd = ({ gallaryImage, experience, socials }) => {
  const stripePromise = loadStripe(STRIPE_PK);
  return (
    <>
      <Elements stripe={stripePromise}>
        <AddPlayerPaymentFormOwn
          gallaryImage={gallaryImage}
          experience={experience}
          socials={socials}
        />
      </Elements>
    </>
  );
};

export default PaymentProcessPlayerAdd;
