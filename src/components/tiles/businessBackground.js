import React from "React"
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
            const imageData = data.desktop.childImageSharp.fluid
            return (
                <BackgroundImage
                    Tag="section"
                    className={className}
                    fluid={imageData}
                    backgroundColor={`#040e18`}
                >
                    {children}
                </BackgroundImage>
            )
        }}
    />
)

export default BusinessBackground
