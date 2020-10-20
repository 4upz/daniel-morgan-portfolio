import PropTypes from "prop-types"
import React from "react"
import Divider from "./divider"

const Section = ({ background, isHero, children }) => (
    <div className={`section ${background} ${isHero && "hero"}`}>
        {children}
        <Divider />
    </div>
)

Section.propTypes = {
    isHero: PropTypes.bool,
    background: PropTypes.oneOf(["primary", "secondary"]),
    children: PropTypes.node.isRequired,
}

Section.defaultProps = {
    background: "primary",
    isHero: false,
}

export default Section
