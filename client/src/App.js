import React from 'react' // eslint-disable-line
import { Provider } from 'mobx-react' // eslint-disable-line
import stores from './stores'

import './App.css'

import { Navbar, Router } from './components' // eslint-disable-line

const App = () => (
  <Provider {...stores}>
    <div className="app-container">
      <Navbar />
      <Router />
    </div>
  </Provider>
)

export default App
