import React from "react"
import PropTypes from "prop-types"

const Card = ({ title, subTitle, children }) => {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            {subTitle && <h3>{subTitle}</h3>}
            {children}
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    children: PropTypes.node.isRequired,
}

Card.defaultProps = {
    title: "Card Title",
}

export default Card
