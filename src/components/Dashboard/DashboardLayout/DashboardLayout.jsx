import React from 'react';
import './DashboardLayout.css';
import Topbar from '../topbar/Topbar';
import { Outlet } from 'react-router-dom';
import DashbordSidebar from '../dashbordSidebar/DashbordSidebar';
const DashboardLayout = () => {
    return (
        <>
            <div className="dashobard_layout">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 p-0">
                            <DashbordSidebar />
                        </div>
                        <div className="col-lg-10 p-0">
                            <Topbar />
                            <div className="dashbord_content">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DashboardLayout

//     < div className = '' >
//         <p>
//             <img src={logo} alt="" />Spohire.
//         </p>
// {/* profile */ }
// <div>
//     <img src={profile} alt="" />
//     <div>
//         <p>Emily Sinclair</p>
//         <small>Basketball / Manager</small>
//     </div>
// </div>


//             </ >