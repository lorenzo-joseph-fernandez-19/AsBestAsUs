import React from "react"
import { Link } from 'gatsby'
import Footer from './footer'

const HomePage = () => {
    return (
        <header> 
            <h1>Asbestasus</h1>
            <h2>Welcome to our website!</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">What we do</Link> </li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <Footer />
        </header>
    )
}

export default HomePage