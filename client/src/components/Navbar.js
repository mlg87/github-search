import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/Navbar.css'

class Navbar extends Component {
  renderLinks() {
    const routes = [
      { path: '/', label: 'Home' },
      { path: '/search', label: 'Search' },
      { path: '/about', label: 'About' }
    ]
    return routes.map(({ path, label }) => {
      return (
        <NavLink to={path} activeClassName="app-nav-link--selected" className="app-nav-link">
          {label}
        </NavLink>
      )
    })
  }

  render() {
    return (
      <nav className="app-nav">
        <ul>{this.renderLinks()}</ul>
      </nav>
    )
  }
}

export default Navbar
