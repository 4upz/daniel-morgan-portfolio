import React from "react"
import PropTypes from "prop-types"

const Banner = ({ title, subtitle }) => (
    <div className="banner center">
        <h1>{title}</h1>
        {subtitle && <h4>{subtitle}</h4>}
    </div>
)

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

export default Banner
