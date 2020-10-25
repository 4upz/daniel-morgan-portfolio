import React from "react"
import { Link } from "gatsby"
import Logo from "../shared/logo"
import SocialLinks from "./socialLinks"

const Header = () => (
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
    </header>
)

export default Header
