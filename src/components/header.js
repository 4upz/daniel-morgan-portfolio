import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
    <header className="header">
        <div className="logo">
            <h1>DSMJR</h1>
        </div>
        <nav className="nav">
            <ul>
                <li>About</li>
                <li>Ministry</li>
                <li>Businesses</li>
                <li>Contact</li>
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
