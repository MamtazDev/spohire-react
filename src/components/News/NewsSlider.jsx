// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
// import RightButton from '../../assets/RightButton1.png';

// import n1 from '../../assets/lnews.png'
// import { Link } from 'react-router-dom';

// const NewsSlider = () => {

//     return (
//         <>
//             <div className='news_slider_wrapper row' >
//             <Swiper
//                 navigation={true}
//                 modules={[Navigation]}
//                 className="mySwiper"
//                 slidesPerView={3}
//                 spaceBetween={30}
//             >
//                 <SwiperSlide>
//                     <div className='col-lg-4 col-12 w-100'>
//                         <div className='text-start bg-transparent'>
//                             <img className='banner' src={n1} alt="" />
//                             <div className='details'>
//                                 <p>Baku 2024 world best basketball Championships</p>
//                                 <span>4 hours ago</span>
//                                 <div className='view_morebtn1'>
//                                     <Link to="/newsDetails">
//                                         <button>View More  <img style={{ height: "37px", width: "27px" }} src={RightButton} alt="RightButton" />  </button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className='col-lg-4 col-12 w-100'>
//                         <div className='text-start bg-transparent'>
//                             <img className='banner' src={n1} alt="" />
//                             <div className='details'>
//                                 <p>Baku 2024 world best basketball Championships</p>
//                                 <span>4 hours ago</span>
//                                 <div className='view_morebtn1'>
//                                     <Link to="/newsDetails">
//                                         <button>View More  <img style={{ height: "37px", width: "27px" }} src={RightButton} alt="RightButton" />  </button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className='col-lg-4 col-12 w-100'>
//                         <div className='text-start bg-transparent'>
//                             <img className='banner' src={n1} alt="" />
//                             <div className='details'>
//                                 <p>Baku 2024 world best basketball Championships</p>
//                                 <span>4 hours ago</span>
//                                 <div className='view_morebtn1'>
//                                     <Link to="/newsDetails">
//                                         <button>View More  <img style={{ height: "37px", width: "27px" }} src={RightButton} alt="RightButton" />  </button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className='col-lg-4 col-12 w-100'>
//                         <div className='text-start bg-transparent'>
//                             <img className='banner' src={n1} alt="" />
//                             <div className='details'>
//                                 <p>Baku 2024 world best basketball Championships</p>
//                                 <span>4 hours ago</span>
//                                 <div className='view_morebtn1'>
//                                     <Link to="/newsDetails">
//                                         <button>View More  <img style={{ height: "37px", width: "27px" }} src={RightButton} alt="RightButton" />  </button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>

//             </Swiper>
//             </div>


//         </>
//     )
// }

// export default NewsSlider



import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import RightButton from '../../assets/RightButton1.png';
import n1 from '../../assets/lnews.png'
import { Link } from 'react-router-dom';


const NewsSlider = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='news_slider_wrapper' style={{padding:"82px 78px"}}>
            <Carousel responsive={responsive}>
                <div className='col-lg-4 col-12 w-100'>
                    <div className='text-start bg-transparent'>
                        <img className='banner' src={n1} alt="" />
                        <div className='details'>
                            <p>Baku 2024 world best basketball Championships</p>
                            <span>4 hours ago</span>
                            <div className='view_morebtn1'>
                                <Link to="/newsDetails">
                                    <button>View More  <img style={{ height: "37px", width: "27px" }} src={RightButton} alt="RightButton" />  </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-12 w-100'>
                    <div className='text-start bg-transparent'>
                        <img className='banner' src={n1} alt="" />
                        <div className='details'>
                            <p>Baku 2024 world best basketball Championships</p>
                            <span>4 hours ago</span>
                            <div className='view_morebtn1'>
                                <Link to="/newsDetails">
                                    <button>View More  <img style={{ height: "37px", width: "27px" }} src={RightButton} alt="RightButton" />  </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-12 w-100'>
                    <div className='text-start bg-transparent'>
                        <img className='banner' src={n1} alt="" />
                        <div className='details'>
                            <p>Baku 2024 world best basketball Championships</p>
                            <span>4 hours ago</span>
                            <div className='view_morebtn1'>
                                <Link to="/newsDetails">
                                    <button>View More  <img style={{ height: "37px", width: "27px" }} src={RightButton} alt="RightButton" />  </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-12 w-100'>
                    <div className='text-start bg-transparent'>
                        <img className='banner' src={n1} alt="" />
                        <div className='details'>
                            <p>Baku 2024 world best basketball Championships</p>
                            <span>4 hours ago</span>
                            <div className='view_morebtn1'>
                                <Link to="/newsDetails">
                                    <button>View More  <img style={{ height: "37px", width: "27px" }} src={RightButton} alt="RightButton" />  </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-12 w-100'>
                    <div className='text-start bg-transparent'>
                        <img className='banner' src={n1} alt="" />
                        <div className='details'>
                            <p>Baku 2024 world best basketball Championships</p>
                            <span>4 hours ago</span>
                            <div className='view_morebtn1'>
                                <Link to="/newsDetails">
                                    <button>View More  <img style={{ height: "37px", width: "27px" }} src={RightButton} alt="RightButton" />  </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-12 w-100'>
                    <div className='text-start bg-transparent'>
                        <img className='banner' src={n1} alt="" />
                        <div className='details'>
                            <p>Baku 2024 world best basketball Championships</p>
                            <span>4 hours ago</span>
                            <div className='view_morebtn1'>
                                <Link to="/newsDetails">
                                    <button>View More  <img style={{ height: "37px", width: "27px" }} src={RightButton} alt="RightButton" />  </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


            </Carousel>
        </div>
    );
};

export default NewsSlider;