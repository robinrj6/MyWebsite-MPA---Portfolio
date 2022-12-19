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
                            <Link to="/home" className="nav-item d-md-block">Home</Link>
                            <Link to="/about" className="nav-item d-md-block">About</Link>
                            <Link to="/skills" className="nav-item d-md-block">Skills</Link>
                            <Link to="/projects" className="nav-item d-md-block">Projects</Link>
                            <Link to="/contact" className="nav-item d-md-block">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}