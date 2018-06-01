import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import '../styles/Results.css'

const Results = inject('repositoryStore')(
  observer(
    class Results extends Component {
      renderResults() {
        return this.props.repositoryStore.results.map(
          (
            { name, description, stargazers_count, language, owner: { login } },
            i
          ) => {
            return (
              <li
                key={`${name}${i}`}
              >{`${name} | ${description} | ${stargazers_count} | ${language} | ${login}`}</li>
            )
          }
        )
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
