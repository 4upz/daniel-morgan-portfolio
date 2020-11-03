import React from "react"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Section from "../components/shared/section"
import Banner from "../components/shared/banner"
import Wrap from "../components/shared/wrap"
import Container from "../components/shared/container"
import AboutImage from "../components/assets/aboutImage"
import ContentCard from "../components/cards/contentCard"

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <Section>
            <Banner title="About Me" subtitle='"Dan The Man"' />
            <Container className="about-hero">
                <Wrap>
                    <Container className="intro">
                        <AboutImage />
                        <Container className="about-hero-content overlap vertical-center">
                            <ContentCard title="Mission Statement">
                                <p>
                                    My mission is to simply plant and build onto
                                    every seed that God has given me the ability
                                    to do for Him, others, and myself. In this
                                    current world that I have been given the
                                    opportunity to live in, I’ll continuously
                                    pursue to become an effective leader and
                                    follower. Through my conscience, words, and
                                    actions I have the propensity to live an
                                    exuberant and adventurous life for myself
                                    and my Creator during this “dash period”.
                                </p>
                            </ContentCard>
                            <ContentCard title="Meaning of Daniel">
                                <p>
                                    The name “Daniel” comes from the root of the
                                    Hebrew language meaning “God is my Judge.”
                                    For myself, each letter of “D A N I E L” has
                                    its unique representation.
                                </p>
                            </ContentCard>
                        </Container>
                    </Container>
                    <Container className="background">
                        <Banner title="Background" />
                        <ContentCard>
                            <p>
                                I was born on October 18, 2001, in Cleveland,
                                Ohio to businessman Daniel Morgan and nurse
                                LaVonne Morgan. However, I was raised in
                                different parts of Northeast Ohio and attended
                                five different schools while participating in
                                many activities with numerous small
                                achievements. Although I participated in many
                                activities with numerous small achievements in
                                the schools I attended, participating in
                                activities with small achievements also happened
                                outside of school which is one of the things
                                that shaped me to become the young man I am
                                today. I don’t claim to be better than any
                                creation either I am just different. Currently,
                                I have two preeminent younger siblings named
                                Jason Morgan and Josiah Morgan in high school
                                and elementary school.
                            </p>
                            <p>
                                As of today, I am part of the astonishing high
                                school class of 2020 graduates and
                                contemporarily a musician, youth speaker,
                                student, and an upcoming businessman after
                                withdrawing from college.
                            </p>
                        </ContentCard>
                    </Container>
                </Wrap>
            </Container>
        </Section>
    </Layout>
)

export default AboutPage
