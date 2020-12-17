import React from 'react'
import Header from './header'
import Footer from './footer'
import Helmet from "react-helmet"
import "../styles/mystyles.scss"

const Layout = ({ pageMeta, children }) => (
    <>
      <Helmet>
        <title>{`AsBestAsUs | ${pageMeta.title}`}</title>
      
      {/* The charset, viewport and author meta tags will always have the same value, so we hard code them! */}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Lorenzo Fernandez" />
      <html lang="en"/>
      {/* The rest we set dynamically with props */}
      <meta name="description" content={pageMeta.description} />
      {/* We pass an array of keywords, and then we use the Array.join method to convert them to a string where each keyword is separated by a comma */}
      <meta name="keywords" content={pageMeta.keywords.join(',')} />
      {/* <!-- ManyChat --> */}
      <script src="//widget.manychat.com/235113253826597.js" async="async"></script>
      </Helmet>
      <div className="is-family-primary">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )

  export default Layout