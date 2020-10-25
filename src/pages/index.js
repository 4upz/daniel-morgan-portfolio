import React from "react"
import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Section from "../components/shared/section"
import Banner from "../components/shared/banner"
import QuotesCard from "../components/cards/quotesCard"
import HeroTiles from "../components/tiles/heroTiles"
import Container from "../components/shared/container"
import Reviews from "../components/sliders/reviews"
import CTACard from "../components/cards/ctaCard"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Section isHero>
            <Banner
                title="Daniel S. Morgan Jr."
                subtitle="Weirdest Kid From Cleveland"
            />
            <Container className="home-hero">
                <QuotesCard />
                {/* TODO: Make the HeroTiles a flexible Component Again */}
                <HeroTiles />
            </Container>
        </Section>
        <Section>
            <Reviews />
        </Section>
        <Container className="contact-cta">
            <CTACard
                cardText="Let's Work Together!"
                buttonText="Get in Touch"
                buttonLink="/contact"
                className="full"
            />
        </Container>
    </Layout>
)

export default IndexPage
