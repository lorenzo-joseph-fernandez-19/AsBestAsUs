import React from "react"
import { Link } from 'gatsby'
const HomePage = () => {
    return (
        <div> 
            <h1>Asbestasus</h1>
            <h2>Welcome to our website!</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">What we do</Link> </li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
    )
}

export default HomePage