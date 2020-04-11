import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/Logo.png'

const Header = () => {
    return (
        <header className="hero is-info is-large">
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item"><Link to="/"><img src={Logo} alt="Logo"/></Link></a>
                            <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                            <span></span>
                            <span></span>
                            <span></span>
                            </span>
                        </div>
                            <div id="navbarMenuHeroB" className="navbar-menu">
                                <div className="navbar-end">
                                    <a><Link className="navbar-item is-active" to="/">Home</Link></a>
                                    <a><Link className="navbar-item is-active" to="/about">What we do</Link></a>
                                    <a><Link className="navbar-item is-active" to="/news">News</Link></a>
                                <span className="navbar-item">
                                    <a className="button is-info is-inverted">
                                <span className="icon">
                                    <i className="fab fa-github"></i>
                                </span>
                                <span><Link to="/contact">Contact Us</Link></span>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header
