import React, { Component } from 'react' // eslint-disable-line
import { NavLink } from 'react-router-dom' // eslint-disable-line

import '../styles/Navbar.css'

class Navbar extends Component {
  renderLinks() {
    const routes = [
      { path: '/', label: 'Search' },
      { path: '/results', label: 'Results' },
      { path: '/about', label: 'About' }
    ]
    return routes.map(({ path, label }) => {
      return (
        <NavLink
          to={path}
          activeClassName="nav__link--selected"
          className="nav__link"
          exact
          key={`${path}`}
        >
          {label}
        </NavLink>
      )
    })
  }

  render() {
    return (
      <nav className="nav">
        <ul>{this.renderLinks()}</ul>
      </nav>
    )
  }
}

export default Navbar
