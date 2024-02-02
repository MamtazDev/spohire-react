import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAddPlayerPaymentInfo } from "../../features/payment/paymentSlice";
import Swal from "sweetalert2";
import { useState } from "react";
import PricingComponent from "./PricingComponent";

const BestOfferAddProfile = ({ id }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSave = (data) => {
    dispatch(setAddPlayerPaymentInfo(data));
    navigate("/paymentProcessAddPlayer");
  };

  const [subscriptionType, setSubscriptionType] = useState("Monthly");
  return (
    <>
      <div className="bestofferwrapper mb_150">
        <div className="container">
          <div className="bestOffer_title">
            <h1 className="f_sfPro">
              Choose the <span>best offer</span> for you
            </h1>
          </div>

          <div className="d-flex justify-content-center mb-4">
            <button
              className={`btn ${
                subscriptionType === "Monthly"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }  rounded`}
              onClick={() => setSubscriptionType("Monthly")}
            >
              Monthly
            </button>
            <button
              className={`btn ${
                subscriptionType === "Quaterly"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }  rounded`}
              onClick={() => setSubscriptionType("Quaterly")}
            >
              Quaterly
            </button>
            <button
              className={`btn ${
                subscriptionType === "Yearly"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }  rounded`}
              onClick={() => setSubscriptionType("Yearly")}
            >
              Yearly
            </button>
          </div>

          <PricingComponent
            handleSave={handleSave}
            user={user}
            subscriptionType={subscriptionType}
            id={id}
          />
        </div>
      </div>
    </>
  );
};

export default BestOfferAddProfile;
