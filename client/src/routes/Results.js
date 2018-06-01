import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import '../styles/Results.css'

const Results = inject('repositoryStore')(
  observer(
    class Results extends Component {
      renderResults() {
        return this.props.repositoryStore.results.map(result => {
          return <li>{result}</li>
        })
      }

      render() {
        const { results } = this.props.repositoryStore

        return (
          <div className="results-container">
            {!results.length ? (
              <p>No results to display</p>
            ) : (
              <ul>{this.renderResults()}</ul>
            )}
          </div>
        )
      }
    }
  )
)

export default Results
