module.exports = {
  siteMetadata: {
    title: `GPS Volume`,
    description: `GPS Volume, an Android app to control the volume of your device based on speed.`,
    author: `Richard Sween`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `600`, `700`],
          },
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `product`,
        path: `${__dirname}/src/images/product`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GPS Volume App`,
        short_name: `GPS Volume`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#233140`,
        display: `minimal-ui`,
        icon: `src/images/web_icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
