import React, { Component } from 'react' // eslint-disable-line
import { Route } from 'react-router-dom' // eslint-disable-line

import './Router.css'
import { About, Home, Results } from '../../routes'

export default class Router extends Component {
  render() {
    return (
      <div className="router">
        <Route path="/results" component={Results} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </div>
    )
  }
}
