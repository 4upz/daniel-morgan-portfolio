import React from "react"
import PropTypes from "prop-types"

const Banner = ({ title, subtitle }) => {
    return (
        <div className="banner center">
            <h2>{title}</h2>
            {subtitle && <h4>{subtitle}</h4>}
        </div>
    )
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

export default Banner
