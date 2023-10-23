import React, { useState } from "react";
import "./Accordion.css";
import plus from "../../assets/accordion-plus.png";
import minus from "../../assets/accordion-minus.png";

const Accordion = () => {
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
    <div className="accordion">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div>
          {accoprdionData.map((data, index) => (
            <div key={index}>
              <div
                onClick={() => setIsOpen(index === isOpen ? null : index)}
                className="d-flex align-items-center justify-content-between"
              >
                <p className="question">{data.ques}</p>
                <img src={isOpen === index ? minus : plus} alt="" />
              </div>
              {isOpen === index && <p className="answer">{data.ans}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
