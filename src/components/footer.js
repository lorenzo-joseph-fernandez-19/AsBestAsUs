import React from 'react'
import footerStyles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={footerStyles.container}>
            <p className={footerStyles.paragraph}>© 2020 AS-BEST-AS-US ASBESTOS REMOVALISTS AND DEMOLITIONS LIMITED</p>
            <a href="/privacy" className={footerStyles.link}>Privacy Policy</a>
            <a href="/conditions" className={footerStyles.link}>Terms & Conditions</a>
            {/* <a href="https://www.linkedin.com/in/fernandezlorenzo/" target="_blank"><img src={LinkedIn}></img></a>
            <a href="https://www.facebook.com" target="_blank"><img src={Facebook}></img></a> */}
        </footer>
    )
}

export default Footer

