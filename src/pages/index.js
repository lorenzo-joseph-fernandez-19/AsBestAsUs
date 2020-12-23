import React from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Image  from '../images/asbestos1.jpeg'
import Image2 from '../images/asbestos7.jpeg'
import "../styles/mystyles.scss"

const HomePage = () => {
    return (
        <Layout pageMeta={{
            title: "Home",
            keywords: ["asbestos removal", "demolitions", "experienced"],
            description: "Asbestos Removalists and Demolition Specialists with over 25+ years experience."
          }}>
            <section className="page-width">
               <div className="">
                   <img src={Image} width="2000" />
               </div>
               <div className="home-border index-grid">
                   <div><hr className="dotted-line" />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                   <img src={Image2} width="100%"/>
               </div>
               <h2 className="title">Why Choose Asbestasus?</h2>
                 <ul>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                 </ul>
               <h2 className="title">What our Clients Say</h2>
            </section>
        </Layout>
    )
}

export default HomePage

