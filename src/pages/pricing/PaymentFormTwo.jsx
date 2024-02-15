/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import credit from "../../assets/creditcard.png";
import v1 from "../../assets/v1.png";
import v2 from "../../assets/v2.png";
import v3 from "../../assets/v3.png";
import v4 from "../../assets/v4.png";
import paypal from "../../assets/paypal.svg"
import {useEffect, useState} from "react";
import Stripe from "stripe";
import {
    CardCvcElement, CardExpiryElement, CardNumberElement, useStripe, useElements,
} from "@stripe/react-stripe-js";
import {STRIPE_SK} from "../../config/config";
import {useSelector} from "react-redux";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import {
    useCreatePaymentMutation, useUpdatePaymentStatusMutation,
} from "../../features/payment/paymentApi";
import axios from "axios";

const PaymentFormTwo = () => {
    const stripe = useStripe();
    const elements = useElements();
    const CARD_OPTIONS = {
        iconStyle: "solid", style: {
            base: {
                color: "#000", fontSize: "16px",
            }, fontWeight: 400, width: "100%",

            invalid: {
                iconColor: "#ffc7ee", color: "#f00101",
            },
        },
    };
    const [selectedOption, setSelectedOption] = useState("card");

    const {packageInfo} = useSelector((state) => state.payment);
    const {user} = useSelector((state) => state.auth);
    const [isLoading, setIsLoading] = useState(false);

    const [updatePaymentStatus, {isLoading: updating}] = useUpdatePaymentStatusMutation();

    const [createPayment, {isLoading: paymentCreating}] = useCreatePaymentMutation();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nationality: "", zip: "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]: value,
        });
    };

    const handlePayment = async () => {
        setIsLoading(true);
        if (!stripe) {
            setIsLoading(false);
            return;
        }

        try {
            const clientSecret = await createPaymentIntent(packageInfo?.price * 100, "usd");

            const cardElement = elements.getElement(CardNumberElement);

            const {error, paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    type: "card", card: cardElement, billing_details: {
                        name: `${user?.first_name + " " + user?.last_name}`, address: {
                            country: formData?.nationality, postal_code: formData?.zip,
                        },
                    },
                },
            });

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
                // eslint-disable-next-line no-unused-vars
                const paymentRes = await updatePaymentStatus({
                    userId: user?._id, data: {isSubsCribed: true, subscriptionName: packageInfo?.name},
                });
                // createing payment
                const createPaymentData = {
                    transactionId: paymentIntent?.id,
                    userId: user?._id,
                    planName: packageInfo?.name,
                    amount: packageInfo?.price,
                };
                const createPaymentRes = await createPayment(createPaymentData);
                // console.log(createPaymentRes, "kfjalkfred");

                // navigation
                navigate("/dashboard");
            }
        } catch (error) {
            setIsLoading(false);
            Swal.fire({
                position: "center", icon: "error", title: `${error?.message}`, showConfirmButton: false, timer: 1500,
            });
        }
    };
    const [countryNames, setCountryNames] = useState([]);

    useEffect(() => {
        axios
            .get("https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json")
            .then(function (response) {
                setCountryNames(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (<>
        <div className="container mb-2 pb-5">
            <div className="payment_process_wrapper">
                <p className={"mb-0 text-start"}>Select payment option</p>
                <div className="all_payments_system mb-4">
                    <div className="card_wrapper">
                        <div className={"card_item d-flex gap-2 align-items-center"}>
                            <div className="form-check-two">
                                <input
                                    className=""
                                    type="radio"
                                    name="card"
                                    id="card"
                                    checked={selectedOption === "card"}
                                />
                            </div>
                            <button
                                className="card_btn"
                                onClick={() => setSelectedOption("card")}
                            >
                                <img className={"mt-0"} src={credit} alt="credit card"/> <span
                                className={"text-black"}>Card</span>
                            </button>
                        </div>

                        <div className={"card_item d-flex gap-2 align-items-center"}>
                            <div className="form-check">
                                <input
                                    className=""
                                    type="radio"
                                    name="card"
                                    id="card"
                                    checked={selectedOption === "paypal"}
                                />
                            </div>
                            <button
                                className="card_btn"
                                onClick={() => setSelectedOption("paypal")}
                            >
                                <img className={"mt-0"} src={paypal} alt="credit card"/> <span
                                className={"text-black"}>Pay pal</span>
                            </button>
                        </div>
                    </div>

                </div>

                <div className="payment_card">
                    <p className="text-start mb-4">Strengths Advantages</p>
                    <CardNumberElement
                        className="payment_input"
                        options={{
                            ...CARD_OPTIONS, placeholder: "Enter card number",
                        }}
                    />

                    <div className="card_img">
                        <img src={v1} alt="card"/>
                        <img src={v2} alt="card"/>
                        <img src={v3} alt="card"/>
                        <img src={v4} alt="card"/>
                    </div>
                </div>
                {/* Expiration */}
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <CardExpiryElement
                            options={CARD_OPTIONS}
                            className="payment_input"
                        />
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-4">
                        <div className="payment_card">
                            <CardCvcElement
                                options={CARD_OPTIONS}
                                className="payment_input"
                            />
                            <div className="card_img1">
                                <img src={v4} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-6">
                        <div className="">
                            <div className="payment_country_select">
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    onChange={handleInputChange}
                                    name="nationality"
                                >
                                    <option disabled selected>
                                        {" "}
                                        Select country
                                    </option>
                                    {countryNames.map((name, index) => (<option value={name.code} key={index}>
                                        {name.name}
                                    </option>))}
                                </select>
                            </div>
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
                                style={{fontSize: "14px"}}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="d-flex justify-content-center">
            <button
                onClick={handlePayment}
                className="pay_nowbtn_two mt-0"
                disabled={isLoading || updating || paymentCreating || !stripe}
            >
                {isLoading ? (<>
                    <div
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    {" "}
                    Loading...
                </>) : ("Pay Now")}
            </button>
        </div>
    </>);
};

export default PaymentFormTwo;

const createPaymentIntent = async (amountInCents, currency) => {
    const stripe = Stripe(STRIPE_SK);
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amountInCents, currency: currency,
        });

        return paymentIntent.client_secret;
    } catch (error) {
        console.error("Error on createPayment intent", error);
        throw new Error("Failed to create PaymentIntent");
    }
};
