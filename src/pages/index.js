import React from "react"
import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Section from "../components/shared/section"
import Card from "../components/cards/card"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Section isHero>
            <Card
                title="Daniel Morgan Jr."
                subTitle="Weirdest Kid from Cleveland"
            >
                <p>Welcome</p>
                <p>Content Here</p>
            </Card>
        </Section>
    </Layout>
)

export default IndexPage
