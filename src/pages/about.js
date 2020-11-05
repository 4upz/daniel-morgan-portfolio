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
                                <p>
                                    I was born on October 18, 2001, in
                                    Cleveland, Ohio to businessman Daniel Morgan
                                    and nurse LaVonne Morgan. However, I was
                                    raised in different parts of Northeast Ohio
                                    and attended five different schools while
                                    participating in many activities with
                                    numerous small achievements. Although I
                                    participated in many activities with
                                    numerous small achievements in the schools I
                                    attended, participating in activities with
                                    small achievements also happened outside of
                                    school which is one of the things that
                                    shaped me to become the young man I am
                                    today. I don’t claim to be better than any
                                    creation either I am just different.
                                    Currently, I have two preeminent younger
                                    siblings named Jason Morgan and Josiah
                                    Morgan in high school and elementary school.
                                </p>
                                <p>
                                    As of today, I am part of the astonishing
                                    high school class of 2020 graduates and
                                    contemporarily a musician, youth speaker,
                                    student, and an upcoming businessman after
                                    withdrawing from college.
                                </p>
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
                    <ContentCard>
                        Shout out to my family, friends, and others who've been
                        with me and haven't been with me through the thick and
                        thin back then, currently, and in the future. I’m so
                        grateful and blessed by God to have you all in my life
                        and out of my life. Part of my success then, currently,
                        and in the future is because of all of you. Much love
                        and blessings to you all.
                    </ContentCard>
                    <ContentCard>
                        Shout out to my friend, advisor, and web developer Arik
                        Smith for his prodigious work ethic creating and
                        developing this website. If you need a web developer, I
                        strongly recommend this hardworking man. I guarantee
                        he’ll get the job done in a timely manner efficiently
                        and effectively. Continue to be great Arik Smith!
                    </ContentCard>
                </Container>
            </Wrap>
        </Section>
    </Layout>
)

export default AboutPage
