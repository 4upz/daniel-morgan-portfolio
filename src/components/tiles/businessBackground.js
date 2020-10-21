import React from "react"
import BackgroundImage from "gatsby-background-image"
import { StaticQuery } from "gatsby"

const BusinessBackground = ({ className, children }) => (
    <StaticQuery
        query={graphql`
            query {
                desktop: file(relativePath: { eq: "dm-business.jpg" }) {
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
                    backgroundColor={`#040e18`}
                    objectFit="cover"
                    objectPosition="50% 50%"
                >
                    {children}
                </BackgroundImage>
            )
        }}
    />
)

export default BusinessBackground
