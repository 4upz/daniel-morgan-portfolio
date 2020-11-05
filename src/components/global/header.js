import React from "react"
import { Link } from "gatsby"
import Logo from "../shared/logo"
import SocialLinks from "./socialLinks"
import Container from "../shared/container"
import NavToggle from "./navToggle"

const Header = () => {
    const [navShow, setNavShow] = React.useState(false)

    React.useEffect(() => {
        const body = document.body
        if (navShow) {
            body.style.setProperty("overflow", "hidden")
        } else {
            body.style.removeProperty("overflow")
        }
    }, [navShow])

    return (
        <Container className="header-container">
            <header className="header">
                <Logo />
                <nav className={`nav ${navShow ? "visible" : ""}`}>
                    <ul className="menu">
                        {navShow && (
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        )}
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
                {/* TODO: Stop this from jumping to the top of the page when clicked */}
                <NavToggle
                    isToggled={navShow}
                    onClick={() => setNavShow(!navShow)}
                />
            </header>
        </Container>
    )
}

export default Header
