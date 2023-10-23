import React from 'react'
import './Feature.css'
import FeatureOne from '../../assets/fearure1.png'
import FeatureTwo from '../../assets/fearure2.png'
import FeatureThree from '../../assets/fearure3.png'

const Feature = () => {
    return (
        <section class="feature all_mb">
            <div class="container">
                <div class="featureTop">
                    <div class="row align-items-end mb_60 gy-3">
                        <div class="col-12 col-lg-4">
                            <h2>Some features of spohire</h2>
                        </div>
                        <div class="col-12 col-md-4"></div>
                        <div class="col-12 col-lg-4">
                            <p>I can tell you first hand, ChainGPT is absolutely amazing. They have helped me and my
                                team speed up our working process by 125%. The access to blockchain information was
                                never easier.</p>
                        </div>
                    </div>
                </div>
                <div class="featureBottom">
                    <div class="row gy-3 justify-content-center">
                        <div class="col-12 col-md-6 col-xl-4">
                            <div class="featureBoxStart h-100">
                                <div class="row align-items-center p-0">
                                    <div class="col-6">
                                        <h4 class="mb-1">Confidentiality</h4>
                                        <p>I can tell you first hand, ChainGPT is absolutely amazing. They have helped
                                            me
                                            and my team speed up our working process by 125%. The access to blockchain
                                            information was never easier.</p>
                                    </div>
                                    <div class="col-6">
                                        <img class="img-fluid" src={FeatureOne} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-4">
                            <div class="featureBoxMiddle h-100">
                                <div class="row align-items-center p-0">
                                    <div class="col-6">
                                        <h4 class="mb-1">Stay in Touch</h4>
                                        <p>
                                            I can tell you first hand, ChainGPT is absolutely amazing. They have
                                            helped
                                            me and my team speed up our working process by 125%. The access to
                                            blockchain information was never easier.
                                        </p>
                                    </div>
                                    <div class="col-6">
                                        <img class="img-fluid" src={FeatureTwo} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-4 ">
                            <div class="featureBoxEnd h-100">
                                <div class="row align-items-center p-0">
                                    <div class="col-6">
                                        <h4 class="mb-1">Confidentiality</h4>
                                        <p>I can tell you first hand, ChainGPT is absolutely amazing. They have
                                            helped me
                                            and my team speed up our working process by 125%. The access to
                                            blockchain
                                            information was never easier.</p>
                                    </div>
                                    <div class="col-6">
                                        <img class="img-fluid" src={FeatureThree} alt="img" />
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