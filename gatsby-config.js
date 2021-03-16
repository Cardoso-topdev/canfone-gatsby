/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path')

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Canfone Gatsby",
    description: "Canfone for Gatsby version.",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `img`,
    //     path: path.join(__dirname, `src`, `img`),
    //   },
    // },
    {
      resolve: `gatsby-plugin-preload-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`,`400`,`600`,`700`,`800`]
          },
          {
            family: `Roboto`,
            variants: [`300`,`400`,`500`,`700`,`900`]
          },
          {
            family: `Barlow|Barlow Semi Condensed`,
            variants: [`300`,`400`,`500`,`700`]
          },
        ],
        display: 'swap'
      },
    },
    // {
    //   resolve: 'gatsby-plugin-load-script',
    //   options: {
    //     src: 'https://code.jquery.com/jquery-3.3.1.min.js',
    //     integrity: "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=",
    //     crossOrigin: "anonymous"
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-load-script',
    //   options: {
    //     src: '/js/base.js',
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-load-script',
    //   options: {
    //     src: 'https://ws1.postescanada-canadapost.ca/js/addresscomplete-2.30.min.js',
    //   },
    // }
  ],
}