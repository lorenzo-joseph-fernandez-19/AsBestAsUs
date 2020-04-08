import React from 'react'
import Layout from '../components/layout'
import Button from '../components/button'

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact Us</h1>
            <p>Call us on </p>
            <a href="mailto:ashtontairua@gmail.com?Subject=Site%20Enquiry" target="_top">Contact Us Now</a>
            <Button>Submit</Button>
        </Layout>
    )
}

export default ContactPage

