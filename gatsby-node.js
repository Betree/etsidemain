const path = require(`path`)
const slugify = require(`voca/slugify`)
const Immutable = require(`immutable`)


exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage, createNode } = boundActionCreators

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
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
              Categories
            }
            factsResources: allFile(
              filter: {
                dir: {regex: "/assets\/facts\/.*/"}
              }
            ) {
              edges {
                node {
                  base
                  name
                  extension
                  relativePath
                  absolutePath
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors)
          reject(result.errors)
        const factFileCategoryRegex = /assets\/facts\/(.+)\/.+$/
        const factsResourcesByCategory = Immutable.List(result.data.factsResources.edges)
          .map(e => e.node)
          .groupBy(e => factFileCategoryRegex.exec(e.relativePath)[1])

        result.data.dataJson.Categories.forEach(category => {
          const categoryContributions = []
          result.data.dataJson.Contributions.forEach(contrib => {
            if (contrib.Category1 === category)
              categoryContributions.push(contrib)
          })

          // Get facts and facts pages
          const facts = {}
          const categoryFactsResources = factsResourcesByCategory.get(category)

          if (categoryFactsResources)
            categoryFactsResources.forEach(file => {
              const key = `fact-${file.name}`
              if (!facts[key])
                facts[key] = {}

              facts[key]['name'] = file.name
              if (file.extension === "jpg")
                facts[key]['image'] = file.base
              else if (file.extension === "mp4")
                facts[key]['video'] = file.base

              createPage({
                path: `/info/${file.name}`,
                component: path.resolve('./src/templates/info.js'),
                context: {
                  category: category,
                  fact: facts[key]
                }
              })
            })

          // Create categories pages
          const slug = slugify(category)
          createPage({
            path: `/categories/${slug}`,
            component: path.resolve('./src/templates/category-contributions.js'),
            context: {
              slug: slug,
              category: category,
              contributions: categoryContributions,
              facts: Immutable.fromJS(facts).toList().toJS()
            }
          })

          // Create contributions pages
          categoryContributions.forEach(contrib => {
            createPage({
              path: `/contribution/${contrib.id}`,
              component: path.resolve('./src/templates/contribution.js'),
              context: {
                category: category,
                contribution: contrib
              }
            })
          })
        });
      })
    )
  })
}