import React from 'react';
import DashbordLogo from '../../../assets/dashbord-logo.png';
import DashbordUser from '../../../assets/dashbord-user.png';
import './DashbordSidebar.css'

const DashbordSidebar = () => {
    return (
        <div className="dashbord_sidebar">
            <div className="dashbord_logo">
                <img src={DashbordLogo} alt="logo" />
            </div>

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

        </div>
    )
}

export default DashbordSidebar