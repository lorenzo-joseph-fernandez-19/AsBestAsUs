import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import { DiscussionEmbed } from 'disqus-react'



export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: `${props.data.contentfulBlogPost.slug}, ${props.data.contentfulBlogPost.title}` },
  }

  return (
    <Layout pageMeta={{
      title: `${props.data.contentfulBlogPost.title}`,
      keywords: ["asbestos removal", "demolitions", "experienced"],
      description: "Asbestos Removalists and Demolition Specialists with over 25+ years experience."
    }}>
      <div className="hero-body is-fullheight background-image">
        <div className="container center">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <h1 className="is-size-1 has-text-light">{props.data.contentfulBlogPost.title}</h1>
                <p className="subtitle is-size-3 has-text-light">{props.data.contentfulBlogPost.publishedDate}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
        <div className="box container">
          <p>{documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}</p>
          <DiscussionEmbed {...disqusConfig} />
          </div>
    </Layout>
  )
}

export default Blog
