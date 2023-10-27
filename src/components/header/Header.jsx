import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" className="navbar navbar-expand-lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <a className="navbar-brand" href="index.html">
                            <img src={Logo} alt="Logo" />
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" >
                        <i class="fa-solid fa-bars"></i>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#home"> <Link to={"/transfarMarket"} className="nav-link">Transfer Market</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to={"/jobOffer"} className="nav-link">Job Offers</Link> </Nav.Link>
                            <Nav.Link href="#link"> <Link to={"/announcements"} className="nav-link">Announcements</Link></Nav.Link>
                            <Nav.Link href="#link">      <Link to={"/pricing"} className="nav-link">Pricing</Link></Nav.Link>

                        </Nav>
                        <form className="d-flex flex-column flex-lg-row align-items-center gap-2 nav_form_small">
                            <button className="logIn">Log in</button>
                            <button className="authBtn btnNone">
                                <Link href="#signUp" type="submit" className='text-decoration-none'>Sign Up</Link>
                            </button>
                        </form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img src={Logo} alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/transfarMarket"} className="nav-link">Transfer Market</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/jobOffer"} className="nav-link">Job Offers</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/announcements"} className="nav-link">Announcements</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/pricing"} className="nav-link">Pricing</Link>
                            </li>
                        </ul>
                        <form className="d-flex flex-column flex-lg-row align-items-center gap-2">
                            <button className="logIn">Log in</button>
                            <button className="authBtn btnNone">
                                <Link href="#signUp" type="submit" className='text-decoration-none'>Sign Up</Link>
                            </button>
                        </form>
                    </div>
                </div>
            </nav> */}
        </header>
    )
}

export default Header;
