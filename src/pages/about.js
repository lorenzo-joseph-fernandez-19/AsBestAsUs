import React from 'react'
import Layout from '../components/layout'
import "../styles/mystyles.scss"

const AboutPage = () => {
    return (
        <Layout pageMeta={{
            title: "What We Do",
            keywords: ["asbestos removal", "demolitions", "experienced"],
            description: "Asbestos Removalists and Demolition Specialists with over 25+ years experience."
          }}>
           <section className="page-width">
           </section>   
        </Layout>
    )
}

export default AboutPage