import React from 'react';
import DashbordLogo from '../../../assets/dashbord-logo.png';
import DashbordUser from '../../../assets/dashbord-user.png';
import './DashbordSidebar.css'
import { Link } from 'react-router-dom';
import overviewIcon from '../../../assets/overview-icon.svg'
import transfarIcon from '../../../assets/transfar-icon.svg'
import jobOfferIcon from '../../../assets/joboffer-icon.svg'
import announcementOffer from '../../../assets/announcementOffer-icon.svg'
import observedIcon from '../../../assets/observed-icon.svg'
import messageIcon from '../../../assets/messages-icon.svg'
import settingsIcon from '../../../assets/settings-icon.svg'
import helpIcon from '../../../assets/help-icon.svg'
import logoutIcon from '../../../assets/logout-icon.svg'
import { Accordion } from 'react-bootstrap';
import basketBallIcon from '../../../assets/basketBall-icon.svg'
import coachesIcon from '../../../assets/coaches-icon.svg'

const DashbordSidebar = () => {
    return (
        <div className="dashbord_sidebar">
            <div className="dashbord_logo">
                <img src={DashbordLogo} alt="logo" />
            </div>

            <div className="dashbord_sidebar_content d-flex flex-column justify-content-between">
                <div className="top">
                    <div className="dashbord_user pb-4">
                        <div className="dashbord_user_info d-flex gap-2">

                            <div className="dashboard_user_img">
                                <img src={DashbordUser} alt="user-img" />
                            </div>

                            <div className="user_info">
                                <h6 className='text_color_36 fs-6 fw-semibold mb-1'>
                                    Emily Sinclair
                                </h6>
                                <p className='text_color_cb fs_14'>
                                    Basketball / Manager
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="overview">
                        <Link to={"#"} className='text-decoration-none d-flex align-items-center gap-4'>
                            <img src={overviewIcon} alt="icon" />
                            <span to={"#"} className='text_color_36 text-capitalize fs-6'> overview</span>
                        </Link>
                    </div>

                    <div className="menu_link">
                        <ul className='menu_wrapper_one list-unstyled m-0'>
                            <Accordion className='nav_item'>
                                <Accordion.Item eventKey="0" className='border-0'>
                                    <Accordion.Header className='p-0'>
                                        <li className=''>
                                            <Link to={"#"} className='text-decoration-none d-flex align-items-center gap-4'>
                                                <img src={transfarIcon} alt="icon" />
                                                <span to={"#"} className='text_color_36 text-capitalize fs-6'>
                                                    Transfer Market
                                                </span>
                                            </Link>
                                        </li>
                                    </Accordion.Header>
                                    <Accordion.Body className='pb-0'>
                                        <ul className='list-unstyled' style={{ paddingLeft: '30px' }}>
                                            <li className='nav_item'>
                                                <Link to={"/dashboard/players"} className='text-decoration-none d-flex align-items-center gap-3'>
                                                    <img src={basketBallIcon} alt="icon" />
                                                    <span to={"#"} className='text_color_36 text-capitalize fs-6'>
                                                        Players
                                                    </span>
                                                </Link>
                                            </li>

                                            <li className=''>
                                                <Link to={"#"} className='text-decoration-none d-flex align-items-center gap-3'>
                                                    <img src={coachesIcon} alt="icon" />
                                                    <span to={"#"} className='text_color_36 text-capitalize fs-6'>
                                                        Coaches
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>



                            <li className='nav_item'>
                                <Link to={"/dashboard/jobOffers"} className='text-decoration-none d-flex align-items-center gap-4'>
                                    <img src={jobOfferIcon} alt="icon" />
                                    <span className='text_color_36 text-capitalize fs-6'>
                                        Job Offers
                                    </span>
                                </Link>
                            </li>

                            <li className='nav_item'>
                                <Link to={"#"} className='text-decoration-none d-flex align-items-center gap-4'>
                                    <img src={announcementOffer} alt="icon" />
                                    <span to={"#"} className='text_color_36 text-capitalize fs-6'>
                                        Announcements
                                    </span>
                                </Link>
                            </li>
                        </ul>

                        <ul className='menu_wrapper_two list-unstyled m-0'>

                            <li className='nav_item'>
                                <Link to={"#"} className='text-decoration-none d-flex align-items-center gap-4'>
                                    <img src={observedIcon} alt="icon" />
                                    <span to={"#"} className='text_color_36 text-capitalize fs-6'>
                                        Observed
                                    </span>
                                </Link>
                            </li>

                            <li className='nav_item'>

                                <Link to={"#"} className='text-decoration-none d-flex align-items-center gap-4'>
                                    <img src={messageIcon} alt="icon" />
                                    <span to={"#"} className='text_color_36 text-capitalize fs-6'>
                                        Messages
                                    </span>
                                </Link>
                            </li>

                            <li className='nav_item'>

                                <Link to={"#"} className='text-decoration-none d-flex align-items-center gap-4'>
                                    <img src={settingsIcon} alt="icon" />
                                    <span to={"#"} className='text_color_36 text-capitalize fs-6'>
                                        Settings
                                    </span>
                                </Link>
                            </li>

                            <li className='nav_item'>

                                <Link to={"#"} className='text-decoration-none d-flex align-items-center gap-4'>
                                    <img src={helpIcon} alt="icon" />
                                    <span to={"#"} className='text_color_36 text-capitalize fs-6'>
                                        Help
                                    </span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="bottom" >
                    <div className="logout">
                        <Link to={"#"} className='text-decoration-none d-flex align-items-center gap-4'>
                            <img src={logoutIcon} alt="icon" />
                            <span to={"#"} className='text_color_36 text-capitalize fs-6'>logout</span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DashbordSidebar