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
        const gatsby = document.getElementById("gatsby-focus-wrapper")
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
                <nav role="menu" className={`nav ${navShow ? "visible" : ""}`}>
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
                <NavToggle
                    isToggled={navShow}
                    onClick={() => setNavShow(!navShow)}
                />
            </header>
        </Container>
    )
}

export default Header
