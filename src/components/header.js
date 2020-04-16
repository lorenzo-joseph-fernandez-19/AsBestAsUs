import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/Logo.svg'
import headerStyles from './header.module.scss'

const NavbarItem = props => (
  <Link className="level-item is-capitalized" activeClassName={headerStyles.activeList} to={props.page}>
    {props.pagename}
  </Link>
)

const NavbarBurger = props => (
  <div onClick={props.toggleMenu} className={`navbar-burger burger ${props.active ? 'is-active' : ''}`}>
    <span />
    <span />
    <span />
  </div>
)

export default class Header extends React.Component {
  state = {
    activeMenu: false,
  }
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    })
  }
  render() {
    return (
      <section className="hero-head section">
        <nav className="level">
          <div className="level-left">
            <Link className to="/">
              <img className={headerStyles.logo} src={logo} alt="AsBestAsUs Logo"/>
            </Link>
            <NavbarBurger active={this.state.activeMenu} toggleMenu={this.toggleMenu}/>
          </div>

          <div className="level">
            <div className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}>
              <div className="level-item has-text-weight-semibold">
                <NavbarItem page="/" pagename="Home" />
                <NavbarItem page="/about" pagename="What we do" />
                <NavbarItem page="/news" pagename="News" />
                <NavbarItem page="/contact" pagename="Contact Us"/>
              </div>
            </div>
          </div>
        </nav>
      </section>
    )
  } 
}