import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../shared/logo"

const Header = () => (
    <header className="header">
        <div className="logo">
            <Logo />
        </div>
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
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
