import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import contactInfo from "../../../site/settings/contact_info.json"

const SocialLinks = () => (
    <div className="social-links">
        <a className="icon instagram" href={contactInfo.instagram}>
            <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="icon" href={`mailto:${contactInfo.email}`}>
            <FontAwesomeIcon icon={faEnvelope} />
        </a>
    </div>
)

export default SocialLinks
