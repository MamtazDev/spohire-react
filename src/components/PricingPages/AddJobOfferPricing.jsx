
import React, { useState } from "react";

const AddJobOfferPricing = () => {
    const [activeCard, setActiveCard] = useState(1);
    const [selectedPrice, setSelectedPrice] = useState(15);

    const handleCardClick = (index, price) => {
        setActiveCard(index);
        setSelectedPrice(price);
    };

    return (
        <div className='addjoboffer_pricing_wrapper'>
            <h2>
                add job offer <br />
                period of active job offer
            </h2>
            <div className='d-flex flex-lg-row flex-column justify-content-center' style={{ gap: "30px", marginBottom: "128px" }}>
                <div
                    className={`monthly_cards ${activeCard === 0 ? "active" : ""}`}
                    onClick={() => handleCardClick(0, 10)}
                >
                    <div>
                        <h3>$10 <span>/ 1 month</span></h3>
                    </div>
                </div>
                <div
                    className={`monthly_cards ${activeCard === 1 ? "active" : ""}`}
                    onClick={() => handleCardClick(1, 15)}
                >
                    <div>
                        <h3>$15 <span>/ 1 month</span></h3>
                    </div>
                </div>
                <div
                    className={`monthly_cards ${activeCard === 2 ? "active" : ""}`}
                    onClick={() => handleCardClick(2, 20)}
                >
                    <div>
                        <h3>$20 <span>/ 1 month</span></h3>
                    </div>
                </div>
            </div>

            {/* Display selected price */}
            <div className="d-flex justify-content-center">
                <div
                    className={`monthly_cards active`}
                    style={{ maxWidth: "723px", width: "100%", justifyContent: "center" }}
                >
                    <div>
                        <h3>${selectedPrice}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddJobOfferPricing;
