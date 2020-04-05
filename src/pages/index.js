import React from "react"
import { Link } from 'gatsby'
import LinkedIn from '../../public/images/LinkedIn.png'
import Facebook from '../../public/images/Facebook.png'

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
                <li><a href="https://www.linkedin.com/in/fernandezlorenzo/"><img src={LinkedIn}></img></a></li>
                <li><a href="https://www.facebook.com"><img src={Facebook}></img></a></li>
            </ul>
        </header>
    )
}

export default HomePage