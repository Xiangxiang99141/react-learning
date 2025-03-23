import React from "react";
import { Container } from "react-bootstrap";
import "../assets/styles/Footer.css";
function Footer() {
    return (
        <footer className="bg-body-tertiary" data-bs-theme="dark">
            <Container fluid className="text-center">
                @2025 狗哥
            </Container>
        </footer>
    );
}

export default Footer;