import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import aboutContent from "../../../site/content/about.json"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const AboutImage = () => {
    /* const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "dm-about2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    if (!data?.placeholderImage?.childImageSharp?.fluid) {
        return <div>Picture not found</div>
    }
    */

    return (
        // <Img
        //     className="about-image"
        //     fluid={data.placeholderImage.childImageSharp.fluid}
        // />
        <img
            className="about-image"
            alt="Daniel Morgan Jr."
            src={aboutContent["primary-image"]}
        />
    )
}

export default AboutImage
