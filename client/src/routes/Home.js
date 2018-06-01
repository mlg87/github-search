import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import '../styles/Home.css'

const Home = inject('repositoryStore')(
  observer(
    class Home extends Component {
      componentWillMount() {
        // maybe take this away and leave the query in the store?
        this.props.repositoryStore.query = ''
      }

      componentDidMount() {
        this.searchInput.focus()
      }

      _handleChange = e => {
        this.props.repositoryStore.query = e.target.value
      }

      _handleSubmit = async e => {
        e.preventDefault()
        if (!this.props.repositoryStore.query.length) return null

        await this.props.repositoryStore.fetchSearch()
        this.props.history.push('/results')
      }

      render() {
        const { query } = this.props.repositoryStore

        return (
          <div className="search-container">
            <form className="search-form" onSubmit={this._handleSubmit}>
              <input
                className="search-input"
                placeholder="Start searching for repos..."
                value={query}
                onChange={this._handleChange}
                ref={c => (this.searchInput = c)}
              />
            </form>
            <div className="search-descriptor">ENTER to search</div>
          </div>
        )
      }
    }
  )
)

export default Home
