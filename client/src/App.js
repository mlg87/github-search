import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import stores from './stores'

import './App.css'

import { Navbar, Router } from './components'

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
      <Provider {...stores}>
        <div className="app-container">
          <Navbar />
          <Router />
        </div>
      </Provider>
    )
  }
}

export default App
