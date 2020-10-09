import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
    <header className="header">
        <div className="logo">
            <h1>DSMJR</h1>
        </div>
        <nav className="nav">
            <Link to="/">About</Link>
            <Link to="/">Ministry</Link>
            <Link to="/">Businesses</Link>
            <Link to="/">Contact</Link>
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
