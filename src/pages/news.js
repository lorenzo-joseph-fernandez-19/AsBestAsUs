import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Hero from '../images/asbestos2.jpeg'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
                edges {
                    node {
                      title
                      slug
                      publishedDate(formatString: "MMMM Do, YYYY")
                      body {
                        json
                      }
                    }
                  }
                }
              }
            `)
    return (
        <Layout pageMeta={{
          title: "News",
          keywords: ["asbestos removal", "demolitions", "experienced"],
          description: "Asbestos Removalists and Demolition Specialists with over 25+ years experience."
        }}>
          <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title is-1">News</h1> 
                <ol className="tile is-ancestor">{data.allContentfulBlogPost.edges.map((edge) => { 
                return (
                  <Link to={`/news/${edge.node.slug}`}>
                    <article className="tile is-parent">
                      <div className="tile is-child">
                        <div class="card">
                          <div class="card-image">
                            <figure class="image is-4by3">
                              <img src={Hero} alt={edge.node.title}/>
                            </figure>
                          </div>
                          <div class="card-content">
                            <div class="media">
                              <div class="media-content">
                                <p class="title has-text-centered is-5">{edge.node.title}</p>
                                <p class="subtitle">{edge.node.authors}</p>
                              </div>
                            </div>
                            <div class="content">
                              <p>{edge.node.snippet}</p>
                            </div>
                            <footer class="card-footer">
                              <p class="card-footer-item">
                              <span>{edge.node.publishedDate}</span>
                              </p>
                            </footer>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                )
              })}
              </ol>
            </div>
          </div>
        </Layout>
    )
}

export default BlogPage


