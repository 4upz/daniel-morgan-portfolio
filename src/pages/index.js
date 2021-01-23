import React from "react"
import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Section from "../components/shared/section"
import Banner from "../components/shared/banner"
import QuotesCard from "../components/cards/quotesCard"
import HeroTiles from "../components/tiles/heroTiles"
import Container from "../components/shared/container"
import Reviews from "../components/sliders/reviews"
// import InstagramFeed from "../components/sliders/instagramFeed"
import CTACard from "../components/cards/ctaCard"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Section isHero>
            <Banner
                title="Daniel S. Morgan Jr."
                subtitle="Created, Called, and Chosen"
            />
            <Container className="quotes-container">
                <QuotesCard />
            </Container>
            <Container className="home-hero">
                <HeroTiles />
            </Container>
        </Section>
        <Section>
            <Reviews />
        </Section>
        {/* Removing until further notice 
        <Section>
            <InstagramFeed />
        </Section> */}
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
