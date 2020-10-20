import React from "react"
import PropTypes from "prop-types"
import CTACard from "../cards/ctaCard"
import Container from "../shared/container"

import BackgroundImage from "gatsby-background-image"
import { StaticQuery } from "gatsby"

const TileBackground = ({ children }) => (
    <StaticQuery
        query={graphql`
            query {
                desktop: file(relativePath: { eq: "dm-about.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => {
            // Set ImageData.
            const imageData = data.desktop.childImageSharp.fluid
            return (
                <BackgroundImage
                    Tag="section"
                    className="tile"
                    fluid={imageData}
                    backgroundColor={`#040e18`}
                >
                    {children}
                </BackgroundImage>
            )
        }}
    />
)

const Tile = ({ title, description, ctaText, ctaLink }) => (
    <Container className="tile">
        <Container className="tile-content vertical-center">
            <h2>{title}</h2>
            <CTACard
                cardText={description}
                buttonText={ctaText}
                buttonLink={ctaLink}
            />
        </Container>
    </Container>
)

Tile.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ctaText: PropTypes.string.isRequired,
}

export default Tile
