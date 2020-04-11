const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog.js`)
  const res = await graphql(`
    query {
        allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
            edges {
                node {
                  slug
                }
              }
            }
        }
  `)
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: `/news/${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}