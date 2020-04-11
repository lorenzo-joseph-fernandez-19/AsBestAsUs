import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
                edges {
                    node {
                      title
                      slug
                      publishedDate(formatString: "MMMM Do, YYYY")
                    }
                  }
                }
              }
            `)
    return (
        <Layout>
            <h1>Blog</h1> 
            <ol>{data.allContentfulBlogPost.edges.map((edge) => { 
                return (
                    <li>
                        <Link to={`/news/${edge.node.slug}`}>
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.publishedDate}</p>
                        </Link>
                    </li>
                )
            })}
            </ol>
        </Layout>
    )
}

export default BlogPage

