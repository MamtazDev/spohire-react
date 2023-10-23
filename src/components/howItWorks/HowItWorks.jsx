import React, { useState } from 'react'
import './HowItWorks.css'
import localOne from '../../assets/local1.png'
import localTwo from '../../assets/local2.png'
import Robert from '../../assets/robert.png'
import Filter from '../../assets/filter.png'

const HowItWorks = () => {
    const [worksTab, setWorksTab] = useState('player')
    const handleTabClick = (tab) => {
        setWorksTab(tab)
    }

    return (
        <section class="workBg">
            <section id="signUp">
                <div class="container Work_container">
                    <h3>How it works</h3>
                    <div
                        class="tabOutter d-flex flex-column flex-lg-row justify-content-center gap-2 align-items-center mx-auto">
                        <button className={worksTab === 'player' ? 'btnActive' : ''} onClick={() => handleTabClick('player')} >
                            Player
                        </button>
                        <button className={worksTab === 'coach' ? 'btnActive' : ''} onClick={() => handleTabClick('coach')} >
                            Coach
                        </button>
                        <button className={worksTab === 'manager' ? 'btnActive' : ''} onClick={() => handleTabClick('manager')}>
                            Manager/Agent
                        </button>
                    </div>

                    {
                        worksTab === 'player' && (
                            <div class="row gy-4">
                                <div class="col-12 col-xl-6">
                                    <div class="d-flex flex-column gap-4 h-100">
                                        <div
                                            class="innerWhiteBox d-flex flex-column flex-lg-row justify-content-center align-items-center gap-2 w-100">
                                            <div class="local d-flex flex-column align-items-center align-items-lg-start">
                                                <p class="mb-2">
                                                    Local News, Teams & Players
                                                </p>
                                                <button class="d-block">Allow Location</button>

                                            </div>
                                            <img class="img-fluid" src={localOne} alt="img" />
                                            <img class="img-fluid" src={localTwo} alt="img" />
                                        </div>

                                        <div
                                            class="innerWhiteBox d-flex flex-column flex-lg-row justify-content-center align-items-center gap-2 w-100">
                                            <div class="playerBox">
                                                <p class="mb-2">
                                                    Robert Lewandowski
                                                </p>
                                                <div class="d-flex justify-content-start gap-2">
                                                    <div
                                                        class="d-flex flex-column justify-content-start gap-2 align-items-center">
                                                        <span>Place of birth:</span>
                                                        <span>Current Team:</span>
                                                    </div>
                                                    <div
                                                        class="d-flex flex-column justify-content-end gap-2 align-items-center">
                                                        <span>Poland</span>
                                                        <span>Barcelona</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <img class="img-fluid" src={Robert} alt="img" />
                                            <div class="detailBox d-flex justify-content-between align-items-start gap-3">
                                                <div class="d-flex flex-column justify-content-start gap-2">
                                                    <span>Age:</span>
                                                    <span style={{ background: "#F4DBFF" }}>Height :</span>
                                                    <span style={{ background: "#FFE3D4" }}>Weight:</span>
                                                </div>
                                                <div>
                                                    <p>Striker</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            class="leftBlueBox d-flex flex-column-reverse flex-lg-row  justify-content-between align-items-start gap-4">
                                            <div class="d-flex flex-column gap-4">
                                                <div class="d-flex justify-content-start gap-2 align-items-center">
                                                    <div class="numTag ">
                                                        <p>03</p>
                                                    </div>
                                                    <div class="connect">
                                                        <p>Connect With Us</p>
                                                        <span class="d-block">Wait for contact with your new team.</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex justify-content-start gap-2 align-items-center">
                                                    <div class="numTag ">
                                                        <p>04</p>
                                                    </div>
                                                    <div class="connect">
                                                        <p>Connect With Us</p>
                                                        <span class="d-block">Wait for contact with your new team.</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button class="d-flex justify-content-center gap-2 align-items-center">
                                                    Filter
                                                    <img src={Filter} alt="Filter" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-xl-6">
                                    <div class="howWorkRight h-100">
                                        <div class="ps-2">
                                            <p>Sign Up</p>
                                            <span class="d-block">
                                                Create an account ad add your<br /> profile for those loking.
                                            </span>
                                        </div>

                                        <form>
                                            <div class="d-flex flex-column justify-content-start gap-3">
                                                <div
                                                    class="txtInput d-flex flex-column flex-md-row justify-content-between align-items-center">
                                                    <div>
                                                        <label for="fName">First Name</label>
                                                        <input type="text" name="firstName" id="fName" />
                                                    </div>
                                                    <div>
                                                        <label for="lName">Last Name</label>
                                                        <input type="text" name="lastName" id="lName" />
                                                    </div>
                                                </div>
                                                <div
                                                    class="txtInput d-flex flex-column flex-md-row justify-content-between align-items-center">
                                                    <div>
                                                        <label for="email">Email Address</label>
                                                        <input type="email" name="email" id="email" />
                                                    </div>
                                                    <div>
                                                        <label for="cellNo">Mobile Number</label>
                                                        <input type="text" name="phone" id="cellNo" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>
                                                        Kind Of Sports
                                                    </p>
                                                    <div class="d-flex flex-column flex-md-row justify-content-start gap-4">
                                                        <div class="playOption">
                                                            <div>
                                                                <input type="radio" name="football" id="football" />
                                                                <label for="football">
                                                                    Football
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div class="playOption">
                                                            <div>
                                                                <input type="radio" name="Baskeball" id="baskeball" />
                                                                <label for="baskeball">
                                                                    Baskeball
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div class="playOption">
                                                            <div>
                                                                <input type="radio" name="handball" id="handball" />
                                                                <label for="handball">
                                                                    Handball
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div class="playOption">
                                                            <div>
                                                                <input type="radio" name="vollyeball" id="vollyeball" />
                                                                <label for="vollyeball">
                                                                    Vollyeball
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>You</p>
                                                    <div class="d-flex flex-column flex-md-row justify-content-start gap-4">
                                                        <div class="playOption">
                                                            <div>
                                                                <input type="radio" name="player" id="player" />
                                                                <label for="player">
                                                                    Player
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div class="playOption">
                                                            <div>
                                                                <input type="radio" name="manager" id="manager" />
                                                                <label for="manager">
                                                                    Manager
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div class="playOption">
                                                            <div>
                                                                <input type="radio" name="coach" id="coach" />
                                                                <label for="coach">
                                                                    Coach
                                                                </label>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    {
                        worksTab === 'coach' && (
                            <>
                                <h1 className='text-white'>
                                    Coach Tab
                                </h1>
                            </>
                        )
                    }

                    {
                        worksTab === 'manager' && (
                            <>
                                <h1 className='text-white'>
                                    Manager
                                </h1>
                            </>
                        )

                    }


                </div>
            </section>
        </section>
    )
}

export default HowItWorks