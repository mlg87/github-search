import React, { Component } from 'react'

import '../styles/Home.css'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <input placeholder="Start searching for repos..." />
      </div>
    )
  }
}

export default Home