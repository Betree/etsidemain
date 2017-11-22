import React from "react"
import { Link } from 'react-router-dom'


export default class NavBar extends React.PureComponent {
  render() {
    return (
      <nav className="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28"/>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">Home</Link>
          </div>
        </div>
      </nav>
    )
  }
}
