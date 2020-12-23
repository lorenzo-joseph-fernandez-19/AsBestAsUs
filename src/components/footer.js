import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import '../components/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className="footer-grid footer-background">
            <div>
                <p className="copyright">{`© ${new Date().getFullYear()} AS-BEST-AS-US ASBESTOS REMOVALISTS AND DEMOLITIONS LIMITED`}</p>
                <li>
                    <AniLink cover direction="right" bg="#FDB813" duration={1} className="links" to="/privacy">Privacy Policy</AniLink> 
                    <span class="white-line"> |  </span>
                    <AniLink cover direction="left" bg="#FDB813" duration={1} className="links" to="/conditions">Terms & Conditions</AniLink>
                </li> 
            </div> 
            <ul className="social-border ">
                <li className="icon-center">
                    <OutboundLink href="https://www.linkedin.com" rel="noreferrer noopener" target="_blank">
                    <FontAwesomeIcon className="icon" icon={['fab', 'linkedin-in']} />
                    </OutboundLink>
                </li>
                <li className="icon-center">
                    <OutboundLink href="https://www.facebook.com" rel="noreferrer noopener" target="_blank">
                    <FontAwesomeIcon className="icon" icon={['fab', 'facebook-f']} />
                    </OutboundLink>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
