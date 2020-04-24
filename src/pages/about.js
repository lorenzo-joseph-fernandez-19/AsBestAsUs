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
            <section className="hero is-fullheight about-background-image">
                <div className="container center">
                    <article className="media">
                        <div className="media-content">
                            <div className="content">
                                <h1 className="is-size-1 has-text-light">Northland's Best </h1>
                                    <p className="subtitle is-size-3 has-text-light">Asbestos Removalists</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>      
        </Layout>
    )
}

export default AboutPage