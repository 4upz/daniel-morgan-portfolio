require("dotenv").config()

module.exports = {
    siteMetadata: {
        title: `Daniel S. Morgan Jr.`,
        description: `Daniel S. Morgan Jr. is a musician, youth leader, student, and rising businessman in Cleveland, Ohio.`,
        author: `@The4upz`,
        image: `src/images/dsmjr.png`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#FFFFFF`,
                theme_color: `#ffd600`,
                display: `minimal-ui`,
                icon: `src/images/favicon/favicon-16x16.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                typekit: {
                    id: process.env.TYPEKIT_ID,
                },
            },
        },
        `gatsby-plugin-fontawesome-css`,
        `gatsby-plugin-netlify-cms`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
