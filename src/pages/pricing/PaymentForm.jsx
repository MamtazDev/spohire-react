/* eslint-disable no-unused-vars */
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
    
    const [selectedOption, setSelectedOption] = useState('card');

    const handleButtonClick = (id) => {
        setSelectedOption(id);
    };
    console.log(selectedOption)

    const [formData, setFormData] = useState({
        selectedOption: null,
        cardName: '',
        expiration: '',
        cvc: '',
        nationality: '',
        zip: '',
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

    const handleButtonClick1 = () => {
        // Log the data to the console (you can replace this with your desired action)
        console.log(formData);

        // Add logic to send the form data to your backend or perform any other necessary action
    };
    return (
        <>
            <div className="container mb-2 pb-5">
                <h2 className="payment_title">Payment <span>Process</span></h2>
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
                                    checked={selectedOption === 'card'}
                                />
                            </div>
                            <button className="card_btn" onClick={() => handleButtonClick('card')}> <img src={credit} alt="credit card" /> <span>Card</span></button>
                        </div>
                        <div className="card_wrapper">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="Klarna"
                                    id="Klarna"
                                    checked={selectedOption === 'Klarna'}
                                />
                            </div>
                            <button className="card_btn" onClick={() => handleButtonClick('Klarna')}>
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
                                    checked={selectedOption === 'Afterpay'}
                                />
                            </div>
                            <button className="card_btn" onClick={() => handleButtonClick('Afterpay')}>
                                <img src={afterpay} alt="" />
                                <span>Afterpay</span>
                            </button>
                        </div>
                    </div>

                    <div className='payment_card'>
                        <p className='mb_20'>payment_process_wrapper</p>
                        <input
                            type="text"
                            className="payment_input"
                            placeholder="Card name"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleInputChange}
                        />


                        <div className='card_img'>
                            <img src={v1} alt="card" />
                            <img src={v2} alt="card" />
                            <img src={v3} alt="card" />
                            <img src={v4} alt="card" />
                        </div>
                    </div>
                    {/* Expiration */}
                    <div className="row mt-4">
                        <div className="col-lg-6">
                            <input
                                type="text"
                                className="payment_input"
                                placeholder="Expiration"
                                name="expiration"
                                value={formData.expiration}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-4">
                            <div className="payment_card">
                                <input
                                    type="text"
                                    className="payment_input"
                                    placeholder="CVC"
                                    name="cvc"
                                    value={formData.cvc}
                                    onChange={handleInputChange}
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
                                />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button onClick={handleButtonClick1} className='pay_nowbtn'>Pay Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentForm; 