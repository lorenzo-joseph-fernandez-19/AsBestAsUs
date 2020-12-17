import React from 'react'
import Layout from '../components/layout'
import '../components/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ContactPage = () => {
    return (
        <Layout pageMeta={{
            title: "Contact",
            keywords: ["asbestos removal", "demolitions", "experienced"],
            description: "Asbestos Removalists and Demolition Specialists with over 25+ years experience."
          }}>
            <section className="page-width">
            <div className="container">
                <div className="columns">
                            <h1 className="title is-1">Get in Touch.</h1>
                            <p><span>Feel free to send us a message with any of your queries and we'll get back to you as soon as we can.</span></p>
                            <a href="mailto:enquiries@asbestasus.com?Subject=Site%20Enquiry" target="_top">enquiries@asbestasus.com</a>
                        </div>
                    </div>
                
            </section>
        </Layout>
    )
}

export default ContactPage

