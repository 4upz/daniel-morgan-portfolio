import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const LinkButton = ({ children, to, ...props }) => (
    <Link to={to} className="button link overlap" {...props}>
        {children}
    </Link>
)

LinkButton.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
}

export default LinkButton
