import React from "react";
import { NavLink } from "react-router-dom";
import { Container,Navbar,Nav,NavDropdown } from "react-bootstrap";
// import '../assets/styles/Header.css';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">首頁</Nav.Link>
                    <Nav.Link href="/about">關於我</Nav.Link>
                    <NavDropdown title="工具" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/tools/settlement">結算表</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                        持續增加中...
                    </NavDropdown.Item>
                    </NavDropdown>
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
