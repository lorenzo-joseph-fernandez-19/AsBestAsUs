import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/Logo.svg'


const NavbarItem = props => (
  <Link className="link line" activeClassName="active-list" to={props.page}>
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
      <section className="hero section">
        <nav className="level-left">
            <Link className to="/">
              <img className="logo level-item" src={logo} alt="AsBestAsUs Logo"/>
            </Link>
            <NavbarBurger active={this.state.activeMenu} toggleMenu={this.toggleMenu}/>

          <div className="">
            <div className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}>
              <div className="level-item navbar-item is-size-1">
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