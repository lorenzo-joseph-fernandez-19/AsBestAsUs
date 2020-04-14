import React from 'react'
import { Link } from 'gatsby'
import '../components/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/mystyles.scss"

const Footer = () => {
    return (
        <footer className="footer has-text-centered has-text-light has-background-black">
            <div className="container ">
            <p>© 2020 AS-BEST-AS-US ASBESTOS REMOVALISTS AND DEMOLITIONS LIMITED</p>
                <div className="columns ">
                    <div className="column">
                        <div className="is-centered">
                            <ul className>
                                <li><Link className="has-text-light" to="/privacy">Privacy Policy</Link></li>
                                <li><Link className="has-text-light" to="/conditions">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="column"></div>
                    <div class="column">
                            <a href="https://www.facebook.com" target="_blank">
                                <FontAwesomeIcon className="icon is-large has-text-light" icon={['fab', 'facebook']} />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank">
                                <FontAwesomeIcon className="icon is-large has-text-light" icon={['fab', 'linkedin']} />
                            </a>
                    </div>     
                </div>
            </div>
        </footer>
    )
}

export default Footer
