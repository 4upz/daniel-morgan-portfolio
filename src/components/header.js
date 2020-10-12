import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
    <header className="header">
        <div className="logo">
            <h1>DSMJR</h1>
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
