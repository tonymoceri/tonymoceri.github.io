module.exports = {
  siteMetadata: {
    title: "Tony Moceri || Data Scientist",
    description:
      "My mission as a developer is to contribute to applications that empower and motivate lives. Let's change the world together.",
    siteUrl: "https://www.tonymoceri.com",
    author: "tonymoceri",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tony Moceri`,
        short_name: `TonyMoceri`,
        start_url: `/`,
        background_color: `#337ab7`,
        theme_color: `#337ab7`,
        display: `fullscreen`,
        icon: `src/static/logo/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
};