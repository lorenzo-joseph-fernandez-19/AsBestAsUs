import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from "gatsby-plugin-google-analytics"
import '../components/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className="hero-foot section has-text-light has-background-black has-text-centered level">
            <div className="level-item">
                <p>{`© ${new Date().getFullYear()} AS-BEST-AS-US ASBESTOS REMOVALISTS AND DEMOLITIONS LIMITED`}</p>  
            </div>

            <div className="level-item">
                <p><Link className="has-text-light line" to="/privacy">Privacy Policy</Link></p>
            </div>

            <div className="level-item">
                <p><Link className="has-text-light line" to="/conditions">Terms & Conditions</Link></p>
            </div>

            <div className="level">
                        
            </div>

            <div class="level-item">
                <OutboundLink className="line" href="https://www.facebook.com" rel="noreferrer noopener" target="_blank">
                    <FontAwesomeIcon className="icon is-medium has-text-light" icon={['fab', 'facebook-square']} />
                </OutboundLink>
                <OutboundLink className="line" href="https://www.linkedin.com" rel="noreferrer noopener" target="_blank">
                    <FontAwesomeIcon className="icon is-medium has-text-light" icon={['fab', 'linkedin']} />
                </OutboundLink>
            </div>     
        </footer>
    )
}

export default Footer
