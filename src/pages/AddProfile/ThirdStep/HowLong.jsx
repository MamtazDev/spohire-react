import React, {useState} from 'react';
import {loadStripe} from "@stripe/stripe-js";
import {STRIPE_PK} from "../../../config/config.js";


const HowLong = () => {
    const stripePromise = loadStripe(STRIPE_PK);
    const [selectedSubscription, setSelectedSubscription] = useState(1);
    const [total, setTotal] = useState(25);
    const subscriptions = [
        {duration: '1 months', price: 0},
        {duration: '2 months', price: 10},
        {duration: '3 months', price: 30}
    ]

    const handleSubscriptionClick = (index) => {
        setSelectedSubscription(index);
        setTotal(subscriptions[index].price)
    }
    return (<>
        <div className="text-start fs-3 fw-bold">
            How long will the add be active?
        </div>

        <div className={"mb-5"}>
            <div className={"subscription_wrapper d-flex flex-wrap justify-content-between mb-4"}>
                {subscriptions.map((sub, index) => (
                    <div
                        key={index}
                        className={"subs_item pointer mb-4 mb-lg-0 d-flex flex-column align-items-center" + (selectedSubscription === index ? " bg-black" : "")}
                        onClick={() => handleSubscriptionClick(index)}
                    >
                        <h4 className={"fs-1 fw-bold " + (selectedSubscription === index ? "text-white" : "text-black")}>
                            {sub.duration}
                        </h4>
                        <p className={"fs-4 fw-normal mb-0" + (selectedSubscription === index ? " text-white" : "")}>
                            +${sub.price}
                        </p>
                    </div>
                ))}
            </div>
            <div className={"selected_subs"}>
                <p className={"fs-3 text-black fw-bold text-start text-lg-end mb-0"}>
                    Total : {total}$
                </p>
            </div>
        </div>
        {/*<Elements stripe={stripePromise}>*/}
        {/*    <PaymentFormTwo/>*/}
        {/*</Elements>*/}
    </>);
};

export default HowLong;