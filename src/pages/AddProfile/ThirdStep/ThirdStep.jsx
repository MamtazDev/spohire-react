import React from "react";
import BestOfferTwo from "./BestOfferTwo.jsx";
import HowLong from "./HowLong.jsx";

const ThirdStep = ({setStep}) => {

    return (
        <div className="add_payment" style={{paddingTop: "60px", paddingBottom: "60px"}}>
            <div className="container">
                <div className="main_payment_wrapper">
                    <div className="pb-5">
                        <h3 className={"text_color_36 fs-1 fw-bold text-center"}>Add Payment</h3>
                    </div>
                    <p className={"bestOffer_title mb-5"}>
                        Choose the best offer for you
                    </p>
                    <BestOfferTwo/>
                    <HowLong/>
                    <div className="d-flex justify-content-end">
                        <button
                            className="next_btn text-light"
                            type="button"
                            onClick={() => setStep((prev) => prev + 1)}
                        >
                            Next
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ThirdStep;
