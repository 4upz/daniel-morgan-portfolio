import React from "react"
import { Link } from "gatsby"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Section from "../components/shared/section"

const MinistryPage = () => (
    <Layout>
        <SEO title="Ministry" />
        <Section isHero>
            <h1>Ministry page coming soon...</h1>
        </Section>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default MinistryPage
