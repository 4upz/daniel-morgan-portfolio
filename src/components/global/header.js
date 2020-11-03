import React from "react"
import { Link } from "gatsby"
import Logo from "../shared/logo"
import SocialLinks from "./socialLinks"
import Container from "../shared/container"
import NavToggle from "./navToggle"

const Header = () => {
    const [isOpen, setOpen] = React.useState(false)

    return (
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
                <NavToggle
                    onClick={() => setOpen(!isOpen)}
                    isToggled={isOpen}
                />
            </header>
        </Container>
    )
}

export default Header
