import React, { useState } from 'react'
import './FaqAccordion.css'
import plus from "../../assets/accordion-plus.png";
import minus from "../../assets/accordion-minus.png";


const FaqAccordion = () => {
    const [isOpen, setIsOpen] = useState(null);
    const accoprdionData = [
        {
            ques: "What Are The Hours of Operation?",
            ans: "Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.",
        },
        {
            ques: "How do I contact your Customer Care Team?",
            ans: "Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.",
        },
        {
            ques: "How can I book my Ride?",
            ans: "Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.",
        },
        {
            ques: "What is the minimum time required to make a reservation?",
            ans: "Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.",
        },
        {
            ques: "When do I receive my booking confirmation?",
            ans: "Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.",
        },
        {
            ques: "When do I receive my booking confirmation?",
            ans: "Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.",
        },
        {
            ques: "Where will my chauffeur meet me at airports?",
            ans: "Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.",
        },
        {
            ques: "Who do we contact for the airport pickup?",
            ans: "Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.",
        },
        {
            ques: "Why do I need to enter my flight number?",
            ans: "Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.",
        },
        {
            ques: "What if my flight or train is delayed?",
            ans: "Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.",
        },
        {
            ques: "What vehicles do you offer?",
            ans: "Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.",
        },
        {
            ques: "What vehicles do you offer?",
            ans: "Through a selection of ingenious residential projects –in which materials are immersed into a transformation, maintenance, or renovation process–, the article opens a discussion on how good architecture is durable and reusable.",
        },
    ];
    return (
        <div className="accordion section_padding">
            <div className="container">
                <div className="section_heading text-center">
                    <h2 className=" fs_62 text_color_19 font-bold">Frequently Asked Questions</h2>
                </div>
                <div>
                    {accoprdionData.map((data, index) => (
                        <div key={index} className="accordion_items mb-4 m-auto">
                            <div
                                onClick={() => setIsOpen(index === isOpen ? null : index)}
                                className="d-flex align-items-center justify-content-between"
                            >
                                <p className="question text_color_19 fs-4 fw-medium">{data.ques}</p>
                                <img src={isOpen === index ? minus : plus} alt="icon" />
                            </div>
                            {isOpen === index && <p className="answer text_color_19_7 fs-5 fw-medium">{data.ans}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FaqAccordion