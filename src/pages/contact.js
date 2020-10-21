import React from "react"
import { Link } from "gatsby"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Section from "../components/shared/section"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <Section isHero>
            <h1>Contact Page coming soon...</h1>
        </Section>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default ContactPage
