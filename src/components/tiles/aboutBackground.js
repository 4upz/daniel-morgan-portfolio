import React from "react"
import BackgroundImage from "gatsby-background-image"
import { StaticQuery, graphql } from "gatsby"

const AboutBackground = ({ className, children }) => (
    <StaticQuery
        query={graphql`
            query {
                desktop: file(relativePath: { eq: "dm-about.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => {
            // Set ImageData.
            const imageDataWithOverlay = [
                data.desktop.childImageSharp.fluid,
                "linear-gradient(0deg, rgba(191, 33, 30, 0.5), rgba(191, 33, 30, 0.5))",
            ].reverse()
            return (
                <BackgroundImage
                    Tag="div"
                    className={className}
                    fluid={imageDataWithOverlay}
                    backgroundColor="transparent"
                    objectFit="cover"
                    objectPosition="50% 0%"
                >
                    {children}
                </BackgroundImage>
            )
        }}
    />
)

export default AboutBackground
