import React from 'react'
import './Trusted.css'
import TrustCompanyOne from '../../assets/trustCompany1.png'
import TrustCompanyTwo from '../../assets/trustCompany2.png'
import TrustCompanyThree from '../../assets/trustCompany3.png'
import TrustCompanyFour from '../../assets/trustCompany4.png'
import TrustCompanyFive from '../../assets/trustCompany5.png'

const Trusted = () => {
    return (
        <section>
            <div className="container say_container all_mb">
                <p className="trustContent mb-5">Trusted by Greatest Companies</p>
                <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-3">
                    <img className="img-fluid" src={TrustCompanyOne} alt="Logo" />
                    <img className="img-fluid" src={TrustCompanyTwo} alt="Logo" />
                    <img className="img-fluid" src={TrustCompanyThree} alt="Logo" />
                    <img className="img-fluid" src={TrustCompanyFour} alt="Logo" />
                    <img className="img-fluid" src={TrustCompanyFive} alt="Logo" />
                </div>
            </div>
        </section>
    )
}

export default Trusted