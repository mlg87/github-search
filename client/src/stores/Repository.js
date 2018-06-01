import { observable, action, decorate } from 'mobx'
import API from '../utils/api'

class RepositoryStore extends API {
  results = []
  query = ''
  isFetching = false
  error = null

  async fetchSearch() {
    this.isFetching = true
    try {
      const q = this.query.split(' ').reduce((accum, cv, i) => {
        return i === 0 ? cv : `${accum}+${cv}`
      }, '')

      const res = await this.fetch(`repositories?q=${q}`)
      const { error, content } = await res.json()

      if (res.status !== 200) throw Error(error)

      this.results = content.items

      return null
    } catch (error) {
      this.error = error
    } finally {
      this.isFetching = false
    }
  }
}

decorate(RepositoryStore, {
  error: observable,
  isFetching: observable,
  query: observable,
  results: observable
})

export default new RepositoryStore()
