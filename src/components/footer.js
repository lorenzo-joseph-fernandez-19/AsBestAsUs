import React from 'react'
import { Link } from 'gatsby'
// import footerStyles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className="footer is-primary">
                <div className="content has-text-centered">
                    <p>© 2020 AS-BEST-AS-US ASBESTOS REMOVALISTS AND DEMOLITIONS LIMITED</p>
                    <ul className="tabs">
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/conditions">Terms & Conditions</Link></li>
                    </ul>
                </div>
        </footer>
    )
}

export default Footer
