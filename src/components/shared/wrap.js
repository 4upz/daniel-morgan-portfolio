import PropTypes from "prop-types"
import React from "react"

const Wrap = ({ children }) => <div className="wrap">{children}</div>

Wrap.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Wrap
