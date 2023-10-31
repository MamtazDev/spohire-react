import "./Header.css";
import Logo from "../../assets/logo.png";
import Logosm from "../../assets/responsive-logo.png";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="navbar navbar-expand-lg">
        <Container>
          <Navbar.Brand href="#home">
            <Nav.Link className="navbar-brand" href="#home">
              <img className="d-none d-md-block" src={Logo} alt="Logo" />
              <img className="d-block d-md-none" src={Logosm} alt="Logo" />
            </Nav.Link>
          </Navbar.Brand>
   
          <div className="d-block d-md-none">
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            {/* <i className="fa-solid fa-bars"></i> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clipPath="url(#clip0_239_167)">
                <path
                  d="M2.5 8H13.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 4H13.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 12H13.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_239_167">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
<<<<<<< HEAD
          </Navbar.Toggle> 
          <button className="logIn">Log in</button>
=======
          </Navbar.Toggle>
          <div className="d-block d-md-none">
          <Link to="/login" className="logIn">Log in</Link>
>>>>>>> 52bd51b3557afff0a8dcbb9eca8cbd5d66e8c267
              <button className="authBtn btnNone">
                <Link
                  href="#signUp"
                  type="submit"
                  className="text-decoration-none"
                >
                  Sign Up
                </Link>
              </button>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home">
                {" "}
                <Link to={"/transfarMarket"} className="nav-link">
                  Transfer Market
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to={"/jobOffer"} className="nav-link">
                  Job Offers
                </Link>{" "}
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <Link to={"/announcements"} className="nav-link">
                  Announcements
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <Link to={"/pricing"} className="nav-link">
                  Pricing
                </Link>
              </Nav.Link>
            </Nav>
            <form className="d-flex flex-column flex-lg-row align-items-center gap-2 nav_form_small d-none d-md-block">
              <Link to="/login" className="logIn">Log in</Link>
              <button className="authBtn btnNone">
                <Link
                  href="#signUp"
                  type="submit"
                  className="text-decoration-none"
                >
                  Sign Up
                </Link>
              </button>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
