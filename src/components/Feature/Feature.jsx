import React from 'react'
import './Feature.css'
import FeatureOne from '../../assets/fearure1.png'
import FeatureTwo from '../../assets/fearure2.png'
import FeatureThree from '../../assets/fearure3.png'

const Feature = () => {
    return (
        <section className="feature all_mb">
            <div className="container">
                <div className="featureTop">
                    <div className="row align-items-end mb_60 gy-3">
                        <div className="col-12 col-lg-4">
                            <h2>Some features of spohire</h2>
                        </div>
                        <div className="col-12 col-md-4"></div>
                        <div className="col-12 col-lg-4">
                            <p>I can tell you first hand, ChainGPT is absolutely amazing. They have helped me and my
                                team speed up our working process by 125%. The access to blockchain information was
                                never easier.</p>
                        </div>
                    </div>
                </div>
                <div className="featureBottom">
                    <div className="row gy-3 justify-content-center">
                        <div className="col-12 col-md-6 col-xl-4">
                            <div className="featureBoxStart h-100">
                                <div className="row align-items-center p-0">
                                    <div className="col-6">
                                        <h4 className="mb-1">Confidentiality</h4>
                                        <p>I can tell you first hand, ChainGPT is absolutely amazing. They have helped
                                            me
                                            and my team speed up our working process by 125%. The access to blockchain
                                            information was never easier.</p>
                                    </div>
                                    <div className="col-6">
                                        <img className="img-fluid" src={FeatureOne} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <div className="featureBoxMiddle h-100">
                                <div className="row align-items-center p-0">
                                    <div className="col-6">
                                        <h4 className="mb-1">Stay in Touch</h4>
                                        <p>
                                            I can tell you first hand, ChainGPT is absolutely amazing. They have
                                            helped
                                            me and my team speed up our working process by 125%. The access to
                                            blockchain information was never easier.
                                        </p>
                                    </div>
                                    <div className="col-6">
                                        <img className="img-fluid" src={FeatureTwo} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 ">
                            <div className="featureBoxEnd h-100">
                                <div className="row align-items-center p-0">
                                    <div className="col-6">
                                        <h4 className="mb-1">Confidentiality</h4>
                                        <p>I can tell you first hand, ChainGPT is absolutely amazing. They have
                                            helped me
                                            and my team speed up our working process by 125%. The access to
                                            blockchain
                                            information was never easier.</p>
                                    </div>
                                    <div className="col-6">
                                        <img className="img-fluid" src={FeatureThree} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature