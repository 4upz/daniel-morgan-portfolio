import React from "react"
import Logo from "../shared/logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
    <footer className="footer">
        <div className="social-links">
            <a className="icon instagram" href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
        <Logo />
        Copyright © {new Date().getFullYear()} Daniel Morgan Jr., All Rights
        Reserved
    </footer>
)

export default Footer
