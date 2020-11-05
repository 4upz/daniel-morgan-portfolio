import React from "react"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Section from "../components/shared/section"
import Banner from "../components/shared/banner"
import ContentCard from "../components/cards/contentCard"
import Container from "../components/shared/container"
import Wrap from "../components/shared/wrap"
import BusinessImage from "../components/assets/businessImage"
import WakingUpGlobalLogo from "../components/assets/wugLogo"
import ReviewTiles from "../components/tiles/reviewTiles"

const BusinessPage = () => (
    <Layout>
        <SEO title="Business" />
        <Section>
            <Banner title="Business" subtitle='"Dan The Man With The Plans"' />
            <Container className="business-hero">
                <Wrap>
                    <Container className="intro">
                        <BusinessImage />
                        <Container className="business-hero-content overlap">
                            <ContentCard>
                                <p>
                                    Over the past few years, I have joined
                                    numerous adequate businesses in different
                                    industries. Surprisingly for my age, I have
                                    acquired a decent amount of knowledge,
                                    understanding, wisdom, and experience
                                    involving businesses. In the past few years,
                                    I have studied and participated in a variety
                                    of business programs helping me in specific
                                    areas of life. However, the journey was far
                                    from easy and is far from easy today. But I
                                    have pressed my way through and will
                                    continuously press my way through to elevate
                                    into new dimensions. As of today, I have
                                    fractions of ownership in businesses across
                                    different industries while working with
                                    them. That all being stated, I simply would
                                    like to help grow the environment and
                                    economy because it is important to me. I
                                    will do whatever I can to help elevate
                                    others in the environment and economy
                                    overall.
                                </p>
                            </ContentCard>
                        </Container>
                    </Container>
                    <ContentCard>
                        <p>
                            For many years in my life thus far, I have also
                            started numerous competent businesses in different
                            industries by myself and with others. At the age of
                            fifteen in October of 2016, I had officially founded
                            one of my first businesses called “WakingUp” but
                            soon had the name changed to “WakingUpGlobal (WUG)”
                            in January of 2017 by one of my general business
                            partners. However, in the summer of 2018, an
                            intentional shutdown took place. In the summer of
                            2019, WakingUpGlobal (WUG) attempted to make its
                            return but unexpectedly failed. However, in the
                            spring of 2020, a group of business partners and I
                            had decided it was best to officially make a return
                            to continue the mission and vision that
                            WakingUpGlobal (WUG) had promised now and in the
                            future.
                        </p>
                        <p>
                            Not to mention, this is just the beginning. I am far
                            from done starting and building for-profit and
                            non-profit businesses in a variety of industries.
                        </p>
                    </ContentCard>
                </Wrap>
            </Container>
        </Section>
        <Section>
            <Wrap>
                <Banner title="WakingUpGlobal" subtitle="(WUG)" />
                <ContentCard className="wug-info">
                    <WakingUpGlobalLogo />
                    <p>
                        WakingUpGlobal (WUG) is an online-based public
                        organization created by Daniel S. Morgan Jr. Currently,
                        he temporarily serves as the Chief Executive Officer
                        (CEO). Others who currently serves with him will not be
                        listed, however, has been and still is just as important
                        as the Chief Executive Officer (CEO).
                    </p>
                    <p>
                        After WakingUpGlobal (WUG) conducted primary and
                        secondary research, the data has shown two major
                        problems. First, is the African American environment,
                        and second, is the educational disparities among African
                        Americans. WakingUpGlobal (WUG) was created to assist in
                        decreasing those problems.
                    </p>
                    <p>
                        This is an online platform projected to have an emerging
                        and engaging environment that involves different areas
                        of life. Furthermore, outside of social networking
                        platforms, WakingUpGlobal (WUG) will take measures to
                        physically interact and build lasting relationships with
                        the community when the time is right. This will allow
                        the organization to be able to help improve the
                        surrounding environment and economy today.
                    </p>
                </ContentCard>
            </Wrap>
        </Section>
        <Section id="reviews">
            <Banner title="Reviews" subtitle="What Others Say About Me" />
            <Wrap>
                <ReviewTiles />
            </Wrap>
        </Section>
    </Layout>
)

export default BusinessPage
