import PropTypes from "prop-types"
import React from "react"
import Divider from "./divider"

const Section = ({ background, isHero, className, children }) => (
    <section
        className={`section ${background} ${isHero && "hero"} ${className}`}
    >
        {children}
        <Divider />
    </section>
)

Section.propTypes = {
    isHero: PropTypes.bool,
    background: PropTypes.oneOf(["primary", "secondary"]),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

Section.defaultProps = {
    background: "primary",
    isHero: false,
    className: "",
}

export default Section
