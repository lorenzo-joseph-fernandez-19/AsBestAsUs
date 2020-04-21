import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/Logo.svg'


const NavbarItem = props => (
  <Link className="link" activeClassName="active-list line" to={props.page}>
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
      <section className="hero-head section gradient-background level-left">
        <nav className="level-item">
            <Link className to="/">
              <img className="logo" src={logo} alt="AsBestAsUs Logo"/>
            </Link>
            <NavbarBurger active={this.state.activeMenu} toggleMenu={this.toggleMenu}/>

          <div className="">
            <div className={`navbar-menu navbar-start ${this.state.activeMenu ? 'is-active' : ''}`}>
              <div className="navbar-item">
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