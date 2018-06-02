import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import Star from 'react-icons/lib/ti/star'
import StarOutline from 'react-icons/lib/ti/star-outline'

import '../styles/Home.css'

const Home = inject('repositoryStore')(
  observer(
    class Home extends Component {
      state = {
        isLabelHovered: false // local state only used for basic UI
      }

      componentWillMount() {
        this.props.repositoryStore.query = '' // reset query
        this.props.repositoryStore.sortByStars = false // reset sort
      }

      componentDidMount() {
        this.searchInput.focus()
      }

      //
      // ─── TOOLTIP HANDLER ─────────────────────────────────────────────
      //
      _handleMouseEnter = e => {
        this.setState({ isLabelHovered: true })
      }

      _handleMouseLeave = e => {
        this.setState({ isLabelHovered: false })
      }

      //
      // ─── EVENT HANDLERS ──────────────────────────────────────────────
      //
      _handleTextInputChange = e => {
        this.props.repositoryStore.query = e.target.value
      }

      _handleSortToggle = e => {
        console.log('e.target.checked', e.target.checked)
        this.props.repositoryStore.toggleSort(e.target.checked)
      }

      _handleSubmit = async e => {
        e.preventDefault()
        if (!this.props.repositoryStore.query.length) return null

        await this.props.repositoryStore.fetchSearch()
        this.props.history.push('/results')
      }

      render() {
        const { isLabelHovered } = this.state
        const { query, sortByStars } = this.props.repositoryStore

        return (
          <div className="search">
            <form className="search__form" onSubmit={this._handleSubmit}>
              <input
                className="search__input"
                placeholder="Start searching for repos..."
                value={query}
                onChange={this._handleTextInputChange}
                ref={c => (this.searchInput = c)}
              />
              <div className="search__descriptor-container">
                <div>ENTER to search</div>
                <div>
                  <input
                    id="sortBy"
                    className="search__checkbox-input"
                    type="checkbox"
                    checked={sortByStars}
                    name="sortBy"
                    onChange={this._handleSortToggle}
                  />
                  <label
                    htmlFor="sortBy"
                    className="search__checkbox-label"
                    onMouseEnter={this._handleMouseEnter}
                    onMouseLeave={this._handleMouseLeave}
                  >
                    {isLabelHovered &&
                      (sortByStars ? (
                        <span className="search__checkbox-label-tooltip">
                          Click to sort results by relevance
                        </span>
                      ) : (
                        <span className="search__checkbox-label-tooltip">
                          Click to sort results by stars
                        </span>
                      ))}
                    {sortByStars ? (
                      <Star size={24} />
                    ) : (
                      <StarOutline size={24} />
                    )}
                  </label>
                </div>
              </div>
            </form>
          </div>
        )
      }
    }
  )
)

export default Home
