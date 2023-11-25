import credit from '../../assets/creditcard.png'
import klarna from '../../assets/klarna.png'
import afterpay from '../../assets/afterpay.png'
import v1 from '../../assets/v1.png'
import v2 from '../../assets/v2.png'
import v3 from '../../assets/v3.png'
import v4 from '../../assets/v4.png'
import Select from "react-select";
import bdIcon from "../../assets/bd.svg";
import { useState } from 'react'

const options1 = [
    {
        value: "Bangladesh",
        label: "Bangladesh",
        flagImg: bdIcon,
    },
    {
        value: "India",
        label: "India",
        flagImg: bdIcon,
    },
    {
        value: "Switzerland",
        label: "Switzerland",
        flagImg: bdIcon,
    },
    {
        value: "United Kingdom",
        label: "United Kingdom",
        flagImg: bdIcon,
    },
    {
        value: "Ireland",
        label: "Ireland",
        flagImg: bdIcon,
    },
    {
        value: "Italy",
        label: "Italy",
        flagImg: bdIcon,
    },
    {
        value: "Netherland",
        label: "Netherland",
        flagImg: bdIcon,
    },
];
const PaymentForm = () => {
    const [nationality, setNationality] = useState("");

    return (
        <>
            <div className="container">
                <h2 className="payment_title">Payment <span>Process</span></h2>


                <div className="payment_process_wrapper">
                    <p>Select payment option</p>

                    <div className="all_payments_system">
                        <div className="card_wrapper">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                            </div>
                            <button className="card_btn"> <img src={credit} alt="credit card" /> <span>Card</span></button>
                        </div>
                        <div className="card_wrapper">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div>
                            <button className="card_btn"> <img src={klarna} alt="" /> <span>Klarna</span></button>
                        </div>
                        <div className="card_wrapper">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div>
                            <button className="card_btn"> <img src={afterpay} alt="" /> <span>Afterpay</span></button>
                        </div>
                    </div>

                    <div className='payment_card'>
                        <p className='mb_20'>payment_process_wrapper</p>
                        <input
                            type="text"
                            className="payment_input"
                            placeholder="Card name"
                        />
                        <div className='card_img'>
                            <img src={v1} alt="" />
                            <img src={v2} alt="" />
                            <img src={v3} alt="" />
                            <img src={v4} alt="" />
                        </div>
                    </div>
                    {/* Expiration */}
                    <div className="row mt-4">
                        <div className="col-lg-6">
                            <input
                                type="text"
                                className="payment_input"
                                placeholder="Expiration"
                            />
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-4">
                            <div className="payment_card">
                                <input
                                    type="text"
                                    className="payment_input"
                                    placeholder="CVC"
                                />
                                <div className='card_img1'>
                                    <img src={v4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-6">

                            <div className="country_select">
                                <Select
                                    options={options1}
                                    value={options1.find(
                                        (option) => option.value === nationality
                                    )}
                                    onChange={(selectedOption) =>
                                        setNationality(selectedOption.value)
                                    }

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
                                            padding: "0 5px",
                                        }),
                                        placeholder: (baseStyles) => ({
                                            ...baseStyles,
                                            color: "#9CA3A9",
                                            fontSize: "10px",
                                        }),
                                        menuList: (baseStyles) => ({
                                            ...baseStyles,
                                            fontSize: "10px",
                                        }),
                                        singleValue: (baseStyles) => ({
                                            ...baseStyles,
                                            fontSize: "10px",
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
                                />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='pay_nowbtn'>Pay Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentForm; 