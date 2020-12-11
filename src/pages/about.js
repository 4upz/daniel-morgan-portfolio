import React from "react"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Section from "../components/shared/section"
import Banner from "../components/shared/banner"
import Wrap from "../components/shared/wrap"
import Container from "../components/shared/container"
import AboutImage from "../components/assets/aboutImage"
import AboutImageSecondary from "../components/assets/aboutImageSecondary"
import ContentCard from "../components/cards/contentCard"

import aboutContent from "../../site/content/about.json"

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <Section>
            <Banner title="About Me" subtitle="Dan The Man" />
            <Container className="about-hero">
                <Wrap>
                    <Container className="intro">
                        <AboutImage />
                        <Container className="about-hero-content overlap vertical-center">
                            <ContentCard title="Mission Statement">
                                <p>{aboutContent.mission}</p>
                            </ContentCard>
                            <ContentCard title="Meaning of Daniel">
                                <p>{aboutContent.meaning}</p>
                                <p className="acronym">
                                    <span>D</span>iligent <span>A</span>vid{" "}
                                    <span>N</span>ifty & Neat <span>I</span>
                                    ntellectual <span>E</span>xuberant{" "}
                                    <span>L</span>oving
                                </p>
                            </ContentCard>
                        </Container>
                    </Container>
                    <Container className="background">
                        <Banner title="Background" />
                        <Container className="content">
                            <ContentCard>
                                <p>{aboutContent["background-primary"]}</p>
                                <p>{aboutContent["background-secondary"]}</p>
                            </ContentCard>
                            <AboutImageSecondary />
                        </Container>
                    </Container>
                </Wrap>
            </Container>
        </Section>
        <Section>
            <Banner title="Remarks" />
            <Wrap>
                <Container className="remarks">
                    <ContentCard>{aboutContent["remarks-primary"]}</ContentCard>
                    <ContentCard>
                        {aboutContent["remarks-secondary"]}
                    </ContentCard>
                </Container>
            </Wrap>
        </Section>
    </Layout>
)

export default AboutPage
