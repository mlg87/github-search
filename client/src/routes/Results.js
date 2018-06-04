import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import SortedDown from 'react-icons/lib/ti/arrow-sorted-down'
import SortedUp from 'react-icons/lib/ti/arrow-sorted-up'

import '../styles/Results.css'

// TODO refactor from table to css grid to get rid of warnging about th border div
const Results = inject('repositoryStore')(
  observer(
    class Results extends Component {
      _handleColumnSort = col => {
        this.props.repositoryStore.sortResults(col)
      }

      renderResults() {
        return this.props.repositoryStore.results.map(
          (
            { name, description, stargazers_count, language, owner: { login } },
            i
          ) => {
            return (
              <tr key={`${name}-${i}`} className="results__tr">
                <td className="results__td">{name}</td>
                <td className="results__td">{description || 'n/a'}</td>
                <td className="results__td">{login}</td>
                <td className="results__td">{language || 'n/a'}</td>
                <td className="results__td">{stargazers_count}</td>
              </tr>
            )
          }
        )
      }

      renderTableHeader() {
        const { resultsSortBy, resultsSortOrder } = this.props.repositoryStore
        const columns = [
          { col: 'name', display: 'name' },
          { col: 'description', display: 'description' },
          { col: 'owner.login', display: 'owner' },
          { col: 'language', display: 'language' },
          { col: 'stargazers_count', display: 'stars' }
        ]

        const columnHeaders = columns.map(({ col, display }) => {
          return (
            <th
              key={col}
              className="results__th"
              onClick={() => this._handleColumnSort(col)}
            >
              {display}
              {resultsSortBy === col && (
                <span className="results__sort-order">
                  {resultsSortOrder === 'asc' ? <SortedUp /> : <SortedDown />}
                </span>
              )}
            </th>
          )
        })

        return (
          <div>
            <table
              className="results__table"
              cellPadding="0"
              cellSpacing="0"
              border="0"
            >
              <thead>
                <tr>{columnHeaders}</tr>
                <div className="results__thead-border" />
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
            {!results.length ? (
              <p className="results__message">No results to display</p>
            ) : (
              this.renderTable()
            )}
          </div>
        )
      }
    }
  )
)

export default Results
