import PropTypes from "prop-types"
import React from "react"

const Section = ({ background, isHero, children }) => (
    <div className={`section ${background} ${isHero && "hero"}`}>
        {children}
    </div>
)

Section.propTypes = {
    children: PropTypes.node.isRequired,
    isHero: PropTypes.bool,
    background: PropTypes.oneOf(["primary", "secondary"]),
}

Section.defaultProps = {
    background: "primary",
    isHero: false,
}

export default Section
