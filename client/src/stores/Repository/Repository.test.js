import { RepositoryStore } from './Repository'

describe('repositoryStore', () => {
  let store
  beforeEach(() => {
    store = new RepositoryStore()
  })

  it('toggles sortByStars correctly', () => {
    store.toggleSort(true)
    expect(store.sortByStars).toBeTruthy()
    store.toggleSort(false)
    expect(store.sortByStars).toBeFalsy()
  })

  // TODO write tests for fetchSearch && sortResults
})
