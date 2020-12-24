import React from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Image  from '../images/asbestos1.jpeg'
import Image2 from '../images/asbestos7.jpeg'
import Image3 from '../images/asbestos2.jpeg'
import "../styles/mystyles.scss"

const HomePage = () => {
    return (
        <Layout pageMeta={{
            title: "Home",
            keywords: ["asbestos removal", "demolitions", "experienced"],
            description: "Asbestos Removalists and Demolition Specialists with over 25+ years experience."
          }}>
            <section>
               <div>
                   <img className="img-container" src={Image} alt="" />
               </div>
               <div className="index-grid home-border">
                   <div className="center-text">
                      <hr className="" />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                   </div>
                   <img className="img-container" src={Image2} />
               </div>
               <div className="index-grid home-border">
               <img className="img-container" src={Image3} />
                   <div className="center-text">
                      <hr className="dotted-line" />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                   </div>
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

