import React from "react"
import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Section from "../components/shared/section"
import Banner from "../components/shared/banner"
import Quote from "../components/cards/quote"
import TileContainer from "../components/tiles/tileContainer"
import Tile from "../components/tiles/tile"
import Container from "../components/shared/container"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Section isHero>
            <Banner
                title="Daniel S. Morgan Jr."
                subtitle="Weirdest Kid From Cleveland"
            />
            <Container className="home-hero">
                <Quote text="God should always be first and the middle of everything in our lives." />
                <TileContainer>
                    <Tile
                        title="About"
                        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
                        ctaText="Discover"
                    />
                    <Tile
                        title="Ministry"
                        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
                        ctaText="Discover"
                    />
                    <Tile
                        title="Business"
                        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
                        ctaText="Discover"
                    />
                </TileContainer>
            </Container>
        </Section>
        <Section>{/* Enter Reviews Here */}</Section>
    </Layout>
)

export default IndexPage
