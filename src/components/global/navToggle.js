import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const NavToggle = ({ onClick, isToggled }) => (
    <button className="menu-toggle" onClick={onClick}>
        <FontAwesomeIcon
            className="menu-icon"
            icon={isToggled ? faTimes : faBars}
        />
    </button>
)

NavToggle.propTypes = {
    onClick: PropTypes.func.isRequired,
    isToggled: PropTypes.bool.isRequired,
}

export default NavToggle
