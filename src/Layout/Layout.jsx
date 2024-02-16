import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      {/* <div className={`${location.pathname == "/" ? "" : "bgBanner"}`}> */}
      <div className="bgBanner">
        <Header />
      </div>
      <Outlet />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
