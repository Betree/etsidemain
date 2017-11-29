module.exports = {
  siteMetadata: {
    title: `Et si demain`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`, 
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-json`
  ],
}
