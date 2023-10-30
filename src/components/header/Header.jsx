import './Header.css'
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

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
                        <i className="fa-solid fa-bars"></i>
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
        </header>
    )
}

export default Header