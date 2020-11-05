import React from "react"
import ContactCard from "../components/cards/contactCard"
import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Banner from "../components/shared/banner"
import Section from "../components/shared/section"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <Section isHero className="contact">
            <Banner title="Contact" subtitle="Let's Talk!" />
            <ContactCard />
        </Section>
    </Layout>
)

export default ContactPage
