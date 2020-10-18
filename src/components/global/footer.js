import React from "react"
import Logo from "../shared/logo"
import SocialLinks from "../shared/socialLinks"

const Footer = () => (
    <footer className="footer">
        <SocialLinks />
        <Logo />
        Copyright © {new Date().getFullYear()} Daniel Morgan Jr., All Rights
        Reserved
    </footer>
)

export default Footer
