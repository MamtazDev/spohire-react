import React from 'react'
import './ViewDetails.css'

import profileImage from '../../../assets/profile_jobOffer.png'
import messageImage from '../../../assets/message.png'
import twitterIcon from '../../../assets/tw_jobOffer.png'
import instagramIcon from '../../../assets/ig_jobOffer.png'
import facebookIcon from '../../../assets/fb_JobOffer.png'
import youtubeIcon from '../../../assets/youtube.png'
import sliderOne from '../../../assets/slader1.png'
import sliderTwo from '../../../assets/slider2.png'

const ViewDetails = () => {
    return (
        <div className='View_details'>
            {/* <!-- Personal Info Start --> */}
            <div class="job_offer">
                <div class="row">
                    <div class="col-12 col-lg-4 ">
                        <div class=" text-center text-lg-end">
                            <img class="img-fluid" src={profileImage} alt="Profile" />
                        </div>
                    </div>
                    <div class="col-12 col-lg-8">
                        <p class="text_color_36 f_sfPro fs_40 mb-2">Jhon Kowalski</p>
                        <span class="d-block f_sfPro text_color_cb fs_28 mb-4">Basketball </span>
                        <div class="personalInfo">
                            <p class="f_sfPro text_color_36 fs_18">Personal Information</p>
                            <button class="message">
                                <img class="img-fluid" src={messageImage} alt="Message" />
                            </button>
                            <div class="row mb_40">
                                <div class="col-12 col-md-4">
                                    <div class="d-flex flex-column align-items-start gap-3">
                                        <div>
                                            <span class="f_sfPro text_color_cb fs_15">Name</span>
                                            <p class="f_sfPro text_color_36 fs_17">Jhon Kawalski</p>
                                        </div>

                                        <div>
                                            <span
                                                class="f_sfPro text_color_cb fs_15">Nationality-Passport</span>
                                            <p class="f_sfPro text_color_36 fs_17">USA</p>
                                        </div>

                                        <div>
                                            <span class="f_sfPro text_color_cb fs_15">Height</span>
                                            <p class="f_sfPro text_color_36 fs_17">2.03m</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-md-4">
                                    <div class="d-flex flex-column align-items-start gap-3">
                                        <div>
                                            <span class="f_sfPro text_color_cb fs_15">Date of Birth</span>
                                            <p class="f_sfPro text_color_36 fs_17">03/03/2002</p>
                                        </div>

                                        <div>
                                            <span class="f_sfPro text_color_cb fs_15">Position</span>
                                            <p class="f_sfPro text_color_36 fs_17">PG</p>
                                        </div>

                                        <div>
                                            <span class="f_sfPro text_color_cb fs_15">Weight</span>
                                            <p class="f_sfPro text_color_36 fs_17">99kg</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-md-4">
                                    <div class="d-flex flex-column align-items-start gap-3">
                                        <div>
                                            <span class="f_sfPro text_color_cb fs_15">Age</span>
                                            <p class="f_sfPro text_color_36 fs_17">21</p>
                                        </div>

                                        <div>
                                            <span class="f_sfPro text_color_cb fs_15">Dominant Hand </span>
                                            <p class="f_sfPro text_color_36 fs_17">Left</p>
                                        </div>

                                        <div>
                                            <span class="f_sfPro text_color_cb fs_15">Weight</span>
                                            <p class="f_sfPro text_color_36 fs_17">99kg</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p class="f_sfPro text_color_cb fs_15 mb-2">
                                    Experience
                                </p>
                                <div class="d-flex flex-column flex-lg-row align-items-start gap-5">
                                    <div>
                                        <p class="f_sfPro text_color_36 fs_18">2003-2010 Cleveland Cavaliers
                                        </p>
                                        <p class="f_sfPro text_color_36 fs_18">2010–2014 Miami Heat </p>
                                        <p class="f_sfPro text_color_36 fs_18">2014–2018 Cleveland Cavaliers
                                        </p>
                                        <p class="f_sfPro text_color_36 fs_18">2018–present Los Angeles
                                            Lakers</p>
                                    </div>
                                    <div class="d-flex gap-2">
                                        <a href="#">
                                            <img src={twitterIcon} alt="Twitter" />
                                        </a>
                                        <a href="#">
                                            <img src={instagramIcon} alt="Instagram" />
                                        </a>
                                        <a href="#">
                                            <img src={facebookIcon} alt="FaceBook" />
                                        </a>
                                        <a href="#">
                                            <img src={youtubeIcon} alt="Youtube" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Personal Info End --> */}

            {/* <!-- Strengths, About Me part Start --> */}
            <div class="strAbout mb_60">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 col-lg-4">
                        <p class="f_sfPro text_color_36 fs_18 mb-2">Strengths Advantages</p>
                        <p class="f_sfPro text_color_cb fs_16">
                            Here are some of my notable strengths: Height and Wingspan: I am blessed with a tall
                            stature and a remarkable wingspan, which give me a significant advantage in both
                            offense and defense. My height allows me to effectively contest shots,
                            <a href="#" class="f_sfPro fs_16" style={{ color: "#0177FB" }}> See More</a>
                        </p>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <p class="f_sfPro text_color_36 fs_18 mb-2">About Me</p>
                        <p class="f_sfPro text_color_cb fs_16">
                            I started playing basketball because of my original favorite player, Shaquille
                            O’Neal. He was a huge, unstoppable guy. One who was able to do the things that the
                            smaller players did. So one day, when I was 11-years old, I decided to go outside to
                            the family basketball hoop and take a shot. The basket was originally for my sister.
                            <a href="#" class="f_sfPro fs_16" style={{ color: "#0177FB" }}> See More</a>
                        </p>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4">
                        <p class="f_sfPro text_color_36 fs_18 mb-2">Expectations From a New Club</p>
                        <p class="f_sfPro text_color_cb fs_16">
                            Hope to find a supportive and cohesive team environment where their skills can
                            thrive and be appreciated. I eagerly look forward to the opportunity to contribute
                            to the club's success, aiming to make a positive impact both on and off the court.
                            Additionally, I expect to receive the necessary resources.
                            <a href="#" class="f_sfPro fs_16" style={{ color: "#0177FB" }}> See More</a>
                        </p>
                    </div>
                </div>
            </div>
            {/* <!-- Strengths, About Me part End --> */}


            {/* <!-- Slider Start --> */}
            <p class="f_sfPro text_color_36 fs_18 mb-4">Gallery</p>
            <div class="row gy-3 mb_60">
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="job_offerSlider">
                        <img src={sliderOne} alt="img" />
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="job_offerSlider">
                        <img src={sliderTwo} alt="img" />
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="job_offerSlider">
                        <img src={sliderTwo} alt="img" />
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="job_offerSlider">
                        <img src={sliderTwo} alt="img" />
                    </div>
                </div>
            </div>

            {/* <!-- Slider End --> */}
        </div>
    )
}

export default ViewDetails