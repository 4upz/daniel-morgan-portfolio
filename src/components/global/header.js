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
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Ministry</Link>
                </li>
                <li>
                    <Link to="/">Businesses</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
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
