import React, { useState } from 'react'
import plus from "../../assets/accordion-plus.png";
import minus from "../../assets/accordion-minus.png";
import up from "../../assets/uparrow.png";
import down from "../../assets/downarrow.png";
const Faq = () => {
    const [isOpen, setIsOpen] = useState(null);
    const accoprdionData = [
        {
            ques: "What Are The Hours of Operation?",
            ans: "Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.",
        },
        {
            ques: "What Are The Hours of Operation?",
            ans: "Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.",
        },
        {
            ques: "What Are The Hours of Operation?",
            ans: "Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.",
        },
        {
            ques: "How do I contact your Customer Care Team?",
            ans: "Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.",
        },
        {
            ques: "What Are The Hours of Operation?",
            ans: "Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.",
        },
        {
            ques: "What is the minimum time required to make a reservation?",
            ans: "Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.",
        },
        {
            ques: "When do I receive my booking confirmation?",
            ans: "Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.",
        }

    ];


    return (
        <>
            <div className="faq_list">
                <div className="accordion">
                    <div className="container">
                        <div className="">
                            <p className='terms_faq_title'>Frequently Asked Questions</p>
                        </div>
                        <div>
                            {accoprdionData.map((data, index) => (
                                <div key={index} className="accordion_items mb-4 m-auto">
                                    <div
                                        onClick={() => setIsOpen(index === isOpen ? null : index)}
                                        className="d-flex align-items-center justify-content-between"
                                    >
                                        <p style={{ fontSize: "20px" }} className="question text_color_19 fw-medium">
                                            {data.ques}
                                        </p>
                                        <img
                                            className="deshtop_icon"
                                            src={isOpen === index ? minus : plus}
                                            alt="icon"
                                        />
                                        <div className="mobile_icons">
                                            <img
                                                className="mobile_icon"
                                                src={isOpen === index ? up : down}
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                    {isOpen === index && (
                                        <p className="answer text_color_19_7 fs-5 fw-medium">
                                            {data.ans}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq