import React from "react"
import ContactCard from "../components/cards/contactCard"
import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Banner from "../components/shared/banner"
import Section from "../components/shared/section"

import contactContent from "../../site/content/contact.json"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <Section isHero className="contact">
            <Banner title="Contact" subtitle={contactContent.title} />
            <ContactCard
                primaryStatement={contactContent["primary-statement"]}
                secondaryStatement={contactContent["secondary-statement"]}
            />
        </Section>
    </Layout>
)

export default ContactPage
