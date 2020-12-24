import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/Logo.svg'
import { OutboundLink } from "gatsby-plugin-google-analytics"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import '../components/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
      <nav className="header-grid header-border">
        <AniLink cover direction="bottom" bg="#FDB813" duration={1} className="header" to="/"><img src={logo} width="200px" /></AniLink>
        <ul className="header-menu header">
          <li className="header-link"><Link activeClassName="active-link" className="link" to="/about">What We Do</Link></li>
          <li className="header-link"><Link activeClassName="active-link" className="link" to="/news">News</Link></li>
          <li className="header-link"><Link activeClassName="active-link" className="link" to="/contact">Contact Us</Link></li>
          <li className="header-link"><OutboundLink className="header-contact" href="tel:+64210549784" rel="noreferrer noopener"><FontAwesomeIcon className="header-icon" icon={['fas', 'mobile-alt']} />021 054 9784</OutboundLink></li>
        </ul>
        </nav>
    )
  } 

export default Header