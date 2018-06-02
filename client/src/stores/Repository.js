import { observable, action, decorate } from 'mobx'
import orderBy from 'lodash/orderBy'
import API from '../utils/api'

class RepositoryStore extends API {
  //
  // ─── OBSERVABLES ────────────────────────────────────────────────────────────────
  //
  results = []
  query = ''
  sortByStars = false
  resultsSortBy = 'relevance'
  resultsSortOrder = 'asc'
  isFetching = false
  error = null

  //
  // ─── ACTIONS ────────────────────────────────────────────────────────────────────
  //
  async fetchSearch() {
    this.isFetching = true
    try {
      const q = this.query.split(' ').reduce((accum, cv, i) => {
        return i === 0 ? cv : `${accum}+${cv}`
      }, '')

      const sort = this.sortByStars ? 'stars' : 'default'

      const res = await this.fetch(`repositories?q=${q}&sort=${sort}`)
      const { error, content } = await res.json()

      if (res.status !== 200) throw Error(error)

      this.results = content.items

      // if user wants results sorted by stars, set table sort observables
      // otherwise, let it be sorted by relevance (not currently a col)
      if (this.sortByStars) {
        this.resultsSortBy = 'stargazers_count'
        this.resultsSortOrder = 'desc'
      }

      return null
    } catch (error) {
      this.error = error
    } finally {
      this.isFetching = false
    }
  }

  toggleSort(isChecked) {
    return (this.sortByStars = isChecked)
  }

  sortResults(col) {
    // reset order if new col
    if (this.resultsSortBy !== col) {
      this.resultsSortOrder = 'asc'
    } else {
      this.resultsSortOrder = this.resultsSortOrder === 'asc' ? 'desc' : 'asc'
    }
    // set col we are sorting by
    this.resultsSortBy = col
    this.results = orderBy(
      this.results,
      this.resultsSortBy,
      this.resultsSortOrder
    )
  }
}

decorate(RepositoryStore, {
  error: observable,
  fetchSearch: action,
  isFetching: observable,
  query: observable,
  results: observable,
  resultsSortBy: observable,
  sortByStars: observable,
  sortResults: action,
  toggleSort: action
})

export default new RepositoryStore()
