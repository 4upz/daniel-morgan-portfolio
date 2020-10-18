import React from "react"
import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Section from "../components/shared/section"
import Card from "../components/cards/card"
import Banner from "../components/shared/banner"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Section isHero>
            <Banner
                title="Daniel Morgan Jr."
                subtitle="Weirdest Kid From Cleveland"
            />
        </Section>
    </Layout>
)

export default IndexPage
