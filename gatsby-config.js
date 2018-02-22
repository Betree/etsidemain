module.exports = {
  siteMetadata: {
    title: `Et si demain...`,
    description: "Et si demain la Calédonie... était indépendante ? Restait dans la France ? Qu'auriez-vous à dire sur le sujet ?",
    siteUrl: "https://etsidemain.nc"
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: require("./src-gatsby/plugin_options/gatsby-plugin-manifest"),
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: require("./src-gatsby/plugin_options/gatsby-plugin-feed"),
    },
    `gatsby-transformer-json`,
    //`gatsby-plugin-netlify`,
    `gatsby-plugin-nprogress`
  ],
}
