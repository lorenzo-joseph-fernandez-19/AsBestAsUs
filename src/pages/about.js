import React from 'react'
import Layout from '../components/layout'
import Hero from '../images/asbestos3.jpeg'
import "../styles/mystyles.scss"

const AboutPage = () => {
    return (
        <Layout pageTitle="What we do">
            <div className="section">
                <div className="columns">
                    <div className="column">
                        <h1 className="title">What we do</h1>
                        <h2 className="subtitle">We specialise in Asbestos Removal and Demolition.</h2>
                    </div>
                    <div className="column">
                        <img src={Hero}></img>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage