import React from 'react'
import Layout from '../components/layout'
import '../components/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ContactPage = () => {
    return (
        <Layout>
            <section className="section is-medium has-background-white">
            <div className="container">
                <div className="columns">
                    <div className="column is-5">
                        <div className="content has-text-black">
                            <h1 className="title is-1">Get in Touch.</h1>
                            <hr className="has-background-warning"></hr>
                            <p><span>Feel free to send us a message with any of your queries and we'll get back to you as soon as we can.</span></p>
                        </div>
                    </div>
                    <div className="column is-offset-1 is-6">
            <form name="contact" className="box has-background-warning" method="post" netlify-honeypot="bot-field" data-netlify="true">
                <input type="hidden" name="bot-field"/>
                <input type="hidden" name="form-name" value="contact"/>
                <div className="block">
                    <label className="label">First Name *</label>
                    <div className="block">
                        <input className="input" type="text" required/>
                    </div>
                </div>

                <div className="block">
                    <label className="label">Last Name *</label>
                    <div className="control">
                        <input className="input" type="text" required/>
                    </div>
                </div>

                <div class="field">
                    <label className="label">Email *</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="email" required/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Phone Number *</label>
                    <div className="control">
                        <input className="input" type="tel" required/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea className="textarea" required></textarea>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-black">Send</button>
                    </div>
                </div>
                </form>
                {/* <p>Call us on </p> <a href="mailto:ashtontairua@gmail.com?Subject=Site%20Enquiry" target="_top">here</a> */}
                </div>
                </div>
            </div>
            </section>
        </Layout>
    )
}

export default ContactPage

