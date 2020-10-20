import React from "react"
import PropTypes from "prop-types"
import LinkButton from "../shared/linkButton"
import Card from "./card"

const CTACard = ({ cardText, buttonText, buttonLink, className }) => (
    <Card className={className}>
        <p>{cardText}</p>
        <LinkButton to={buttonLink}>{buttonText}</LinkButton>
    </Card>
)

CTACard.propTypes = {
    cardText: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default CTACard
