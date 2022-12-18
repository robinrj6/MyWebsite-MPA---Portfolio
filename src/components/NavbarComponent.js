import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/styles/navStyles.css';


export default function NavbarComponent() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="brandName">
                            RjR
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <a href="#home" className="nav-item d-md-block">Home</a>
                            <a href="#about" className="nav-item d-md-block">About</a>
                            <a href="#skills" className="nav-item d-md-block">Skills</a>
                            <a href="#projects" className="nav-item d-md-block">Projects</a>
                            <a href="#contact" className="nav-item d-md-block">Contact</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}