import React from "react"
import PropTypes from "prop-types"
import CTACard from "../cards/ctaCard"
import Container from "../shared/container"

const TileContent = ({ title, description, ctaText, ctaLink }) => (
    <Container className="tile-content">
        <h1>{title}</h1>
        <CTACard
            cardText={description}
            buttonText={ctaText}
            buttonLink={ctaLink}
        />
    </Container>
)

TileContent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ctaText: PropTypes.string.isRequired,
}

export default TileContent
