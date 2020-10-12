import PropTypes from "prop-types"
import React from "react"

const Section = ({ background, children }) => (
    <div className={`section ${background}`}>{children}</div>
)

Section.propTypes = {
    children: PropTypes.node.isRequired,
    background: PropTypes.oneOf[("primary", "secondary")],
}

Section.defaultProps = {
    background: "primary",
}

export default Section
