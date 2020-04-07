import React from 'react'
import { Link } from 'gatsby'
import { Logo } from '../../public/images/Logo.jpg'
import './header.scss'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/about">What we do</Link>
                        <Link to="/news">News</Link>
                        <Link to="/contact">Contact us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header