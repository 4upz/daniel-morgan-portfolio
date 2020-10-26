import React from "react"
import ContactCard from "../components/cards/contactCard"
import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Section from "../components/shared/section"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <Section isHero>
            <ContactCard />
        </Section>
    </Layout>
)

export default ContactPage
