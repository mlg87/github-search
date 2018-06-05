import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Star from 'react-icons/lib/ti/star'
import StarOutline from 'react-icons/lib/ti/star-outline'

import './Home.css'
import { LoadingIndicator } from '../../components'

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
    this.props.repositoryStore.toggleSort(e.target.checked)
  }

  _handleSubmit = async e => {
    e.preventDefault()
    if (!this.props.repositoryStore.query.length) return null

    try {
      await this.props.repositoryStore.fetchSearch()
      this.props.history.push('/results')
    } catch (error) {
      // TODO add error handling
      console.error(error)
    }
  }

  render() {
    const { isLabelHovered } = this.state
    const { isFetching, query, sortByStars } = this.props.repositoryStore

    return (
      <div className="search">
        <form className="search__form" onSubmit={this._handleSubmit}>
          <fieldset disabled={isFetching}>
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
                  {sortByStars ? <Star size={24} /> : <StarOutline size={24} />}
                </label>
              </div>
            </div>
          </fieldset>
        </form>
        {isFetching && <LoadingIndicator />}
      </div>
    )
  }
}

export default inject('repositoryStore')(observer(Home))
// for tests
export { Home }
