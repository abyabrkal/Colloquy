module.exports = {
    siteMetadata: {
        title: `Colloquy`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`
            }
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "GatsbyJS",
                short_name: "GatsbyJS",
                start_url: "/",
                background_color: "#ff6347",
                theme_color: "#ff6347",
                display: "minimal-ui",
                icon: "src/images/icon.png", // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
        },
        'gatsby-plugin-offline',
        `gatsby-plugin-react-helmet`,
    ],
}