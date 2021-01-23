import React from "react"
import Container from "../shared/container"
import AboutBackground from "./aboutBackground"
import MinistryBackground from "./ministryBackground"
import BusinessBackground from "./businessBackground"
import TileContent from "./tileContent"

// TODO: Have this pull from json list or array of quotes
const HeroTiles = () => (
    <Container className="tile-container">
        <AboutBackground className="tile-background">
            <TileContent
                title="About"
                description="My name is Daniel S. Morgan Jr., however, I have a variety of nicknames that I have been called by in the past and that I am still called by in the present. As of today, I am a musician, youth leader, student, and upcoming businessman. "
                ctaText="Learn More"
                ctaLink="/about"
            />
        </AboutBackground>
        <MinistryBackground className="tile-background">
            <TileContent
                title="Ministry"
                description="I am a non-denominational Christian who strongly believes a relationship with God is far greater than simply having a religion in a world that we live and die in together. That being stated, contemporarily God has given me a role to use my gifts effectively and efficiently by playing instruments and teaching about life through Biblical principles inside and outside the church."
                ctaText="Dive Deeper"
                ctaLink="/ministry"
            />
        </MinistryBackground>
        <BusinessBackground className="tile-background">
            <TileContent
                title="Business"
                description="Today I have an online-based public organization that was originally founded and launched by me in October of 2016 called WakingUpGlobal (WUG). The organization simply helps others elevate into new dimensions spiritually, physically, and financially with products and services."
                ctaText="Discover"
                ctaLink="/business"
            />
        </BusinessBackground>
    </Container>
)

export default HeroTiles
