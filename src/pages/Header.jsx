import React from "react";
import { NavLink } from "react-router-dom";
import { Container,Navbar,Nav,NavDropdown } from "react-bootstrap";
// import '../assets/styles/Header.css';
import Main from "../router/Main"
import Tools from "../router/Tools"
import ComponentsRouter from "../router/ComponentsRouter"
import Site from "../config/SiteRouter";

const allHeader = [
    ...Main,
    ...Tools,
    ...ComponentsRouter]

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="/">狗哥的網頁</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {Site.getHeader(allHeader)}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


        // {/* <nav className="header">
        //     {/* <span><Link to="/">Home</Link></span> | <span><Link to="/about">About</Link></span> */}
        //     {/*NavLink 可以傳遞isActive參數*/}
        //     <span><NavLink className={({isActive}) => (isActive? "active" : "")} to="/">Home</NavLink></span> {" "} | {" "} <span><NavLink className={({isActive}) => (isActive? "active" : "")} to="/about">About</NavLink></span>
        //     </nav> */
            
    );
}

export default Header;
