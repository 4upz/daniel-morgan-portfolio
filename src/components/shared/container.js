import React from "react"
import PropTypes from "prop-types"

const Container = ({ className, children }) => (
    <div className={className}>{children}</div>
)

Container.propTypes = {
    className: PropTypes.string,
}

export default Container
