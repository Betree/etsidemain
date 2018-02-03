module.exports = {
  siteMetadata: {
    title: `Et si demain...`,
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
      options: {
        name: "Et si demain...",
        short_name: "Et si demain...",
        start_url: "/",
        background_color: "#4497ae",
        theme_color: "#f5f5f5",
        display: "minimal-ui",
        icons: [
          {
            "src": "/favicons/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
              "src": "/favicons/android-chrome-512x512.png",
              "sizes": "512x512",
              "type": "image/png"
          }
        ],
      },
    },
    `gatsby-transformer-json`,
    //`gatsby-plugin-netlify`,
    `gatsby-plugin-nprogress`
  ],
}
