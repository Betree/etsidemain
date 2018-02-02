import React from "react"
import Link from 'gatsby-link'
import classNames from 'classnames'

import logo from '../assets/logo_white.svg'


const NavLink = props => <Link activeClassName="is-active" {...props}/>

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isActive: false}
  }

  render() {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 800
    return (
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink exact className="navbar-item" to="/">
            <img src={logo} height="40" alt="Et si demain..."/>
          </NavLink>
          <button className="button navbar-burger is-dark"
                  onClick={() => this.setState({isActive: !this.state.isActive})}>
            <span/><span/><span/>
          </button>
        </div>
        <div className={classNames("navbar-menu", {'is-active': this.state.isActive})}>
          <div className="navbar-start">
            <NavLink onClick={this.onLinkClick} exact={false} className="navbar-item" to="/categories">Toutes les contributions</NavLink>
            <NavLink onClick={this.onLinkClick} className="navbar-item" to="/au-hasard">Un argument au hasard</NavLink>
            {isMobile === false && <NavLink onClick={this.onLinkClick} className="navbar-item" to="/carte">Carte du débat</NavLink>}
            {/*<NavLink onClick={this.onLinkClick} className="navbar-item" to="/participer">Participer</NavLink>*/}
            <NavLink onClick={this.onLinkClick} className="navbar-item" to="/aller-plus-loin">Pour aller plus loin</NavLink>
            {/*<NavLink onClick={this.onLinkClick} className="navbar-item" to="/a-propos">A propos</NavLink>*/}
          </div>
        </div>
      </nav>
    )
  }

  onLinkClick = () => this.setState({isActive: false})
}
