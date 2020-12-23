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
                <div className="columns">
                    <h1 className="title">Get in Touch.</h1>
                    <p className="center-text">All enquiries are treated with confidentiality. We will not share your contact details with any other party.</p>
                    <div class="container">
                        <form className="contact-grid" action="">
                            <div className="contact-grid-item">
                            <label for="name">Name</label> <br />
                            <input className="input" type="text" id="name" name="name" placeholder="Your name.." required/> <br />

                            <label for="phone">Phone</label> <br />
                            <input className="input" type="number" id="phone" name="phone" placeholder="Your phone number..." required/> <br />

                            <label for="email">Email</label> <br />
                            <input className="input" type="email" id="email" name="email" placeholder="Your email..."  required/> <br />
                            </div>
                            <div className="contact-grid-item">
                            <label for="message">Message</label> <br />
                            <textarea className="input input-message" id="message" name="message" placeholder="Write something.." required></textarea> <br />
                            </div>
                            <button className="button" type="submit" value="Submit">Submit</button>
                        </form>
                    </div>
                    <hr className="dotted-line" />
                        <a href="mailto:enquiries@asbestasus.com?Subject=Site%20Enquiry" target="_top">enquiries@asbestasus.com</a>
                </div>               
            </section>
        </Layout>
    )
}

export default ContactPage

