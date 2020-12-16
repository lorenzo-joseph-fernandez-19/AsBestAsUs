import React from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { Image } from '../images/asbestos1.jpeg'
import "../styles/mystyles.scss"

const HomePage = () => {
    return (
        <Layout pageMeta={{
            title: "Home",
            keywords: ["asbestos removal", "demolitions", "experienced"],
            description: "Asbestos Removalists and Demolition Specialists with over 25+ years experience."
          }}>
            <section className="">
                <img src={Image} />
            </section>
        </Layout>
    )
}

export default HomePage

