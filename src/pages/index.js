import React from "react"
import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Section from "../components/shared/section"
import Card from "../components/cards/card"
import Banner from "../components/shared/banner"
import Quote from "../components/cards/quote"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Section isHero>
            <Banner
                title="Daniel Morgan Jr."
                subtitle="Weirdest Kid From Cleveland"
            />
            <Quote text="God should always be first and the middle of everything in our lives." />
        </Section>
    </Layout>
)

export default IndexPage
