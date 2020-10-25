import React from "react"
import Container from "../shared/container"
import AboutBackground from "./aboutBackground"
import MinistryBackground from "./ministryBackground"
import BusinessBackground from "./businessBackground"
import Tile from "./tile"

// TODO: Have this pull from json list or array of quotes
const HeroTiles = () => (
    <Container className="tile-container">
        <AboutBackground className="tile-background">
            <Tile
                title="About"
                description="I (Daniel S. Morgan Jr.), also known as “Dan The Man” am currently a musician, youth speaker, student, and upcoming businessman."
                ctaText="Learn More"
                ctaLink="/about"
            />
        </AboutBackground>
        <MinistryBackground className="tile-background">
            <Tile
                title="Ministry"
                description="I am a non-denominational Christian and strongly believe a relationship with God is far greater than simply having a religion in the world we live and die in together. Contemporarily, God has used me by giving me the ability to use my gifts effectively and efficiently in the “Body of Christ” by utilizing drums and conducting speaking engagements. "
                ctaText="Dive Deeper"
                ctaLink="/ministry"
            />
        </MinistryBackground>
        <BusinessBackground className="tile-background">
            <Tile
                title="Business"
                description="My business, WakingUpGlobal (WUG), is an online-based public organization that was originally founded and launched by me (Daniel S. Morgan Jr.) in October of 2016. WUG promotes awareness spiritually, physically, and financially with products and services."
                ctaText="Discover"
                ctaLink="/business"
            />
        </BusinessBackground>
    </Container>
)

export default HeroTiles
