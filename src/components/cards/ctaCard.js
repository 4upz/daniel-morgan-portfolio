import React from "react"
import PropTypes from "prop-types"
import LinkButton from "../shared/linkButton"

const CTACard = ({ cardText, buttonText, buttonLink }) => (
    <div className="card">
        <p>{cardText}</p>
        <LinkButton to={buttonLink}>{buttonText}</LinkButton>
    </div>
)

CTACard.propTypes = {
    cardText: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
}

export default CTACard
