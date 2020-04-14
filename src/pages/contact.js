import React from 'react'
import Layout from '../components/layout'
import "../styles/mystyles.scss"


const ContactPage = () => {
    return (
        <Layout>
            <div className="section">
            <h1 className="title has-text-centered">Contact Us</h1>
            <form name="contact" className="box is-" method="post" netlify-honeypot="bot-field" data-netlify="true">
                <input type="hidden" name="bot-field"/>
                <input type="hidden" name="form-name" value="contact"/>
                <div class="field is-primary">
                    <label class="label">First Name</label>
                    <div class="control">
                        <input class="input is-warning" type="text" required/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Last Name</label>
                    <div class="control">
                        <input class="input is-warning" type="text" required/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Phone Number</label>
                    <div class="control">
                        <input class="input is-warning" type="tel" required/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-warning" type="email" required/>
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Message</label>
                    <div class="control">
                        <textarea class="textarea is-warning" required></textarea>
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-warning">Submit</button>
                    </div>
                </div>
                </form>
                <p>Call us on </p> <a href="mailto:ashtontairua@gmail.com?Subject=Site%20Enquiry" target="_top">here</a>
            </div>
        </Layout>
    )
}

export default ContactPage

