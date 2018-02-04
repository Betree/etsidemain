const youtubeRegex =
  /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i

module.exports = {
  query: `
  {
    site {
      siteMetadata {
        title
        description
        siteUrl
        site_url: siteUrl
      }
    }
  }
  `,
  feeds: [
    {
      serialize: ({query: {site, dataJson: {Contributions}}}) => {
        return Contributions.map(contrib => {
          const ytID = youtubeRegex.exec(contrib.Content)[1]
          return {
            title:     `${contrib.FirstName} ${contrib.LastName} : "${contrib.Title}"`,
            description:     `${contrib.FirstName} ${contrib.LastName} : "${contrib.Title}"`,
            url:             `${site.siteMetadata.siteUrl}/contribution/${contrib.id}`,
            guid:            `${site.siteMetadata.siteUrl}/contribution/${contrib.id}`,
            custom_elements: [
              {"content:encoded": `<iframe width="560" height="315" src="https://www.youtube.com/embed/${ytID}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`}
            ],
          };
        });
      },
      query: `{
        dataJson {
          Contributions {
            id,
            FirstName,
            LastName,
            Occupation,
            Title,
            Content,
            Category1,
            Category2,
            Confirm,
            Refute,
            Info,
            ReplyTo
          }
        }
      }
      `,
      output: '/rss.xml'
    }
  ],
}