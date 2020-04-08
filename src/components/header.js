import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header>
            <Link to="/">
            <img src={require('../images/logo.png')} alt="website logo"/>
            </Link>
            <nav>
                <ul className={headerStyles.list}>
                    <li>
                        <Link className={headerStyles.link} activeClassName={headerStyles.activeList} to="/">Home</Link>
                        <Link className={headerStyles.link} activeClassName={headerStyles.activeList} to="/about">What we do</Link>
                        <Link className={headerStyles.link} activeClassName={headerStyles.activeList} to="/news">News</Link>
                        <Link className={headerStyles.link} activeClassName={headerStyles.activeList} to="/contact">Contact us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header