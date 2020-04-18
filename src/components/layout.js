import React from 'react'
import Header from './header'
import Footer from './footer'
import Helmet from "react-helmet"
import "../styles/mystyles.scss"

const Layout = ({ pageTitle, children }) => (
    <>
      <Helmet>
        <title>{`AsBestAsUs - Asbestos Removalists and Demolitions Specialists | ${pageTitle}`}</title>
      </Helmet>
      <div>
        <Header>
          <h1></h1>
          <nav>
            <ul>
            </ul>
          </nav>  
        </Header>
        {children}
        <Footer />
      </div>
    </>
  )

  export default Layout