import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import '../styles/Router.css'
import { About, Home, Results } from '../routes'

export default class Router extends Component {
  render() {
    return (
      <div className="route-container">
        <Route path="/results" component={Results} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </div>
    )
  }
}
