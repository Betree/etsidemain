import React from "react"
import { Link, NavLink as ReactRouterNavLink } from 'react-router-dom'
import classNames from 'classnames'


const NavLink = props =>
  <ReactRouterNavLink activeClassName="is-active" {...props}/>

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isActive: false}
  }

  render() {
    return (
      <nav className="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink exact className="navbar-item" to="/">
            <img src="/img/logo_white.svg" width="100"/>
          </NavLink>
          <button className="button navbar-burger is-dark"
                  onClick={() => this.setState({isActive: !this.state.isActive})}>
            <span/><span/><span/>
          </button>
        </div>
        <div className={classNames("navbar-menu", {'is-active': this.state.isActive})}>
          <div className="navbar-start">
            <NavLink className="navbar-item" to="/contributions">Toutes les contributions</NavLink>
            <NavLink className="navbar-item" to="/au-hasard">Un argument au hasard</NavLink>
            <NavLink className="navbar-item" to="/carte">Carte du débat</NavLink>
            <NavLink className="navbar-item" to="/participer">Participer</NavLink>
            <NavLink className="navbar-item" to="/a-propos">A propos</NavLink>
          </div>
        </div>
      </nav>
    )
  }
}
