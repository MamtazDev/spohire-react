/* eslint-disable no-unused-vars */
import credit from "../../assets/creditcard.png";
import klarna from "../../assets/klarna.png";
import afterpay from "../../assets/afterpay.png";
import v1 from "../../assets/v1.png";
import v2 from "../../assets/v2.png";
import v3 from "../../assets/v3.png";
import v4 from "../../assets/v4.png";
import Select from "react-select";
import bdIcon from "../../assets/bd.svg";
import { useState } from "react";
import Stripe from "stripe";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { STRIPE_SK } from "../../config/config";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  useCreatePaymentMutation,
  useUpdatePaymentStatusMutation,
} from "../../features/payment/paymentApi";

const options1 = [
  {
    value: "BD",
    label: "Bangladesh",
    flagImg: bdIcon,
  },
  {
    value: "IN",
    label: "India",
    flagImg: bdIcon,
  },
  {
    value: "CH",
    label: "Switzerland",
    flagImg: bdIcon,
  },
  {
    value: "UK",
    label: "United Kingdom",
    flagImg: bdIcon,
  },
  {
    value: "IE",
    label: "Ireland",
    flagImg: bdIcon,
  },
  {
    value: "IT",
    label: "Italy",
    flagImg: bdIcon,
  },
  {
    value: "NL",
    label: "Netherland",
    flagImg: bdIcon,
  },
];
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        color: "#000",
        fontSize: "16px",
      },
      fontWeight: 400,
      width: "100%",

      invalid: {
        iconColor: "#ffc7ee",
        color: "#f00101",
      },
    },
  };
  const [nationality, setNationality] = useState("");

  const [selectedOption, setSelectedOption] = useState("card");

  const { packageInfo } = useSelector((state) => state.payment);
  const { user } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);

  const [updatePaymentStatus, { isLoading: updating }] =
    useUpdatePaymentStatusMutation();

  const [createPayment, { isLoading: paymentCreating }] =
    useCreatePaymentMutation();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nationality: "",
    zip: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({
      ...formData,
      selectedOption,
    });
  };

  const handlePayment = async () => {
    setIsLoading(true);
    if (!stripe) {
      setIsLoading(false);
      return;
    }

    try {
      const clientSecret = await createPaymentIntent(
        packageInfo?.price * 100,
        "usd"
      );

      const cardElement = elements.getElement(CardNumberElement);

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            type: "card",
            card: cardElement,
            billing_details: {
              name: `${user?.first_name + " " + user?.last_name}`,
              address: {
                country: formData?.nationality,
                postal_code: formData?.zip,
              },
            },
          },
        }
      );

      if (error) {
        console.error("error", error);
        setIsLoading(false);

        Swal.fire({
          position: "center",
          icon: "error",
          title: `${error?.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (paymentIntent.status === "succeeded") {
        setIsLoading(false);

        console.log(paymentIntent, "payyyy");
        // updating user payment status
        const paymentRes = await updatePaymentStatus({
          userId: user?._id,
          data: { isSubsCribed: true, subscriptionName: packageInfo?.name },
        });
        // createing payment
        const createPaymentData = {
          transactionId: paymentIntent?.id,
          userId: user?._id,
          planName: packageInfo?.name,
          amount: packageInfo?.price,
        };
        const createPaymentRes = await createPayment(createPaymentData);
        console.log(createPaymentRes, "kfjalkfred");

        // navigation
        navigate("/dashboard");
      }
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        position: "center",
        icon: "error",
        title: `${error?.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <>
      <div className="container mb-2 pb-5">
        <h2 className="payment_title">
          Payment <span>Process</span>
        </h2>
        <div className="payment_process_wrapper">
          <p>Select payment option</p>
          <div className="all_payments_system">
            <div className="card_wrapper">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="card"
                  id="card"
                  checked={selectedOption === "card"}
                />
              </div>
              <button
                className="card_btn"
                onClick={() => handleButtonClick("card")}
              >
                {" "}
                <img src={credit} alt="credit card" /> <span>Card</span>
              </button>
            </div>
            {/* <div className="card_wrapper">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Klarna"
                  id="Klarna"
                  checked={selectedOption === "Klarna"}
                />
              </div>
              <button
                className="card_btn"
                onClick={() => handleButtonClick("Klarna")}
              >
                <img src={klarna} alt="" />
                <span>Klarna</span>
              </button>
            </div>
            <div className="card_wrapper">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Afterpay"
                  id="Afterpay"
                  checked={selectedOption === "Afterpay"}
                />
              </div>
              <button
                className="card_btn"
                onClick={() => handleButtonClick("Afterpay")}
              >
                <img src={afterpay} alt="" />
                <span>Afterpay</span>
              </button>
            </div> */}
          </div>

          <div className="payment_card">
            <p className="mb_20">payment_process_wrapper</p>
            <CardNumberElement
              // options={CARD_OPTIONS}
              className="payment_input"
              options={{
                ...CARD_OPTIONS,
                placeholder: "Enter card number",
              }}
            />
            {/* <input
              type="text"
              className="payment_input"
              placeholder="Card name"
              name="cardName"
              value={formData.cardName}
              onChange={handleInputChange}
            /> */}

            <div className="card_img">
              <img src={v1} alt="card" />
              <img src={v2} alt="card" />
              <img src={v3} alt="card" />
              <img src={v4} alt="card" />
            </div>
          </div>
          {/* Expiration */}
          <div className="row mt-4">
            <div className="col-lg-6">
              {/* <input
                type="text"
                className="payment_input"
                placeholder="Expiration"
                name="expiration"
                value={formData.expiration}
                onChange={handleInputChange}
              /> */}

              <CardExpiryElement
                options={CARD_OPTIONS}
                className="payment_input"
              />
            </div>
            <div className="col-lg-6 mt-lg-0 mt-4">
              <div className="payment_card">
                {/* <input
                  type="text"
                  className="payment_input"
                  placeholder="CVC"
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleInputChange}
                /> */}
                <CardCvcElement
                  options={CARD_OPTIONS}
                  className="payment_input"
                />
                <div className="card_img1">
                  <img src={v4} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-6">
              <div className="country_select">
                <Select
                  onChange={(selectedOption) =>
                    setFormData({
                      ...formData,
                      nationality: selectedOption.value,
                    })
                  }
                  options={options1}
                  value={options1.find(
                    (option) => option.value === nationality
                  )}
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      minHeight: "0px",
                      backgroundColor: "#FAFAFA",
                    }),

                    container: (baseStyles) => ({
                      ...baseStyles,
                      width: "100%",
                    }),

                    valueContainer: (baseStyles) => ({
                      ...baseStyles,
                      padding: "0 5px 0 20px",
                    }),
                    placeholder: (baseStyles) => ({
                      ...baseStyles,
                      color: "#9CA3A9",
                      fontSize: "10px",
                    }),
                    menuList: (baseStyles) => ({
                      ...baseStyles,
                      fontSize: "16px",
                    }),
                    singleValue: (baseStyles) => ({
                      ...baseStyles,
                      fontSize: "16px",
                    }),
                    indicatorsContainer: (baseStyles) => ({
                      ...baseStyles,
                      padding: "0px !important",
                    }),
                    indicatorSeparator: (baseStyles) => ({
                      ...baseStyles,
                      display: "none",
                      margin: "0",
                      width: "0",
                    }),

                    // indicatorsContainer: (baseStyles) =>
                  }}
                  placeholder="Country"
                />
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-4">
              <div className="payment_card">
                <input
                  type="text"
                  className="payment_input"
                  placeholder="ZIP"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  style={{ fontSize: "14px" }}
                />
                {/* <CardPostalCodeElement options={CARD_OPTIONS} /> */}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              onClick={handlePayment}
              className="pay_nowbtn"
              disabled={isLoading || updating || paymentCreating || !stripe}
            >
              {isLoading ? "Loading..." : "Pay Now"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;

const createPaymentIntent = async (amountInCents, currency) => {
  const stripe = Stripe(STRIPE_SK);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: currency,
    });

    return paymentIntent.client_secret;
  } catch (error) {
    console.error("Error on createPayment intent", error);
    throw new Error("Failed to create PaymentIntent");
  }
};
