import PropTypes, { string } from "prop-types"
import React from "react"
import Divider from "./divider"

const Section = ({ background, isHero, className, children, id }) => (
    <section
        className={`section ${background} ${isHero && "hero"} ${className}`}
        id={id}
    >
        {children}
        <Divider />
    </section>
)

Section.propTypes = {
    isHero: PropTypes.bool,
    background: PropTypes.oneOf(["primary", "secondary"]),
    className: PropTypes.string,
    id: string,
    children: PropTypes.node.isRequired,
}

Section.defaultProps = {
    background: "primary",
    isHero: false,
    className: "",
}

export default Section
