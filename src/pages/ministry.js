import React from "react"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Section from "../components/shared/section"
import Wrap from "../components/shared/wrap"
import Banner from "../components/shared/banner"
import MinistryImage from "../components/assets/ministryImage"
import Container from "../components/shared/container"
import ContentCard from "../components/cards/contentCard"

const MinistryPage = () => (
    <Layout>
        <SEO title="Ministry" />
        <Section isHero>
            <Banner
                title="Ministry"
                subtitle='"Philippians 4:13 (KJV) “I can do all things through Christ which strengtheneth me.”'
            />
            <Container className="ministry-hero">
                <Wrap>
                    <Container className="intro">
                        <MinistryImage />
                        <ContentCard className="overlap">
                            <p>
                                I am a non-denominational Christian and strongly
                                believe a relationship with God is far greater
                                than simply having a religion in the world we
                                live and die in together. Understand this, I am
                                far from perfect. I am still a sinner but I am a
                                saved sinner and simply a creation just as
                                everyone and everything else. Furthermore, I
                                don’t claim to be better than any creation; I am
                                just different.
                            </p>
                            <p>
                                I currently attend Center of Hope Bible
                                Fellowship under the leadership of Pastor Rory
                                Tate and First Lady Nicole Tate as a musician
                                and youth speaker. God has used me by giving me
                                the ability to use my gifts effectively and
                                efficiently in the “Body of Christ” by utilizing
                                drums and conducting speaking engagements inside
                                and outside a variety of churches across
                                Northeast Ohio.
                            </p>
                        </ContentCard>
                    </Container>
                </Wrap>
                <ContentCard>
                    <p>
                        I have had a strong and positive impact on many people’s
                        lives with my words and actions with the help of the
                        Prodigious God and creations. That being stated, I will
                        continue to play drums and complete speaking engagements
                        inside and outside of churches across Northeast Ohio
                        until God calls and chooses me to transition. I strongly
                        believe it is not the work of my own but the creations
                        in and around my life. But most of all, the power in
                        which God has put in me to do for His glory. And if He
                        can do it with me and for me, He can do the same with
                        others and for others.
                    </p>
                </ContentCard>
            </Container>
        </Section>
        <Section className="testimony">
            <Banner title="Invitation to the Lifeboat" />
            <Container className="lifeboat">
                <Wrap>
                    <Container className="card-container left">
                        <ContentCard>
                            <p>
                                The world that was created by God that we live
                                in today is as if we were living on the Titanic.
                                The Titanic was once flowing on water smoothly
                                just as the world once was. However, the Titanic
                                began to sink slowly, and just like the Titanic
                                sinking, the world is slowly sinking. In
                                uncertain times, creations created by the
                                Almighty Creator must know that tomorrow is
                                never promised. Therefore, the sad truth to
                                every living creation is death being guaranteed
                                while living on this planet. However, after
                                death on this planet, there is another life that
                                creations can choose to live in. That life is
                                either eternity in Heaven or eternity in Hell.
                            </p>
                        </ContentCard>
                    </Container>
                    <Container className="card-container right">
                        <ContentCard>
                            <p>
                                That all being stated, it sounds as if it’s good
                                news and bad news at the same time in which it
                                is. Although the world is changing positively
                                and negatively like it’s supposed to, there is a
                                lifeboat. And that lifeboat is Jesus Christ
                                (Yeshua) The Messiah. God the Father sent His
                                only begotten Son in human form to be born,
                                receiving the Holy Spirit, live a life by
                                example, die, and rise again with all power in
                                His hands so that we might have life and have it
                                abundantly.
                            </p>
                        </ContentCard>
                    </Container>
                    <Container className="card-container left">
                        <ContentCard>
                            <p>
                                According to John 14:6 (KJV), it says, “Jesus
                                saith unto him, I am the way, the truth, and the
                                life: no man cometh unto the Father, but by me.”
                                God sent His only begotten Son to give His
                                creations life. As it states in John 3:16 (CEV),
                                “God loved the people of this world so much that
                                he gave his only Son, so that everyone who has
                                faith in him will have eternal life and never
                                really die.” Jesus also states in John 10:10
                                (NKJV), “The thief does not come except to
                                steal, and to kill, and to destroy. I have come
                                that they may have life, and that they have may
                                have it more abundantly.” Praise God!
                            </p>
                        </ContentCard>
                    </Container>
                    <Container className="card-container right">
                        <ContentCard>
                            <p>
                                To be in the lifeboat and to stay in it, all you
                                have to do is have faith and follow what Romans
                                10:9-11 (NLT) says, “If you openly declare that
                                Jesus is Lord and believe in your heart that God
                                raised him from the dead, you will be saved. For
                                it is by believing in your heart that you are
                                made right with God, and it is by openly
                                declaring your faith that you are saved. As the
                                scriptures tell us, “Anyone who trusts in him
                                will never be disgraced.’” God has given His
                                creations free will. Therefore, nothing is
                                forced on us. I’ve thought, seen, and heard what
                                He’s done in my life and around my life in the
                                past, present, and future. The choice is the
                                creations but time isn’t on the creations side.
                                The creations must know that God loves us and
                                wants the best for us while we’re living on this
                                planet and after we’re removed from this planet.
                                According to Proverbs 3:5-6 (KJV) it says,
                                “Trust in the Lord with all thine heart; and
                                lean not unto thine own understanding. In all
                                thy ways acknowledge him, and he shall direct
                                thy paths.” God is the answer. Therefore, after
                                reading this on my website, what will the choice
                                be?
                            </p>
                        </ContentCard>
                    </Container>
                </Wrap>
            </Container>
            <Wrap>
                <ContentCard className="footnote">
                    <p>Much love and blessings to all.</p>
                </ContentCard>
            </Wrap>
        </Section>
    </Layout>
)

export default MinistryPage
