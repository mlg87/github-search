import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import '../styles/Results.css'

const Results = inject('repositoryStore')(
  observer(
    class Results extends Component {
      renderResults() {
        return this.props.repositoryStore.results.map(
          ({ name, description, stargazers_count, language, owner: { login } }, i) => {
            return (
              <tr key={`${name}-${i}`}>
                <td className="results__td">{name}</td>
                <td className="results__td">{description}</td>
                <td className="results__td">{login}</td>
                <td className="results__td">{language}</td>
                <td className="results__td">{stargazers_count}</td>
              </tr>
            )
          }
        )
      }

      renderTableHeader() {
        return (
          <div className="results__header">
            <table className="results__table" cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr>
                  <th className="results__th">Name</th>
                  <th className="results__th">Description</th>
                  <th className="results__th">Owner</th>
                  <th className="results__th">Language</th>
                  <th className="results__th">Stars</th>
                </tr>
              </thead>
            </table>
          </div>
        )
      }

      renderTableContent() {
        return (
          <div className="results__content">
            <table className="results__table">
              <tbody>{this.renderResults()}</tbody>
            </table>
          </div>
        )
      }

      renderTable() {
        return (
          <div>
            {this.renderTableHeader()}
            {this.renderTableContent()}
          </div>
        )
      }

      render() {
        const { results } = this.props.repositoryStore

        return (
          <div className="results">
            {!results.length ? <p>No results to display</p> : this.renderTable()}
          </div>
        )
      }
    }
  )
)

export default Results
