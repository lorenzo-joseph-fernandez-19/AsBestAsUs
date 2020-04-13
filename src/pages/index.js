import React from "react"
import Layout from '../components/layout'
import Hero from '../images/asbestos8.jpeg'
import "../styles/mystyles.scss"

const HomePage = () => {
    return (
        <Layout>
            <section className="hero is-fullwidth is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <img className="container is-fullwidth is-fullheight"src={Hero} />
                        <p class="title">Welcome to our Website!</p>
                        <p class="subtitle">Find out more</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default HomePage

