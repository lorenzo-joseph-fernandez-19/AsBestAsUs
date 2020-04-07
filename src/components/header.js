import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li className={headerStyles.list}>
                        <Link className={headerStyles.link} to="/">Home</Link>
                        <Link className={headerStyles.link} to="/about">What we do</Link>
                        <Link className={headerStyles.link} to="/news">News</Link>
                        <Link className={headerStyles.link} to="/contact">Contact us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header