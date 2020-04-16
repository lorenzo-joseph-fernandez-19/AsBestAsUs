import React from 'react'
import { Link } from 'gatsby'
import '../components/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className="hero-footer section has-text-light has-background-black has-text-centered level">
                    <div className="level-item">
                    <p>© 2020 AS-BEST-AS-US ASBESTOS REMOVALISTS AND DEMOLITIONS LIMITED. </p>  
                    </div>

                    <div className="level-item">
                            <p><Link className="has-text-light" to="/privacy">Privacy Policy</Link></p>
                    </div>

                    <div className="level-item">
                            <p><Link className="has-text-light" to="/conditions">Terms & Conditions</Link></p>
                    </div>

                    <div class="level-item">
                            <a href="https://www.facebook.com" target="_blank">
                                <FontAwesomeIcon className="icon is-medium has-text-light" icon={['fab', 'facebook-f']} />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank">
                                <FontAwesomeIcon className="icon is-medium has-text-light" icon={['fab', 'linkedin']} />
                            </a>
                    </div>     
        </footer>
    )
}

export default Footer
