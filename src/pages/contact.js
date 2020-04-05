import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const ContactPage = () => {
    return (
        <div>
            <Header />
            <h1>Contact Us</h1>
            <p>Call us on 123456789</p>
            <button><a href="mailto:ashtontairua@gmail.com?Subject=Site%20Enquiry" target="_top">Contact Us Now</a></button>
            <Footer />
        </div>
    )
}

export default ContactPage

