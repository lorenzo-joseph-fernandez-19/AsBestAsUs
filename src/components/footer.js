import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from "gatsby-plugin-google-analytics"
import '../components/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className="hero-footer section has-text-light has-background-black has-text-centered level">
            <div className="level-item">
                <p>{`©{${new Date().getFullYear()} AS-BEST-AS-US ASBESTOS REMOVALISTS AND DEMOLITIONS LIMITED.`}</p>  
            </div>

            <div className="level-item">
                <p><Link className="has-text-light" to="/privacy">Privacy Policy</Link></p>
            </div>

            <div className="level-item">
                <p><Link className="has-text-light" to="/conditions">Terms & Conditions</Link></p>
            </div>

            <div className="level">
                        
            </div>

            <div class="level-item">
                <OutboundLink href="https://www.facebook.com" target="_blank">
                    <FontAwesomeIcon className="icon is-medium has-text-light" icon={['fab', 'facebook-square']} />
                </OutboundLink>
                <OutboundLink href="https://www.linkedin.com" target="_blank">
                    <FontAwesomeIcon className="icon is-medium has-text-light" icon={['fab', 'linkedin']} />
                </OutboundLink>
            </div>     
        </footer>
    )
}

export default Footer
