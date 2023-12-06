import "./Header.css";
import Logo from "../../assets/logo.png";
import Logosm from "../../assets/responsive-logo.png";
import profile from "../../assets/PROFILE.png";
import TransfarMarket from "../../assets/modal-market-img.png";
import dropdown from "../../assets/dropdownicon.png";
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Header = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const myDivRef = useRef(null);
  const getUser = localStorage.getItem('register')
  const user = JSON.parse(getUser);
  const navigate = useNavigate()
  const closeModalAndNavigate = () => {
    navigate('/signup');
  };

  const handleFilterModal = () => {
    setIsDropdownActive(!isDropdownActive);
  };
  const handleButtonClick = (event) => {
    event.stopPropagation();
    handleFilterModal();
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (myDivRef.current && !myDivRef.current.contains(event.target)) {
        setIsDropdownActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownActive]);

  return (
    <header className={`${!user && 'pt-4 pb-4'}`}>
      <Navbar expand="lg" className="navbar navbar-expand-lg">
        <Container>
          <Navbar.Brand href="#home">
            <Nav.Link className="navbar-brand" href="/">
              <img className="d-none d-md-block" src={Logo} alt="Logo" />
              <img className="d-block d-md-none" src={Logosm} alt="Logo" />
            </Nav.Link>
          </Navbar.Brand>
          <div className="d-block d-md-none">
            <Navbar.Toggle aria-controls="basic-navbar-nav">
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
            </Navbar.Toggle>
            {
              user ? <div>
                <img className="d-none " src={profile} alt="" />
                <Link
                  to="/dashboard/jobOffers"
                  type="submit"
                  className="text-decoration-none ms-3 profilename"
                >
                  {user.firstName}
                </Link>
              </div> :
                <>
                  <button className="logIn">Log in</button>
                  <button className="authBtn btnNone">
                    <Link to="/signup" type="submit" className="text-decoration-none">
                      Sign Up
                    </Link>
                  </button>
                </>
            }
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              {/* modal if the user is not logged in */}
              {user ? <Nav.Link href="#home">
                <Link to="/transfarMarket" className="nav-link">
                  Transfer Market
                </Link>
              </Nav.Link>
                :
                <button className="modal_link " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  Transfer Market
                </button>
              }

              <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <h2>Unlock the Gateway to <span>Endless <br /> Excitement</span></h2>
                      <p> Log in and Dive into a World of Sports Thrills and Exclusive Content!</p>
                      <button onClick={closeModalAndNavigate} className=" login_modal_btn" data-bs-dismiss="modal" aria-label="Close" type="button">
                        <Link to="/signup" type="submit" className="text-decoration-none text-dark">
                          LOG IN
                        </Link>
                      </button>
                      <div>
                        <img src={TransfarMarket} alt="TransfarMarket" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* modal hbe */}
              <Nav.Link href="/jobOffer">
                <Link to="/jobOffer" className="nav-link">
                  Job Offers
                </Link>
              </Nav.Link>
              <Nav.Link href="/announcements">

                <Link to="/announcements" className="nav-link">
                  Announcements
                </Link>
              </Nav.Link>
              <Nav.Link href="/pricing">
                <Link to="/pricing" className="nav-link">
                  Pricing
                </Link>
              </Nav.Link>
            </Nav>
            {user ?
              <div>
                <div type="button" onClick={(event) => handleButtonClick(event)} className="d-flex  flex-lg-row flex-column align-items-center  p-2 profile_drop_mobilepadding">
                  <Link to="/dashboard/jobOffers">
                    <img className="profile_picture d-lg-block " src={profile} alt="" />
                  </Link>
                  <div className="profile_dropdown" ref={myDivRef}>
                    <div className="position-relative">
                      <div className="profile_name">
                        <h5>SMITH JOHN </h5>
                        <img src={dropdown} className={`${isDropdownActive ? "" : "rotate_arrow"}`} alt="dropdown" />
                      </div>
                      {isDropdownActive &&
                        <>
                          <p>Log out</p>
                          <hr className="m-0" />
                          <p>Admin</p>
                        </>
                      }
                    </div>
                  </div>
                </div>

              </div>

              : <form className="d-flex flex-column flex-lg-row align-items-center gap-2 nav_form_small d-none d-md-block">
                <Link to="/login" className="logIn">
                  Log in
                </Link>
                <button className="authBtn btnNone">
                  <Link
                    to="/signup"
                    type="submit"
                    className="text-decoration-none"
                  >
                    Sign Up
                  </Link>
                </button>
              </form>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
