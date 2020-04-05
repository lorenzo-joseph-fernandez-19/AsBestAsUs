import React from 'react'
import LinkedIn from '../../public/images/LinkedIn.png'
import Facebook from '../../public/images/Facebook.png'


const Footer = () => {
    return (
        <footer>
            <p>© 2020 AS-BEST-AS-US ASBESTOS REMOVALISTS AND DEMOLITIONS LIMITED</p>
            <a href="/privacy">Privacy Policy</a>
            <a href="/conditions">Terms and Conditions</a>
            <a href="https://www.linkedin.com/in/fernandezlorenzo/" target="_blank"><img src={LinkedIn}></img></a>
            <a href="https://www.facebook.com" target="_blank"><img src={Facebook}></img></a>
        </footer>
    )
}

export default Footer

