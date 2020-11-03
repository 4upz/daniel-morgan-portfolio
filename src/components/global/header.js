import React from "react"
import { Link } from "gatsby"
import Logo from "../shared/logo"
import SocialLinks from "./socialLinks"
import Container from "../shared/container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const Header = () => (
    <Container className="header-container">
        <header className="header">
            <Logo />
            <nav className="nav">
                <ul className="menu">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/ministry">Ministry</Link>
                    </li>
                    <li>
                        <Link to="/business">Business</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <SocialLinks />
            {/* Icon associated with mobile menu */}
            <FontAwesomeIcon className="menu-icon" icon={faBars || faTimes} />
        </header>
    </Container>
)

export default Header
