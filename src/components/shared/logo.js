import React from "react"
import { Link } from "gatsby"
import Container from "./container"

const Logo = () => (
    <Container className="logo">
        <Link to="/" className="logo-link">
            <h1>DSMJR</h1>
        </Link>
    </Container>
)

export default Logo
