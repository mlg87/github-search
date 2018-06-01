import { observable, action, decorate } from 'mobx'
import API from '../utils/api'

class RepositoryStore extends API {
  results = []
  isFetching = false
  error = null

  async fetchSearch() {
    this.isFetching = true
    try {
      // TODO build query string
      const res = await this.fetch('repositories')
      const { error, content } = await res.json()

      if (res.status !== 200) throw Error(error)

      this.results = content.results

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
  results: observable
})

export default new RepositoryStore()
