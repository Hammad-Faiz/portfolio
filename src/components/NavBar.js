import { useEffect, useState } from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import logo from '../assets/navImg/logo.png'
import githubIcon from '../assets/navImg/github.png'
import linkedinIcon from '../assets/navImg/linkedIn.png'
import resume from '../assets/Hammad Faiz Resume.pdf'

export const NavBar = () => {
    //Trying to push origin
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
            <Navbar expand="lg" className = {scrolled ? "scrolled": ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt='Logo' /> 
                        <span className='name'> Hammad Faiz </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick ={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick ={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick ={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a href='https://www.linkedin.com/in/faiz-hammad/' target="_blank" rel="noreferrer"><img src={linkedinIcon} alt = 'LinkedIn' /></a>
                                <a href='https://github.com/Hammad-Faiz' target="_blank" rel="noreferrer"><img src={githubIcon} alt = 'Github' /></a>
                            </div>
                            <a href={resume} target="_blank" rel="noreferrer" download="Hammad Faiz Resume.pdf" >
                                <button >
                                    <span> Download Resume </span>
                                </button>
                            </a>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}
