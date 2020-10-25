import React from "react"
import BackgroundImage from "gatsby-background-image"
import { StaticQuery } from "gatsby"

const MinistryBackground = ({ className, children }) => (
    <StaticQuery
        query={graphql`
            query {
                desktop: file(relativePath: { eq: "dm-ministry.jpg" }) {
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
                "linear-gradient(0deg, rgba(255, 214, 0, 0.5), rgba(255, 214, 0, 0.5))",
            ].reverse()
            return (
                <BackgroundImage
                    Tag="div"
                    className={className}
                    fluid={imageDataWithOverlay}
                    backgroundColor={`#040e18`}
                    objectFit="cover"
                    objectPosition="50% 0%"
                    style={{ backgroundPosition: "50% 0%" }}
                >
                    {children}
                </BackgroundImage>
            )
        }}
    />
)

export default MinistryBackground
