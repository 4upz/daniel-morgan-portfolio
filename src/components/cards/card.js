import React from "react"
import PropTypes from "prop-types"

const Card = ({ className, children }) => {
    return <div className={`card ${className}`}>{children}</div>
}

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Card
