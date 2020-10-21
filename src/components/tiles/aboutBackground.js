import React from "React"
import BackgroundImage from "gatsby-background-image"
import { StaticQuery } from "gatsby"

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
            const imageData = data.desktop.childImageSharp.fluid
            return (
                <BackgroundImage
                    Tag="div"
                    className={className}
                    fluid={imageData}
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

export default AboutBackground
