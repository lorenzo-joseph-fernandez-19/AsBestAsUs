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
            <div className="container has-text-centered">
                <h1 className="title is-1">News</h1> 
                <ol className="tile is ancestor">{data.allContentfulBlogPost.edges.map((edge) => { 
                return (
            //         <article className="title is-parent ">
            //             <li className="tile is-child box">
            //                 <Link to={`/news/${edge.node.slug}`}>
            //                     <p className="title">{edge.node.title}</p>
            //                     <p className="subtitle">{edge.node.publishedDate}</p>
            //                     <img src={edge.node.image}></img>
            //                 </Link>
            //             </li>
            //         </article>
            //     )
            // })}
            <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img alt="Placeholder image"/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{edge.node.title}</p>
        <p class="subtitle">{edge.node.authors}</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. 
      <time>{edge.node.publishedDate}</time>
    </div>
  </div>
</div>
                )
})}
                </ol>
            </div>
        </Layout>
    )
}

export default BlogPage

