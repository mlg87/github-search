import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

import { About, Home, Search } from './routes'
import { Navbar } from './components'

class App extends Component {
  _handleClick = async () => {
    try {
      const res = await fetch('http://localhost:3000/ping')
      const json = await res.json()
      console.log('json', json)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div className="app-container">
        <Navbar />
        <div className="route-container">
          <Route path="/search" component={Search} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </div>
      </div>
    )
  }
}

export default App
