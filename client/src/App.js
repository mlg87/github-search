import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this._handleClick}>Ping!</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
