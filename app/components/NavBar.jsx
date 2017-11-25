import React from "react"
import { Link } from 'react-router-dom'


export default class NavBar extends React.PureComponent {
  render() {
    return (
      <nav className="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="/img/logo_white.svg" width="100"/>
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/carte">Carte du débat</Link>
            <Link className="navbar-item" to="/random">Un argument au hasard</Link>
            <Link className="navbar-item" to="/random">Participer</Link>
            <Link className="navbar-item" to="/about">A propos</Link>
          </div>
        </div>
      </nav>
    )
  }
}
