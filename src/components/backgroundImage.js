import React from "react"

import BackgroundImage from "gatsby-background-image"
import { StaticQuery } from "gatsby"

// Just an example of how to use background image
const BackgroundImage = ({ className }) => (
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
                    Tag="section"
                    className={className}
                    fluid={imageData}
                    backgroundColor={`#040e18`}
                >
                    <h2>gatsby-background-image</h2>
                </BackgroundImage>
            )
        }}
    />
)
