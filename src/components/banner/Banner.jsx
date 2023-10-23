import React from 'react'
import { Image } from 'react-bootstrap'
import './Banner.css'
import readyToget from '../../assets/readytoget.png'
import bannerImg from '../../assets/bannerImg.png'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section class="banner mb_40">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="bannerContent">
                            <span>Sports + Announcements only for you</span>
                            <Image class="mb-2 img-fluid" src={readyToget} alt="Ready to get" />
                            <h1>
                                Get matched with new sports club
                            </h1>
                            <p>Add your profile and join a new sports team</p>
                            <Link to="#" className='text-decoration-none'>Get Started Now</Link>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="text-center">
                            <Image class="img-fluid" src={bannerImg} alt="Banner" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner