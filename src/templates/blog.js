import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import Hero from '../images/asbestos4.jpeg'

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

  return (
    <Layout>
      <div className="hero-body section">
        <h1 className="title is-1 has-text-centered">{props.data.contentfulBlogPost.title}</h1>
          <p className="subtitle is-4 has-text-centered">{props.data.contentfulBlogPost.publishedDate}</p>
        <div className="container">
          <img src={Hero}></img>
          <p>{documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}</p>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
