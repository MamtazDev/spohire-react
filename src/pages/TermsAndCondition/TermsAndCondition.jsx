import React, { useState } from 'react'
import './TermsAndCondition.css'
import plus from "../../assets/accordion-plus.png";
import minus from "../../assets/accordion-minus.png";
import up from "../../assets/uparrow.png";
import down from "../../assets/downarrow.png";
const TermsAndCondition = () => {
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
        <div className='container'>
            <div className='news_header'>
                <h2>Terms & condition</h2>
            </div>
            <div className='h_line_design' style={{ marginBottom: "68px" }}>
            </div>

            <div className="terms_wrapper">
                <div className="row">
                    <div className="col-lg-5 col-12">
                        <div className='terms_list'>
                            <ul style={{ listStyle: "none" }}>
                                <li className='active'> <span>1</span> Genaral Terms</li>
                                <li> <span>2</span> Restrictions</li>
                                <li> <span>3</span> License</li>
                                <li> <span>4</span> Payment</li>
                                <li> <span>5</span> Return & Refund Policy</li>
                                <li> <span>6</span>Cookies</li>
                            </ul>
                        </div>


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
                    </div>


                    <div className="col-lg-7 col-12">
                        <div className='terms_condition_details'>
                            <h2>Terms and Conditions</h2>
                            <p style={{ marginTop: "24px" }}>Iaculis euismod a euismod dictum sit dictum arcu, neque. Consequat fusce laoreet accumsan, vestibulum. Turpis sed eu tortor massa pellentesque lectus tortor viverra sed. Nulla dignissim quis dolor nunc id bibendum vel. Dignissim sit sed viverra rhoncus pulvinar blandit massa. Eu aenean eu est non nibh suscipit pretium, pellentesque. Dolor vitae, amet, ornare suspendisse.</p>
                            <p>Sit ac varius libero egestas ullamcorper lacinia et viverra auctor. Semper lobortis vitae vitae in malesuada molestie. Ante elementum massa pretium, sit arcu. Porta blandit tincidunt urna magna.</p>

                            <p style={{ marginTop: "20px" }}>Orci, et ipsum gravida eget risus. Nunc velit quam pellentesque viverra. Feugiat mi purus ornare vitae aliquet cras tellus velit sociis. Ut augue tellus sed at. Duis morbi lorem nibh amet, mus urna, purus velit. Mi condimentum laoreet sed iaculis nunc vestibulum nunc diam tortor. Pulvinar orci, non lectus nec duis. Adipiscing vitae augue sed sapien purus.</p>
                            <p>Porttitor at eu mi, non enim nunc diam. Vel nisl cursus nam risus morbi ac venenatis faucibus ac. Enim ullamcorper nullam in aliquam, curabitur dapibus risus interdum cursus. Arcu et quis egestas scelerisque tempor, mauris. Dictum amet odio pellentesque dis euismod diam arcu, pellentesque. Leo sem pellentesque pretium volutpat quam consequat. Eu nec consectetur mus consectetur eget. Vitae eu ultrices adipiscing commodo. Interdum vivamus enim ut diam nisl.</p>
                            <p style={{ marginTop: "20px" }}>Lacus dapibus urna blandit turpis pulvinar adipiscing eu aliquam. Lectus scelerisque arcu aliquet feugiat velit ut nunc massa in. Sed sapien ut molestie ipsum. Sed tristique ullamcorper ornare vitae accumsan malesuada ac facilisis. Posuere lorem duis adipiscing cras nisl.</p>
                            <p style={{ marginTop: "20px", marginBottom: "72px" }}>Eget gravida orci congue quis etiam condimentum mattis. Nibh morbi aliquam et, lectus rhoncus. Nullam lacus, urna quis tempus varius. Amet, venenatis, scelerisque dignissim sed. Tellus fermentum.</p>


                            <h2>Est sem adipiscing commodo cursus.</h2>
                            <p style={{ marginTop: "20px", marginBottom: "72px" }}>Sagittis eleifend tincidunt semper eget venenatis nulla viverra. Pharetra, nascetur sit turpis feugiat vestibulum semper orci. Lacus pretium in aliquet tristique. Eget mollis nam eu, sem mattis suspendisse ac. Dictum ultrices dolor suspendisse donec elit integer.</p>


                            <h2>Tincidunt.</h2>
                            <p style={{ marginTop: "20px", marginBottom: "72px" }}>Amet, elit fames quis consequat. Vel, mattis tellus in turpis elementum tellus id vitae. Nibh quis ut bibendum cursus amet, vitae metus scelerisque quam. Nibh bibendum augue urna, sed nulla ultrices molestie aenean id. Consequat tortor vestibulum feugiat vulputate. Ipsum mattis morbi.</p>

                            <h2>Odio.</h2>
                            <p style={{ marginTop: "20px", marginBottom: "72px" }}>Tellus consectetur sed et cras nec gravida sit. Ut euismod egestas amet vel viverra lectus id id arcu. Ultrices in magna id tincidunt luctus amet. Porttitor pulvinar integer justo, eget amet, vitae aliquam aliquam. Mi tellus in nisi, augue nibh faucibus adipiscing vitae orci. Risus urna consequat in pellentesque nec imperdiet fringilla. Convallis faucibus egestas urna enim, urna vivamus et. In arcu vitae sed massa. Sed amet eu, neque non urna a amet id libero. Ut quisque sed pretium sodales in felis dictumst elit viverra. Sed in quisque risus orci quis urna. Enim ullamcorper orci amet arcu turpis. </p>






                        </div>


                    </div>


                </div>

            </div>


        </div>
    )
}

export default TermsAndCondition