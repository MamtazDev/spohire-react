import './Feature.css'
import FeatureOne from '../../assets/fearure1.png'
import FeatureTwo from '../../assets/fearure2.png'
import FeatureThree from '../../assets/fearure3.png'
import featureBg1 from '../../assets/fearurebg1.png'
import featureBg2 from '../../assets/fearurebg2.png'
import featureBg3 from '../../assets/fearurebg3.png'


const Feature = () => {
    return (
        <section className="feature all_mb">
            <div className="container" >

                <div className="featureTop">
                    <div className="row mb_60 gy-3">
                        <div className="col-12 col-lg-4">
                            <h2>Some features of spohire</h2>
                        </div>
                        <div className="col-12 col-md-4 feature_mobile"></div>
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
                            <div className="featureBoxInner h-100" style={{ background: `url(${featureBg1})` }}>
                                <div className="row align-items-end p-0 h-100 ">
                                    <div className="col-6 p-0">
                                        <h4 className="mb-1">Confidentiality</h4>
                                        <p>I can tell you first hand, ChainGPT is absolutely amazing. They have helped
                                            me
                                            and my team speed up our working process by 125%. The access to blockchain
                                            information was never easier.</p>
                                    </div>
                                    <div className="col-6 feature_card p-0" >
                                        <img className="img-fluid w-100" src={FeatureOne} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <div className="featureBoxInner h-100" style={{ background: `url(${featureBg2})` }}>
                                <div className="row align-items-end p-0 h-100">
                                    <div className="col-6 p-0">
                                        <h4 className="mb-1">Stay in Touch</h4>
                                        <p>
                                            I can tell you first hand, ChainGPT is absolutely amazing. They have
                                            helped
                                            me and my team speed up our working process by 125%. The access to
                                            blockchain information was never easier.
                                        </p>
                                    </div>
                                    <div className="col-6 feature_card p-0">
                                        <img className="img-fluid w-100" src={FeatureTwo} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 ">
                            <div className="featureBoxInner h-100" style={{ background: `url(${featureBg3})` }}>
                                <div className="row align-items-end p-0 h-100">
                                    <div className="col-6">
                                        <h4 className="mb-1">Confidentiality</h4>
                                        <p>I can tell you first hand, ChainGPT is absolutely amazing. They have
                                            helped me
                                            and my team speed up our working process by 125%. The access to
                                            blockchain
                                            information was never easier.</p>
                                    </div>
                                    <div className="col-6 feature_card p-0">
                                        <img className="img-fluid w-100" src={FeatureThree} alt="img" />
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