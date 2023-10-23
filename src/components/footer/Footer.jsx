import React from 'react'
import FooterLogo from '../../assets/footerLogo.png'
import Ig from '../../assets/ig.png'
import Fb from '../../assets/Fb.png'
import LinkeDin from '../../assets/linkedin.png'
import Twitter from '../../assets/twitter.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="row gy-5">
                    <div class="col-12 col-xl-3 text-center">
                        <img class="mx-auto" src={FooterLogo} alt="LOGO" />
                    </div>
                    <div class="col-12 col-lg-3 col-xl-3">
                        <ul class="text-center text-lg-start">
                            <li>
                                Info
                            </li>
                            <li>
                                <a href="#">How it works</a>
                            </li>
                            <li>
                                <a href="#"> About us</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-12 col-lg-3 col-xl-2">
                        <ul class="text-center text-lg-start">
                            <li>
                                Contact
                            </li>
                            <li>
                                <a href="#">
                                    spohire@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    +48 565 25 654
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    +12 485 54684
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-12 col-lg-6 col-xl-4">
                        <div></div>
                        <div class="followBox d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                            <p>Follow us</p>
                            <a href="#">
                                <img src={Ig} alt="Instagram" />
                            </a>
                            <a href="#">
                                <img src={Fb} alt="FaceBook" />
                            </a>
                            <a href="#">
                                <img src={LinkeDin} alt="LinkedIn" />
                            </a>
                            <a href="#">
                                <img src={Twitter} alt="Twitter" />
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="fooBottom d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3 gap-lg-5">
                    <a href="#">
                        Privacy policy
                    </a>
                    <a href="#">
                        Terms & condition
                    </a>
                    <a href="#">
                        AMSL All Right Reserved
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer