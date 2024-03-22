import React, { useState } from 'react'
import './TermsAndCondition.css'

import TermsDetails from './TermsDetails';
import Faq from './Faq';
const TermsAndCondition = () => {

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

                        {/* <Faq /> */}
                    </div>


                    <div className="col-lg-7 col-12">
                        <TermsDetails />
                    </div>


                </div>

            </div>


        </div>
    )
}

export default TermsAndCondition