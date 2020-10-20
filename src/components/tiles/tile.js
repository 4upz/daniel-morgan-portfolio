import React from "react"
import PropTypes from "prop-types"
import CTACard from "../cards/ctaCard"
import Container from "../shared/container"

const Tile = ({ title, description, ctaText, ctaLink }) => (
    <Container className="tile-content vertical-center">
        <h2>{title}</h2>
        <CTACard
            cardText={description}
            buttonText={ctaText}
            buttonLink={ctaLink}
        />
    </Container>
)

Tile.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ctaText: PropTypes.string.isRequired,
}

export default Tile
