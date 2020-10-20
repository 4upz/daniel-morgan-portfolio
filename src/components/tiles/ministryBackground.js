import React from "React"
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

export default MinistryBackground
