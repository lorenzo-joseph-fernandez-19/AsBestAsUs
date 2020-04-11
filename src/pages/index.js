import React from "react"
import Layout from '../components/layout'
import "../styles/mystyles.scss"

const HomePage = () => {
    return (
        <Layout>
            <section className="hero is-link is-fullheight-with-navbar">
                <div className="hero-body is-full">
                    <div className="container has-text-centered">
                        <p class="title">Welcome to our Website!</p>
                    <p class="subtitle">Find out more</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default HomePage

