/* eslint-disable no-unused-vars */
import "./DashboardLayout.css";
import Topbar from "../topbar/Topbar";
import { Outlet } from "react-router-dom";
import DashbordSidebar from "../dashbordSidebar/DashbordSidebar";
import MobileTopbar from "../topbar/MobileTopbar";
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
              <Topbar className="deskTopbar" />
              <MobileTopbar/>
              <div className="dashbord_content">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
