import React from 'react'
import './WhatPeopleSay.css'
import Start from '../../assets/star.png'
import ProfoleImg from '../../assets/profoleimg.png'
import GoogleImg from '../../assets/google.png'
import SliderButton from '../../assets/sliderbutton.png'


const WhatPeopleSay = () => {


    return (
        <section>
            <div class="container say_container all_mb">
                <div>
                    <div class="sayHeader">
                        <p class="mb-3">What people say</p>
                        <span class="d-block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit soldin.
                        </span>
                    </div>

                    <div class="row gy-3">


                        <div class="col-12 col-md-6">
                            <div class="sayInnerBox">
                                <div class="d-flex justify-content-start align-items-center gap-3 mb-3">
                                    <img class="profoleImg" src={ProfoleImg} alt="Profile" />
                                    <div>
                                        <p>Joe Elia</p>
                                        <span>User Interface Design</span>
                                    </div>
                                </div>
                                <h5 class="mb-5">
                                    “In urna, non nisl tincidunt gravida elementum turpis. Risus, ac ultrices tincie
                                    quam
                                    arcu odio volutpat.”
                                </h5>
                                <div
                                    class="d-flex flex-column flex-md-row justify-content-start align-items-center gap-3">
                                    <img src={GoogleImg} alt="Logo" />
                                    <div
                                        class="g_review d-flex flex-column flex-lg-row justify-content-start align-items-start align-items-lg-center gap-1">
                                        <span>A 5.00</span>
                                        <div class="d-flex align-items-center gap-1">
                                            <img src={Start} alt="star" />
                                            <img src={Start} alt="star" />
                                            <img src={Start} alt="star" />
                                            <img src={Start} alt="star" />
                                            <img src={Start} alt="star" />
                                        </div>
                                        <span>previews from Elia Joe</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6">
                            <div class="sayInnerBox sayRightbox" style={{ border: " 40px solid #0177FB" }}>
                                <button>
                                    <img src={SliderButton} alt="Slider" />
                                </button>
                                <div class="d-flex justify-content-start align-items-center gap-3 mb-3">
                                    <img class="profoleImg" src="./assets/profoleimg.png" alt="Profile" />
                                    <div>
                                        <p>Joe Elia</p>
                                        <span>User Interface Design</span>
                                    </div>
                                </div>
                                <h5 class="mb-5">
                                    “In urna, non nisl tincidunt gravida elementum turpis. Risus, ac ultrices tincie
                                    quam
                                    arcu odio volutpat.”
                                </h5>
                                <div

                                    class="d-flex flex-column flex-md-row justify-content-start align-items-center gap-3">
                                    <img src={GoogleImg} alt="Logo" />
                                    <div
                                        class="g_review d-flex flex-column flex-lg-row justify-content-start align-items-start align-items-lg-center gap-1">
                                        <span>A 5.00</span>
                                        <div class="d-flex align-items-center gap-1">
                                            <img src={Start} alt="star" />
                                            <img src={Start} alt="star" />
                                            <img src={Start} alt="star" />
                                            <img src={Start} alt="star" />
                                            <img src={Start} alt="star" />
                                        </div>
                                        <span>previews from Elia Joe</span>
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

export default WhatPeopleSay