import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import '../components/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className="footer-background">
            
                <p className="copyright">{`© ${new Date().getFullYear()} AS-BEST-AS-US ASBESTOS REMOVALISTS AND DEMOLITIONS LIMITED`}</p>
                <li>
                    <AniLink cover direction="right" bg="#FDB813" duration={1} className="links" to="/privacy">Privacy Policy</AniLink> 
                    <span class="white"> |  </span>
                    <AniLink cover direction="left" bg="#FDB813" duration={1} className="links" to="/conditions">Terms & Conditions</AniLink>
                </li> 

            <ul class="footer-border">
                <li><OutboundLink href="https://www.facebook.com" rel="noreferrer noopener" target="_blank">
                    <FontAwesomeIcon className="" icon={['fab', 'facebook-square']} />
                </OutboundLink></li>
                <li><OutboundLink href="https://www.linkedin.com" rel="noreferrer noopener" target="_blank">
                    <FontAwesomeIcon className="" icon={['fab', 'linkedin']} />
                </OutboundLink></li>
            </ul>     
        </footer>
    )
}

export default Footer
