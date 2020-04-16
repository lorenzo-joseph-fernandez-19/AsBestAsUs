import React from "react"
import Layout from '../components/layout'
import Hero from '../images/asbestos2.jpeg'
import "../styles/mystyles.scss"

const HomePage = () => {
    return (
        <Layout>
                <section className="hero is-fullheight has-background-warning">
                    <div className="hero-body">
                        <div className="section">
                        <div className="columns is-vcentered">
                            <div className="column is-half">
                                <h1 className="title">Northland's Best</h1>
                                <p className="subtitle"></p>
                            </div>
                            <div className="column is-half">
                                <img src={Hero}></img>
                            </div>
                        </div>

                        </div>
                    </div>
                </section>
        </Layout>
    )
}

export default HomePage

