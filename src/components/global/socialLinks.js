import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const SocialLinks = () => (
    <div className="social-links">
        <a
            className="icon instagram"
            href="https://www.instagram.com/dsmjr.real/"
        >
            <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="icon" href="mailto:dsmjr.real@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
        </a>
    </div>
)

export default SocialLinks
