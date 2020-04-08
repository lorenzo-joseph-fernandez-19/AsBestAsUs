import React from 'react'
import Layout from '../components/layout'
// import '../styles/mystyless.scss'

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact Us</h1>
            <p>Call us on </p> <a href="mailto:ashtontairua@gmail.com?Subject=Site%20Enquiry" target="_top">here</a>
            <form method="post" netlify-honeypot="bot-field" data-netlify="true">
                    <input type="hidden" name="bot-field" />
                <label>
                    Name
                    <input type="text" name="name" id="name" />
                </label>
                <label>
                    Email
                    <input type="email" name="email" id="email" />
                </label>
                <label>
                    Phone
                    <input type="text" name="phone" id="phone" />
                </label>
                <label>
                    Message
                    <textarea name="message" id="message" rows="5" />
                </label>
                    <button className="button is-outlined" type="submit">Submit</button>
                </form>
        </Layout>
    )
}

export default ContactPage

