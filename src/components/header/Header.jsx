import "./Header.css";
import Logo from "../../assets/logo.png";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <Image src={Logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
            {/* <span className="navbar-toggler-icon"></span> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Transfer Market
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Job Offers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Announcements
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Pricing
                </Link>
              </li>
            </ul>
            <form className="d-flex flex-column flex-lg-row align-items-center gap-2">
              <button className="logIn">
                <Link to="/login">Log in</Link>
              </button>
              <button className="authBtn btnNone">
                <Link
                  to="/signup"
                  type="submit"
                  classNameName="text-decoration-none"
                >
                  Sign Up
                </Link>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
