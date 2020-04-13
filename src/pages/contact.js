import React from 'react'
import Layout from '../components/layout'
import "../styles/mystyles.scss"


const ContactPage = () => {
    return (
        <Layout>
            <div className="container">
            <h1 className="title has-text-centered">Contact Us</h1>
            {/* <p>Call us on </p> <a href="mailto:ashtontairua@gmail.com?Subject=Site%20Enquiry" target="_top">here</a>
            <form className="box" method="post" netlify-honeypot="bot-field" data-netlify="true"></form> */}
                <div class="field is-primary">
                    <label class="label">First Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="e.g. John Doe"/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Last Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="e.g. John Doe"/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Phone Number</label>
                    <div class="control">
                        <input class="input" type="tel" placeholder=""/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="e.g. johndoe@gmail.com"/>
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Message</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Textarea"></textarea>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default ContactPage

