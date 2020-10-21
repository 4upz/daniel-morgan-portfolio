import React from "react"
import Container from "../shared/container"
import AboutBackground from "./aboutBackground"
import MinistryBackground from "./ministryBackground"
import BusinessBackground from "./businessBackground"
import Tile from "./Tile"

// TODO: Have this pull from json list or array of quotes
const HeroTiles = () => (
    <Container className="tile-container">
        <AboutBackground className="tile-background">
            <Tile
                title="About"
                description="Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna."
                ctaText="Learn More"
                ctaLink="/about"
            />
        </AboutBackground>
        <MinistryBackground className="tile-background">
            <Tile
                title="Ministry"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
                ctaText="Discover"
                ctaLink="/ministry"
            />
        </MinistryBackground>
        <BusinessBackground className="tile-background">
            <Tile
                title="Business"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
                ctaText="Learn More"
                ctaLink="/business"
            />
        </BusinessBackground>
    </Container>
)

export default HeroTiles
