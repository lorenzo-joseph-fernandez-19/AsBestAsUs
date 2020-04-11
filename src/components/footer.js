import React from 'react'
import { Link } from 'gatsby'
// import footerStyles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className="hero-foot is-full">
            <nav className="tabs">
                <div className="container">
                    <p>© 2020 AS-BEST-AS-US ASBESTOS REMOVALISTS AND DEMOLITIONS LIMITED</p>
                    <ul>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/conditions">Terms & Conditions</Link></li>
                        <li><a href="www.facebook.com">Facebook</a></li>
                        <li><a href="www.linkedin.com">LinkedIn</a></li>
                    </ul>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
